import styled from "styled-components";

import { breakpoints } from "theme";

export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.md} {
    flex-direction: row;
  }
`;

export const Main = styled.main`
  flex: 1 1 0;

  margin-top: 20px;
  padding: 15px;

  max-height: 100vh;
  overflow-y: auto;

  @media ${breakpoints.md} {
    max-width: calc(100% - 235px);
    margin: 0;
    padding: 45px 40px;
  }
`;
