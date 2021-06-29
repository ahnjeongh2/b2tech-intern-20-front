import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DatePickerComponent from '../../../components/DatePicker/Datepicker';
import styled from 'styled-components';
import { flexSet } from '../../../styles/Variable';
import RequestButton from '../../../components/RequestButton';
import { GET_API } from '../../../config';

const GlassBg = styled.div`
  width: 90%;
  margin: 10px auto;
  background: rgba(255, 255, 255, 0.45);
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

const ButtonInfo = styled.div`
  position: absolute;
  left: 33%;
  bottom: 14px;
  text-align: center;
  margin-top: 20px;

  @media ${({ theme }) => theme.mobile} {
    left: 17%;
  }
`;

const Info = styled.div`
  ${flexSet('flex-end', 'center')}
  width: 94%;
  margin: 10px;
`;

const InfoPicker = styled.div`
  ${flexSet('space-around', 'center')}
  width: 375px;

  @media ${({ theme }) => theme.mobile} {
    font-size: 0.6rem;
  }
`;

const FilterBar = styled.ul`
  ${flexSet('space-around', 'center')}
  width: 345px;
  padding: 5px 0;

  li {
    input {
      margin: 8px;
    }
  }

  @media ${({ theme }) => theme.mobile} {
    width: 90%;
  }
`;

const VacationInfo = styled(GlassBg.withComponent('p'))`
  width: 145px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  text-align: center;
  line-height: 2.4;

  @media ${({ theme }) => theme.mobile} {
    width: 90px;
    height: 30px;
    font-size: 0.7rem;
    line-height: 2.6;
  }
`;

const Bottom = styled.div`
  height: 80px;
`;

const VACATION_ARR = ['연차', '반차', '공가', '경조'];

export default function Vacation({ myInfo }) {
  const [periodData, setPeriodData] = useState({});
  const [vacationType, setVacationType] = useState('');
  const history = useHistory();

  const handlePeriod = (startDate, endDate) => {
    if (startDate <= endDate) {
      setPeriodData({ startDate: startDate, endDate: endDate });
    }
    if (vacationType.el === '반차') {
      setPeriodData({ startDate: endDate, endDate: endDate });
    }
  };

  const goToMyPage = () => {
    history.push(`/page`);
  };

  const vacationRequest = () => {
    if (!myInfo.remaining_annual_leave) {
      alert('연차 휴가를 모두 소진하였습니다.');
      return;
    }
    if (vacationType) {
      handlePeriod();
      alert(
        `${periodData.startDate}~${periodData.endDate}기간에 ${vacationType.el}가 신청되었습니다.`
      );
    } else {
      alert('휴가 종류를 선택해주세요.');
    }

    const accessToken = localStorage.getItem('AUTHORIZATION');
    fetch(`${GET_API}/users/${myInfo.employee_number}/drafts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: accessToken,
      },
      body: JSON.stringify({
        type: vacationType.el,
        start_at: periodData.startDate,
        end_at: periodData.endDate,
      }),
    })
      .then(response => response.json())
      .then(data => {});
  };

  return (
    <>
      <Info>
        <ButtonInfo>
          <RequestButton value="My page" onClick={goToMyPage} />
          <RequestButton value="등록" onClick={vacationRequest} />
        </ButtonInfo>
        <VacationInfo>
          발생:&nbsp;<span>{myInfo.leave}</span>
        </VacationInfo>
        <VacationInfo>
          사용:&nbsp;
          <span>{myInfo.leave - myInfo.remaining_annual_leave}</span>
        </VacationInfo>
        <VacationInfo>
          잔여:&nbsp;<span>{myInfo.remaining_annual_leave}</span>
        </VacationInfo>
      </Info>
      <GlassBg>
        <Info>
          <VacationInfo>휴가 구분</VacationInfo>
          <InfoPicker>
            <FilterBar>
              {VACATION_ARR.map((el, idx) => {
                return (
                  <li key={idx}>
                    <input
                      type="radio"
                      name="vacation"
                      onChange={() => setVacationType({ el })}
                    />
                    {el}
                  </li>
                );
              })}
            </FilterBar>
          </InfoPicker>
        </Info>
        <Info>
          <VacationInfo>휴가 일자</VacationInfo>
          <InfoPicker>
            <DatePickerComponent handlePeriod={handlePeriod} />
          </InfoPicker>
        </Info>
        {/* <Info>
            <VacationInfo>기안 본문</VacationInfo>
            <Input onChange={e => handleVacationInput(e)} />
          </Info> */}
      </GlassBg>
      <Bottom></Bottom>
    </>
  );
}
