import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import LeftAside from '../../components/LeftAside';
import RequestButton from '../../components/RequestButton';
import MyPage from './MyPage/MyPage';
import Default from './Default/Default';
import Commute from './Commute/Commute';
import { flexSet } from '../../../src/styles/Variable';
import { GET_API } from '../../../src/config';

const Main = styled.div`
  margin: 0;
  overflow: hidden;
`;

const Article = styled.article`
  position: relative;
  left: 160px;

  @media ${({ theme }) => theme.mobile} {
    transform: translateX(-150px);
  }
`;

const UpperSection = styled.section`
  ${flexSet('flex-start', 'center')}
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.borderLine};

  @media ${({ theme }) => theme.mobile} {
    height: 60px;
  }
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
  top: -5px;
  right: 180px;

  @media ${({ theme }) => theme.mobile} {
    top: 2px;
    right: 0px;
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
    let response = await fetch(`${GET_API}/users/me`, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: accessToken,
      },
    });
    if (response.ok) {
      let data = await response.json();
      setUserInfo(data);
      if (data.roles.관리자) setAdmin(true);
    } else if (response.status === 401) {
      history.push(`/`);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
    1: <MyPage userInfo={userInfo} currentId={currentId} />,
    2: <Default userInfo={userInfo} currentId={currentId} />,
    3: <Commute userInfo={userInfo} currentId={currentId} />,
  };

  return (
    <Main>
      <LeftAside
        clickHandler={clickHandler}
        admin={admin}
        leftBar={leftBar}
        handleCloseIcon={() => handleCloseIcon()}
        currentId={currentId}
      />
      <Article>
        <UpperSection>
          <Manu className="fas fa-bars" onClick={handleMenu} />
          <UserInfo>
            <EmployeeNumber>
              {`사번: ${userInfo && userInfo.employee_number}`}{' '}
            </EmployeeNumber>
            <EmployeeName>{`${userInfo && userInfo.name} 님`}</EmployeeName>
          </UserInfo>
        </UpperSection>
        <ButtonSection>
          <Link to="/request">
            <RequestButton value="휴가•근무제 신청" />
          </Link>
        </ButtonSection>
        {userInfo && MAPPING_OBJ[currentId]}
      </Article>
    </Main>
  );
}
