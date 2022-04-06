import "./Nav.css";

function Nav() {
  return (
    <nav className="Nav">
      <div>Fresh Coffee Beans</div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Categories</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Products</a></li>
        <li><a href="/">Contacts</a></li>
      </ul>
    </nav>
  );
}

export default Nav;