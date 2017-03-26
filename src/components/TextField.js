import styled from 'styled-components';
import * as colors from '../constants/colors';

const TextField = styled.input`
  width: 370px;
  max-width: 100%;
  appearance: none;
  padding: 0 16px 14px;
  border: none;
  border-bottom: 2px ${colors.borderLight} solid;
  color: ${colors.textDark};
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  background: transparent;
  transition: .2s all;
  outline: none;
  &:focus { border-bottom-color: ${colors.focusColor}; }
`;

export default TextField;