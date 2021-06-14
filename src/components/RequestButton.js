import React from 'react';
import styled from 'styled-components';
import { BtnSet } from '../styles/Variable';

function RequestButton({ value }) {
  return (
    <>
      <Button>{value}</Button>
    </>
  );
}

const Button = styled.button`
  ${BtnSet('80', '40', '5')}

  :hover {
    background-color: rgba(32, 79, 178, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    font-weight: 800;
    transform: translateY(-5px);
  }

  @media ${({ theme }) => theme.mobile} {
    height: 30px;
    font-size: 12px;
  }
`;

export default RequestButton;
