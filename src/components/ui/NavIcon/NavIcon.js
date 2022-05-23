import classes from "./NavIcon.module.css";

function NavIcon() {
  return (
    <ul className={classes.fox}>
      <li>
        <a href="/">
          <i class="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="/">
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="/">
          <i class="fab fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a href="/">
          <i class="fab fa-google-plus-g"></i>
        </a>
      </li>
      <li>
        <a className={classes.number} href="/">
          +10 367 453 7382
        </a>
      </li>
    </ul>
  );
}

export default NavIcon;
