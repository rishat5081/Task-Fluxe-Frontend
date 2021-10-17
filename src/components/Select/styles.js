import styled, { css } from "styled-components";

import { Icon } from "components";
import theme from "theme";

export const SelectWrapper = styled.div`
  ${(p) => p.variant === "default" && "margin-bottom: 12px;"}
`;

export const Label = styled.label`
  display: block;
  font-size: 15px;
  font-weight: 600;

  color: #616161;

  margin-bottom: 10px;
`;

export const Select = styled.div`
  position: relative;

  color: ${theme.main.colors.text};
  background-color: #f5f5f5;

  // Override
  ${(p) =>
    p.variant === "primary" &&
    css`
      color: ${theme.main.colors.primary};
      background-color: ${theme.main.colors.primaryFaded};
    `}

  border-radius: 12px;
  padding: 10px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  min-width: 150px;

  font-size: ${theme.font.md.size};
`;

export const SelectAnchor = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;
`;

export const SelectMenu = styled.div`
  min-width: 150px;
  width: 100%;

  position: absolute;
  top: calc(100% + 4px);
  right: ${(p) => (p.alignment === "right" ? "0" : "auto")};
  left: ${(p) => (p.alignment === "left" ? "0" : "auto")};

  background-color: #ffffff;

  border-radius: 12px;
  padding: 12px;
  box-shadow: 0px 0px 24px rgba(168, 177, 184, 0.2);

  z-index: 1040;

  animation: slideInUp 0.3s;

  @keyframes slideInUp {
    from {
      transform: translateY(-8px);
      opacity: 0.3;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const SelectItem = styled.div`
  color: ${theme.main.colors.text};
  font-size: 13px;
  font-weight: 500;

  padding: 6px 12px;
  cursor: pointer;

  & + & {
    margin-top: 12px;
  }

  &:hover {
    border-radius: 5px;
    background-color: ${theme.main.colors.primaryFaded};
    color: ${theme.main.colors.primary};
  }
`;

export const SelectArrow = styled(Icon)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 4px;

  ${(p) => p.toggle === "true" && "transform: rotate(180deg);"}

  transition: transform .2s linear;
`;

export const ErrorMessage = styled.p`
  font-size: 13px;
  font-weight: 500;

  color: ${theme.main.colors.red};
  margin: 3px;
`;
