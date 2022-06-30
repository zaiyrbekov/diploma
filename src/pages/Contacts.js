import ImgLogo from "../assets/header2.jpg";
import Header from "../components/Header/Header";
function Contacts() {
  return (
    <>
      <Header title="GET IN TOUCH" image={ImgLogo}></Header>
      {/* <div className="footer_widget  ">
        <h3 className="footer_title ">New York</h3>
        <p>
          5th flora, 700/D kings road, <br />
          green lane New York-1782 <br />
          <a className="contact-namber1" href="/">
            info@burger.com
          </a>
        </p>
        <a className="contact-number" href="/">
          +10 378 483 6782
        </a>
      </div> */}
    </>
  );
}

export default Contacts;
