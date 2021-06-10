import React, { useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
setDefaultLocale('ko', ko);

export default function DatePickerComponent() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState('');

  const HandleDateInput = ({ value, onClick }) => (
    <button className="handleDateInputBtn" onClick={onClick}>
      {value}
    </button>
  );

  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput={<HandleDateInput />}
      dateFormat="yyyy-MM-dd"
    />
  );
}
