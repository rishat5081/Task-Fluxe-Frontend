import * as React from "react";

function SvgStarBorder(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.81 9.12l7.19.62-5.45 4.73 1.63 7.03L12 17.77 5.82 21.5l1.64-7.03L2 9.74l7.19-.61L12 2.5l2.81 6.62zm-6.57 9.05L12 15.9l3.77 2.28-1-4.28 3.32-2.88-4.38-.38L12 6.6l-1.7 4.03-4.38.38 3.32 2.88-1 4.28z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStarBorder;
