import React, { Component, PropTypes } from 'react';
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

  propagateValueChanges = () => {
    const combinedNumber = this.state.prefix + this.state.number;
    this.props.updateFieldState(
      this.props.fieldData.name,
      combinedNumber
    );
  };

  handlePrefixChange = value => {
    this.setState({ prefix: value }, this.propagateValueChanges);
  };

  handleNumberChange = evt => {
    this.setState(
      { number: evt.target.value },
      this.propagateValueChanges
    );
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
          onChange={this.handlePrefixChange}
        />
        <PhoneNumberField
          type="tel"
          placeholder="720360420"
          id="phone"
          name="phone"
          value={this.state.number}
          onChange={this.handleNumberChange}
        />
      </Field>
    );
  }
}

MobileField.propTypes = {
  updateFieldState: PropTypes.func.isRequired,
  shouldShowErrors: PropTypes.bool.isRequired,
  fieldData: PropTypes.shape({
    error: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default MobileField;
