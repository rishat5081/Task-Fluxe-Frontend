import styled from "styled-components";

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(170, 170, 170, 0.65);

  z-index: 2000;

  @supports (backdrop-filter: blur()) {
    background-color: rgba(170, 170, 170, 0.15);
    backdrop-filter: blur(5px);

    animation: fadeIn 0.35s linear;
  }

  @keyframes fadeIn {
    from {
      background-color: rgba(170, 170, 170, 0);
      backdrop-filter: blur(0px);
    }
    to {
      background-color: rgba(170, 170, 170, 0.15);
      backdrop-filter: blur(5px);
    }
  }
`;
