import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LeftAsideMyPage from './LeftAsideMyPage';
import RequestButton from '../../components/RequestButton';

function MyPage() {
  // useEffect(() => {
  //   const loggedInfo = localStorage.getItem(‘AUTHORIZATION’);
  //   fetch(
  //     `http://10.58.3.59:8000/schedules?employee_number=${employeeNumber}&name=${name}`
  //   )
  //     .then(response => response.json())
  //     .then(data => console.log('결과: ', data));

  //   // .then(result => {
  //   //   if (result.MESSAGE === 'SUCCESS') {
  //   //     localStorage.getItem('token', result.token);
  //   //   } else {
  //   //     alert('아이디나 비밀번호를 확인해주세요');
  //   //   }
  //   // });
  // }, []);

  // initializeUserInfo = () => {
  //   const loggedInfo = localStorage.getItem(‘AUTHORIZATION’);
  //   fetch(GET_AUTHORIZATION_API, {
  //     method: ‘GET’,
  //     headers: {
  //       AUTHORIZATION: loggedInfo,
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.message === ‘SUCCESS’) {
  //         this.setState({
  //           userName: data.user_info.user_name,
  //         });
  //       } else {
  //         this.setState({
  //           userName: ‘고객’,
  //         });
  //       }
  //     });
  // };

  return (
    <Main>
      <LeftAsideMyPage />
      <Article>
        <UpperSection>
          <UserInfo>
            <EmployeeNumber>사번: 1111111</EmployeeNumber>
            <EmployeeName>홍길동 님</EmployeeName>
          </UserInfo>
        </UpperSection>
        <ButtonSection>
          <Link to="/request">
            <RequestButton value="휴가•근무제 신청" />
          </Link>
        </ButtonSection>
      </Article>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
`;

const Article = styled.article`
  width: 100%;
`;

const UpperSection = styled.section`
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

const ButtonSection = styled.section`
  padding: 10px 0px 10px 15px;
`;

export default MyPage;
