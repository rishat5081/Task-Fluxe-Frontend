import styled from "styled-components";

import theme, { breakpoints } from "theme";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 25px;

  box-shadow: ${theme.main.boxShadow};

  @media ${breakpoints.md} {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;

  background-color: transparent;
`;
