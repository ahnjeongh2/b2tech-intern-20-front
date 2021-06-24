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

  @media ${({ theme }) => theme.mobile} {
    display: none;
    font-size: 0.7rem;
  }
`;

const CloseIcon = styled.i`
  display: none;
  margin: 20px;
  color: #fff;

  @media ${({ theme }) => theme.mobile} {
    display: block;
    color: #fff;
    font-size: 1.1rem;
  }
`;

const CompanyLogo = styled.img`
  display: block;
  margin: 40px auto 20px;
  width: 110px;

  @media ${({ theme }) => theme.mobile} {
    margin: 10px auto;
    width: 80px;
  }
`;

const NavContainer = styled.div`
  margin-top: 60px;
  font-size: 0.9rem;

  @media ${({ theme }) => theme.mobile} {
    margin-top: 40px;
    font-size: 0.6rem;
  }
`;

const MainMenuNav = styled.nav`
  margin-bottom: 40px;
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
    margin: 10px;
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

function LeftAsideMyPage({ leftBar, handleCloseIcon }) {
  const location = useLocation();

  return (
    <>
      <LeftAsideMenu ref={leftBar}>
        <CloseIcon className="far fa-times-circle" onClick={handleCloseIcon} />
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

export default LeftAsideMyPage;
