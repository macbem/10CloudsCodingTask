import React, { Component } from 'react';
import FormComponent from '../components/FormComponent';
import Header from '../components/FormHeader';
import SubmitButton from '../components/SubmitButton';
import {
  TabLink,
  TabNavigation,
  TabName
} from '../components/TabNavigation';
import NameField from './NameField';
import MobileField from './MobileField';
import GenderField from './GenderField';
import BirthdateField from './BirthdateField';
import * as validators from '../helpers/validators';

const initialFormState = {
  value: '',
  error: 'This field cannot be blank'
};

const fields = [
  { name: 'name', validator: validators.validateName },
  { name: 'phoneNumber', validator: validators.validatePhoneNumber },
  { name: 'gender', validator: validators.validateGender },
  {
    name: 'birthdate',
    validator: validators.validateDate,
    value: { day: '', month: '', year: '' }
  }
];

const getInitialFieldsObject = () => {
  let result = {};
  fields.forEach(field => {
    result[field.name] = { ...initialFormState, ...field };
  });
  return result;
};

export default class PersonalDataForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowErrors: false,
      fields: getInitialFieldsObject()
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({ shouldShowErrors: true });
    const fields = this.state.fields;
    // form result handling should happen here if it was a real case
    // eslint-disable-next-line
    const isFormValid = Object.keys(fields).every(
      el => fields[el].isValid
    );
  };

  validateField = ({ validator }, value) => validator(value);

  updateFieldState = (name, value) => {
    const target = this.state.fields[name];
    const validationResult = this.validateField(target, value); // string or null
    const newFieldState = {
      ...target,
      value,
      error: validationResult
    };
    let fields = this.state.fields;
    fields[name] = newFieldState;
    this.setState({ fields });
  };

  render() {
    const {
      name,
      phoneNumber,
      gender,
      birthdate
    } = this.state.fields;
    return (
      <FormComponent onSubmit={this.handleSubmit}>
        <TabNavigation>
          <TabLink>
            01 <TabName>Introduction</TabName>
          </TabLink>
          <TabLink active>
            02 <TabName>Personal</TabName>
          </TabLink>
          <TabLink>
            03 <TabName>Summary</TabName>
          </TabLink>
        </TabNavigation>
        <Header />
        <NameField
          updateFieldState={this.updateFieldState}
          shouldShowErrors={this.state.shouldShowErrors}
          fieldData={name}
        />
        <MobileField
          updateFieldState={this.updateFieldState}
          shouldShowErrors={this.state.shouldShowErrors}
          fieldData={phoneNumber}
        />
        <GenderField
          updateFieldState={this.updateFieldState}
          shouldShowErrors={this.state.shouldShowErrors}
          fieldData={gender}
        />
        <BirthdateField
          updateFieldState={this.updateFieldState}
          shouldShowErrors={this.state.shouldShowErrors}
          fieldData={birthdate}
        />
        <SubmitButton>Continue</SubmitButton>
      </FormComponent>
    );
  }
}
