import styled from "styled-components";

export const ComparisonSupplier = styled.div`
  background-color: #ffffff;
  border-radius: 12px;

  padding: 35px 30px;
  margin-bottom: 50px;
`;

export const ComparisonDetail = styled.div`
  display: flex;

  & + & {
    margin-top: 40px;
  }
`;

export const Title = styled.span`
  font-size: 13px;
  font-weight: 800;

  color: #676767;
  text-transform: uppercase;

  margin-right: 30px;
  min-width: 120px;
`;

export const DescWrapper = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Desc = styled.p`
  font-size: 15px;
  font-weight: 500;

  color: #4f4f4f;
`;
