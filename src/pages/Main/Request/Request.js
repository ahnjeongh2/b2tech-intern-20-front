import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Vacation from './Vacation';
import WorkingSystem from './WorkingSystem';
import styled from 'styled-components';
import './react-tabs.css';
import { flexSet } from '../../../styles/Variable';

export default function Request() {
  const [periodData, setPeriodData] = useState('');
  const currentId = '1';

  // const clickHandler = id => {
  //   setCurrentId(id);
  // };

  const handlePeriod = (startDate, endDate) => {
    console.log(`startDate: ${startDate}, endDate: ${endDate}`);
    // fetch('', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     startDate: startDate,
    //     endDate: endDate,
    //   }),
    // })
    // .then(response => response.json())
    // .then(eperioddata => {
    //   setPeriodData(perioddata.results);
    // });
    // .then(result => {
    //   result.access_token &&
    //     localStorage.setItem('access_token', result.access_token);
    // if (!result.message === 'SUCCESS') {
    //    alert('조회기간을 다시 확인해주세요.');
    //   }
    // });};
    // const ExampleCustomInput = ({ value, onClick }) => (
    //   <button className="example-custom-input" onClick={onClick}>
    //     {value}
    //   </button>
    // );
  };

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
          <ButtonInfo>
            <Button>등록</Button>
            <Button>My page</Button>
          </ButtonInfo>
          <TabPanel>{MAPPING_OBJ[currentId]}</TabPanel>
        </Tabs>
      </GlassBg>
    </Main>
  );
}

const MAPPING_OBJ = {
  1: <Vacation />,
  2: <WorkingSystem />,
};

const CATEGORY_ARR = ['휴가', '근무제'];

const Main = styled.section`
  height: 100vh;
  background: no-repeat center / cover
    url('https://res.cloudinary.com/practicaldev/image/fetch/s--RNNNA7AE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/69592270/101304060-72ff5b00-380d-11eb-8c58-a3172d791c9c.png');
  font-size: 16px;
  overflow: hidden;
`;

const Title = styled.h1`
  padding: 50px 0;
  color: #fff;
  font-size: 36px;
  text-align: center;

  @media ${({ theme }) => theme.mobile} {
    padding: 50px 0 20px;
    font-size: 24px;
  }
`;

const GlassBg = styled.div`
  width: 650px;
  margin: 10px auto;
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
`;

const PickerInfo = styled.div`
  ${flexSet('flex-end', 'center')}
  width: 95%;
`;

const ButtonInfo = styled.div`
  ${flexSet('flex-end', 'center')}
  width: 94%;
  margin: 10px;
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  margin: 5px;
  background: linear-gradient(315deg, #cfdae0, #f6ffff);
  font-size: 14px;
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
    background-color: rgba(32, 79, 178, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    font-weight: 800;
    transform: translateY(-5px);
  }

  @media ${({ theme }) => theme.mobile} {
    height: 30px;
    font-size: 12px;
  }
`;
