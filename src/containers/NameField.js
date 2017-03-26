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
        <TextInput name="name" placeholder="Gabe Newell" />
      </Field>
    );
  }
}

export default NameField;
