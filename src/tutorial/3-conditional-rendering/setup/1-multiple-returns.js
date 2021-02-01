import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);
  const [user, setUser] = useState('default user');

  useEffect(
    () => {
      fetch(url)
        .then(
          (resp) => {
            if(resp.status >= 200 && resp.status <=299){
              return resp.json();
            }
            setIsLoading(false);
            setIsError(true);
            throw new Error(resp.statusText);
          }
        )
        .then(
          (user) => {
            const {login} = user;
            setUser(login);
            setIsLoading(false);
            setIsError(false);
          }
        )
        .catch((error) => console.log(error));
    },
    []
  );

  if (isLoading) {
    return (
      <React.Fragment>
        <h1>Loading.....</h1>
      </React.Fragment>
    );
  }

  if (isError) {
    return (
      <React.Fragment>
        <h1>Error.....</h1>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <h1>{user}</h1>
    </React.Fragment>
  );
};

export default MultipleReturns;
