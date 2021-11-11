import { Icon, Userbar } from "components";
import * as S from "./styles";

const Topbar = ({ title, topbarAction, signOutHandler }) => {
  return (
    <S.Topbar>
      <S.TitleWrapper topbarAction={topbarAction}>
        <S.Title topbarAction={topbarAction}>{title}</S.Title>
        {topbarAction && (
          <S.Action onClick={topbarAction.onClick}>
            <Icon name="add-filled" />
            {topbarAction.name}
          </S.Action>
        )}
      </S.TitleWrapper>
      <Userbar signOutHandler={signOutHandler} />
    </S.Topbar>
  );
};

export default Topbar;
