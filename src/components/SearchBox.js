import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import RequestButton from './RequestButton';
import { GET_API } from '../config';

const Input = styled.input`
  width: 150px;
  height: 40px;
  line-height: 15px;
  padding: 10px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
`;

function SearchBox({ userInfo }) {
  const [myInfo, setMyInfo] = useState('');
  const [admin, setAdmin] = useState(false);
  const history = useHistory();
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const accessToken = localStorage.getItem('AUTHORIZATION');
    let response = await fetch(`${GET_API}/schedules?search=${userInput}`, {
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

  const inputHandler = e => {
    setUserInput(e.target.value);
  };

  return (
    <form>
      <Input type="search" placeholder="Search..." onChange={inputHandler} />
      <RequestButton value="검색" />
    </form>
  );
}

export default SearchBox;
