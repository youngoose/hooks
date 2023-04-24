import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentor() {
  // const [person, setPerson] = useState(initialPerson);

  // dispatch - order which action we want to proceed
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`whose name do you want to update?`);
    const current = prompt(`what name do you want?`);

    // pass the action object - 1st arg
    // pass the data - 2nd arg
    dispatch({ type: 'updated', prev, current });

    // when dispatched is called, useReducer calls the personReducer
    // it will pass the person and action objects as args into the reducer
    // it will create a new object thru the specific case logic and return the object
  };

  const handleAdd = () => {
    const name = prompt(`who do you want to add as a new mentor?`);
    const title = prompt(`what is the person's position?`);

    dispatch({ type: 'added', name, title });
  };

  const handleDelete = () => {
    const name = prompt(`which mentor do you want to delete?`);

    dispatch({ type: 'deleted', name });
  };

  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>mentor for {person.name}</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>update mentor's name</button>
      <button onClick={handleAdd}>add a new mentor</button>
      <button onClick={handleDelete}>delete a mentor</button>
    </div>
  );
}

const initialPerson = {
  name: 'eddy',
  title: 'developer',
  mentors: [
    {
      name: 'mike',
      title: 'senior developer',
    },
    {
      name: 'steven',
      title: 'tech lead',
    },
  ],
};
