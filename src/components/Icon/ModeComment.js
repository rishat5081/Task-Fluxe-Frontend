import * as React from "react";

function SvgModeComment(props) {
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
        d="M4 2h16c1.1 0 2 .9 2 2v18l-4-4H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm14.83 14L20 17.17V4H4v12h14.83z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgModeComment;
