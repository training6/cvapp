import React from "react";

function TextArea(props) {
  return (
    <textarea className="left tile" value={props.words} onChange={props.setting}>

    </textarea>
  );
}

export default TextArea;
