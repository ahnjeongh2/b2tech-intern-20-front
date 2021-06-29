import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { GET_API } from '../../src/config';

const MenuContainer = styled.div`
  position: relative;

  .menu {
    width: 150px;
    margin-top: 5px;
    background: #ffffff;
    border-radius: 5px;
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
  padding: 4px 6px;
  border-radius: 90px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }
`;

const FaSearchIcon = styled.i`
  font-size: 0.6rem;
`;

const useSearchButton = (searchModal, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const handleSearchModal = e => {
      if (
        searchModal.current !== null &&
        !searchModal.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', handleSearchModal);
    }

    return () => {
      window.removeEventListener('click', handleSearchModal);
    };
  }, [isActive, searchModal]);

  return [isActive, setIsActive];
};

function Search() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useSearchButton(dropdownRef, false);
  const handleDropDownSearchBox = () => setIsActive(!isActive);

  const [searchDatas, setSearchDatas] = useState('');
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    getSearchDatas();
  }, []);

  const getSearchDatas = () => {
    fetch(`${GET_API}/schedules`)
      .then(response => response.json())
      .then(result => setSearchDatas(result));
  };

  const inputHandler = e => {
    setUserInput(e.target.value);
  };

  const filteredSearchDatas = searchDatas.filter(searchData => {
    return searchData.name.toLowerCase().includes(userInput.toLowerCase());
  });

  return (
    <div>
      <MenuContainer>
        <MenuTriggerButton onClick={handleDropDownSearchBox}>
          <FaSearchIcon className="fas fa-search" />
        </MenuTriggerButton>
        <form
          ref={dropdownRef}
          className={`menu ${isActive ? 'active' : 'inactive'}`}
        >
          <SearchBox handleChange={inputHandler} />
        </form>
      </MenuContainer>
    </div>
  );
}

export default Search;
