import React from 'react';
import styled from 'styled-components';
import LeftAside from '../components/LeftAside';
import UpperSection from '../components/UpperSection';
import TableContentsCommute from '../Commute/TableContentsCommute';
import Search from '../../../components/Search';

function Commute() {
  return (
    <Main>
      <LeftAside />
      <Article>
        <UpperSection />
        <Search />
        <TableWrapper>
          <TableContentsCommute />
        </TableWrapper>
      </Article>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
`;

const Article = styled.article`
  width: 100%;
`;

const TableWrapper = styled.section`
  margin: 80px 30px 0px 20px;
`;

export default Commute;
