import React, { useState } from 'react';
import DatePickerComponent from './Datepicker';
import styled from 'styled-components';
import { flexSet } from '../../../styles/Variable';

export default function Request() {
  const [periodData, setPeriodData] = useState('');
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
      <GlassBg>
        <UserInfo>
          <span>사번: 12345678</span>
          <span>김유림 님</span>
        </UserInfo>
        <ButtonsInfo>
          <Button>휴가</Button>
          <Button>근무제</Button>
          <DatePickerComponent handlePeriod={handlePeriod} />
        </ButtonsInfo>
        <article>내용</article>
      </GlassBg>
    </Main>
  );
}

const Main = styled.section`
  height: 100vh;
  background: no-repeat center / cover
    url('https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bnNldCUyMGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60');
  font-size: 16px;
  overflow: hidden;
`;

const GlassBg = styled.div`
  width: 650px;
  margin: 40px auto 10px;
  background: rgba(255, 255, 255, 0.25);
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

const ButtonsInfo = styled.div`
  ${flexSet('space-around', 'center')}
  width: 95%;
  margin: auto;
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  margin: 5px;
  background: rgba(32, 79, 178, 0.8);
  color: #fff;
  font-size: 14px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  transition: all 0.3s ease 0s;
  cursor: pointer;

  :hover {
    background: rgba(32, 79, 178, 0.45);
    transform: translateY(-7px);
  }
`;
