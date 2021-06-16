import React, { useRef } from 'react';
import styled from 'styled-components';
import useSearchButton from '../components/useSearchButton';

function Search() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useSearchButton(dropdownRef, false);
  const handleDropDownSearchBox = () => setIsActive(!isActive);
  // const initSearchInput = e => {
  //   e.target.value = '';
  // };

  return (
    <div>
      <MenuContainer>
        <MenuTriggerButton onClick={handleDropDownSearchBox}>
          <FaSearchIcon className="fas fa-search" />
          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? 'active' : 'inactive'}`}
          >
            <input type="text" name="search" id="search" placeholder="검색" />
          </nav>
        </MenuTriggerButton>
      </MenuContainer>
    </div>
  );
}

const MenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .menu {
    background: #ffffff;
    border-radius: 8px;
    position: absolute;
    top: 60px;
    right: 0;
    width: 300px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const MenuTriggerButton = styled.button`
  background: #ffffff;
  border-radius: 90px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border: none;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  margin-left: auto; /* Strictly for positioning */

  &:hover {
    opacity: 0.7;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }
`;

const FaSearchIcon = styled.i`
  font-weight: 700;
  vertical-align: middle;
  font-size: 14px;
`;

export default Search;
