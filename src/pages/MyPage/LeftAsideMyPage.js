import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

function LeftAsideMyPage() {
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
                to="/mypage"
                isselected={location.pathname === '/mypage'}
              >
                <MenuIcons className="fas fa-home" />
                <MenuLists>마이페이지</MenuLists>
              </GoToMenuLists>
            </IconAndMenuListsWrapper>
          </MainMenuNav>
        </NavContainer>
      </LeftAsideMenu>
    </>
  );
}

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

export default LeftAsideMyPage;
