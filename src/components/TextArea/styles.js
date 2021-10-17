import styled from "styled-components";

import theme from "theme";

export const TextArea = styled.textarea`
  font-family: "Inter", sans-serif;
  font-size: ${theme.font.sm.size};

  width: 100%;
  min-height: 124px;

  border-radius: 0 0 12px 12px;
  border: none;
  outline: none;
  background: transparent;
`;
