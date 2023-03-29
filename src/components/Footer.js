import "./Footer.css";
import Pagination from "./Pagination";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="x">
        <h5 className="no_mg">Prueba técnica Bridge For Billions</h5>
        <h6 className="no_mg">By: Cecilia Navarrete</h6>
      </div>
      <Pagination />
    </footer>
  );
};

export default Footer
