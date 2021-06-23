import React, { useState } from 'react';
import styled from 'styled-components';
import SystemRequest from './SystemRequest';
import { flexSet } from '../../../styles/Variable';

const GlassBg = styled.div`
  margin: 10px auto;
  padding: 20px 0;
  background: rgba(255, 255, 255, 0.1);
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

const SubTitle = styled.h2`
  padding: 15px 40px;
  color: #fff;
  font-size: 1.2rem;
  text-align: left;

  @media ${({ theme }) => theme.mobile} {
    padding: 5px 10px 5px 20px;
    font-size: 1rem;
  }
`;

const SystemInfoWrap = styled.ul`
  ${flexSet('space-around', 'flex-start')}
  width: 90%;
  margin: auto;

  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
    font-size: 0.6rem;
  }
`;

const SystemInfo = styled(GlassBg.withComponent('li'))`
  width: 140px;
  height: 140px;
  margin-bottom: 10px;

  span {
    margin: 5px 0 5px 12px;
  }

  strong {
    padding: 5px;
    font-size: 1.1rem;

    @media ${({ theme }) => theme.mobile} {
      font-size: 0.9rem;
      line-height: 2.1;

      span {
        margin: 0 0 0 12px;
      }
    }
  }

  p {
    padding: 12px;
    font-size: 0.9rem;

    @media ${({ theme }) => theme.mobile} {
      display: none;
    }
  }

  @media ${({ theme }) => theme.mobile} {
    width: 97%;
    margin: 5px;
    padding: 0;
    height: 30px;
  }
`;

const SelectedSystem = styled(GlassBg.withComponent('div'))`
  ${flexSet('center', 'center')}
  width: 89.5%;

  @media ${({ theme }) => theme.mobile} {
    margin: 20px auto;
    font-size: 0.9rem;
  }
`;

const SYSTEM_ARR = [
  {
    id: 1,
    name: '시차출퇴근제',
    desc: '주 5일, 일 8시간, 주 40시간 근무를 준수하면서 출퇴근시간을 조정',
  },
  {
    id: 2,
    name: '선택근무제',
    desc: '정해진 단위 기간의 총 근로시간에 맞게 1일 근무시간을 근로자 자율로 결정',
  },
  {
    id: 3,
    name: '재량근무제',
    desc: '업무 수행방법을 근로자가 결정하고 사용자와 근로자간 합의로 근로시간을 결정',
  },
  {
    id: 4,
    name: '재택근무제',
    desc: '근로자가 자택에서 업무를 수행',
  },
];

export default function WorkingSystem() {
  const [currentId, setCurrentId] = useState('');

  const clickHandler = (e, id) => {
    e.stopPropagation();
    setCurrentId(id);
    // const list = e.target.parentNode.parentNode.childNodes;
    // list.forEach(el => {
    //   if (ErrorEvent) {
    //     console.log(ErrorEvent);
    //     // return;
    //   }
    //   el.style.border = '';
    // });
    // e.target.parentNode.style.border = '3px solid blue';
  };

  const SYSTEM_OBJ = {
    1: <SystemRequest SYSTEM_ARR={SYSTEM_ARR} />,
    2: '팀장님과 상의하세요!🌱',
    3: '팀장님과 상의하세요!🌼',
    4: '팀장님과 상의하세요!🏠',
  };

  return (
    <>
      <section>
        <SubTitle>{'> 유연 근무제'}</SubTitle>
        <SystemInfoWrap>
          {SYSTEM_ARR.map((el, idx) => {
            return (
              <SystemInfo key={el.id} onClick={e => clickHandler(e, idx + 1)}>
                <span>{`>`}</span>
                <strong>{el.name}</strong>
                <p>{el.desc}</p>
              </SystemInfo>
            );
          })}
        </SystemInfoWrap>
        {currentId && <SelectedSystem>{SYSTEM_OBJ[currentId]}</SelectedSystem>}
      </section>
    </>
  );
}
