import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import TableContentsCommute from '../Commute/TableContentsCommute';
import DatePickerComponent from '../../../components/DatePicker/Datepicker';
import RequestButton from '../../../components/RequestButton';
import { flexSet } from '../../../styles/Variable';
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

const InfoPicker = styled.div`
  padding-left: 20px;
`;

const TableWrapper = styled.section`
  margin: 20px;
`;

function Commute({ userInfo }) {
  const [myInfo, setMyInfo] = useState('');
  // // const leftBar = useRef();
  // // const menuIcon = useRef();
  const [admin, setAdmin] = useState(false);
  const history = useHistory();
  const [periodData, setPeriodData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const accessToken = localStorage.getItem('AUTHORIZATION');
    let response = await fetch(`${GET_API}/schedules`, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: accessToken,
      },
    });
    if (response.ok) {
      let data = await response.json();
      setMyInfo(data);
    } else if (response.status == 401) {
      history.push(`/`);
    }
  }

  // const initializeUserInfo = (firstDay, LastDay) => {
  //   const accessToken = localStorage.getItem('AUTHORIZATION');
  //   fetch(`${GET_API}/users/${userInfo.employee_number}//mypage`, {
  //     headers: {
  // 'Content-Type': 'application/json; charset=UTF-8',
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

  const handlePeriod = (startDate, endDate) => {
    if (startDate <= endDate) {
      setPeriodData({ startDate: startDate, endDate: endDate });
    }
  };

  return (
    <Main>
      <Article>
        <InfoPicker>
          <DatePickerComponent handlePeriod={handlePeriod} />
          <RequestButton value="조회" />
        </InfoPicker>
        <TableWrapper>
          <TableContentsCommute userInfo={userInfo} />
        </TableWrapper>
      </Article>
    </Main>
  );
}

export default Commute;
