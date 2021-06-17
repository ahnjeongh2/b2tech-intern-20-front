import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Vacation from './Vacation';
import WorkingSystem from './WorkingSystem';
import styled from 'styled-components';
import './react-tabs.css';
import { flexSet } from '../../../styles/Variable';

const MAPPING_OBJ = {
  1: <Vacation />,
  2: <WorkingSystem />,
};

const CATEGORY_ARR = ['휴가', '근무제'];

const Main = styled.section`
  height: 100vh;
  background: no-repeat center / cover
    url('https://res.cloudinary.com/practicaldev/image/fetch/s--RNNNA7AE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/69592270/101304060-72ff5b00-380d-11eb-8c58-a3172d791c9c.png');
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
  margin-bottom: 40px;

  @media ${({ theme }) => theme.mobile} {
    font-size: 0.8rem;
  }
`;

export default function Request() {
  const currentId = '1';

  return (
    <Main>
      <Title>휴가 • 근무제 신청</Title>
      <GlassBg>
        <UserInfo>
          <span>사번: 12345678</span>
          <span>김유림 님</span>
        </UserInfo>
        <Tabs>
          <TabList>
            {CATEGORY_ARR.map(name => {
              return <Tab>{name}</Tab>;
            })}
          </TabList>
          <TabPanel>{MAPPING_OBJ[currentId]}</TabPanel>
        </Tabs>
      </GlassBg>
    </Main>
  );
}
