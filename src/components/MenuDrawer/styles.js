import styled from "styled-components";

import { breakpoints } from "theme";

export const MenuDrawer = styled.div`
  position: absolute;
  top: 0;
  left: ${(p) => (p.open ? "0px" : "-999px")};

  background-color: #fafafa;

  width: 100%;
  height: 100%;

  padding: 15px;

  transition: 0.3s all;

  z-index: 1020;

  @media ${breakpoints.md} {
    display: none;
  }
`;

export const Content = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;
