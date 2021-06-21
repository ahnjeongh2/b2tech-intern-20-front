import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const LeftAsideMenu = styled.aside`
  position: relative;
  width: 160px;
  height: 100vh;
  color: ${({ theme }) => theme.fontLightBlue};
  background-color: ${({ theme }) => theme.backgroundNavy};
  font-size: 12px;
`;

const CompanyLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 33px;
  width: 60px;
  height: 20px;
`;

const NavContainer = styled.div`
  padding-top: 80px;
  padding-left: 15px;
`;

const MainMenuNav = styled.nav`
  margin-bottom: 40px;
`;

const GoToMenuLists = styled(Link)`
  color: ${({ theme, isselected }) =>
    isselected ? theme.fontWhite : theme.fontLightBlue};

  &:hover {
    cursor: pointer;
    color: #ffffff;
  }
`;

const IconAndMenuListsWrapper = styled.div`
  margin-bottom: 15px;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.fontWhite};
  }
`;

const MenuIcons = styled.i`
  margin-right: 5px;
`;

const MenuLists = styled.li`
  display: inline;
`;

const ManagingMenuNav = styled.nav`
  margin-bottom: 40px;
`;

const ManagingMenuTitle = styled.div`
  margin-bottom: 15px;
`;

function LeftAsideAdmin() {
  const location = useLocation();

  return (
    <>
      <LeftAsideMenu>
        <Link to="/">
          <CompanyLogo alt="B2Tech Logo" src="/images/logo.png" />
        </Link>
        <NavContainer>
          <MainMenuNav>
            <IconAndMenuListsWrapper>
              <GoToMenuLists
                to="/admin/mypage"
                isselected={location.pathname === '/admin/mypage'}
              >
                <MenuIcons className="fas fa-home" />
                <MenuLists>마이페이지</MenuLists>
              </GoToMenuLists>
            </IconAndMenuListsWrapper>
          </MainMenuNav>
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
        </NavContainer>
      </LeftAsideMenu>
    </>
  );
}

export default LeftAsideAdmin;
