const Header = () => {
  return (
    <nav>
      <div>
        <img src="brand_logo.png" alt="" className="brandLogo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button className="navBtn">login</button>
    </nav>
  );
};
export default Header;
