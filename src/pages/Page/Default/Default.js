import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import TableContentsDefault from '../Default/TableContentsDefault';
import { GET_API } from '../../../config';

const Main = styled.div`
  display: flex;
  overflow: hidden;
`;

const Article = styled.article`
  width: 85%;

  @media ${({ theme }) => theme.mobile} {
    width: 120%;
  }
`;

const TableWrapper = styled.section`
  margin: 80px 30px 0px 20px;
`;

function Default({ userInfo }) {
  const [myInfo, setMyInfo] = useState('');
  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const accessToken = localStorage.getItem('AUTHORIZATION');
    let response = await fetch(
      `${GET_API}/users/${userInfo.employee_number}/employees`,
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: accessToken,
        },
      }
    );
    if (response.ok) {
      let data = await response.json();
      setMyInfo(data.results);
    } else if (response.status == 401) {
      history.push(`/`);
    }
  }

  return (
    <Main>
      <Article>
        <TableWrapper>
          <TableContentsDefault userInfo={userInfo} />
        </TableWrapper>
      </Article>
    </Main>
  );
}

export default Default;
