import styled from "styled-components";

import { breakpoints } from "theme";

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #f5f5f5;
  padding: 15px 20px;
  border-radius: 12px;

  width: 100%;
  color: #3d3d3d;

  @media ${breakpoints.md} {
    max-width: 270px;
  }
`;

export const SearchInput = styled.input`
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
`;
