import "./Layout.css";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
