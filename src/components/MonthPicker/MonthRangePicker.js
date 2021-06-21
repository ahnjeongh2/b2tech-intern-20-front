import React, { useState } from 'react';
import styled from 'styled-components';
import { flexSet } from '../../styles/Variable';

const MONTHS = [];

export default function MonthRangePicker() {
  const handlePrevBtn = () => {};

  const handleNextBtn = () => {};

  return (
    <div>
      <div>
        <p></p>
        <div>
          <p className="prev" onClick={handlePrevBtn}>
            <i className="fas fa-chevron-left" />
          </p>
          <p className="next" onClick={handleNextBtn}>
            <i className="fas fa-chevron-right" />
          </p>
        </div>
      </div>
    </div>
  );
}
