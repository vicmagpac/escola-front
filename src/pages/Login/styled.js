import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid ${colors.primaryColor};
    padding: 0 5px;
    box-shadow: 1px 1px 1px ${colors.primaryColor};
    margin-top: 10px;
  }
`;
