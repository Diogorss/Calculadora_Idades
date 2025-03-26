import { useState } from "react";

const useAgeCalculator = () => {
  // Estados para os campos do formulário
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // Estado para o resultado
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });

  // Função para determinar o último dia de um mês
  const getLastDayOfMonth = (month, year) => {
    if (!month || !year) return 31; // Valor padrão até que mês e ano sejam preenchidos

    const parsedMonth = parseInt(month);
    const parsedYear = parseInt(year);

    // Array com o número de dias em cada mês (índice 0 não é usado)
    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Verifica se é ano bissexto para ajustar fevereiro
    if (parsedMonth === 2) {
      const isLeapYear =
        (parsedYear % 4 === 0 && parsedYear % 100 !== 0) ||
        parsedYear % 400 === 0;
      return isLeapYear ? 29 : 28;
    }

    return daysInMonth[parsedMonth];
  };

  // Função para lidar com a mudança no campo "day"
  const handleDayChange = (e) => {
    const value = e.target.value;

    // Permite apenas números (remove caracteres não numéricos)
    const numericValue = value.replace(/[^0-9]/g, "");

    // Permite que o usuário digite livremente (incluindo valores parciais)
    if (numericValue.length <= 2) {
      setDay(numericValue);

      // Valida o valor apenas se for um número completo
      const parsedDay = parseInt(numericValue);
      const lastDay = getLastDayOfMonth(month, year);
      if (numericValue && (parsedDay < 1 || parsedDay > lastDay)) {
        setDay(""); // Limpa o campo se o valor for inválido
        alert(`O dia deve estar entre 1 e ${lastDay} para o mês ${month}.`);
      }
    }
  };

  // Função para lidar com a mudança no campo "month"
  const handleMonthChange = (e) => {
    const value = e.target.value;

    // Permite apenas números (remove caracteres não numéricos)
    const numericValue = value.replace(/[^0-9]/g, "");

    // Permite que o usuário digite livremente (incluindo valores parciais)
    if (numericValue.length <= 2) {
      setMonth(numericValue);

      // Valida o valor apenas se for um número completo
      const parsedMonth = parseInt(numericValue);
      if (numericValue && (parsedMonth < 1 || parsedMonth > 12)) {
        setMonth(""); // Limpa o campo se o valor for inválido
        alert("O mês deve estar entre 1 e 12.");
      } else {
        // Se o dia atual for maior que o último dia do novo mês, ajusta o dia
        const lastDay = getLastDayOfMonth(numericValue, year);
        if (day && parseInt(day) > lastDay) {
          setDay(lastDay.toString());
        }
      }
    }
  };

  // Função para lidar com a mudança no campo "year"
  const handleYearChange = (e) => {
    const value = e.target.value;

    // Permite apenas números (remove caracteres não numéricos)
    const numericValue = value.replace(/[^0-9]/g, "");

    // Obtém o ano atual
    const today = new Date();
    const currentYear = today.getFullYear();

    // Permite que o usuário digite livremente (incluindo valores parciais)
    if (numericValue.length <= 4) {
      setYear(numericValue);

      // Valida o ano apenas se for um número completo (4 dígitos)
      const parsedYear = parseInt(numericValue);
      if (numericValue.length === 4 && parsedYear > currentYear) {
        setYear(""); // Limpa o campo se o ano for no futuro
        alert(`O ano não pode ser maior que o ano atual (${currentYear}).`);
      }
    }
  };

  // Função para calcular a idade
  const calculateAge = () => {
    // Validação básica
    if (!day || !month || !year) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const parsedDay = parseInt(day);
    const parsedMonth = parseInt(month);
    const parsedYear = parseInt(year);

    // Validações adicionais
    if (parsedMonth < 1 || parsedMonth > 12) {
      alert("O mês deve estar entre 1 e 12.");
      return;
    }

    const lastDay = getLastDayOfMonth(parsedMonth, parsedYear);
    if (parsedDay < 1 || parsedDay > lastDay) {
      alert(`O dia deve estar entre 1 e ${lastDay} para o mês ${parsedMonth}.`);
      return;
    }

    // Obtém a data atual
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // Mês em JavaScript é 0-based, ajustamos para 1-12
    const currentDay = today.getDate();

    // Cria um objeto Date para a data inserida
    const inputDate = new Date(parsedYear, parsedMonth - 1, parsedDay);

    // Cria um objeto Date para a data atual
    const currentDate = new Date(currentYear, currentMonth - 1, currentDay);

    // Verifica se a data inserida é no futuro
    if (inputDate > currentDate) {
      alert("A data inserida não pode ser no futuro.");
      return;
    }

    // Calcula a diferença de anos diretamente
    let years = currentYear - parsedYear;
    let months = currentMonth - parsedMonth;
    let days = currentDay - parsedDay;

    // Ajusta os meses e dias se necessário
    if (days < 0) {
      months -= 1;
      const lastMonthDays = getLastDayOfMonth(currentMonth - 1, currentYear);
      days += lastMonthDays;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    // Atualiza o estado com o resultado
    setAge({ years, months, days });
  };

  return {
    day,
    month,
    year,
    age,
    handleDayChange,
    handleMonthChange,
    handleYearChange,
    calculateAge,
    getLastDayOfMonth,
  };
};

export default useAgeCalculator;
