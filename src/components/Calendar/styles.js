import styled from "styled-components";

import theme from "theme";

export const Calendar = styled.div`
  height: 690px;

  .rbc-month-view,
  .rbc-time-view,
  .rbc-agenda-view {
    background-color: #fff;

    border: none;
    border-radius: 12px;

    box-shadow: ${theme.main.boxShadow};
  }

  .rbc-time-view,
  .rbc-agenda-view {
    padding: 10px;
    font-size: ${theme.font.sm.size};

    & > * {
      border-color: #f1f1f1;
    }
  }

  .rbc-header,
  .rbc-month-row + .rbc-month-row,
  .rbc-day-bg + .rbc-day-bg {
    border-color: #f1f1f1;
  }

  .rbc-header {
    text-align: left;
    font-size: 12px;

    padding: 7px 12px;

    color: #787878;
  }

  .rbc-event.rbc-selected,
  .rbc-day-slot .rbc-selected.rbc-background-event {
    background-color: inherit;
  }

  .rbc-btn-group {
    button {
      font-family: "Inter", sans-serif;
      font-weight: 500;

      border: none;
      box-shadow: none;
    }

    button:focus,
    button:active,
    button:hover {
      background: inherit;
      color: ${theme.main.colors.primary};

      box-shadow: none;
    }

    button.rbc-active {
      background-color: #f1f1f1;
      border-radius: 5px;
    }
  }

  .rbc-date-cell {
    font-size: 12px;
    font-weight: 800;

    text-align: left;

    color: #787878;

    padding-top: 5px;
    padding-left: 12px;

    margin-bottom: 5px;

    &.rbc-now {
      color: ${theme.main.colors.primary};
    }
  }

  .rbc-event {
    outline: none;
    background-color: transparent;
  }

  .rbc-off {
    background-color: #f8f8f8;
  }

  .rbc-today {
    background-color: #ffffff;
  }

  .rbc-show-more {
    font-size: 12px;
    font-weight: 600;

    padding-left: 12px;
    color: ${theme.main.colors.primary};
  }
`;
