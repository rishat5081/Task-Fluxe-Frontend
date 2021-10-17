import styled, { css } from "styled-components";

import theme from "theme";

export const Tab = styled.div``;

export const TabAnchors = styled.div`
  display: flex;

  margin: 0 50px 20px;
`;

export const TabAnchor = styled.span`
  position: relative;

  font-size: ${theme.font.md.size};
  font-weight: 600;

  cursor: pointer;
  color: #b9b9b9;

  & + & {
    margin-left: 50px;
  }

  ${(p) =>
    p.active &&
    css`
      color: ${theme.main.colors.primary};

      &:before {
        content: "";
        display: inline-block;
        width: 25%;
        height: 2px;

        position: absolute;
        bottom: -7px;
        left: 0;

        border-radius: 12px;

        background-color: ${theme.main.colors.primary};
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
        background-color: ${theme.main.colors.primaryFaded};

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

export const TabContent = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #ffffff;

  border-radius: 12px;
  box-shadow: ${theme.main.boxShadow};
`;
