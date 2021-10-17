import styled from "styled-components";

export const Hr = styled.div`
  width: 100%;
  height: ${(p) => p.height}px;

  background-color: ${(p) => p.color};

  margin: ${(p) => p.margin}px 0;
`;
