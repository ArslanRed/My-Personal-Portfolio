// ButtonGradient.jsx
import React from "react";

const ButtonGradient = () => (
  <svg className="hidden" width={0} height={0} aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#080808ff" />
        <stop offset="100%" stopColor="#ffffffff" />
      </linearGradient>
      <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
        <stop offset="0%" stopColor="#0f0f0fff" />
        <stop offset="100%" stopColor="#beb3b7ff" />
      </linearGradient>
      <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
        <stop offset="0%" stopColor="#0a070aff" />
        <stop offset="100%" stopColor="#f8dedeff" />
      </linearGradient>
      <linearGradient id="btn-right" x1="14.635%" x2="14.635%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#e4e5f0ff" />
        <stop offset="100%" stopColor="#0d0d0eff" />
      </linearGradient>
    </defs>
  </svg>
);

export default ButtonGradient;
