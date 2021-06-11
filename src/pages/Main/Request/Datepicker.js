import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import '../Request/datepicker.css';
import styled from 'styled-components';
registerLocale('ko', ko);

export default function DatePickerComponent({ handlePeriod }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="yyyy-MM-dd"
        locale="ko"
      />
      -
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        dateFormat="yyyy-MM-dd"
        locale="ko"
      />
      <Button onClick={() => handlePeriod(startDate, endDate)}>조회</Button>
    </>
  );
}

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
