import React from "react";

const Display = props => {
  return (
    <div>
      <div className="display">
        <p>0</p>
        <span>{props.Display}</span>
      </div>
    </div>
  );
};

export default Display;
