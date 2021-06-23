import React, { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { flexSet } from '../../styles/Variable';
import RequestButton from '../../components/RequestButton';

const Main = styled.div`
  height: 100vh;
  background: no-repeat center / cover url('/images/attendance.jpg');
  font-size: 1.1rem;
  overflow: hidden;
`;

const Title = styled.h1`
  padding: 60px 0;
  color: #fff;
  font-size: 2.5rem;
  text-align: center;

  @media ${({ theme }) => theme.mobile} {
    padding: 50px 0 20px;
    font-size: 1.4rem;
  }
`;

const MainSection = styled.section`
  width: 600px;
  margin: auto;
  padding: 20px 0;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media ${({ theme }) => theme.mobile} {
    width: 90%;
    margin: 0 auto;
    font-size: 0.8rem;
  }
`;

const Contents = styled.div`
  width: 85%;
  margin: 20px auto;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media ${({ theme }) => theme.mobile} {
    padding: 10px;
  }
`;

const Record = styled.p`
  margin: 10px 40px;

  @media ${({ theme }) => theme.mobile} {
    margin: 10px;
  }
`;

const RecordInfo = styled(Record.withComponent('p'))`
  margin: 30px 40px;

  @media ${({ theme }) => theme.mobile} {
    margin: 30px 10px;
  }
`;

const Input = styled.input`
  width: 250px;
  font-size: 1rem;
  border-bottom: 1px solid gray;

  @media ${({ theme }) => theme.mobile} {
    width: 180px;
  }
`;

const NoticeText = styled.span`
  padding-right: 40px;
  font-weight: bold;

  @media ${({ theme }) => theme.mobile} {
    padding-right: 20px;
  }
`;

const NoticeLabel = styled(NoticeText.withComponent('label'))`
  color: black;
  font-weight: bold;
`;

const Notice = styled.div`
  ${flexSet('center', 'center')}
  position: absolute;
  right: -60px;
  bottom: 50px;
  width: 200px;
  height: 100px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  text-align: center;
  line-height: 1.5;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 2;
`;

const NoticeBtn = styled.button`
  position: absolute;
  right: 30px;
  bottom: 20px;
  width: 20px;
  height: 20px;
  background: orange;
  color: #fff;
  font-weight: bold;
  line-height: 1.8;
  border-radius: 50%;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
  cursor: pointer;

  :hover {
    transform: translateY(-5px);
  }

  @media ${({ theme }) => theme.mobile} {
    right: 10px;
    bottom: 10px;
  }
`;

const Buttons = styled.div`
  ${flexSet('center', 'flax-start')}
`;

export default function Attendance() {
  const [employeeData, setEmployeeData] = useState('');
  const [popup, setPopup] = useState(false);
  const history = useHistory();
  const noticeBtn = useRef();
  const input = useRef();
  const date = 0;

  useEffect(() => {
    document.addEventListener('click', clickOutside);
    return () => document.removeEventListener('click', clickOutside);
  }, []);

  const goToPage = e => {
    e.stopPropagation();
    const employee_number = prompt('사번을 입력해주세요.');
    const password = prompt(
      '비밀번호를 입력해주세요. 초기 비밀번호는 주민번호 뒤 7자리입니다.'
    );
    fetch('http://10.58.7.4:8000/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({
        employee_number: employee_number,
        password: password,
      }),
    })
      .then(response => {
        response.json();
        console.log(response.headers);
      })
      .then(result => {
        console.log(result);
        result.token && localStorage.setItem('access_token', result.token);
        if (!result.message === 'SUCCESS') {
          alert(result.message);
        } else if (result.token) {
          history.push(`/mypage`);
        }
      });
  };

  const fetchData = () => {};

  const getEmployeeData = debounce(() => {
    const employeeNumber = input.current.value;
    fetch(
      `http://13.125.76.153:8000/schedules/today?employee_number=${employeeNumber}`
    ).then(response => {
      if (response.status === 200) {
        return response.json().then(data => {
          setEmployeeData(data);
        });
      }
      if (response.status === 404) {
        alert('사번을 다시 확인해주세요');
      }
    });
  }, 1000);

  const IsRegistered = () => {
    const employeeNumber = input.current.value;
    fetch(`http://13.125.76.153:8000/users/${employeeNumber}/schedules`, {
      method: 'POST',
    });
    getEmployeeData();
  };

  const enterKey = e => {
    if (e.key === 'Enter') {
      IsRegistered();
    }
  };

  const clickOutside = e => {
    if (!noticeBtn.current.contains(e.target)) {
      setPopup(false);
    }
  };

  const popupNotice = () => {
    setPopup(true);
  };

  return (
    <Main>
      <Title>근태 프로그램</Title>
      <MainSection>
        <Contents>
          <RecordInfo>
            <NoticeLabel>사번:</NoticeLabel>
            <Input
              type="text"
              placeholder="사번을 입력하세요"
              onChange={getEmployeeData}
              onKeyUp={enterKey}
              autoFocus
              ref={input}
            />
          </RecordInfo>
          <RecordInfo>
            <NoticeText>이름:</NoticeText>
            <span>{employeeData.name}</span>
          </RecordInfo>
          <Record>
            <NoticeText>출근:</NoticeText>
            <span>
              {employeeData.created_at &&
                employeeData.created_at.replace('T', '  ').substr(0, 19)}
            </span>
          </Record>
          <Record>
            <NoticeText>퇴근:</NoticeText>
            <span>
              {employeeData.updated_at &&
                employeeData.updated_at.replace('T', '  ').substr(0, 19)}
            </span>
          </Record>
          {popup && <Notice>관리자에게 문의주세요. aaa@b2tech.com</Notice>}
          <NoticeBtn ref={noticeBtn} onClick={popupNotice}>
            ?
          </NoticeBtn>
        </Contents>
        <Buttons>
          <RequestButton value="페이지 이동" onClick={goToPage} />
          <RequestButton value="출•퇴근 등록" onClick={IsRegistered} />
        </Buttons>
      </MainSection>
    </Main>
  );
}
