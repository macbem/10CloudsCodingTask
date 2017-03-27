import { FullBorderTextField } from './TextField';
import styled from 'styled-components';

export const DayField = styled(FullBorderTextField)`
  width: 50px;
  @media (max-width: 543px) {
    width: 50px;
  }
`;

export const MonthField = styled(FullBorderTextField)`
  width: 130px;
  @media (max-width: 543px) {
    width: 50px;
  }
`;

export const YearField = styled(FullBorderTextField)`
  width: 130px;
  @media (max-width: 543px) {
    width: 100px;
  }
`;

export const Container = styled.section`
  @media (max-width: 543px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    & > span { margin-top: 0; }
    input:nth-of-type(1) {
      flex-shrink: 1;
    }
    input:nth-of-type(2) {
      flex-grow: 1;
    }
    input:nth-of-type(3) {
      flex-shrink: 1;
      width: 50px;
    }
  }
`;
