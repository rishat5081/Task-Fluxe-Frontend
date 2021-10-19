import styled from "styled-components";

import theme from "theme";

export const TextArea = styled.textarea`
  font-family: "Inter", sans-serif;
  font-size: ${theme.font.sm.size};

  width: 100%;
  min-height: 124px;

  border-radius: 0 0 12px 12px;
  border: 1px solid ${theme.main.colors.primary};
  padding: 10px;
  outline: none;
  text-align: justify;
  background: transparent;
`;
