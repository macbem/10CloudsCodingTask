import styled from 'styled-components';
import {
  focusColor,
  hintColor,
  borderLight
} from '../constants/colors';

export const HiddenInput = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  min-height: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  border: 0 none;
  
  &:focus + label,
  &:focus + label::after { 
    border-color: ${focusColor};
  }
  &:focus:checked + label::before {
    background: ${focusColor};
  }
`;

export const CustomRadio = styled.label`
  width: 50px;
  height: 50px;
  display: inline-block;
  padding-top: 11px;
  text-align: center;
  position: relative;
  cursor: pointer;
  margin-top: 3px;
  background: transparent;
  &, &::after {
    border-width: 2px;
    border-style: solid;
    border-color: ${({ ticked }) => {
  return ticked ? hintColor : borderLight;
}};
  }
  &, &::before, &::after {
    transition: .2s border-color, .2s background;
  }
  &::before {
    width: 3px;
    height: 3px;
    z-index: 1;
    transform: translate(50%, -50%);
    background: ${hintColor};
    display: ${({ ticked }) => {
  return ticked ? 'block' : 'none';
}};
  }
  &::after {
    width: 15px;
    background: #f2f2f5;
    height: 15px;
    transform: translate(50%, -50%);
  }
  &::before, &::after {
    content: '';
    position: absolute;
    user-select: none;
    right: -1px;
    top: 50%;
  }
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
