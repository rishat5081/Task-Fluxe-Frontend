import * as React from "react";

function SvgİnsertPhoto(props) {
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
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v14H5V5h14zm-7.86 10.73l3-3.87L18 17H6l3-3.86 2.14 2.59z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgİnsertPhoto;
