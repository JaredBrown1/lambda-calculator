import React from "react";

const Display = props => {
  return (
    <div>
      <div className="display">
        <span>
          {props.Display}
          <p>0</p>
        </span>
      </div>
    </div>
  );
};

export default Display;
