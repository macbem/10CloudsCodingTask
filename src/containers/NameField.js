import React, { Component, PropTypes } from 'react';
import Field from '../components/FormField';
import Label from '../components/InputLabel';
import TextInput from '../components/TextField';

class NameField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleUpdate = evt => {
    this.setState(
      { value: evt.target.value },
      this.props.updateFieldState(
        this.props.fieldData.name,
        this.state.value
      )
    );
  };

  handleBlur = () => {};

  render() {
    return (
      <Field>
        <Label htmlFor="name">
          Your name
          {this.props.fieldData.error && this.props.shouldShowErrors
            ? <span className="error">
                {this.props.fieldData.error}
              </span>
            : ''}
        </Label>
        <TextInput
          name="name"
          id="name"
          placeholder="Gabe Newell"
          value={this.state.value}
          onChange={this.handleUpdate}
          onBlur={this.handleBlur}
        />
      </Field>
    );
  }
}

NameField.propTypes = {
  updateFieldState: PropTypes.func.isRequired,
  shouldShowErrors: PropTypes.bool.isRequired,
  fieldData: PropTypes.shape({
    error: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default NameField;
