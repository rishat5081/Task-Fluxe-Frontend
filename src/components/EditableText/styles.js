import styled from "styled-components";

import theme from "theme";

export const EditableText = styled.span`
  width: 100%;

  font-family: "Inter", sans-serif;
  font-size: ${theme.font.md.size};

  border: none;
  outline: none;
  padding: 0;
  margin: 0;

  &[contenteditable] {
    display: inline-block;
  }

  &[contenteditable]:empty::before {
    content: attr(placeholder);
    display: inline-block;
    opacity: 0.6;
  }
`;
