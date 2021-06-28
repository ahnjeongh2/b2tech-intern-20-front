import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import TableContentsDefault from '../Default/TableContentsDefault';
import { GET_API } from '../../../config';

const Main = styled.div`
  display: flex;
  overflow: hidden;
`;

const Article = styled.article`
  width: 100%;
`;

const TableWrapper = styled.section`
  margin: 80px 30px 0px 20px;
`;

function Default({ userInfo }) {
  const [myInfo, setMyInfo] = useState('');
  // // const leftBar = useRef();
  // // const menuIcon = useRef();
  const [admin, setAdmin] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const accessToken = localStorage.getItem('AUTHORIZATION');
    console.log(userInfo.employee_number);
    let response = await fetch(
      `${GET_API}/users/${userInfo.employee_number}/employees`,
      {
        headers: {
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

  // const initializeUserInfo = (firstDay, LastDay) => {
  //   const accessToken = localStorage.getItem('AUTHORIZATION');
  //   fetch(`${GET_API}/users/${userInfo.employee_number}/mypage`, {
  //     headers: {
  //       AUTHORIZATION: accessToken,
  //       firstDay: firstDay,
  //       LastDay: LastDay,
  //     },
  //   })
  //     .then(response => {
  //       if (response.status == 401) {
  //         history.push(`/`);
  //       } else {
  //         setAdmin(true);
  //       }
  //       response.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       setUserInfo(data);
  //     });
  // };

  // useEffect(() => {
  //   initializeUserInfo();
  // }, []);

  // const handleMenu = () => {
  //   leftBar.current.style.display = 'block';
  //   menuIcon.current.style.display = 'none';
  // };

  // const handleCloseIcon = () => {
  //   leftBar.current.style.display = 'none';
  //   menuIcon.current.style.display = 'block';
  // };

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
