import React from 'react';
import { useImmer } from 'use-immer';

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`whose name do you want to update?`);
    const current = prompt(`what name do you want?`);

    // immer internally uses useState and update the state simpler way
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };

  const handleAdd = () => {
    const name = prompt(`who do you want to add as a new mentor?`);
    const title = prompt(`what is the person's position?`);

    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };

  const handleDelete = () => {
    const name = prompt(`which mentor do you want to delete?`);

    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      if (index < 0) return;
      person.mentors.splice(index, 1);
    });
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
