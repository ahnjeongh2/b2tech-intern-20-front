import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LeftAsideAddAdmin from '../components/LeftAsideAddAdmin';

const LeftAsideMenu = styled.aside`
  position: relative;
  width: 160px;
  height: 100vh;
  color: ${({ theme }) => theme.fontLightBlue};
  background-color: ${({ theme }) => theme.backgroundNavy};
  font-size: 0.9rem;

  @media ${({ theme }) => theme.mobile} {
    transform: translateX(-160px);
    opacity: 0;
    transition: all 900ms cubic-bezier(0.9, 0, 0.33, 1);
    font-size: 0.7rem;
    z-index: 100;
  }
`;

const CloseIcon = styled.i`
  display: none;
  margin: 20px;
  color: #fff;

  @media ${({ theme }) => theme.mobile} {
    display: block;
    /* position: absolute;
    top: 2px;
    left: 2px; */
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

const MyPageMenuNav = styled.nav`
  margin-bottom: 40px;
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

function LeftAside({
  clickHandler,
  currentId,
  leftBar,
  handleCloseIcon,
  admin,
}) {
  const location = useLocation();

  return (
    <>
      <LeftAsideMenu ref={leftBar}>
        <CloseIcon className="far fa-times-circle" onClick={handleCloseIcon} />
        <Link to="/">
          <CompanyLogo alt="B2Tech Logo" src="/images/logo.png" />
        </Link>
        <NavContainer>
          <MyPageMenuNav>
            <IconAndMenuListsWrapper>
              <GoToMenuLists
                to="/page"
                isselected={location.pathname === '/page'}
              >
                <MenuIcons className="fas fa-home" />
                <MenuLists onClick={() => clickHandler(1)}>
                  마이페이지
                </MenuLists>
              </GoToMenuLists>
            </IconAndMenuListsWrapper>
          </MyPageMenuNav>
          {admin && (
            <LeftAsideAddAdmin
              clickHandler={clickHandler}
              currentId={currentId}
            />
          )}
          {/* <LeftAsideAddAdmin
            clickHandler={clickHandler}
            currentId={currentId}
          /> */}
        </NavContainer>
      </LeftAsideMenu>
    </>
  );
}

export default LeftAside;
