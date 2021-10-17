import { Calendar as RBC, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import { Toolbar, Event } from "components";
import { useContext } from "react";
import { CalendarEventContext } from "store/calendarEventContext";

import "react-big-calendar/lib/css/react-big-calendar.css";
import * as S from "./styles";

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const { events } = useContext(CalendarEventContext);

  return (
    <S.Calendar>
      <RBC
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        views={["day", "work_week", "month"]}
        events={events}
        startAccessor="start"
        endAccessor="end"
        components={{ toolbar: Toolbar, event: Event }}
      />
    </S.Calendar>
  );
};

export default Calendar;
