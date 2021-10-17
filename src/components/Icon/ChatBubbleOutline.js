import * as React from "react";

function SvgChatBubbleOutline(props) {
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
        d="M4 2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2zm2 14h14V4H4v14l2-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChatBubbleOutline;
