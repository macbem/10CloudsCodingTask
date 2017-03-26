import React, { Component } from 'react';
import Field from '../components/FormField';
import Label from '../components/InputLabel';
import { CustomRadio, HiddenInput } from '../components/RadioWrapper';

class GenderField extends Component {
  constructor( props ) {
    super( props );
    this.state = { // to be refactored <- should be passed as props
      value: props.value
    };
    this.setRadioValue = this.setRadioValue.bind(this);
  }

  setRadioValue(evt) {
    this.setState({
      value: evt.target.value
    });
  }

  render() {
    return (
      <Field>
        <Label>Gender</Label>

        <HiddenInput type="radio" name="gender" id="female" value="female" onChange={this.setRadioValue} />
        <CustomRadio htmlFor="female" ticked={this.state.value === 'female'}>
          <img src="assets/female.png" alt="Female gender sign" />
        </CustomRadio>

        <HiddenInput type="radio" name="gender" id="male" value="male" onChange={this.setRadioValue} />
        <CustomRadio htmlFor="male" ticked={this.state.value === 'male'}>
          <img src="assets/male.png" alt="Male gender sign" />
        </CustomRadio>
      </Field>
    );
  }
}

export default GenderField;