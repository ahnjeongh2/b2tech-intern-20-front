import React, { useState } from 'react';
import styled from 'styled-components';
import LeftAside from '../../../components/LeftAside';
import TableContentsCommute from './TableContentsCommute';
import DatePickerComponent from '../../../components/DatePicker/Datepicker';
import Search from '../../../components/Search';
import { flexSet } from '../../../styles/Variable';

const Main = styled.div`
  display: flex;
`;

const Article = styled.article`
  width: 100%;
`;

const InfoPicker = styled.div`
  ${flexSet('space-between', 'center')}
  position: relative;
  width: 375px;
`;

const TableWrapper = styled.section`
  margin: 30px 30px 0px 20px;
`;

function Commute() {
  const [periodData, setPeriodData] = useState({});

  const handlePeriod = (startDate, endDate) => {
    if (startDate <= endDate) {
      setPeriodData({ startDate: startDate, endDate: endDate });
    }
  };

  return (
    <Main>
      <LeftAside />
      <Article>
        <Search />
        <InfoPicker>
          <DatePickerComponent handlePeriod={handlePeriod} />
        </InfoPicker>
        <TableWrapper>
          <TableContentsCommute />
        </TableWrapper>
      </Article>
    </Main>
  );
}

export default Commute;
