import styled from 'styled-components';
import { activeColor, formBackground } from '../constants/colors';

const FormComponent = styled.form`
  position: relative;
  width: 470px;
  height: 552px;
  padding: 47px 50px 76px;
  background: linear-gradient(
      -5deg,
      rgba(165, 165, 180, 0.15) 0%,
      rgba(228, 235, 239, 0.15) 67%,
      rgba(231, 232, 238, 0.15) 94%,
      rgba(231, 232, 238, 0.15) 100%
    ),
    ${formBackground};
  &:before {
    content: '';
    position: absolute;
    width: 70px;
    height: 2px;
    left: 50px;
    top: -2px;
    background: ${activeColor};
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
    width: 410px;
  }
  @media (max-width: 543px) {
    width: 100%;
    height: auto;
    padding: 35px 15px 76px;
  }
`;

export default FormComponent;
