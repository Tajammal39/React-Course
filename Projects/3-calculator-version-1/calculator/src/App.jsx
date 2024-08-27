import styles from "./App.module.css";
import Display from "./components/Display";
import CalBtn from "./components/CalBtn";
function App() {
  let calculator = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.calculator}>
      <Display />
      <CalBtn calbtn={calculator} />
    </div>
  );
}
export default App;
