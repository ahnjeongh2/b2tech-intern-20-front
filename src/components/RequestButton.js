import React from 'react';
import styled from 'styled-components';
import { BtnSet } from '../styles/Variable';

const Button = styled.button`
  ${BtnSet}

  :hover {
    background-color: rgba(32, 79, 178, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    font-weight: bold;
    transform: translateY(-5px);
  }

  @media ${({ theme }) => theme.mobile} {
    height: 30px;
    font-size: 0.8rem;
  }
`;

export default function RequestButton({ value, onClick }) {
  return (
    <>
      <Button onClick={onClick}>{value}</Button>
    </>
  );
}
