import React, { Component } from 'react';
import Picker from 'react-month-picker';
import './month-picker.css';

export default class MonthPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      singleValue: { year: 2014, month: 11 },
      singleValue2: { year: 2016, month: 7 },
      multiValue: [
        { year: 2016, month: 7 },
        { year: 2016, month: 11 },
        { year: 2017, month: 3 },
        { year: 2019, month: 5 },
      ],
      rangeValue: {
        from: { year: 2014, month: 8 },
        to: { year: 2015, month: 5 },
      },
      rangeValue2: {
        from: { year: 2013, month: 11 },
        to: { year: 2016, month: 3 },
      },
    };

    this.pickAMonth = React.createRef();
    this.pickAMonth2 = React.createRef();
    this.pickMulti = React.createRef();
    this.pickRange = React.createRef();
    this.pickRange2 = React.createRef();
  }

  render() {
    const pickerLang = {
      months: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      from: 'From',
      to: 'To',
    };
    const { singleValue, singleValue2, multiValue, rangeValue, rangeValue2 } =
      this.state;

    const makeText = m => {
      if (m && m.year && m.month)
        return pickerLang.months[m.month - 1] + '. ' + m.year;
      return '?';
    };

    return (
      <>
        <label>
          <b>Pick Several Month</b>
          <span>Available months from Feb.2016 to Apr.2020</span>
        </label>
        <div className="edit">
          <Picker
            ref={this.pickMulti}
            years={{
              min: { year: 2016, month: 2 },
              max: { year: 2020, month: 4 },
            }}
            value={multiValue}
            lang={pickerLang.months}
            onChange={this.handleMultiChange}
            onDismiss={this.handleMultiDissmis}
          >
            {/* <MonthBox
              value={multiValue.map(v => makeText(v)).join(' | ')}
              onClick={this.handleClickMultiBox}
            /> */}
          </Picker>
        </div>
      </>
    );
  }
}
