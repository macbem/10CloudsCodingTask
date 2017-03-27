import React, { Component } from 'react';
import PersonalDataForm from './PersonalDataForm';
import FormContainer from '../components/FormContainer';
import SidePanel from '../components/SidePanel';
import ReactCSSTransitionGroup
  from 'react-addons-css-transition-group';

class App extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="anim"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionEnter={true}
        transitionLeave={false}
      >
        <FormContainer>
          <SidePanel />
          <PersonalDataForm />
        </FormContainer>
      </ReactCSSTransitionGroup>
    );
  }
}

export default App;
