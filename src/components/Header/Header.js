import "./Header.css";

function Header({ image, title, children }) {
  return (
    <header className="Header">
      <img src={image} alt={title} />
      <section>
        <h1>{title}</h1>
        <p>{children}</p>
      </section>
    </header>
  );
}
// alt={title}
export default Header;