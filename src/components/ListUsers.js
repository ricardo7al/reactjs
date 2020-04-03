import React from "react";

export default function ListUsers(props) {
  const { listUsers } = props;
  console.log(props);

  return (
    <div>
      <h2> Lista de trabajadores</h2>
      <ul>
        {listUsers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
