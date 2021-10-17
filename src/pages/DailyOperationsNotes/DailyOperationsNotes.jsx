import { useContext } from "react";

import { DashboardLayout } from "layouts";
import { Calendar, Forms } from "components";
import { DrawerContext } from "store/drawerContext";
import * as S from "./styles";

const DailyOperationsNotes = () => {
  const { onShow } = useContext(DrawerContext);

  const topbarAction = {
    name: "New Note",
    onClick: () =>
      onShow({
        content: <Forms.CreateNewNote />,
      }),
  };

  return (
    <DashboardLayout title="Daily Operations Notes" topbarAction={topbarAction}>
      <Calendar />
    </DashboardLayout>
  );
};

export default DailyOperationsNotes;
