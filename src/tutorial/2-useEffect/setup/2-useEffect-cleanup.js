import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  
const checkSize = () => {
  setSize(window.innerWidth);
}

  useEffect(
    () => {
      window.addEventListener('resize', checkSize);
      //removes all the previous eventlisteners
      return () => {
        window.removeEventListener('resize', checkSize);
      }
    }
  )

  return (
    <React.Fragment>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </React.Fragment>
  );
};

export default UseEffectCleanup;
