import styled from 'styled-components';
import { activeColor } from '../constants/colors';

export const TabNavigation = styled.nav`
  width: 60px;
  height: 270px;
  position: absolute;
  right: -60px;
  top: 107px;
  @media (max-width: 991px) { 
    display: none;
  }
`;

export const TabLink = styled.a`
  &, &:focus { text-decoration: none; }
  display: block;
  height: 90px;
  padding-top: 15px;
  padding-left: 11px;
  line-height: 1;
  font-size: 11px;
  font-weight: 600;
  position: relative;
  cursor: pointer;
  &::before {
    content: '';
    top: 0;
    left: 0;
    width: 25px;
    height: 2px;
    position: absolute;
    background: ${({active}) => active ? activeColor : 'rgba(255, 255, 255, 0.25)'};
  }
  color: ${({active}) => active ? 'white' : 'grey'};
  & span {
    display: ${({active}) => active ? 'block' : 'none'};
  }
`;

export const TabName = styled.span`
  display: block;
  line-height: 1;
  margin-top: 9px;
  color: white;
  font-size: 11px;
`;