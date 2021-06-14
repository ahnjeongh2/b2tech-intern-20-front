import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import './datepicker.css';
registerLocale('ko', ko);

export default function DatePickerComponent() {
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
    </>
  );
}
