import styled from 'styled-components';
import { hintColor } from '../constants/colors';

export default styled.button`
  height: 50px;
  width: 187px;
  appearance: none;
  position: absolute;
  bottom: -25px;
  right: 0;
  border: none;
  text-align: center;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 20px 25px rgba(32, 31, 54, 0.15);
  background-image: linear-gradient(to right, #8658eb 0%, #652ae6 100%);
  transition: .3s border-bottom ease;
  outline: none;
  border-bottom: 2px solid transparent;
  overflow: visible; /* IE 11 hack */
  &:focus, &:focus::before,
  &:hover, &:hover::before {
    border-bottom-color: ${hintColor}; 
  }
  &::before {
    transition: .3s border-bottom ease;
    border-bottom: 2px solid transparent;
    content: url(assets/arrow.svg);
    width: 50px;
    height: 50px;
    line-height: 52px;
    font-size: 10px;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    transform: translateX(100%);
    box-shadow: 0 23px 24px rgba(13, 13, 31, 0.08);
    background-color: #7841f4;
  }
  @media (max-width: 991px) {
    left: calc(50% - 25px);
    transform: translateX(-50%);
  }
`;
