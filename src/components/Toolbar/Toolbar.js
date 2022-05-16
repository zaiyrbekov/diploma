import Nav from "../Nav/Nav";
import NavToggle from "../Nav/NavToggle/NavToggle";
import Logo from "../ui/Logo/Logo";
import classes from "./Toolbar.module.css";

function Toolbar({ toggleDrawer }) {
  return (
    <nav className={classes.Toolbar}>
      <div className={classes.container}>
        
        <Nav />
        <Logo />
        <button className={classes.Button}>button</button>
        <NavToggle callback={toggleDrawer} />
      </div>
    </nav>
  );
}

export default Toolbar;