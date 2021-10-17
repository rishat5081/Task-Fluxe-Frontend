import styled from "styled-components";

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;

  height: 100%;
  width: 740px;

  z-index: 2010;

  padding: 115px 34px 40px;

  overflow: auto;

  animation: slideIn 0.4s;

  @keyframes slideIn {
    from {
      opacity: 0.3;
      right: -75px;
    }
    to {
      opacity: 1;
      right: 0;
    }
  }
`;
