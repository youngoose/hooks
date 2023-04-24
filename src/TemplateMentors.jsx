import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`whose name do you want to update?`);
    const current = prompt(`what name do you want?`);

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) =>
        mentor.name === prev ? { ...mentor, name: current } : mentor
      ),
    }));
  };

  const handleAdd = () => {
    const name = prompt(`who do you want to add as a new mentor?`);
    const title = prompt(`what is the person's position?`);

    setPerson((person) => ({
      ...person,
      mentors: [
        ...person.mentors,
        {
          name,
          title,
        },
      ],
    }));
  };

  const handleDelete = () => {
    const name = prompt(`which mentor do you want to delete?`);

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== name),
    }));
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
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};
