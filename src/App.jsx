import useAgeCalculator from "./useAgeCalculator";
import "./Index.css";

function App() {
  const {
    day,
    month,
    year,
    age,
    handleDayChange,
    handleMonthChange,
    handleYearChange,
    calculateAge,
    getLastDayOfMonth,
  } = useAgeCalculator();

  return (
    <div className="container">
      <h1>Calculadora de Idades</h1>
      <div className="form">
        <div className="input-group">
          <div className="input-field">
            <label>DAY</label>
            <input
              type="text"
              placeholder="DD"
              value={day}
              onChange={handleDayChange}
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength="2"
            />
          </div>
          <div className="input-field">
            <label>MONTH</label>
            <input
              type="text"
              placeholder="MM"
              value={month}
              onChange={handleMonthChange}
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength="2"
            />
          </div>
          <div className="input-field">
            <label>YEAR</label>
            <input
              type="text"
              placeholder="YYYY"
              value={year}
              onChange={handleYearChange}
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength="4"
            />
          </div>
        </div>
        <button className="calculate-button" onClick={calculateAge}>
          <span>↓</span>
        </button>
      </div>
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
    </div>
  );
}

export default App;
