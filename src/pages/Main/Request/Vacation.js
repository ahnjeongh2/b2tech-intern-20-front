import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DatePickerComponent from '../../../components/DatePicker/Datepicker';
import styled from 'styled-components';
import { flexSet } from '../../../styles/Variable';
import RequestButton from '../../../components/RequestButton';

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
  text-align: center;
  margin-top: 20px;

  @media ${({ theme }) => theme.mobile} {
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

  @media ${({ theme }) => theme.mobile} {
    width: 90%;
  }
`;

const VacationName = styled.li`
  margin: 10px 4px;
  padding: 4px 10px;
  border-radius: 20px;

  &:hover {
    background: rgba(222, 239, 255, 0.6);
  }
`;

const DropBar = styled.ul`
  position: absolute;
  top: 52px;
  width: 150px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 1em 0.1px lightgray;
  z-index: 1;
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

const Input = styled(GlassBg.withComponent('input'))`
  width: 345px;
  height: 40px;
  font-size: 0.8rem;

  @media ${({ theme }) => theme.mobile} {
    width: 180px;
    height: 30px;
    font-size: 0.7rem;
  }
`;

const VACATION_ARR = ['연차', '반차', '공가', '경조'];

export default function Vacation({ userInfo }) {
  const [over, setOver] = useState(false);
  const [periodData, setPeriodData] = useState({});
  const [vacationType, setVacationType] = useState('');
  const history = useHistory();

  const handlePeriod = (startDate, endDate) => {
    if (startDate <= endDate) {
      setPeriodData({ startDate: startDate, endDate: endDate });
    }
  };

  const goToMyPage = () => {
    history.push(`/mypage`);
  };

  // const handleVacationInput = e => {
  //   console.log(e.target.value);
  // };

  const vacationRequest = () => {
    if (vacationType) {
      handlePeriod();
      alert(
        `${periodData.startDate}~${periodData.endDate}기간에 ${vacationType.el}가 신청되었습니다.`
      );
    } else {
      alert('휴가 종류를 선택해주세요.');
    }

    const accessToken = localStorage.getItem('AUTHORIZATION');
    // fetch('', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     AUTHORIZATION: accessToken;
    //     type: vacationType,
    //     start_at: periodData.startDate,
    //     end_at: periodData.endDate,
    //   }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //
    // });
  };

  return (
    <>
      <section>
        <Info>
          <VacationInfo>
            {/* 발생:&nbsp;<span>20.0</span> */}
            발생:&nbsp;<span>{userInfo.leave}</span>
          </VacationInfo>
          <VacationInfo>
            {/* 사용:&nbsp;<span>9.5</span> */}
            사용:&nbsp;
            <span>
              {Number(userInfo.leave) - Number(userInfo.rest_vacation)}
            </span>
          </VacationInfo>
          <VacationInfo>
            {/* 잔여:&nbsp;<span>10.5</span> */}
            잔여:&nbsp;<span>{userInfo.rest_vacation}</span>
          </VacationInfo>
        </Info>
        <GlassBg>
          <Info>
            <VacationInfo>휴가 구분</VacationInfo>
            <InfoPicker>
              <FilterBar>
                {/* <li onMouseLeave={() => setOver(false)}>
                  <input
                    type="radio"
                    name="vacation"
                    value="연차"
                    onClick={() => setOver(true)}
                  />
                  연차
                  {over && (
                    <DropBar onMouseLeave={() => setOver(false)}>
                      <VacationName>
                        <input
                          type="radio"
                          name="vacation"
                          onChange={() => setVacationValue('연차')}
                        />
                        연차(8H)
                      </VacationName>
                      <VacationName>
                        <input
                          type="radio"
                          name="vacation"
                          onChange={() => setVacationValue('반차')}
                        />
                        반차(4H)
                      </VacationName>
                    </DropBar>
                  )}
                </li> */}
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
        <ButtonInfo>
          <RequestButton value="My page" onClick={goToMyPage} />
          <RequestButton value="등록" onClick={vacationRequest} />
        </ButtonInfo>
      </section>
    </>
  );
}
