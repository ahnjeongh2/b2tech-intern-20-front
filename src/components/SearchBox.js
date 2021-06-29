import React from 'react';
import styled from 'styled-components';
import RequestButton from './RequestButton';

const Input = styled.input`
  width: 150px;
  height: 40px;
  padding: 10px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  line-height: 15px;
`;

function SearchBox({ userInfo, searchFetchData, input }) {
  const enterKey = e => {
    if (e.key === 'Enter') {
      searchFetchData();
    }
  };

  return (
    <>
      <Input
        type="search"
        placeholder="Search..."
        onKeyUp={e => enterKey(e)}
        autoFocus
        ref={input}
      />
      <RequestButton value="검색" onClick={searchFetchData} />
    </>
  );
}

export default SearchBox;
