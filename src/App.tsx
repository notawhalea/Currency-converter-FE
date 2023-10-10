import "./App.css";
import Currency from "./components/Currency/Currency";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [currency, setCurrency] = useState([
    { title: "USD", id: 0 },
    { title: "EUR", id: 1 },
    { title: "BYN", id: 2 },
    { title: "RUB", id: 3 },
  ]);
  const addCurrencyHandler = (text) => {
    const newCurrency = {
      title: text,
      id: uuidv4(),
    };
    setCurrency([...currency, newCurrency]);
  };
  const deleteCurrencyHandler = (id) => {
    setCurrency(currency.filter((currency) => currency.id !== id));
  };
  return (
    <div className="main">
      <div className="container">
        <h1 className="mainTitle">Конвертер валют</h1>
        <h3 className="mainSubtitle">По курсу НБ РБ</h3>
        <div className="inputsContainer">
          {currency.map((currency) => (
            <Currency
              key={currency.id}
              currency={currency}
              currName={currency.title}
              deleteCurrency={deleteCurrencyHandler}
            />
          ))}
          <button>Добавить валюту</button>
        </div>
      </div>
    </div>
  );
}

export default App;
