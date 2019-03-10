import React from 'react';
import '../styles/Timer.css';

const Timer = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="right"></div>
        <div className="left"></div>
        <div className="middle">
          <p>100% <br/>
            spent</p>
        </div>
        <div className="popover"></div>
      </div>
    </div>
  );
};

export default Timer;