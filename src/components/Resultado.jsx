import React from "react";

function Resultado({ age }) {
  return (
    <div className="result">
      <p>
        <span className="highlight">{age.years}</span> years
      </p>
      <p>
        <span className="highlight">{age.months}</span> months
      </p>
      <p>
        <span className="highlight">{age.days}</span> days
      </p>
    </div>
  );
}

export default Resultado;
