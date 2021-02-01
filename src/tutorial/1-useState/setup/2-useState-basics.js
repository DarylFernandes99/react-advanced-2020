import React, { useState } from 'react';

const UseStateBasics = () => {
  //Calling useState
  const [text, setText] = useState("Random Title");
  
  //On Click function
  const handleClick = () => {
    if (text === "Random Title") {
      setText("Hello World!!");
    }
    else {
      setText("Random Title");
    }
  }
  
  //Returning HTML
  return (
    <React.Fragment>
      <h1>
        {text}
      </h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
