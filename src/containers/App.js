import React, { Component } from 'react';
import styled from 'styled-components';
import PersonalDataForm from './PersonalDataForm';
import FormContainer from '../components/FormContainer';
import SidePanel from '../components/SidePanel';
import injectGlobalStyles from '../constants/globalStyles';
import ReactCSSTransitionGroup
  from 'react-addons-css-transition-group';

injectGlobalStyles();

const AnimationWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  .anim-enter,
  .anim-appear {
    opacity: 0.01;
  }

  .anim-enter.anim-enter-active,
  .anim-appear.anim-appear-active {
    opacity: 1;
    transition: all 1000ms ease-in-out;
  }
`;

const Animation = ( { children } ) => {
  return (
  <AnimationWrapper>
    <ReactCSSTransitionGroup
      transitionName="anim"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnterTimeout={1000}
      transitionEnter={true}
      transitionLeave={false}
    >
      {children}
    </ReactCSSTransitionGroup>
  </AnimationWrapper>
  );
};

class App extends Component {
  render() {
    return (
      <Animation>
        <FormContainer>
          <SidePanel />
          <PersonalDataForm />
        </FormContainer>
      </Animation>
    );
  }
}

export default App;
