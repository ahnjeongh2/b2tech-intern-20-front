import React, { useState } from 'react';
import DatePickerComponent from '../../../components/DatePicker/Datepicker';
import styled from 'styled-components';
import { flexSet } from '../../../styles/Variable';
import RequestButton from '../../../components/RequestButton';

const GlassBg = styled.div`
  width: 90%;
  margin: 10px auto;
  background: rgba(255, 255, 255, 0.45);
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

const ButtonInfo = styled.div`
  text-align: center;
  margin-top: 20px;

  @media ${({ theme }) => theme.mobile} {
  }
`;

const Info = styled.div`
  ${flexSet('flex-end', 'center')}
  width: 94%;
  margin: 10px;
`;

const InfoPicker = styled.div`
  ${flexSet('space-around', 'center')}
  width: 375px;

  @media ${({ theme }) => theme.mobile} {
    font-size: 0.6rem;
  }
`;

const FilterBar = styled.ul`
  ${flexSet('space-around', 'center')}
  width: 345px;
  padding: 5px 0;

  li {
    input {
      margin: 8px;
    }
  }

  @media ${({ theme }) => theme.mobile} {
    width: 90%;
  }
`;

export default function SystemRequest({ SYSTEM_ARR }) {
  return (
    <>
      <ButtonInfo>
        <RequestButton value="My page" />
        <RequestButton value="등록" />
      </ButtonInfo>
    </>
  );
}
