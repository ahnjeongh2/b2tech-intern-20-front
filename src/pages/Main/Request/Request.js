import React, { useState } from 'react';
import DatePicker from './Datepicker';
import styled from 'styled-components';
// import { DateRange } from 'react-date-range';
// import { addDays } from 'date-fns';
// import 'react-date-range/dist/styles.css';
// import 'react-date-range/dist/theme/default.css';

export default function Request() {
  // const [date, setDate] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: addDays(new Date(), 0),
  //     key: 'selection',
  //   },
  // ]);

  return (
    <section>
      <p>
        <span>12345678</span>
        <span>김유림</span>님
      </p>
      <div>
        <button>휴가 신청</button>
        <button>근무제 신청</button>
      </div>
      <DatePicker />
      {/* <DateRange
        editableDateInputs={true}
        onChange={item => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        months={2}
        direction="horizontal"
      /> */}
      <article></article>
    </section>
  );
}
