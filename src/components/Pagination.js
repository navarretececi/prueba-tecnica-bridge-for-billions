import React from "react";
import Btn from "./bnt/Btn";
import { AppContext } from "../resultContext";
import { search } from "../services";

const Pagination = () => {
  const { setResult, pagination, setPagination } = React.useContext(AppContext);
  let firstPage;
  let nextPage;
  let prevPage;
  let lastPage;

  console.log("pagination", pagination);

  const handlerPagination = (url) => {
    console.log(url);
    search(url)
      .then((data) => {
        console.log("data", data);
        setPagination(data.pagination);
        setResult(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (pagination && pagination.urls) {
    if (pagination.urls.first) {
      firstPage = pagination.urls.first;
    }
    if (pagination.urls.prev) {
      prevPage = pagination.urls.prev;
    }
    if (pagination.urls.next) {
      nextPage = pagination.urls.next;
    }
    if (pagination.urls.last) {
      lastPage = pagination.urls.last;
    }
  }

  return (
    <div className="row">
      <Btn
        onClick={firstPage ? () => handlerPagination(firstPage) : () =>{}}
        btn_text={`<<`}
        disabled={firstPage  ? "" : "disabled"}
      />
      <Btn
        onClick={prevPage ? () => handlerPagination(prevPage) : () =>{}}
        btn_text={`<`}
        disabled={prevPage  ? "" : "disabled"}
      />
      {pagination.urls ? (
        <span>
          page {pagination.page} of {pagination.pages}
        </span>
      ) : null}
      <Btn
        onClick={nextPage ? () => handlerPagination(nextPage) : () =>{}}
        btn_text={`>`}
        disabled={nextPage  ? "" : "disabled"}
      />
      <Btn
        onClick={lastPage ? () => handlerPagination(lastPage) : () =>{}}
        btn_text={`>>`}
        disabled={lastPage  ? "" : "disabled"}
      />
    </div>
  );
};

export default Pagination;
