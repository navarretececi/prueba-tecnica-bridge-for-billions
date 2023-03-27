import "./Layout.css";
import Pagination from "./Pagination";

const Layout = ({children}) => {
 return (
    <div className="layout">
      <header className="header">
        <h1 className="no_mg title">Prueba técnica Bridge For Billions</h1>
        <h6 className="no_mg">By: Cecilia Navarrete</h6>
      </header>
      {children}
      <footer className="footer">
        <Pagination/>
      </footer>
    </div>
  );
};

export default Layout;
