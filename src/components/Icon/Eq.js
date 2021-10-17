import * as React from "react";

function SvgEq(props) {
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
        d="M11 22h2V2h-2v20zm-4-4h2V6H7v12zm-2-4H3v-4h2v4zm10 4h2V6h-2v12zm4-4v-4h2v4h-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEq;
