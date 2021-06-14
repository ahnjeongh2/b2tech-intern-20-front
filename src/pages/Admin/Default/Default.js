import React from 'react';
import styled from 'styled-components';
import LeftAside from '../components/LeftAside';
import UpperSection from '../components/UpperSection';
import TableContentsDefault from '../Default/TableContentsDefault';

function Default() {
  return (
    <Main>
      <LeftAside />
      <Article>
        <UpperSection />
        <TableWrapper>
          <TableContentsDefault />
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
  margin: 30px 30px 0px 20px;
`;

export default Default;
