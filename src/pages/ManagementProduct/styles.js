import styled from "styled-components";
import theme from "theme";

export const Wrapper = styled.div`
  margin-bottom: 60px;
`;

export const Section = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 30px;

  box-shadow: ${theme.main.boxShadow};
`;

export const WrapperTitle = styled.div`
  padding: 16px 30px;
  margin-bottom: 10px;

  background-color: #f5f5f5;
  border-radius: 12px;

  font-size: 13px;
  font-weight: 800;

  color: #676767;

  text-transform: uppercase;
`;

export const Images = styled.div`
  display: flex;
`;

export const Image = styled.img`
  border-radius: 12px;

  & + & {
    margin-left: 40px;
  }
`;

export const Quality = styled.div`
  display: flex;
  align-items: flex-start;

  margin-bottom: 25px;
`;

export const QualityTitle = styled.span`
  white-space: nowrap;

  font-size: 15px;
  font-weight: 800;

  color: #4f4f4f;

  margin-right: 3px;
`;

export const QualityDescWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const QualityDesc = styled.span`
  font-size: 15px;
  font-weight: 500;

  color: #4f4f4f;
`;

export const QualityWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 25px;

  & > * {
    margin-bottom: 0;
  }

  & > *:not(:last-child) {
    margin-right: 50px;
  }
`;
