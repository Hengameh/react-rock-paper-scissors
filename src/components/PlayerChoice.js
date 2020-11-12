import React from "react";

export default function PlayerChoice({ name }) {
  return (
    <img
      data-type={name}
      className="button choice"
      src={`${name}.png`}
      alt={`${name}`}
    />
  );
}
