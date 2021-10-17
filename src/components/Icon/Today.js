import * as React from "react";

function SvgToday(props) {
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
        d="M18 4h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1V2h2v2h8V2h2v2zM5 10v10h14V10H5zm14-2H5V6h14v2zm-7 4H7v5h5v-5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgToday;
