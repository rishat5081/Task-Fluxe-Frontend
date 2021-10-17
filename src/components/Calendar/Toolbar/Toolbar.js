import { useState } from "react";

import { Select } from "components";
import * as S from "./styles";

const Toolbar = (props) => {
  const [view, setView] = useState("month");

  const toggleView = () => {
    if (view === "month") {
      setView("work_week");
      props.onView("work_week");
      return;
    }

    setView("month");
    props.onView("month");
  };

  const goToToday = () => {
    const now = new Date();
    props.date.setMonth(now.getMonth());
    props.date.setYear(now.getFullYear());
    props.date.setDate(now.getDate());
    props.onNavigate("current");

    setView("month");
    props.onView("month");
  };

  const selectItems = [
    { label: "All Projects", value: "all", onClick: () => {} },
    { label: "Project AMA", value: "ama", onClick: () => {} },
  ];

  return (
    <S.Toolbar>
      <S.ToolbarFilter>
        <Select variant="primary" items={selectItems} />
      </S.ToolbarFilter>

      <S.ToolbarViewButtons>
        <S.ToolbarButton>June</S.ToolbarButton>
        <S.ToolbarButton active={view === "work_week"} onClick={toggleView}>
          Weekend {view === "month" ? "OFF" : "ON"}
        </S.ToolbarButton>
        <S.ToolbarButton onClick={goToToday}>Today</S.ToolbarButton>
      </S.ToolbarViewButtons>
    </S.Toolbar>
  );
};

export default Toolbar;
