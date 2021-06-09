import React from 'react';
import styled from 'styled-components';
import { flexSet } from '../../styles/Variable';

function Attendance() {
  return (
    <Main>
      <Title>근태 프로그램</Title>
      <MainSection>
        <Contents>
          <RecordInfo>
            <NoticeLabel>사번:</NoticeLabel>
            <Input type="text" placeholder="사번을 입력하세요" />
          </RecordInfo>
          <RecordInfo>
            <NoticeText>이름:</NoticeText>
            <span>김유림</span>
          </RecordInfo>
          <Record>
            <NoticeText>출근:</NoticeText>
            <span>2021-04-05 09:30</span>
          </Record>
          <Record>
            <NoticeText>퇴근:</NoticeText>
            <span>2021-04-05 19:00</span>
          </Record>
          <Notice>관리자에게 문의주세요. aaa@aaa.com</Notice>
          <NoticeBtn>?</NoticeBtn>
        </Contents>
        <Buttons>
          <Button>신청</Button>
          <Button>등록</Button>
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
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media ${({ theme }) => theme.mobile} {
    width: 90%;
    margin: 0 auto;
  }
`;

const Contents = styled.div`
  width: 85%;
  margin: 20px auto;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Record = styled.p`
  margin: 10px 40px;

  @media ${({ theme }) => theme.mobile} {
    margin: 10px;
  }
`;

const RecordInfo = styled(Record.withComponent('p'))`
  margin: 30px 40px;

  @media ${({ theme }) => theme.mobile} {
    margin: 30px 10px;
  }
`;

const Input = styled.input`
  width: 250px;
  border-bottom: 1px solid gray;

  @media ${({ theme }) => theme.mobile} {
    width: 200px;
  }
`;

const NoticeText = styled.span`
  padding-right: 40px;
  color: #585757;
  font-weight: 600;
`;

const NoticeLabel = styled(NoticeText.withComponent('label'))`
  color: black;
  font-weight: 800;
`;

const Notice = styled.div`
  ${flexSet('center', 'center')}
  position: absolute;
  right: -60px;
  bottom: 50px;
  width: 200px;
  height: 100px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  text-align: center;
  line-height: 1.5;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 2;
`;

const NoticeBtn = styled.button`
  position: absolute;
  right: 30px;
  bottom: 20px;
  width: 20px;
  height: 20px;
  background: orange;
  color: #fff;
  font-weight: 600;
  line-height: 1.8;
  border-radius: 50%;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
  cursor: pointer;

  :hover {
    transform: translateY(-5px);
  }
`;

const Buttons = styled.div`
  ${flexSet('center', 'flax-start')}
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  margin: 20px;
  background: rgba(32, 79, 178, 0.8);
  color: #fff;
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
    background: rgba(32, 79, 178, 0.45);
    transform: translateY(-7px);
  }
`;
