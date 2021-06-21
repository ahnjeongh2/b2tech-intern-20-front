import React, { useState } from 'react';
// import MonthRangePicker from '../../../components/MonthPicker/MonthRangePicker';
import styled from 'styled-components';
import { flexSet } from '../../../styles/Variable';
import RequestButton from '../../../components/RequestButton';

const ButtonInfo = styled.div`
  text-align: center;
  margin-top: 20px;

  @media ${({ theme }) => theme.mobile} {
  }
`;

const InfoPicker = styled.div`
  ${flexSet('space-around', 'center')}
  width: 375px;

  @media ${({ theme }) => theme.mobile} {
    font-size: 0.6rem;
  }
`;

export default function SystemRequest() {
  return (
    <>
      <ButtonInfo>
        <InfoPicker>{/* <MonthPicker /> */}</InfoPicker>
        <RequestButton value="My page" />
        <RequestButton value="등록" />
      </ButtonInfo>
    </>
  );
}
