import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="container">
        <h1 className="mainTitle">Конвертер валют</h1>
        <h3 className="mainSubtitle">По курсу НБ РБ</h3>
        <div className="inputsContainer">
          <div className="inputContainer">
            <p className="currencyTitle">USD</p>
            <input />
          </div>
          <div className="inputContainer">
            <p className="currencyTitle">EUR</p>
            <input />
          </div>
          <div className="inputContainer">
            <p className="currencyTitle">BYN</p>
            <input />
          </div>
          <div className="inputContainer">
            <p className="currencyTitle">RUB</p>
            <input />
          </div>
          <button>Добавить валюту</button>
        </div>
      </div>
    </div>
  );
}

export default App;
