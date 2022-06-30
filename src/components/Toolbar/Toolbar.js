import Nav from "../Nav/Nav";
import NavToggle from "../Nav/NavToggle/NavToggle";
import Logo from "../ui/Logo/Logo";
import classes from "./Toolbar.module.css";
import NavIcon from "../ui/NavIcon/NavIcon";

function Toolbar({ toggleDrawer }) {
  return (
    <nav className={classes.Toolbar}>
      <div className={classes.container}>
        <Nav />
        <Logo />
        <NavIcon />

        <NavToggle callback={toggleDrawer} />
      </div>
    </nav>
  );
}

export default Toolbar;
