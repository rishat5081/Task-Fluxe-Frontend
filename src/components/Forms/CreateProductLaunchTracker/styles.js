import styled from "styled-components";
import theme from "theme";

/**
 *
 *
 *
 *
 *
 */

export const RadioButtonDIV = styled.div`
  margin: 0px 0px 40px 0px;
`;

export const Label = styled.label`
  display: block;
  font-size: 15px;
  font-weight: 600;

  color: #616161;

  margin-bottom: 10px;
`;
export const RadioButton = styled.input`
  font-size: 12px;
  font-weight: 600;

  margin: 0px 0px 20px 20px;
  padding: 10px;
  margin-bottom: 12px;
`;
export const Input = styled.input`
  font-family: "Inter", sans-serif;

  width: 100%;
  height: 38px;

  text-indent: 15px;
  font-weight: 700;

  color: ${theme.main.colors.primary};
  background-color: #f5f5f5;
  border-radius: 12px;
  margin-bottom: 12px;
`;
