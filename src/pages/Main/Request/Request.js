import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import './react-tabs.css';
import Vacation from './Vacation';
import WorkingSystem from './WorkingSystem';
import styled from 'styled-components';
import { flexSet } from '../../../styles/Variable';
import { GET_API } from '../../../config';

const CATEGORY_ARR = ['휴가', '근무제'];

const Main = styled.section`
  height: 100vh;
  background: no-repeat center / cover url('/images/request.jpeg');
  font-size: 1.1rem;
  overflow: hidden;
`;

const Title = styled.h1`
  padding: 50px 0;
  color: #fff;
  font-size: 2rem;
  text-align: center;

  @media ${({ theme }) => theme.mobile} {
    padding: 50px 0 20px;
    font-size: 1.4rem;
  }
`;

const GlassBg = styled.div`
  width: 650px;
  margin: 10px auto;
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
  }
`;

const UserInfo = styled(GlassBg.withComponent('p'))`
  ${flexSet('space-around', 'center')}
  width: 90%;
  height: 40px;

  @media ${({ theme }) => theme.mobile} {
    font-size: 0.8rem;
  }
`;

export default function Request() {
  const [userInfo, setUserInfo] = useState('');
  const [currentId, setCurrentId] = useState('1');

  const clickHandler = id => {
    setCurrentId(id);
  };

  const initializeUserInfo = () => {
    const accessToken = localStorage.getItem('access_token');
    // fetch(`${GET_API}`, {
    //   headers: JSON.stringify({
    //     access_token: accessToken,
    //   },
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     setUserInfo(data);
    //   });
  };

  useEffect(() => {
    initializeUserInfo();
  }, []);

  const MAPPING_OBJ = {
    1: <Vacation userInfo={userInfo} />,
    2: <WorkingSystem />,
  };

  return (
    <Main>
      <Title>휴가 • 근무제 신청</Title>
      <GlassBg>
        <UserInfo>
          <span>{`사번: ${userInfo && userInfo.employeeNumber}`}</span>
          <span>{`${userInfo && userInfo.name} 님`}</span>
        </UserInfo>
        <Tabs>
          <TabList>
            {CATEGORY_ARR.map((name, idx) => {
              return (
                <Tab key={idx} onClick={() => clickHandler(idx + 1)}>
                  {name}
                </Tab>
              );
            })}
          </TabList>
          {MAPPING_OBJ[currentId]}
        </Tabs>
      </GlassBg>
    </Main>
  );
}
