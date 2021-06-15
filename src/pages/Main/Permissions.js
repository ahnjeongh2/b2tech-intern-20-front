import React, { useState } from 'react';
import styled from 'styled-components';
import { flexSet } from '../../styles/Variable';
import RequestButton from '../../components/RequestButton';

const Main = styled.div`
  height: 100vh;
  background: no-repeat center / cover
    url('https://products.ls.graphics/mesh-gradients/images/11.-Fuchsia_1.jpg');
  /* url('https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bnNldCUyMGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'); */
  font-size: 1.1rem;
  overflow: hidden;
`;

const Title = styled.h1`
  padding: 50px 0;
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
`;

const MainSection = styled.section`
  width: 600px;
  margin: auto;
  padding: 20px 0;
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

export default function permissions() {
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
          <RequestButton value="홈페이지" onClick={getPassword} />
          <RequestButton value="근태등록" onClick={getPassword} />
        </Buttons>
      </MainSection>
    </Main>
  );
}
