import React, { useState } from 'react';
import DatePicker, { setDefaultLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import '../Request/datepicker.css';
setDefaultLocale('ko', ko);

export default function DatePickerComponent({ GetDate }) {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <DatePicker
        selected={date}
        onChange={(date, e) => {
          setDate(date);
          GetDate(date, e);
        }}
        // customInput={<ExampleCustomInput />}
        dateFormat="yyyy-MM-dd"
      />
    </>
  );
}
