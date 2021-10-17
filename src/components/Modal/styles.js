import styled from "styled-components";

import theme from "theme";

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 435px;
  border-radius: 12px;
  background: white;

  box-shadow: 0 15px 12px 0 rgb(0 0 0 / 2%);

  z-index: 2010;

  animation: slideUpIn 0.35s;

  @keyframes slideUpIn {
    from {
      transform: translateY(35px);
      opacity: 0.65;
    }
    to {
      tranform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 25px 45px;

  border-bottom: 1px solid #f3f3f3;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;

  color: ${theme.main.colors.primary};
`;

export const Body = styled.div`
  padding: 30px 45px;
`;
