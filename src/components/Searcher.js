import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Searcher = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Wrapper>
      <Information>
        <Logo>Img Searcher</Logo>
        <InformationText>From 2018</InformationText>
      </Information>
      <FlexContainer>
        <Title>Locking for images?</Title>
        <Description>Try our free web site for searching images</Description>
        <SearcherInput
          type="text"
          value={searchValue}
          name="search"
          placeholder="Search image"
          onChange={handleInputChange}
        />
      </FlexContainer>
    </Wrapper>
  );
};

Searcher.defaultProps = {};

Searcher.propTypes = {};

export default Searcher;

const Wrapper = styled.div`
  display: block;
  background-color: #3fd4aa;
  border-bottom: 1px solid #3fd4aa;
`;

const Information = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-top: 15px;
`;

const Logo = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 20px;
  line-height: 28px;
  color: #fafafa;
`;

const InformationText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 20px;
  color: #fafafa;
`;

const FlexContainer = styled.div`
  margin-top: 45px;
  margin-bottom: 75px;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 15px;
  padding: 0;
  font-size: 32px;
  line-height: 40px;
  font-weight: 300;
  color: #fafafa;
`;

const Description = styled.p`
  margin: 0;
  margin-bottom: 35px;
  padding: 0;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: #fafafa;
`;

const SearcherInput = styled.input`
  width: 40%;
  padding: 15px 30px;
  font-size: 16px;
  line-height: 24px;
  color: #555;
  background-color: #fff;
  border: none;
  border-radius: 3px;
  box-shadow: 0 1px 3px 0 #30303020;
  outline: none;
  transition: 200ms;

  &:hover {
    box-shadow: 0 3px 5px 0 #30303035;
    transition: 200ms;
  }

  &::placeholder {
    color: #cfcfcf;
  }
`;
