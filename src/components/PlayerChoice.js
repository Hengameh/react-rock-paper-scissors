import React from "react";

function PlayerChoice({ name, onClickChoice }) {
  const handleClick = () => {
    onClickChoice(name);
  };

  return (
    <img
      data-type={name}
      className="button choice"
      src={`${name}.png`}
      alt={`${name}`}
      onClick={handleClick}
    />
  );
}

export default PlayerChoice;
