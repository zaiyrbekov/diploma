import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

function Layout({ children }) {
  return (
    <main className="Layout">
     <Nav/>
     <div className="comtainer">
     {children}
     </div>
      <Footer/>
    </main>
  );
}

export default Layout;
