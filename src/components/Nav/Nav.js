import classes from "./Nav.module.css";
import Logo from "../ui/Logo/Logo";
import NavItem from "./NavItem/NavItem";
import NavToggle from "./NavToggle/NavToggle";

function Nav() {
  return (
    <nav className={classes.Nav}>
      <div className={classes.container}>
      <button className={classes.Button}>Order now</button>

        <Logo />
        <ul>
          <NavItem url="/">Home</NavItem>
          <NavItem url="/products">Products</NavItem>
          <NavItem url="/contacts">Contacts</NavItem>
        </ul>
        <NavToggle />
      </div>
    </nav>
  );
}

export default Nav;