import styled, { css } from "styled-components";

import { Button } from "components";
import theme from "theme";

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 16px;
`;

export const ToolbarButton = styled.span`
  position: relative;

  font-size: ${theme.font.md.size};
  height: 16px;

  cursor: pointer;
  color: #b9b9b9;

  & + & {
    margin-left: 50px;
  }

  ${(p) =>
    p.active &&
    css`
      color: #01bf80;
      font-weight: 600;

      &:before {
        content: "";
        display: inline-block;
        width: 25%;
        height: 2px;

        position: absolute;
        bottom: -7px;
        left: 0;

        border-radius: 12px;

        background-color: #01bf80;
      }

      &:after {
        content: "";
        display: inline-block;
        width: calc(100% + 48px);
        height: 50px;

        position: absolute;
        top: -15px;
        left: -24px;

        border-radius: 12px 12px 0 0;
        background-color: #e9f7e9;

        animation: slideInDown 0.3s;

        z-index: -1;
      }

      @keyframes slideInDown {
        from {
          top: 100%;
          opacity: 0.4;
        }
        to {
          top: -15px;
          opacity: 1;
        }
      }
    `}
`;

export const ToolbarViewButtons = styled.div`
  display: flex;
  align-items: flex-end;

  margin-right: 64px;
`;

export const ToolbarFilter = styled.div``;
