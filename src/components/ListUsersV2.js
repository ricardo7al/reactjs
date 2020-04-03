import React from "react";

export default function ListUsersV2(props) {
  const { users } = props;

  return (
    <div>
      <h2> Lista de usuario </h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.years} años
          </li>
        ))}
      </ul>
    </div>
  );
}
