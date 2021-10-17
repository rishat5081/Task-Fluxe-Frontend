import { Icon } from "components";

import * as S from "./styles";

const CloseButton = ({ onClick, noAbsolute, ...positions }) => {
  return (
    <S.CloseButton onClick={onClick} noAbsolute={noAbsolute} {...positions}>
      <Icon name="close" width="24" height="24" />
    </S.CloseButton>
  );
};

export default CloseButton;
