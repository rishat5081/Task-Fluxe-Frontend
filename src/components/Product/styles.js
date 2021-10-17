import styled from "styled-components";

import theme from "theme";

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductTitlePanel = styled.div``;

export const ProductTitle = styled.p`
  font-size: ${theme.font.md.size};
  font-weight: 500;

  color: #4f4f4f;

  & + & {
    margin-top: 40px;
  }
`;

export const ProductDescPanel = styled.div``;

export const ProductDesc = styled(ProductTitle)`
  white-space: nowrap;
`;
