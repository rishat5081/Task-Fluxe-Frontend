import styled from "styled-components";

import { chipStatus, chipPriority } from "constants/components/chip";
import theme from "theme";

export const Chip = styled.div`
  width: 106px;
  height: 32px;

  display: flex;
  align-items: center;

  font-size: ${theme.font.md.size};
  font-weight: 600;

  padding: 8px 18px;
  margin: -5px 0;

  border-radius: 12px;

  color: #ffffff;
  background-color: ${(p) =>
    p.type === "status" ? chipStatus[p.chipStyle].color : chipPriority[p.chipStyle].color};
`;
