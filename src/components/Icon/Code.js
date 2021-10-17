import * as React from "react";

function SvgCode(props) {
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
        d="M4.8 12l4.6 4.6L8 18l-6-6 6-6 1.4 1.4L4.8 12zm14.4 0l-4.6 4.6L16 18l6-6-6-6-1.4 1.4 4.6 4.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCode;
