import { useState, useEffect, createContext } from "react";

import { initialEvents } from "constants/store/calendarEvent";

/**
 * Context contains events to present calendar notes.
 * This will be static for now.
 * There is only add function for events.
 */
export const CalendarEventContext = createContext(null);

const Provider = ({ children }) => {
  const [events, setEvents] = useState(initialEvents);

  // For now, events will be static and get from constant file.
  useEffect(() => {
    // Fetch events from api
    // setEvents(eventsFromApi);
  }, []);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <CalendarEventContext.Provider value={{ events, onAddEvent: addEvent }}>
      {children}
    </CalendarEventContext.Provider>
  );
};

export default Provider;
