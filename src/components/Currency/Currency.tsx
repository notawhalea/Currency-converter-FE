import styles from "./Currency.module.scss";

const Currency = ({ deleteCurrency, currency }) => {
  return (
    <div className={styles.inputContainer}>
      <p className={styles.currencyTitle}>{currency.code}</p>
      <input value={currency.value} />
      <button
        className={styles.deleteButton}
        onClick={() => deleteCurrency(currency.id)}
      >
        Удалить
      </button>
    </div>
  );
};
export default Currency;
