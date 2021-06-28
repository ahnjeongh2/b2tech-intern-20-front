import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 150px;
  line-height: 15px;
  padding: 10px;
`;

function SearchBox(props) {
  return (
    <Input
      type="search"
      placeholder="Search..."
      onChange={props.inputHandler}
    />
  );
}

export default SearchBox;
