import "./App.css";
import Currency from "./components/Currency/Currency";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function App() {
  const [currency, setCurrency] = useState([
    { code: "USD", id: 0 },
    { code: "EUR", id: 1 },
    { code: "BYN", id: 2 },
    { code: "RUB", id: 3 },
  ]);
  let requestHandler = "";
  for (let i = 0; i < currency.length; i++) {
    requestHandler = requestHandler + currency[i].code + "%2C";
  }
  requestHandler = requestHandler.substring(0, requestHandler.length - 3);

  useEffect(() => {
    async function getCurrencies() {
      try {
        const response = await axios.post("http://localhost:5000/currency", {
          requestHandler,
        });
        const res = Object.values(response?.data?.data);
        console.log(res);
        setCurrency(res);
      } catch (error) {
        console.error(error);
      }
    }
    getCurrencies();
  }, []);

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
