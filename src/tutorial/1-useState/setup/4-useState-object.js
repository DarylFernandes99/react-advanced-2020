import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState(
    {
      name: "peter",
      age: 24,
      message: "Hello Everyone",
    }
  );

  //Change message function
  const changeMessage = () => {
    //...person fetches the old value and changes only message
    setPerson({...person, message: "Hello Worldzz!!"});
  };

  return (
    <React.Fragment>
      <h3>
        {person.name}
      </h3>
      <h3>
        {person.age}
      </h3>
      <h3>
        {person.message}
      </h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
