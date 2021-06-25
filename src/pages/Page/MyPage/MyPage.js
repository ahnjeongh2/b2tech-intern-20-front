import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import LeftAside from '../../../../components/LeftAside';
import RequestButton from '../../../components/RequestButton';
import AttnedInfo from './AttnedInfo';
import { flexSet } from '../../../styles/Variable';
import { GET_API } from '../../../config';

const Main = styled.div`
  display: flex;
  overflow: hidden;
`;

const Article = styled.article`
  width: 100%;
`;

const UpperSection = styled.section`
  ${flexSet('flex-start', 'center')}
  border-bottom: 1px solid ${({ theme }) => theme.borderLine};
`;

const Manu = styled.i`
  display: none;
  margin: 5px 5px 5px 20px;

  @media ${({ theme }) => theme.mobile} {
    display: block;
    color: ${({ theme }) => theme.backgroundNavy};
    font-size: 0.9rem;
  }
`;

const UserInfo = styled.p`
  height: 50px;
  margin-left: 25px;
  padding-top: 20px;
  font-size: 1rem;

  @media ${({ theme }) => theme.mobile} {
    margin-left: 0px;
    font-size: 0.7rem;
  }
`;

const EmployeeNumber = styled(UserInfo.withComponent('span'))`
  margin-left: 20px;

  @media ${({ theme }) => theme.mobile} {
    margin-left: 10px;
  }
`;

const EmployeeName = styled(UserInfo.withComponent('span'))`
  margin-left: 25px;

  @media ${({ theme }) => theme.mobile} {
    margin-left: 10px;
  }
`;

const ButtonSection = styled.section`
  position: absolute;
  top: 10px;
  right: 0;

  @media ${({ theme }) => theme.mobile} {
    top: 2px;
  }
`;

const Tabs = styled.div`
  font-size: 1rem;

  @media ${({ theme }) => theme.mobile} {
    font-size: 0.7rem;
  }
`;

const TabList = styled.ul`
  width: 95%;
  border-bottom: 1px solid ${({ theme }) => theme.borderLine};
  margin: 20px auto 10px;
  padding: 0;

  @media ${({ theme }) => theme.mobile} {
    margin: 10px;
  }
`;

const Tab = styled.li`
  display: inline-block;
  border: 1px solid transparent;
  border-bottom: none;
  bottom: -1px;
  position: relative;
  padding: 6px 12px;
  cursor: pointer;
  width: 110px;
  height: 40px;
  color: ${({ theme }) => theme.fontGray};
  line-height: 1.8;
  text-align: center;

  @media ${({ theme }) => theme.mobile} {
    padding: 12px;
    width: 80px;
  }
`;

const Selected = styled.span`
  padding: 6px;
  color: #1f2d4d;
  border-bottom: 5px solid #1f2d4d;
  font-weight: 600;
  border-radius: 5px 5px 0 0;
`;

const TAPMENU_ARR = ['근태정보', '휴가정보'];

export default function MyPage() {
  const [userInfo, setUserInfo] = useState('');
  const [currentId, setCurrentId] = useState(1);
  const [admin, setAdmin] = useState(false);
  const [firstDay, setFirstDay] = useState('');
  const [lastDay, setLastDay] = useState('');
  const [workTime, setWorkTime] = useState([]);
  const [totalworkTime, setTotalWorkTime] = useState(0);
  const history = useHistory();
  const leftBar = useRef();
  const menuIcon = useRef();
  const myGraph = useRef();
  const today = new Date();

  const GetWorkTimeList = value => {
    if (!value) {
      return;
    }
    const result = value.map(el => {
      if (el) {
        return Number(el.replace(':', '.'));
      } else return 0;
    });
    setWorkTime(result);
  };

  const GetTotalworkTime = value => {
    if (!value) {
      return;
    }
    const result = (Number(value.replace(':', '.')) / 52) * 450;
    setTotalWorkTime(result);
    myGraph.current.style.width = `${result}px`;
  };

  useEffect(() => {
    GetWorkTimeList(userInfo.work_time_list);
    GetTotalworkTime(userInfo.total_work_in_week);
  }, [userInfo]);

  const getDay = () => {
    const fday = `${today.getFullYear()}-${today.getMonth() + 1}-${
      today.getDate() - today.getDay() + 1
    }`;
    setFirstDay(fday);
    const lday = `${today.getFullYear()}-${today.getMonth() + 1}-${
      today.getDate() + (7 - today.getDay())
    }`;
    setLastDay(lday);
    if (
      today.getDate() === 28 ||
      today.getDate() === 29 ||
      today.getDate() === 30
    ) {
      setLastDay(
        `${today.getFullYear()}-${today.getMonth() + 2}-${
          today.getDate() + (7 - today.getDay()) - 30
        }`
      );
    }
    if (
      today.getDate() === 1 ||
      today.getDate() === 2 ||
      today.getDate() === 3 ||
      today.getDate() === 4
    ) {
      setFirstDay(`${today.getFullYear()}-${today.getMonth()}-28`);
    }
  };

  useEffect(() => {
    getDay();
    fetchData(firstDay, lastDay);
  }, [lastDay]);

  async function fetchData(firstDay, lastDay) {
    const accessToken = localStorage.getItem('AUTHORIZATION');
    let response = await fetch(
      `${GET_API}/users/mypage?monday=${firstDay}&sunday=${lastDay}`,
      {
        headers: {
          Authorization: accessToken,
        },
      }
    );
    if (response.ok) {
      let data = await response.json();
      setUserInfo(data);

      if (data.roles.관리자) setAdmin(true);
    } else if (response.status == 401) {
      history.push(`/`);
    }
  }

  const clickHandler = id => {
    setCurrentId(id);
  };

  const handleMenu = () => {
    leftBar.current.style.display = 'block';
    menuIcon.current.style.display = 'none';
  };

  const handleCloseIcon = () => {
    leftBar.current.style.display = 'none';
    menuIcon.current.style.display = 'block';
  };

  const MAPPING_OBJ = {
    1: (
      <AttnedInfo
        userInfo={userInfo}
        today={today}
        firstDay={firstDay}
        lastDay={lastDay}
        workTime={workTime}
        totalworkTime={totalworkTime}
        myGraph={myGraph}
      />
    ),
    // 2: <WorkingSystemInfo />,
  };

  return (
    <Main>
      <LeftAside
        admin={admin}
        leftBar={leftBar}
        handleCloseIcon={() => handleCloseIcon()}
      />
      <Article>
        <UpperSection>
          <Manu className="fas fa-bars" onClick={handleMenu} ref={menuIcon} />
          <UserInfo>
            <EmployeeNumber>
              {`사번: ${userInfo && userInfo.employeeNumber}`}{' '}
            </EmployeeNumber>
            <EmployeeName>{`${userInfo && userInfo.name} 님`}</EmployeeName>
          </UserInfo>
        </UpperSection>
        <ButtonSection>
          <Link to="/request">
            <RequestButton value="휴가•근무제 신청" />
          </Link>
        </ButtonSection>
        <Tabs>
          <TabList>
            {TAPMENU_ARR.map((name, idx) => {
              return (
                <Tab key={idx} onClick={() => clickHandler(idx + 1)}>
                  {idx + 1 === currentId ? <Selected>{name}</Selected> : name}
                </Tab>
              );
            })}
          </TabList>
          {MAPPING_OBJ[currentId]}
        </Tabs>
      </Article>
    </Main>
  );
}
