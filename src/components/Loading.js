import React from "react";

export default function Loading(props) {
  const { text } = props;
  const { data } = props;

  return (
    <div>
      <h2>{text}</h2>

      <h2>{data.title}</h2>

      <small>Tiempo estimado {data.time} segundos.</small>
    </div>
  );
}
