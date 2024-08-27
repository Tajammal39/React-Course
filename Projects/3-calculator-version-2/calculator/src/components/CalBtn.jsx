import styles from "./CalBtn.module.css";
function CalBtn({ calbtn, onButtonClick }) {
  return (
    <div className={styles.btnContainer}>
      {calbtn.map((btn) => (
        <button key={btn} onClick={() => onButtonClick(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
}
export default CalBtn;
