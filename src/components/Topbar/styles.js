import styled from "styled-components";

import theme, { breakpoints } from "theme";

export const Topbar = styled.div`
  display: none;

  @media ${breakpoints.md} {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    width: 100%;
    height: 100px;

    margin-top: -45px;
    margin-bottom: 45px;
  }
`;

export const TitleWrapper = styled.div`
  ${(p) => !p.topbarAction && `margin-bottom: 27px;`}
`;

export const Title = styled.h3`
  font-size: ${theme.font.lg.size};
  font-weight: 600;

  color: #555555;

  ${(p) => p.topbarAction && `margin-bottom: 10px;`}
`;

export const Action = styled.span`
  display: flex;
  align-items: center;

  font-size: ${theme.font.md.size};
  font-weight: 500;

  width: fit-content;

  cursor: pointer;
  color: ${theme.main.colors.primary};

  & > svg {
    margin-right: 5px;
  }
`;
