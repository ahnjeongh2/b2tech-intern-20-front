import React, { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { flexSet } from '../../styles/Variable';

function Attendance() {
  const [employeeData, setEmployeeData] = useState('');
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [password, setPassword] = useState('');
  const [popup, setPopup] = useState(false);
  const history = useHistory();
  const noticeBtn = useRef();

  useEffect(() => {
    document.addEventListener('click', clickOutside);
    return () => document.removeEventListener('click', clickOutside);
  }, []);

  const goToPage = () => {
<<<<<<< HEAD
    const result = prompt('주민번호 뒤 7자리를 입력하세요');
    setPassword(result);
=======
    // const result = prompt('주민번호 뒤 7자리를 입력하세요');
    // setPassword(result);
>>>>>>> feature/attendance
    history.push(`/mypage`);
  };

  const IsRegistered = () => {
    // fetch('', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     employeeNumber: employeeNumber,
    //   }),
    // })
    // .then(response => response.json())
    // .then(employeedata => {
    //   setEmployeeData(employeedata.results);
    // });
    // .then(result => {
    //   result.access_token &&
    //     localStorage.setItem('access_token', result.access_token);
    // if (result.message === 'SUCCESS') {
    //   } else {
    //     alert('사번을 확인해주세요.');
    //   }
    // });
  };

  const getEmployeeNumber = debounce(e => {
    setEmployeeNumber(e.target.value);
  }, 1000);

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
              onChange={getEmployeeNumber}
              onKeyUp={enterKey}
              autoFocus
            />
          </RecordInfo>
          <RecordInfo>
            <NoticeText>이름:</NoticeText>
            <span>김유림</span>
          </RecordInfo>
          <Record>
            <NoticeText>출근:</NoticeText>
            <span>2021-04-05 09:30</span>
          </Record>
          <Record>
            <NoticeText>퇴근:</NoticeText>
            <span>2021-04-05 19:00</span>
          </Record>
          {popup ? <Notice>관리자에게 문의주세요. aaa@aaa.com</Notice> : null}
          <NoticeBtn ref={noticeBtn} onClick={popupNotice}>
            ?
          </NoticeBtn>
        </Contents>
        <Buttons>
          <Button onClick={goToPage}>패이지 이동</Button>
          <Button onClick={IsRegistered}>출•퇴근 등록</Button>
        </Buttons>
      </MainSection>
    </Main>
  );
}

export default Attendance;

const Main = styled.div`
  height: 100vh;
  background: no-repeat center / cover
    url('https://products.ls.graphics/mesh-gradients/images/11.-Fuchsia_1.jpg');
  /* url('https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue.jpg'); */
  font-size: 16px;
  overflow: hidden;
`;

const Title = styled.h1`
  padding: 50px 0;
  color: #fff;
  font-size: 36px;
  text-align: center;
`;

const MainSection = styled.section`
  width: 600px;
  height: 350px;
  margin: auto;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media ${({ theme }) => theme.mobile} {
    width: 90%;
    margin: 0 auto;
    font-size: 14px;
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
  font-size: 16px;
  border-bottom: 1px solid gray;

  @media ${({ theme }) => theme.mobile} {
    width: 180px;
  }
`;

const NoticeText = styled.span`
  padding-right: 40px;
  color: #585757;
  font-weight: 600;

  @media ${({ theme }) => theme.mobile} {
    padding-right: 20px;
  }
`;

const NoticeLabel = styled(NoticeText.withComponent('label'))`
  color: black;
  font-weight: 800;
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
  font-weight: 600;
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

const Button = styled.button`
  width: 200px;
  height: 50px;
  margin: 20px;
  background: linear-gradient(315deg, #cfdae0, #f6ffff);
  font-size: 16px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  letter-spacing: 2.5px;
  font-weight: 500;
  transition: all 0.3s ease 0s;
  cursor: pointer;

  :hover {
    opacity: 0.6;
    transform: translateY(-5px);
  }

  @media ${({ theme }) => theme.mobile} {
    width: 180px;
    height: 40px;
  }
`;
