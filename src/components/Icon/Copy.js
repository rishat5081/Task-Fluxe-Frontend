import * as React from "react";

function SvgCopy(props) {
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
        d="M16.5 1h-12c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4h-11c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-11 16h11V7h-11v14z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCopy;
