import * as React from "react";

function SvgDashboard(props) {
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
        d="M3 3h8v10H3V3zm18 0h-8v6h8V3zM9 11V5H5v6h4zm10-4V5h-4v2h4zm0 6v6h-4v-6h4zM9 19v-2H5v2h4zm12-8h-8v10h8V11zM3 15h8v6H3v-6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDashboard;
