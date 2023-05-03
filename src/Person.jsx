import { useState } from "react";
import personList from "./personList";

function Person() {
  const [persons, setPersons] = useState(personList);

  const deleteObject = (value) => {
    setPersons((persons) => {
      return persons.filter((i) => i.name !== value);
    });
  };

  return (
    <>
      <div className="card">
        {persons.map((person) => (
          <div key={person.name}>
            <h3>{`${person.name} ${person.surname}`}</h3>
            <p>{`Age is ${person.age}`}</p>
            <p>{`Email is ${person.email}`}</p>
            {person.status ? (
              <button className="online">Online</button>
            ) : (
              <button className="offline">Offline</button>
            )}
            <button
              className="delete"
              onClick={() => deleteObject(person.name)}
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Person;
