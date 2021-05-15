import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Paragrafo = styled.p``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 7px;
    border-radius: 4px;
    box-shadow: 3px 1px 1px #cecece;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
