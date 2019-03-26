import React from 'react';

import './VerticalProgressBar.css';

const VerticalProgressBar = props => {
  return (
    <div className="VerticalProgressBar">
      <div className="VerticalProgressBar_bar" />

      {props.label ? (
        <div className="VerticalProgressBar_label">{props.label}</div>
      ) : null}
    </div>
  );
};

export default VerticalProgressBar;
