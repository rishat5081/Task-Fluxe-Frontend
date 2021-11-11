import { Header, Sidebar, Topbar } from "components";

import * as S from "./styles";

const Dashboard = ({ children, title, topbarAction, signOutHandler }) => {
  return (
    <S.Dashboard>
      <Sidebar />
      <Header />
      <S.Main>
        <Topbar
          title={title}
          topbarAction={topbarAction}
          signOutHandler={signOutHandler}
        />
        {children}
      </S.Main>
    </S.Dashboard>
  );
};

export default Dashboard;
