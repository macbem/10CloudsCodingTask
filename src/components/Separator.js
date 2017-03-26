import styled from 'styled-components';
import { borderLight } from '../constants/colors';

export const Separator = styled.span`
  display: inline-block;
  height: 2px;
  width: 10px;
  vertical-align: middle;
  margin: -3px 10px 0;
  background: ${borderLight};
`;