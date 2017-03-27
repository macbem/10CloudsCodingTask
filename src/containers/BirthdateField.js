import React, { Component } from 'react';
import Field from '../components/FormField';
import Label from '../components/InputLabel';
import {
  DayField,
  MonthField,
  YearField,
  Container
} from '../components/DateField';
import { Separator } from '../components/Separator';

class BirthdateField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: '',
      month: '',
      year: ''
    };
  }

  handleDateChange = evt => {
    const update = {};
    update[evt.target.name] = evt.target.value;
    this.setState(
      update,
      this.props.updateFieldState(this.props.fieldData.name, {
        ...this.state,
        ...update
      })
    );
  };

  render() {
    return (
      <Field>
        <Label htmlFor="birthday">
          Date of Birth
          {this.props.fieldData.error && this.props.shouldShowErrors
            ? <span className="error">
                {this.props.fieldData.error}
              </span>
            : ''}
        </Label>
        <Container>
          <DayField
            placeholder="15"
            value={this.state.day}
            name="day"
            id="birthday"
            onChange={this.handleDateChange}
          />
          <Separator />
          <MonthField
            placeholder="December"
            value={this.state.month}
            name="month"
            onChange={this.handleDateChange}
          />
          <Separator />
          <YearField
            placeholder="1997"
            value={this.state.year}
            name="year"
            onChange={this.handleDateChange}
          />
        </Container>
      </Field>
    );
  }
}

export default BirthdateField;
