import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import LeftAside from '../../components/LeftAside';
import RequestButton from '../../components/RequestButton';
import MyPage from './MyPage/MyPage';
import { flexSet } from '../../../src/styles/Variable';
import { GET_API } from '../../../src/config';

const Main = styled.div`
  display: flex;
  overflow: hidden;
`;

const Article = styled.article`
  width: 100%;

  @media ${({ theme }) => theme.mobile} {
    transform: translateX(-65px);
  }
`;

const UpperSection = styled.section`
  ${flexSet('flex-start', 'center')}
  border-bottom: 1px solid ${({ theme }) => theme.borderLine};
`;

const Manu = styled.i`
  display: none;
  margin: 5px 5px 5px 20px;

  @media ${({ theme }) => theme.mobile} {
    display: block;
    color: ${({ theme }) => theme.backgroundNavy};
    font-size: 0.9rem;
  }
`;

const UserInfo = styled.p`
  height: 50px;
  margin-left: 25px;
  padding-top: 20px;
  font-size: 1rem;

  @media ${({ theme }) => theme.mobile} {
    margin-left: 0px;
    font-size: 0.7rem;
  }
`;

const EmployeeNumber = styled(UserInfo.withComponent('span'))`
  margin-left: 20px;

  @media ${({ theme }) => theme.mobile} {
    margin-left: 10px;
  }
`;

const EmployeeName = styled(UserInfo.withComponent('span'))`
  margin-left: 25px;

  @media ${({ theme }) => theme.mobile} {
    margin-left: 10px;
  }
`;

const ButtonSection = styled.section`
  position: absolute;
  top: 10px;
  right: 0;

  @media ${({ theme }) => theme.mobile} {
    top: 2px;
  }
`;

export default function Page() {
  const [userInfo, setUserInfo] = useState('');
  const [currentId, setCurrentId] = useState(1);
  const [admin, setAdmin] = useState(false);
  const history = useHistory();
  const leftBar = useRef();

  async function fetchData() {
    const accessToken = localStorage.getItem('AUTHORIZATION');
    let response = await fetch(`${GET_API}/users/mypage`, {
      headers: {
        Authorization: accessToken,
      },
    });
    if (response.ok) {
      let data = await response.json();
      setUserInfo(data);

      if (data.roles.관리자) setAdmin(true);
    } else if (response.status == 401) {
      history.push(`/`);
    }
  }

  const clickHandler = id => {
    setCurrentId(id);
  };

  const handleMenu = () => {
    leftBar.current.style.opacity = 1;
    leftBar.current.style.transform = 'translateX(0px)';
  };

  const handleCloseIcon = () => {
    leftBar.current.style.opacity = 0;
    leftBar.current.style.transform = 'translateX(-160px)';
  };

  const MAPPING_OBJ = {
    1: <MyPage userInfo={userInfo} />,
    // 2: <WorkingSystemInfo />,
  };

  return (
    <Main>
      <LeftAside
        clickHandler={clickHandler}
        admin={admin}
        leftBar={leftBar}
        handleCloseIcon={() => handleCloseIcon()}
      />
      <Article>
        <UpperSection>
          <Manu className="fas fa-bars" onClick={handleMenu} />
          <UserInfo>
            <EmployeeNumber>
              {`사번: ${userInfo && userInfo.employeeNumber}`}{' '}
            </EmployeeNumber>
            <EmployeeName>{`${userInfo && userInfo.name} 님`}</EmployeeName>
          </UserInfo>
        </UpperSection>
        <ButtonSection>
          <Link to="/request">
            <RequestButton value="휴가•근무제 신청" />
          </Link>
        </ButtonSection>
        {MAPPING_OBJ[currentId]}
      </Article>
    </Main>
  );
}
