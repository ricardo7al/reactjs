import React from "react";
import Loading from "./components/Loading";
import ListUsers from "./components/ListUsers";
import ListUsersV2 from "./components/ListUsersV2";
import Buttons from "./components/Buttons";
import Car from "./components/Car";

function App() {
  const textObj = {
    title: "Terminando ejecución",
    time: 6
  };

  const users = [
    "Federico Vazquez",
    "Marco Llorente",
    "Alejandro Gomez",
    "Guillermo Valverde",
    "Fernando Ortiz",
    "Maria Gonzalez",
    "Isabel Pardo",
    "Victoria Valenzuela",
    "Alejandra Paredes",
    "Fernanda Sepulveda"
  ];

  const employees = [
    { name: "Federico Vazquez", years: 35 },
    { name: "Marco Llorente", years: 27 },
    { name: "Alejandro Gomez", years: 42 },
    { name: "Guillermo Valverde", years: 55 },
    { name: "Fernando Ortiz", years: 64 },
    { name: "Maria Gonzalez", years: 32 },
    { name: "Isabel Pardo", years: 56 },
    { name: "Victoria Valenzuela", years: 24 },
    { name: "Alejandra Paredes", years: 37 },
    { name: "Fernanda Sepulveda", years: 72 }
  ];

  const showNameConsole = () => {
    console.log("Guillermo Valverde");
  };

  return (
    <div className="App">
      <h1>Lista de ejercicios</h1>

      <h2>Ejercicio #1 - mandar props </h2>

      {/*<Loading text="Cargando..." />*/}

      <Loading data={textObj} />

      <h2>Ejercicio #2 - Manejo de Arrays </h2>

      <ListUsers listUsers={users} />

      <ListUsersV2 users={employees} />

      <h2>Ejercicio #3 - Uso de Buttons </h2>

      <Buttons fnShowName={showNameConsole} />

      <h2>Ejercicio #4 - Manejo de HookState </h2>

      <Car />

      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


      */}
    </div>
  );
}

export default App;
