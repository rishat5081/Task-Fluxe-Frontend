import moment from "moment";

export const initialEvents = [
  {
    start: moment("20210911").toDate(),
    end: moment("20210912").add(1, "days").toDate(),
    title: "Events will be different from each other.",
  },
  {
    start: moment("20210917").toDate(),
    end: moment("20210918").add(1, "days").toDate(),
    title:
      " In eget mauris mauris. Duis sodales tellus leo, eget tempus nulla hendrerit quis. Suspendisse finibus, erat a ultricies maximus, quam nibh consectetur lacus, sed dignissim dui augue vel eros. Sed et purus lacinia, dictum tortor facilisis, lacinia felis. Nullam rutrum lorem pellentesque, iaculis libero nec, facilisis sapien.",
  },
];
