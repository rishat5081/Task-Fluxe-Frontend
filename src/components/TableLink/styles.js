import styled from "styled-components";

import theme from "theme";

export const TableLink = styled.a`
  font-weight: 500;
  color: ${theme.main.colors.primary};

  &:hover {
    text-decoration: underline;
  }
`;
