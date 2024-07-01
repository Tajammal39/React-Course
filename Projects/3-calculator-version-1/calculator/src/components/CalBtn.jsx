import styles from "./CalBtn.module.css";
function CalBtn({ calbtn }) {
  return (
    <div className={styles.btnContainer}>
      {calbtn.map((btn) => (
        <button key={btn}>{btn}</button>
      ))}
    </div>
  );
}
export default CalBtn;
