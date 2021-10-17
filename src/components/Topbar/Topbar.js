import { Icon, Userbar } from "components";
import * as S from "./styles";

const Topbar = ({ title, topbarAction }) => {
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
      <Userbar />
    </S.Topbar>
  );
};

export default Topbar;
