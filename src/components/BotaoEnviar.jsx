import React from "react";

function BotaoEnviar({ onClick }) {
  return (
    <button className="calculate-button" onClick={onClick}>
      <span>↓</span>
    </button>
  );
}

export default BotaoEnviar;
