import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

import theme from "theme";

export const NavigationLink = styled(NavLink)`
  position: relative;

  width: fit-content;

  display: flex;
  align-items: center;

  & + & {
    margin-top: 30px;
  }

  color: #6c6c6c;

  &:active,
  &.active {
    color: ${theme.main.colors.primary};
    font-weight: 600;

    &::before {
      position: absolute;
      left: -18px;

      content: "";
      display: block;

      width: 200px;
      height: 45px;

      border-radius: 25px;
      background-color: ${theme.main.colors.primaryFaded};

      z-index: -1;
    }
  }

  ${(p) =>
    p.disabled &&
    css`
      pointer-events: none;
      color: #bababa;
    `}

  z-index: 1010;
`;

export const NavigationContent = styled.span`
  font-size: ${theme.font.md.size};
  margin-left: 10px;
`;

export const Separator = styled.div`
  width: 150px;
  height: 1px;

  margin: 32px 0;
  background-color: #f0f0f0;
`;
