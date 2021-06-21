import React from 'react';
import styled from 'styled-components';

const UpperSectionWrapper = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.borderLine};
`;

const UserInfo = styled.p`
  height: 50px;
  padding-top: 20px;
  font-size: 12px;
`;

const EmployeeNumber = styled(UserInfo.withComponent('span'))`
  margin-left: 20px;
`;

const EmployeeName = styled(UserInfo.withComponent('span'))`
  margin-left: 25px;
`;

function UpperSection() {
  return (
    <UpperSectionWrapper>
      <UserInfo>
        <EmployeeNumber>사번: 12345678</EmployeeNumber>
        <EmployeeName>홍길동 님</EmployeeName>
      </UserInfo>
    </UpperSectionWrapper>
  );
}

export default UpperSection;
