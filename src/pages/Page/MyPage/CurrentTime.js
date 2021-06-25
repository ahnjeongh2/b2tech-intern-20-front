import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { flexSet } from '../../../styles/Variable';

const Current = styled.div`
  ${flexSet('center', 'center')}
  width: 300px;
  margin: 20px 50px 40px;
  border: 1px solid ${({ theme }) => theme.placeholderGrey};
  border-radius: 20px;

  span {
    padding: 15px 15px 11px;

    @media ${({ theme }) => theme.mobile} {
      padding: 5px 5px 2px;
    }

    &:last-child {
      font-size: 1.3rem;

      @media ${({ theme }) => theme.mobile} {
        font-size: 0.9rem;
      }
    }
  }

  @media ${({ theme }) => theme.mobile} {
    width: 250px;
    margin: 10px 20px;
    padding: 0;
  }
`;

export default function CurrentTime() {
  const today = new Date();
  const [currentTime, setCurrentTime] = useState(today);

  const getCurrentTime = () => {
    const time = new Date();
    setCurrentTime(time);
  };

  useEffect(() => {
    setInterval(getCurrentTime, 1000);
    return () => clearInterval(getCurrentTime, 1000);
  }, []);

  return (
    <Current>
      <span>{`${today.getFullYear()} - ${
        today.getMonth() + 1
      } - ${today.getDate()}`}</span>
      &nbsp; | &nbsp;
      <span>{`${currentTime.getHours()} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`}</span>
    </Current>
  );
}
