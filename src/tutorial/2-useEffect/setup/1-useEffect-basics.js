import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  
  const [value, setValue] = useState(0);

  useEffect(
    () => {
      console.log(value);
      //change title
      if (value > 0) {
        document.title = 'New Messages(' + value + ")";
      }
    },
    [value]  //if left blank useEffect will only run once at start
  );
  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click to Increase
      </button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
