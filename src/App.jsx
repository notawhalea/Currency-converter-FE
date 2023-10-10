import "./App.css";
import Currency from "./components/Currency/Currency";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import CurrencyForm from "./components/AddCurrency/CurrencyForm";

function App() {
  const [currency, setCurrency] = useState([
    { code: "USD", id: 0 },
    { code: "EUR", id: 1 },
    { code: "BYN", id: 2 },
    { code: "RUB", id: 3 },
  ]);
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  const prevData = usePrevious(currency);
  let requestHandler = "";
  useEffect(() => {
    for (let i = 0; i < currency.length; i++) {
      requestHandler = requestHandler + currency[i].code + "%2C";
    }
    requestHandler = requestHandler.substring(0, requestHandler.length - 3);
    console.log("RQ", requestHandler);
    async function getCurrencies() {
      try {
        const response = await axios.post(
          "https://currency-converter-be.vercel.app/currency",
          {
            requestHandler,
          },
        );
        const res = Object.values(response?.data?.data);
        console.log(res);
        setCurrency(res);
      } catch (error) {
        console.error(error);
      }
    }
    if (currency !== prevData) {
      getCurrencies();
    }
  }, [prevData]);
  console.log(currency);

  const addCurrencyHandler = (text) => {
    console.log(text);
    const newCurrency = {
      code: text,
    };
    setCurrency([...currency, newCurrency]);
  };
  const deleteCurrencyHandler = (code) => {
    setCurrency(currency.filter((currency) => currency.code !== code));
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
          <CurrencyForm addCurrency={addCurrencyHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
