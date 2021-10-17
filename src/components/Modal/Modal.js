import { createPortal } from "react-dom";
import { useContext } from "react";

import { CloseButton, Backdrop } from "components";
import { ModalContext } from "store/modalContext";
import { rootEl } from "constants/components/modal";
import * as S from "./styles";

const Modal = () => {
  const { isShown, onHide, content, title } = useContext(ModalContext);

  if (!isShown) {
    return null;
  }

  const renderer = () => {
    return (
      <S.Modal>
        <Backdrop onClick={onHide} />
        <S.Content>
          <S.Header>
            <S.Title>{title}</S.Title>
            <CloseButton noAbsolute onClick={onHide} />
          </S.Header>
          <S.Body>{content}</S.Body>
        </S.Content>
      </S.Modal>
    );
  };

  return <>{createPortal(renderer(), rootEl)}</>;
};

export default Modal;
