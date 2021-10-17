import * as React from "react";

function SvgMoney(props) {
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
        d="M2 4v16h20V4H2zm5 4H5v8h2V8zm5 8H9c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1zm3 0h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zm1-6h1v4h-1v-4zm-6 0h1v4h-1v-4zm-6 8h16V6H4v12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoney;
