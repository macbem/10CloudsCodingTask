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
`;

export default InputLabel;