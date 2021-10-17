import { CloseButton, Navigation } from "components";

import * as S from "./styles";

const MenuDrawer = ({ onHide, open }) => {
  return (
    <S.MenuDrawer open={open}>
      <S.Content>
        <CloseButton onClick={onHide} right="10px" top="15px" />
        <Navigation />
      </S.Content>
    </S.MenuDrawer>
  );
};

export default MenuDrawer;
