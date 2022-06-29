import Nav from "../Nav/Nav";
import Logo from "../ui/Logo/Logo";
import classes from "./Drawer.module.css";
import NavIcon from "../ui/NavIcon/NavIcon";

function Drawer({ open, toggle }) {
  const classNames = [classes.Drawer];
  if (open) {
    classNames.push(classes.open);
  }

  return (
    <div className={classNames.join(" ")}>
      <div onClick={toggle} className={classes.backdrop}></div>
      <div className={classes.content}>
        <Logo />
        <Nav />

        <br />
        <br />
        <br />

        <NavIcon />
      </div>
    </div>
  );
}

export default Drawer;
