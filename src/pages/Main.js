import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Searcher from '../components/Searcher';

const Main = (props) => {
  return (
    <Wrapper>
      <Searcher />
    </Wrapper>
  );
};

Main.defaultProps = {};

Main.propTypes = {};

export default Main;

const Wrapper = styled.div``;
