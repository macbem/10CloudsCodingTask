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
      value: props.value || '+48'
    };
  }

  handleChange = ({value}) => {
    this.setState({value});
  };

  render() {
    return (
      <Field>
        <Label>Mobile</Label>
        <PrefixSelect name="mobile-prefix"
                      value={this.state.value}
                      options={options}
                      searchable={false}
                      clearable={false}
                      onChange={this.handleChange}/>
        <PhoneNumberField type="tel" placeholder="720360420" />
      </Field>
    );
  }
}

export default MobileField;
