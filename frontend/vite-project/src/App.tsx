import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

type Person = {
  name: string;
  age: number;
  gender: string;
};

function App() {
  const [count, setCount] = useState(0);
  const [cars, setCars] = useState<string[]>([]);
  const [animals, setAnimals] = useState<string[]>([]);
  const [persons, setPersons] = useState<Person[]>([]);

  const fetchCars = async () => {
    const response = await fetch("http://localhost:3000/cars");
    const carsResponse = await response.json();
    setCars(carsResponse.cars);
  };

  const fetchAnimals = async () => {
    const response = await fetch("http://localhost:3000/animals");
    const animalsResponse = await response.json();
    setAnimals(animalsResponse);
  };

  const fetchPersons = async () => {
    const response = await fetch("http://localhost:3000/persons");
    const personsResponse = await response.json();
    setPersons(personsResponse);
  };

  useEffect(() => {
    fetchCars();
    fetchAnimals();
    fetchPersons();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <h2> Cars</h2>
        <ul>
          {cars.length && cars.map((car, index) => <li key={index}>{car}</li>)}
        </ul>
        <h2>Animals</h2>
        <ul>
          {animals.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ul>
        <h2>Persons</h2>
        <ul>
          {persons.map((person, index) => (
            <li className="person-list" key={index}>
              <div>{person.name}</div>
              <div>{person.gender}</div>
              <div>{person.age}</div>
            </li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
