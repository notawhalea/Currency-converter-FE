import { useState } from "react";
import styles from "./CurrencyForm.module.scss";

function CurrencyForm({ addCurrency }: any) {
  const [text, setText] = useState("");
  const addCurrencyHandler = (event: any) => {
    event.preventDefault();
    addCurrency(text);
    setText("");
  };
  return (
    <div className={styles.currencyFormContainer}>
      <form onSubmit={addCurrencyHandler}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter new currency"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default CurrencyForm;
