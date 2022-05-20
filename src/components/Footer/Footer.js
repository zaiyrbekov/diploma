import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
     
      <ul>
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
      </ul>
      <div className="footer-logo">2022 All rights reserved | This template is made
          with <i class="far fa-heart"></i> by </div>
    </footer>
  );
}

export default Footer;
