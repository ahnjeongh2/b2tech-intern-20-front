import React, { useRef, useState, useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import styled from 'styled-components';
import RequestButton from './RequestButton';
import { GET_API } from '../../src/config';

const Input = styled.input`
  width: 150px;
  line-height: 15px;
  padding: 10px;
`;

function SearchBox({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);

  return (
    <form onSubmit={handleSubmit}>
      <Input type="search" placeholder="Search..." onChange={inputHandler} />
      <RequestButton />Search
    </form>
  );
}

export default SearchBox;
