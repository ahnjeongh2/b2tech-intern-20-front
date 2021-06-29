import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import './datepicker.css';
registerLocale('ko', ko);

export default function DatePickerComponent({ handlePeriod }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    handlePeriod(
      `${startDate.getFullYear()}-${
        startDate.getMonth() + 1
      }-${startDate.getDate()}`,
      `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`
    );
  }, [startDate, endDate]);

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={date => {
          if (endDate < date) {
            setEndDate(date);
          }
          setStartDate(date);
        }}
        dateFormat="yyyy-MM-dd"
        locale="ko"
      />
      -
      <DatePicker
        selected={endDate}
        onChange={date => {
          if (startDate <= date) {
            setEndDate(date);
          } else {
            alert('시작일보다 뒤의 날짜를 선택해주세요!');
          }
        }}
        dateFormat="yyyy-MM-dd"
        locale="ko"
      />
    </>
  );
}
