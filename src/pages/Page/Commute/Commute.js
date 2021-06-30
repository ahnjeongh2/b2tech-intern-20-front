import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import TableContentsCommute from '../Commute/TableContentsCommute';
import DatePickerComponent from '../../../components/DatePicker/Datepicker';
import RequestButton from '../../../components/RequestButton';
import SearchBox from '../../../components/SearchBox';
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

const PickerAndSearchWrapper = styled.div`
  ${flexSet('space-between', 'center')}

  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
  }
`;

const InfoPicker = styled.div`
  ${flexSet('space-around', 'center')}
  width: 500px;
  padding-left: 20px;

  @media ${({ theme }) => theme.mobile} {
    justify-content: flex-start;
    font-size: 0.6rem;
  }
`;

const SearchBoxWrapper = styled.div`
  @media ${({ theme }) => theme.mobile} {
    font-size: 0.6rem;
  }
`;

const TableWrapper = styled.section`
  margin: 20px;
`;

function Commute() {
  const [userInput, setUserInput] = useState([]);
  const [admin, setAdmin] = useState(false);
  const input = useRef();
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
      console.log(data);
      setUserInput(data.schedules);
    } else if (response.status == 401) {
      history.push(`/`);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, [userInput]);

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
      setUserInput(data.schedules);
    } else if (response.status == 401) {
      history.push(`/`);
    } else if (!response.status == 401) setAdmin(true);
  }

  async function searchFetchData() {
    const searchDatas = input.current.value;
    const accessToken = localStorage.getItem('AUTHORIZATION');
    let response = await fetch(`${GET_API}/schedules?search=${searchDatas}`, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: accessToken,
      },
    });
    if (response.ok) {
      let data = await response.json();
      setUserInput(data.schedules);
    }
  }

  const handlePeriod = (startDate, endDate) => {
    if (startDate <= endDate) {
      setPeriodData({ startDate: startDate, endDate: endDate });
    }
  };

  return (
    <Main>
      <Article>
        <PickerAndSearchWrapper>
          <InfoPicker>
            <DatePickerComponent handlePeriod={handlePeriod} />
            <RequestButton value="조회" />
          </InfoPicker>
          <SearchBoxWrapper>
            <SearchBox searchFetchData={searchFetchData} input={input} />
          </SearchBoxWrapper>
        </PickerAndSearchWrapper>
        <TableWrapper>
          {userInput && <TableContentsCommute userInput={userInput} />}
        </TableWrapper>
      </Article>
    </Main>
  );
}

export default Commute;
