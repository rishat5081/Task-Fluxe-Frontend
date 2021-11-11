import { Icon } from "components";

import * as S from "./styles";

const Userbar = (props) => {
  const signOut = () => props.signOutHandler();
  return (
    <S.Userbar>
      <S.UserField>
        <Icon name="search" width={26} height={26} />
      </S.UserField>
      <S.UserProfile>
        <S.UserDetail>
          <S.Username>John Doe</S.Username>
          <S.Role>Stock Manager</S.Role>
        </S.UserDetail>
        <S.UserPic src="/assets/images/user-pic.png" alt="User Picture" />
      </S.UserProfile>
      <S.SignOut>
        <a onClick={signOut} style={{ marginLeft: "15px", color: "red" }}>
          <Icon name="launch" width={26} height={26} />
        </a>
      </S.SignOut>
    </S.Userbar>
  );
};

export default Userbar;
