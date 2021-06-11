import React, { useState } from 'react';
import styled from 'styled-components';
import { flexSet } from '../../styles/Variable';

function Attendance() {
  const [password, setPassword] = useState('');

  const getPassword = () => {
    const result = prompt('주민번호 뒤 7자리를 입력하세요');
    setPassword(result);
  };

  return (
    <Main>
      <Title>근태 프로그램</Title>
      <MainSection>
        <Contents></Contents>
        <Buttons>
          <Button onClick={getPassword}>admin</Button>
          <Button onClick={getPassword}>my page</Button>
        </Buttons>
      </MainSection>
    </Main>
  );
}

export default Attendance;

const Main = styled.div`
  height: 100vh;
  background: no-repeat center / cover
    url('https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bnNldCUyMGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60');
  font-size: 16px;
  overflow: hidden;
`;

const Title = styled.h1`
  padding: 50px 0;
  color: #fff;
  font-size: 36px;
  text-align: center;
`;

const MainSection = styled.section`
  width: 600px;
  height: 350px;
  margin: auto;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media ${({ theme }) => theme.mobile} {
    width: 90%;
  }
`;

const Contents = styled.div`
  width: 60%;
  height: 150px;
  margin: 20px auto;
  padding: 20px 40px;
  background: no-repeat center / 100% url('/images/logo.png');
  opacity: 0.5;
`;

const Buttons = styled.div`
  ${flexSet('center', 'flax-start')}
`;

const Button = styled.button`
  width: 200px;
  height: 100px;
  margin: 20px;
  background: linear-gradient(315deg, #cfdae0, #f6ffff);
  font-size: 16px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  transition: all 0.3s ease 0s;
  cursor: pointer;

  :hover {
    background-color: rgba(32, 79, 178, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    font-weight: 800;
    transform: translateY(-7px);
  }
`;
