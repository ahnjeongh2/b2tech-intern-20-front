import React, { useState } from 'react';
import DatePickerComponent from '../../../components/DatePicker/Datepicker';
import styled from 'styled-components';
import { flexSet } from '../../../styles/Variable';

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

const Info = styled.div`
  ${flexSet('flex-end', 'center')}
  width: 94%;
  margin: 10px;
`;

const InfoPicker = styled.form`
  ${flexSet('space-around', 'center')}
  width: 375px;

  @media ${({ theme }) => theme.mobile} {
    width: 90%;
    font-size: 0.6rem;
  }
`;

const FilterBar = styled.ul`
  ${flexSet('space-around', 'center')}
  width: 345px;
  padding: 5px 0;
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
  ${flexSet('center', 'center')}
  width: 145px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);

  @media ${({ theme }) => theme.mobile} {
    width: 80px;
    height: 30px;
    font-size: 0.7rem;
  }
`;

const Input = styled(GlassBg.withComponent('input'))`
  width: 345px;
  height: 40px;
  font-size: 0.8rem;

  @media ${({ theme }) => theme.mobile} {
    width: 140px;
    height: 30px;
    font-size: 0.7rem;
  }
`;

export default function Vacation() {
  const [over, setOver] = useState(false);

  return (
    <>
      <section>
        <Info>
          <VacationInfo>
            발생:&nbsp;<span>20.0</span>
          </VacationInfo>
          <VacationInfo>
            사용:&nbsp;<span>9.5</span>
          </VacationInfo>
          <VacationInfo>
            잔여:&nbsp;<span>10.5</span>
          </VacationInfo>
        </Info>
        <GlassBg>
          <Info>
            <VacationInfo>휴가 구분</VacationInfo>
            <InfoPicker>
              <FilterBar>
                <li onMouseLeave={() => setOver(false)}>
                  <input
                    type="radio"
                    name="vacation"
                    onClick={() => setOver(true)}
                  />
                  연차
                  {over && (
                    <DropBar onMouseLeave={() => setOver(false)}>
                      <VacationName>
                        <input type="radio" name="vacation" value="연차" />
                        연차(8H)
                      </VacationName>
                      <VacationName>
                        <input type="radio" name="vacation" value="반차" />
                        반차(4H)
                      </VacationName>
                    </DropBar>
                  )}
                </li>
                <li>
                  <input type="radio" name="vacation" value="공가" />
                  공가
                </li>
                <li>
                  <input type="radio" name="vacation" value="경조" />
                  경조
                </li>
              </FilterBar>
            </InfoPicker>
          </Info>
          <Info>
            <VacationInfo>휴가 일자</VacationInfo>
            <InfoPicker>
              <DatePickerComponent />
            </InfoPicker>
          </Info>
          <Info>
            <VacationInfo>기안 본문</VacationInfo>
            <Input />
          </Info>
        </GlassBg>
      </section>
    </>
  );
}
