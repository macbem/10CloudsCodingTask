import React, { Component } from 'react';
import Field from '../components/FormField';
import Label from '../components/InputLabel';
import { DayField, MonthField, YearField, Container } from '../components/DateField';
import { Separator } from '../components/Separator';

class BirthdateField extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      value: props.value
    };
  }

  render() {
    return (
      <Field>
        <Label>Date of Birth</Label>
        <Container>
          <DayField placeholder="15" name="birthdate-day" />
          <Separator />
          <MonthField placeholder="December" name="birthdate-month" />
          <Separator />
          <YearField placeholder="1997" name="birthdate-day" />
        </Container>
      </Field>
    );
  }
}

export default BirthdateField;
