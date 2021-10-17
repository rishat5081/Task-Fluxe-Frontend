import styled from "styled-components";

import theme from "theme";

export const Label = styled.label`
  display: block;
  font-size: 15px;
  font-weight: 600;

  color: #616161;

  margin-bottom: 10px;
`;

export const ErrorMessage = styled.p`
  font-size: 13px;
  font-weight: 500;

  color: ${theme.main.colors.red};
  margin: 3px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

export const Input = styled.input`
  font-family: "Inter", sans-serif;

  width: 100%;
  height: 38px;

  text-indent: 15px;

  color: ${theme.main.colors.text};
  background-color: #f5f5f5;
  border-radius: 12px;

  ${(p) => p.error && `border: 1px solid ${theme.main.colors.red};`}

  ::placeholder {
    color: gray;
  }

  &[type="date"] {
    text-indent: 6px;

    ::-webkit-inner-spin-button,
    ::-webkit-calendar-picker-indicator {
      display: none;
    }
  }

  &[type="file"] {
    display: block;
    position: relative;

    &::before {
      display: block;
      content: "Click to upload a file";

      padding: 10px 0;

      width: 100%;
      height: 38px;
    }
  }
`;

export const InputTransparent = styled(Input)`
  background-color: transparent;
  height: auto;

  flex: 1 1 0;
`;
