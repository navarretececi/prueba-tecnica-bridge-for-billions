import "./Body.css";
import Pagination from "./Pagination";

const Body = ({children}) => {
 return (
    <div className="body">
      <h1 className="title">Prueba técnica Bridge For Billions</h1>
      {children}
      <div className="pagination">
        <Pagination/>
      </div>
    </div>
  );
};

export default Body;
