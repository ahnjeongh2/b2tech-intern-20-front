import React, { useState, useEffect } from 'react';
import DatePickerComponent from '../../../components/DatePicker/Datepicker';
import Modal from '../../../components/Modal/Modal';
import styled from 'styled-components';
import { flexSet } from '../../../styles/Variable';

export default function Vacation() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    console.log(modal);
  }, modal);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(true);
  };

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
              <p>
                <input type="radio" name="" checked={openModal} /> 연차
                <Modal
                  open={modal}
                  close={closeModal}
                  title="휴가를 선택하세요."
                  content={`<input type="radio" name="" /> 연차
                  <input type="radio" name="" /> 반차`}
                />
              </p>
              <p>
                <input type="radio" name="" /> 공가
              </p>
              <p>
                <input type="radio" name="" /> 경조
              </p>
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

const InfoPicker = styled.div`
  ${flexSet('space-around', 'center')}
  width: 375px;

  @media ${({ theme }) => theme.mobile} {
    width: 90%;
    font-size: 12px;
  }
`;

const VacationInfo = styled(GlassBg.withComponent('p'))`
  ${flexSet('center', 'center')}
  width: 145px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);

  @media ${({ theme }) => theme.mobile} {
    width: 80px;
    height: 30px;
    font-size: 12px;
  }
`;

const Input = styled(GlassBg.withComponent('input'))`
  width: 345px;
  height: 40px;
  font-size: 14px;

  @media ${({ theme }) => theme.mobile} {
    width: 140px;
    height: 30px;
    font-size: 12px;
  }
`;
