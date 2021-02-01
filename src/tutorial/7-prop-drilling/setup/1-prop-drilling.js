import React, { useState } from 'react';
import {data} from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    return (
      people.filter(
        (person) => person.id !== id
      )
    );
  }

  return (
    <React.Fragment>
      <section>
        <h3>Prop Drilling</h3>
        <List people={people} removePerson={removePerson} />
      </section>
    </React.Fragment>
  );
};

const List = ({people, removePerson}) => {
  return (
    <React.Fragment>
      {
        people.map(
          (person) => {
            return (
              <SinglePerson key={person.id} {...person} removePerson={removePerson} />
            );
          }
        )
      }
    </React.Fragment>
  );
}

const SinglePerson = ({id, name, removePerson}) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      {/* Here to add removePerson function we have to pass it through multiple functions which is not a feasible option */}
      <button onClick={() => removePerson(id)}>Remove Person</button>
    </div>
  );
}

export default PropDrilling;
