import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ManagingMenuNav = styled.nav`
  margin-bottom: 40px;
`;

const ManagingMenuTitle = styled.div`
  margin-left: 10px;
  margin-bottom: 15px;

  @media ${({ theme }) => theme.mobile} {
    margin-left: 3px;
    margin-bottom: 15px;
  }
`;

const IconAndMenuListsWrapper = styled.div`
  margin-bottom: 15px;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.fontWhite};
  }
`;

const GoToMenuLists = styled(Link)`
  margin: 20px;
  color: ${({ theme, isselected }) =>
    isselected ? theme.fontWhite : theme.fontLightBlue};

  &:hover {
    cursor: pointer;
    color: #ffffff;
  }

  @media ${({ theme }) => theme.mobile} {
    margin: 5px;
  }
`;

const MenuIcons = styled.i`
  margin-right: 5px;
`;

const MenuLists = styled.li`
  display: inline;
`;

function LeftAsideAddAdmin() {
  const location = useLocation();

  return (
    <>
      <ManagingMenuNav>
        <ManagingMenuTitle>
          <h1>관리</h1>
        </ManagingMenuTitle>
        <IconAndMenuListsWrapper>
          <GoToMenuLists
            to="/admin"
            isselected={location.pathname === '/admin'}
          >
            <MenuIcons className="fas fa-users" />
            <MenuLists>기본정보</MenuLists>
          </GoToMenuLists>
        </IconAndMenuListsWrapper>
        <IconAndMenuListsWrapper>
          <GoToMenuLists
            to="/admin/commute"
            isselected={location.pathname === '/admin/commute'}
          >
            <MenuIcons className="fas fa-clock" />
            <MenuLists>출퇴근기록</MenuLists>
          </GoToMenuLists>
        </IconAndMenuListsWrapper>
        <IconAndMenuListsWrapper>
          <GoToMenuLists
            to="/admin/vacation"
            isselected={location.pathname === '/admin/vacation'}
          >
            <MenuIcons className="fas fa-plane" />
            <MenuLists>연차관리</MenuLists>
          </GoToMenuLists>
        </IconAndMenuListsWrapper>
        <IconAndMenuListsWrapper>
          <GoToMenuLists
            to="/admin/salary"
            isselected={location.pathname === '/admin/salary'}
          >
            <MenuIcons className="fas fa-file-invoice-dollar" />
            <MenuLists>급여관리</MenuLists>
          </GoToMenuLists>
        </IconAndMenuListsWrapper>
        <IconAndMenuListsWrapper>
          <GoToMenuLists
            to="/admin/benefit"
            isselected={location.pathname === '/admin/benefit'}
          >
            <MenuIcons className="fas fa-coins" />
            <MenuLists>수당관리</MenuLists>
          </GoToMenuLists>
        </IconAndMenuListsWrapper>
        <IconAndMenuListsWrapper>
          <GoToMenuLists
            to="/admin/commutedailyreport"
            isselected={location.pathname === '/admin/commutedailyreport'}
          >
            <MenuIcons className="fas fa-chart-line" />
            <MenuLists>근무 일일현황</MenuLists>
          </GoToMenuLists>
        </IconAndMenuListsWrapper>
      </ManagingMenuNav>
    </>
  );
}

export default LeftAsideAddAdmin;
