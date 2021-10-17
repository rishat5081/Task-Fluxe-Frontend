import styled, { css } from "styled-components";

import theme from "theme";

export const Event = styled.div`
  font-size: 13px;
  color: ${theme.main.colors.primary};
  background-color: ${theme.main.colors.primaryFaded};

  border-radius: 12px;
  padding: 4px 12px;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${(p) =>
    p.type === "red" &&
    css`
      color: #fffff;
      background-color: #e52c2c;
    `}

  ${(p) =>
    p.type === "green" &&
    css`
      color: #292929;
      background-color: #2ce5a2;
    `}

  ${(p) =>
    p.type === "orange" &&
    css`
      color: #292929;
      background-color: #ffc670;
    `}

  ${(p) =>
    p.type === "blue" &&
    css`
      color: #ffffff;
      background-color: ${theme.main.colors.primary};
    `}
`;
