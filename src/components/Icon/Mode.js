import * as React from "react";

function SvgMode(props) {
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
        d="M17.659 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 6.02l.92.92L5.918 19h-.92v-.92l9.06-9.06zm-11.06 8.23l11.06-11.06 3.75 3.75L6.748 21h-3.75v-3.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMode;
