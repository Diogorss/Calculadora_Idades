import useAgeCalculator from "./useAgeCalculator";
import "./index.css";
import BotaoEnviar from "./components/BotaoEnviar";
import Resultado from "./components/Resultado";
import InputField from "./components/InputField";
import Header from "./components/Header";

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
      <Header />
      <div className="form">
        <div className="input-group">
          <InputField
            label="DAY"
            placeholder="DD"
            value={day}
            onChange={handleDayChange}
            maxLength="2"
          />
          <InputField
            label="MONTH"
            placeholder="MM"
            value={month}
            onChange={handleMonthChange}
            maxLength="2"
          />
          <InputField
            label="YEAR"
            placeholder="YYYY"
            value={year}
            onChange={handleYearChange}
            maxLength="4"
          />
        </div>
        <BotaoEnviar onClick={calculateAge} />
      </div>
      <Resultado age={age} />
    </div>
  );
}

export default App;
