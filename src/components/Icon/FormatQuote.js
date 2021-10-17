import * as React from "react";

function SvgFormatQuote(props) {
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
        d="M8.62 18H3.38l2-4H3V6h8v7.24L8.62 18zm4.76 0h5.24L21 13.24V6h-8v8h2.38l-2 4zm4-2h-.76l2-4H15V8h4v4.76L17.38 16zm-10 0h-.76l2-4H5V8h4v4.76L7.38 16z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFormatQuote;
