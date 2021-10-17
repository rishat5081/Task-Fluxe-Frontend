import * as React from "react";

function SvgLaunch(props) {
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
        d="M5 5v14h14v-7h2v7c0 1.1-.9 2-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h7v2H5zm9 0V3h7v7h-2V6.41l-9.83 9.83-1.41-1.41L17.59 5H14z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLaunch;
