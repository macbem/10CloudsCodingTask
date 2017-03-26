import styled from 'styled-components';
import Select from 'react-select';
import '../css/react-select.css';

const StyledSelect = styled(Select)`
  width: 114px;
  margin-right: 15px;
  display: inline-block;
  float: left; // minor hack, allows to omit line-height: 0 on inline-block elements' parent
`;

export default StyledSelect;