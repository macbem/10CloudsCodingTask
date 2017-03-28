import React from 'react';
import styled from 'styled-components';
import { textDark } from '../constants/colors';
const FormHeaderElement = styled.header`
  position: relative;
  margin: 0 0 48px;
  padding: 0 63px 0 15px;
  @media (max-width: 543px) {
    margin-bottom: 22px;
    padding-right: 15px;
  }
`;

const FormDescription = styled.p`
  line-height: 24px;
  color: ${textDark};
  margin: 0;
  font-weight: 600;
`;

const FormHeading = styled.h1`
  line-height: 1;
  font-weight: 300;
  position: absolute;
  margin: 0;
  color: #fff;
  top: -143px;
  font-size: 48px;
  left: 15px;
  @media (max-width: 991px) {
    top: -120px;
  }
  @media (max-width: 767px) {
    text-align: center;
    left: 0;
    width: 100%;
  }
  @media (max-width: 543px) {
    font-size: 36px;
    top: -96px;
  }
`;

const FormHeader = props => {
  return (
    <FormHeaderElement>
      <FormHeading>Your account</FormHeading>
      <FormDescription>
        Take it all with you. Switch between devices, and pick up.
      </FormDescription>
    </FormHeaderElement>
  );
};

export default FormHeader;
