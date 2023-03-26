import React from "react";
import Btn from "./bnt/Btn";
import { AppContext } from "../resultContext";
//import { AppContext } from "../../context/AppContext";

const Pagination = () => {
  //const { paginationList } = useContext(AppContext);
  const { result, setResult, pagination, setPagination } = React.useContext(AppContext);
  console.log("pagination",  pagination)

  return (
    <div className="row">
      {/* {paginationList.currentPage > 1 ? (
        <button onClick={() => paginationList.prev()} >{`<`}</button>
      ) : null}
      {paginationList.currentPage !== paginationList.maxPage ? (
        <button onClick={() => paginationList.next()} >{`>`}</button>
      ) : null} */}
      <Btn onClick={()=>console.log(pagination.urls.first)} btn_text={`<<`} />
      <Btn btn_text={`<`} />
      <Btn btn_text={`>`} />
      <Btn btn_text={`>>`} />
    </div>
  );
};

export default Pagination;
