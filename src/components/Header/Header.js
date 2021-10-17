import { Logo, Icon, MenuDrawer } from "components";
import { useState } from "react";

import * as S from "./styles";

const Header = () => {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

  const showMenuDrawer = () => setIsMenuDrawerOpen(true);
  const hideMenuDrawer = () => setIsMenuDrawerOpen(false);

  return (
    <S.Header>
      <Logo />
      <S.MenuButton onClick={showMenuDrawer}>
        <Icon name="menu" width={24} height={24} />
      </S.MenuButton>
      <MenuDrawer open={isMenuDrawerOpen} onHide={hideMenuDrawer} />
    </S.Header>
  );
};

export default Header;
