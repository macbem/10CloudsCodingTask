import styled from 'styled-components';
import { textMuted } from '../constants/colors';

const InputLabel = styled.label`
  color: ${textMuted};
  font-size: 11px;
  margin-left: 16px;
  margin-bottom: 9px;
  font-weight: 400;
  line-height: 1;
  display: block;
  cursor: pointer;
  > .error {
    color: #D93B7C;
    float: right;
    line-height: 12px;
    margin-left: 2px;
    font-size: 10px;
  }
`;

export default InputLabel;
