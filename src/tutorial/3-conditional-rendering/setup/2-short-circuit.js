import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  const firstValue = text || 'hello world!!'; //Returns 'hello world' if text=''
  const secondValue = text && 'hello world';  //Returns 'hello world' if text!=''

  return (
    <React.Fragment>
      <h1>{text || 'John Doe'}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>Toggle Error</button>
      {isError && <h1>Error Occured</h1>}
      {isError ? <h1>True</h1> : <h1>False</h1>}
    </React.Fragment>
  );
};

export default ShortCircuit;
