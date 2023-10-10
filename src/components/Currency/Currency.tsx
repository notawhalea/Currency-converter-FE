import styles from "./Currency.module.scss";

const Currency = ({ currName, deleteCurrency, currency }) => {
  return (
    <div className={styles.inputContainer}>
      <p className={styles.currencyTitle}>{currName}</p>
      <input />
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
