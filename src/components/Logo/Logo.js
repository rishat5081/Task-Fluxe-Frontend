import { Link } from "react-router-dom";

import { Icon } from "components";
import * as S from "./styles";

const Logo = () => {
  return (
    <S.Logo>
      <Link to="/">
        <Icon name="logo" width={125} height={20} />
      </Link>
    </S.Logo>
  );
};

export default Logo;
