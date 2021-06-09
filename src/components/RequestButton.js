import React from 'react';
import styled from 'styled-components';

function RequestButton({ value }) {
  return (
    <>
      <Button>{value}</Button>
    </>
  );
}

const Button = styled.button`
  width: inherit;
  height: 40px;
  margin: 5px;
  background: linear-gradient(315deg, #cfdae0, #f6ffff);
  font-size: 14px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  letter-spacing: 2.5px;
  font-weight: 500;
  transition: all 0.3s ease 0s;
  cursor: pointer;

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
