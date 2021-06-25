import React from 'react';
import styled from 'styled-components';
import LeftAside from '../../../components/LeftAside';
import TableContentsDefault from '../Default/TableContentsDefault';

const Main = styled.div`
  display: flex;
`;

const Article = styled.article`
  width: 100%;
`;

const TableWrapper = styled.section`
  margin: 30px 30px 0px 20px;
`;

function Default() {
  return (
    <Main>
      <LeftAside />
      <Article>
        <TableWrapper>
          <TableContentsDefault />
        </TableWrapper>
      </Article>
    </Main>
  );
}

export default Default;
