import React, { Component } from 'react';
import Field from '../components/FormField';
import Label from '../components/InputLabel';
import TextInput from '../components/TextField';

class NameField extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      value: props.value
    };
  }

  render() {
    return (
      <Field>
        <Label>Your name</Label>
        <TextInput placeholder="David Gilmour" />
      </Field>
    );
  }
}

export default NameField;
