import "./Header.css";

function Header({ image, title, children }) {
  return (
    <header className="Header">
      <img src={image} alt={title} />
      <section>
        <h3>{title}</h3>
        <p>{children}</p>
      </section>
    </header>
  );
}
export default Header;