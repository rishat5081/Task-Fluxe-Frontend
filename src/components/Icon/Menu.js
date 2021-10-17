import * as React from "react";

function SvgMenu(props) {
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
        d="M3 8V6h18v2H3zm0 5h18v-2H3v2zm0 5h18v-2H3v2z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </svg>
  );
}

export default SvgMenu;
