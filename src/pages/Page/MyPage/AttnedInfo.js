import React, { useState, useEffect, useRef } from 'react';
import Graph from './Graph';
import CurrentTime from './CurrentTime';
import styled from 'styled-components';
import { flexSet } from '../../../styles/Variable';
import DatePicker, { registerLocale } from 'react-datepicker';

const Section = styled.section`
  ${flexSet('flex-start', 'flex-start')}
  flex-direction: row;

  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
  }
`;

const SubTitle = styled.h2`
  width: 95%;
  border-bottom: 1px solid ${({ theme }) => theme.borderLine};
  margin: 20px auto 10px;
  font-size: 1.1rem;

  span {
    margin-left: 10px;
    font-size: 1.8rem;

    @media ${({ theme }) => theme.mobile} {
      font-size: 1rem;
    }
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 0.7rem;
  }
`;

const Table = styled.table`
  margin: 20px 50px 50px;
  border: 1px solid ${({ theme }) => theme.borderLine};

  @media ${({ theme }) => theme.mobile} {
    margin: 5px 5px 5px 20px;
  }

  td {
    padding: 20px 20px 15px;
    text-align: center;
    border-left: 1px solid ${({ theme }) => theme.borderLine};

    &:nth-child(1),
    &:nth-child(3) {
      color: ${({ theme }) => theme.fontWhite};
      background: ${({ theme }) => theme.backgroundNavy};
    }

    &:nth-child(2),
    &:nth-child(4) {
      width: 170px;

      @media ${({ theme }) => theme.mobile} {
        width: 100px;
      }
    }

    @media ${({ theme }) => theme.mobile} {
      padding: 10px;
    }
  }
`;

const TimeTable = styled.div`
  ${flexSet('flex-start', 'center')}

  div {
    margin: 10px;
    padding: 10px 40px;
    border: 1px solid ${({ theme }) => theme.borderLine};

    &:first-child {
      margin-left: 50px;

      @media ${({ theme }) => theme.mobile} {
        margin-left: 20px;
      }
    }

    &:last-child {
      width: 300px;
      ${flexSet('space-around', 'center')}

      @media ${({ theme }) => theme.mobile} {
        width: 200px;
      }
    }

    @media ${({ theme }) => theme.mobile} {
      padding: 5px;
    }
  }
`;

const Workinghours = styled.div`
  p {
    margin: 25px 60px 10px;

    span {
      color: ${({ theme }) => theme.mainBlue};
    }

    @media ${({ theme }) => theme.mobile} {
      margin: 5px 30px;
    }
  }
`;

const BarGraph = styled.div`
  width: 200px;
  height: 40px;
  margin: 20px 50px 50px;
  background: #63e8d8;
  border-radius: 20px;

  @media ${({ theme }) => theme.mobile} {
    width: 100px;
    height: 20px;
    margin: 10px 20px;
  }
`;

const BarBg = styled(BarGraph.withComponent('div'))`
  position: relative;
  top: -90px;
  width: 450px;
  background: ${({ theme }) => theme.borderLine};
  z-index: -1;

  @media ${({ theme }) => theme.mobile} {
    width: 280px;
    top: -30px;
  }
`;

export default function AttnedInfo({
  userInfo,
  today,
  firstDay,
  lastDay,
  workTime,
  totalworkTime,
  myGraph,
}) {
  useEffect(() => {
    myGraph.current.style.width = `${totalworkTime}px`;
  }, []);

  return (
    <Section>
      <section>
        <CurrentTime />
        <div>
          <SubTitle>
            <span>🌱</span> 출•퇴근시간
          </SubTitle>
          <Table>
            <tr>
              <td>출근</td>
              <td>
                {userInfo.work_in
                  ? userInfo.work_in.replace('T', '  ').substr(11, 9)
                  : '출근 전'}
              </td>
              <td>퇴근</td>
              <td>
                {userInfo.work_out
                  ? userInfo.work_out.replace('T', '  ').substr(11, 9)
                  : '퇴근 전'}
              </td>
            </tr>
          </Table>
        </div>
        <div>
          <SubTitle>
            <span>🌈</span> 근로시간
          </SubTitle>
          <TimeTable>
            <div>{`${today.getFullYear()} - ${today.getMonth() + 1}`}</div>
            <div>
              <span>{firstDay}</span> &nbsp;~&nbsp; <span>{lastDay}</span>
            </div>
          </TimeTable>
          <Workinghours>
            <p>
              • 소정 근로시간: 주 ({' '}
              <span>
                {userInfo.total_work_in_week &&
                  userInfo.total_work_in_week.substr(0, 2)}
              </span>
              시간
              <span>
                {' '}
                {userInfo.total_work_in_week &&
                  userInfo.total_work_in_week.substr(3, 5)}
              </span>
              분 ) / 52시간
            </p>
            <div>
              <BarGraph
                ref={myGraph}
                value={userInfo.total_work_in_week}
              ></BarGraph>
              <BarBg></BarBg>
            </div>
          </Workinghours>
        </div>
      </section>
      <Graph workTime={workTime} />
    </Section>
  );
}
