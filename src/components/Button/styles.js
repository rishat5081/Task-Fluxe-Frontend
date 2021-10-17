import styled from "styled-components";

import { Icon } from "components";
import theme from "theme";

export const Button = styled.button`
  font-family: "Inter", sans-serif;

  background-color: transparent;
  padding: 0;
  margin: 0;
`;

export const CloseButton = styled(Button)`
  position: absolute;

  top: ${(p) => p.top};
  right: ${(p) => p.right};
  left: ${(p) => p.left};
  bottom: ${(p) => p.bottom};

  padding: 5px;

  ${(p) => p.noAbsolute && `position: inherit;`}
  ${(p) => p.noAbsolute && `padding: 0;`}
`;

export const SubmitButton = styled(Button)`
  font-size: ${theme.font.sm.size};
  font-weight: 700;
  color: #fff;
  text-align: center;
  padding: 8px 15px;
  border-radius: 12px;

  background-color: ${theme.main.colors.primary};
`;

export const LinkButton = styled(Button)`
  display: flex;
  align-items: center;

  font-size: ${theme.font.sm.size};
  color: ${theme.main.colors.primary};
`;

export const ButtonIcon = styled(Icon)`
  margin-right: 8px;
`;

export const FadedButton = styled(Button)`
  display: flex;
  align-items: center;

  font-size: ${theme.font.sm.size};
  font-weight: 700;

  color: #555555;
  background-color: #fafafa;

  padding: 10px 20px;
  border-radius: 16px;
`;
