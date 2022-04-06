import "./Nav.css";

function Nav() {
  return (
    <nav className="Nav">
      <div>Fresh Kurut</div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Categories</a></li>
        <li><a href="/">About us</a></li>
        <li><a href="/">Products</a></li>
        <li><a href="/">Contacts</a></li>
      </ul>
    </nav>
  );
}

export default Nav;