import { createPortal } from "react-dom";
import { useContext } from "react";

import { DrawerContext } from "store/drawerContext";
import { rootEl } from "constants/components/drawer";
import { CloseButton, Backdrop } from "components";
import * as S from "./styles";

const Drawer = () => {
  const { isShown, onHide, content } = useContext(DrawerContext);

  if (!isShown) {
    return null;
  }

  const renderer = () => {
    return (
      <>
        <Backdrop onClick={onHide} />
        <S.Drawer>
          <CloseButton onClick={onHide} left="25px" top="55px" />
          {content}
        </S.Drawer>
      </>
    );
  };

  return <>{createPortal(renderer(), rootEl)}</>;
};

export default Drawer;
