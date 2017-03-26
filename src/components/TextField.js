import styled from 'styled-components';
import { borderLight, focusColor, textDark } from '../constants/colors';

const TextField = styled.input`
  width: 370px;
  max-width: 100%;
  appearance: none;
  padding: 0 16px 14px;
  border: none;
  border-bottom: 2px ${borderLight} solid;
  color: ${textDark};
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  background: transparent;
  transition: .2s all;
  outline: none;
  &:focus { border-bottom-color: ${focusColor}; }
  @media (max-width: 543px) {
    width: 100%;
  }
`;

export const FullBorderTextField = styled(TextField)`
  padding-top: 14px;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 3px;
  text-align: center;
  border: 2px ${borderLight} solid;
  &:focus {
    border-color: ${focusColor};
  }
`;

export default TextField;