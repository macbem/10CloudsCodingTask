import React, { Component } from 'react';
import Field from '../components/FormField';
import Label from '../components/InputLabel';
import { CustomRadio, HiddenInput } from '../components/RadioWrapper';

class GenderField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  setRadioValue = evt => {
    this.setState(
      {
        value: evt.target.value
      },
      this.props.updateFieldState(
        this.props.fieldData.name,
        this.state.value
      )
    );
  };

  render() {
    return (
      <Field>
        <Label>
          Gender
          {this.props.fieldData.error && this.props.shouldShowErrors
            ? <span className="error">
                {this.props.fieldData.error}
              </span>
            : ''}
        </Label>

        <HiddenInput
          type="radio"
          name="gender"
          id="female"
          value="female"
          checked={this.state.value === 'female'}
          onChange={this.setRadioValue}
        />
        <CustomRadio
          htmlFor="female"
          ticked={this.state.value === 'female'}
        >
          <img src="assets/female.png" alt="Female gender sign" />
        </CustomRadio>

        <HiddenInput
          type="radio"
          name="gender"
          id="male"
          value="male"
          checked={this.state.value === 'male'}
          onChange={this.setRadioValue}
        />
        <CustomRadio
          htmlFor="male"
          ticked={this.state.value === 'male'}
        >
          <img src="assets/male.png" alt="Male gender sign" />
        </CustomRadio>
      </Field>
    );
  }
}

export default GenderField;
