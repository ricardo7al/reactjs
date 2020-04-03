import React, { useState, useEffect } from "react";

export default function Car() {
  const [started, setStarted] = useState(false);
  const [countKm, setCountKm] = useState(0);

  useEffect(() => {
    document.title = `auto ${started}`;
  }, [started]);

  const checkStateCar = () => {
    if (started) {
      return <span style={{ color: "green" }}>encendido</span>;
    }
    return <span style={{ color: "red" }}>encendido</span>;
  };

  const increaseKm = num => {
    if (started) {
      setCountKm(countKm + num);
    } else {
      alert("El auto esta apagado");
    }
  };

  return (
    <div>
      <h2>Nuestro auto esta: {checkStateCar()} </h2>
      <h2>Kilómetros recorridos: {countKm} km </h2>
      <button
        onClick={() => {
          setStarted(!started);
        }}
      >
        Encender / Apagar
      </button>

      <button
        onClick={() => {
          increaseKm(5);
        }}
      >
        Incrementar Kilómetros
      </button>
    </div>
  );
}
