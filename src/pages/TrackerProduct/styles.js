import styled from "styled-components";
import theme from "theme";
export const Section = styled.section`
  background: #ffffff;
  box-shadow: 0px 24px 24px rgba(0, 0, 0, 0.03);
  border-radius: 12px;

  padding: 35px 30px;
  margin-bottom: 50px;
`;

export const TrackerProductDetail = styled.div`
  display: flex;
`;

export const Input = styled.input`
  font-family: "Inter", sans-serif;
  font-size: ${theme.font.sm.size};

  width: 50%;
  border-radius: 10px;
  border: 1px solid ${theme.main.colors.primary};
  padding: 10px;
  outline: none;
  text-align: justify;
  background: transparent;
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
  width: 100%;
  & > *:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Desc = styled.p`
  font-size: 15px;
  font-weight: 500;

  color: #4f4f4f;
`;

export const TaskButtons = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 20px;
  }

  margin-bottom: 20px;
`;
export const FadedButton = styled.button`
  display: flex;
  align-items: center;

  font-size: ${theme.font.sm.size};
  font-weight: 700;

  color: #555555;
  background-color: #fafafa;

  padding: 10px 10px;
  border-radius: 16px;
`;

export const CheckBox = styled.input`
  transform: scale(1.2);
  cursor: pointer;
  filter: hue-rotate(280deg);
`;
