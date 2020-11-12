import React from 'react';
import ReactDOM from 'react-dom';

function Time() {
    const element = (
      <div>
        <p>{new Date().toLocaleTimeString()}</p>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('time')
    );
  }
  
  setInterval(Time, 1000);

  export default Time;