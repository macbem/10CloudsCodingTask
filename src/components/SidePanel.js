import React from 'react';
import styled from 'styled-components';
// import * as colors from '../constants/colors';

const SidePanelComponent = styled.aside`
  position: relative;
  width: 308px;
  height: 552px;
  background: linear-gradient(to right,
      rgba(32, 32, 32, 0.95) 0%,
      rgba(51, 51, 51, 0.95) 100%
    ),
    url(./assets/sidepanel-bg.jpg);
  background-size: cover;
  &:before {
    position: absolute;
    content: '';
    width: 268px;
    height: 411px;
    left: 20px;
    top: 59px;
    background: url('assets/lines.png') 0/cover;
  }
  @media (max-width: 767px) {
    display: none; 
  }
`;

const sidePanel = ( props ) => {
  return <SidePanelComponent />;
};

export default sidePanel;
