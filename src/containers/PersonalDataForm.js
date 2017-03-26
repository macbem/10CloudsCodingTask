import React, { Component } from 'react';
import FormComponent from '../components/FormComponent';
import Header from '../components/FormHeader';
import NameField from './NameField';
import MobileField from './MobileField';
import GenderField from './GenderField';

const initialFormState = {
  isValid: true,
  value: ''
};

const fields = [
  { name: 'name', validator: 'a fn call' },
  { name: 'phoneNumber', validator: 'a fn call' },
  { name: 'gender', validator: 'a fn call' },
  { name: 'dayOfBirth', validator: 'a fn call' },
  { name: 'monthOfBirth', validator: 'a fn call' },
  { name: 'yearOfBirth', validator: 'a fn call' }
];

const getInitialFieldsObject = () => {
  let result = {};
  fields.forEach(field => {
    result[ field.name ] = { ...initialFormState, ...field};
  });
  return result;
};

// A basic form logic routing - a form field...
// 1. is passed an object
// 2. runs its validator
// 3. runs the fn that notifies its parent about it's validity
// 4. is passed back the object which notifies it if it's valid

export default class PersonalDataForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: getInitialFieldsObject()
    };
  }

  updateFieldState = (name, obj) => {
    const newFieldState = {...this.state.fields[name], obj};
    let fields= this.state.fields;
    fields[name] = newFieldState;
    this.setState({fields});
  }

  render() {
    return (
      <FormComponent>
        <Header />
        <NameField />
        <MobileField />
        <GenderField />
      </FormComponent>
    );
  }
};
