import React, { useState } from 'react';
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

const ManagingMenuLists = styled.ul`
  margin: 20px;
  color: ${({ theme }) => theme.fontLightBlue};

  @media ${({ theme }) => theme.mobile} {
    margin: 5px;
  }
`;

const MenuLists = styled.li`
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
    color: #ffffff;
  }
`;

const Selected = styled.span`
  color: ${({ theme }) => theme.fontWhite};
`;

const ADMINMENU_ARR = [
  { menuIcon: <i className="fas fa-users" />, menuName: '기본정보' },
  { menuIcon: <i className="fas fa-clock" />, menuName: '출퇴근기록' },
  { menuIcon: <i className="fas fa-plane" />, menuName: '연차관리' },
  {
    menuIcon: <i className="fas fa-file-invoice-dollar" />,
    menuName: '급여관리',
  },
  { menuIcon: <i className="fas fa-coins" />, menuName: '수당관리' },
  { menuIcon: <i className="fas fa-chart-line" />, menuName: '근무 일일현황' },
];

function LeftAsideAddAdmin() {
  const [currentId, setCurrentId] = useState(1);

  const clickHandler = id => {
    setCurrentId(id);
  };

  return (
    <>
      <ManagingMenuNav>
        <ManagingMenuTitle>
          <h1>관리</h1>
        </ManagingMenuTitle>
        <IconAndMenuListsWrapper>
          <ManagingMenuLists>
            {ADMINMENU_ARR.map((managingMenus, idx) => {
              return (
                <MenuLists key={idx} onClick={() => clickHandler(idx + 1)}>
                  {idx + 1 === currentId ? (
                    <Selected>
                      {managingMenus.menuIcon} {managingMenus.menuName}
                    </Selected>
                  ) : (
                    <>
                      {managingMenus.menuIcon} {managingMenus.menuName}
                    </>
                  )}
                </MenuLists>
              );
            })}
          </ManagingMenuLists>
        </IconAndMenuListsWrapper>
      </ManagingMenuNav>
    </>
  );
}

export default LeftAsideAddAdmin;
