import React from "react";

function Button(props) {
  return (
    <button className="resetBtn" onClick={props.reset}>Reset</button>
  );
}

export default Button;
