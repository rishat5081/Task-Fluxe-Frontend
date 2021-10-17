import * as React from "react";

function SvgCompareArrows(props) {
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
        d="M14.99 10v3L11 9l3.99-4v3H22v2h-7.01zM2 14h7.01v-3L13 15l-3.99 4v-3H2v-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCompareArrows;
