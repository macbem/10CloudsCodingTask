import styled from 'styled-components';
import TextField from './TextField';

const PhoneNumberField = styled(TextField)`
  width: 241px;
  display: inline-block;
  vertical-align: top;
  @media (max-width: 543px) {
    width: calc(100% - 130px);
  }
`;

export default PhoneNumberField;
