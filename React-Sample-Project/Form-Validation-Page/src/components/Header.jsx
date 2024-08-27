import style from "./Header.module.css";
const Header = () => {
  return (
    <div id={style.header}>
      <div>
        <img src="./logo.png" alt="" />
      </div>
      <div>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </div>
    </div>
  );
};
export default Header;
