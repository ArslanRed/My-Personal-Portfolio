// Button.jsx
import React from "react";
import "./Button.css";
import ButtonSvg from "./ButtonSvg";

const Button = (
    { 
        className = "", href, onClick, children, px = "px-7", white = false 
    }) => {
            const classes = `button ${px} ${white ? "text-n-8 white" : "text-n-1"} ${className}`.trim();  
            const spanClasses = "relative z-10";
            

     if (href) {
    return (
      <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        <ButtonSvg white={white} />
      </a>
    );
  }

  return (
    <div className="master">
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </button>
    </div>
  );
};

export default Button;
