import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Searcher from '../components/Searcher';
import Gallery from '../components/Gallery';

const Main = (props) => {
  return (
    <Wrapper>
      <Searcher />
      <Gallery />
    </Wrapper>
  );
};

Main.defaultProps = {};

Main.propTypes = {};

export default Main;

const Wrapper = styled.div``;
