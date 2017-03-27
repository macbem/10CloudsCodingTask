import React, { Component } from 'react';
import Field from '../components/FormField';
import Label from '../components/InputLabel';
import PhoneNumberField from '../components/PhoneNumberField';
import PrefixSelect from '../components/PrefixSelect';

const options = [
  { value: '+48', label: '+48 (PL)' },
  { value: '+47', label: '+47 (NO)' },
  { value: '+44', label: '+44 (UK)' }
];

class MobileField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prefix: '+48',
      number: ''
    };
  }

  propagateFieldValue = value => {
    this.setState({ prefix: value });
    const combinedNumber = this.state.prefix + this.state.number;
    this.props.updateFieldState(
      this.props.fieldData.name,
      combinedNumber
    );
  };

  handleInput = evt => {
    this.propagateFieldValue(evt.target.value);
  };

  render() {
    return (
      <Field>
        <Label htmlFor="phone">
          Mobile
          {this.props.fieldData.error && this.props.shouldShowErrors
            ? <span className="error">
                {this.props.fieldData.error}
              </span>
            : ''}
        </Label>
        <PrefixSelect
          name="mobile-prefix"
          options={options}
          searchable={false}
          clearable={false}
          value={this.state.prefix}
          onChange={this.propagateFieldValue}
        />
        <PhoneNumberField
          type="tel"
          placeholder="720360420"
          id="phone"
          name="phone"
          value={this.state.number}
          onChange={this.handleInput}
        />
      </Field>
    );
  }
}

export default MobileField;
