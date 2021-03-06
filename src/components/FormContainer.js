import styled from 'styled-components';

const FormContainer = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 85px;
  //margin-bottom: 35px;
  margin-bottom: 46px;
  @media (max-width: 543px) {
    width: 100%;
    height: auto;
    padding: 80px 15px 40px;
    margin: 0;
  }
`;

export default FormContainer;
