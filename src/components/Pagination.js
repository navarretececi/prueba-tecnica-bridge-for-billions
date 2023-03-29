import React from "react";
import Btn from "./bnt/Btn";
import { AppContext } from "../resultContext";
import { search, showCollection } from "../services";

const Pagination = () => {
  const {
    setResult,
    pagination,
    inputSearched,
    setInputSearched,
    setPagination,
  } = React.useContext(AppContext);

  let firstPage;
  let nextPage;
  let prevPage;
  let lastPage;

  if (pagination && pagination.urls) {
    firstPage = pagination.urls.first;
    prevPage = pagination.urls.prev;
    nextPage = pagination.urls.next;
    lastPage = pagination.urls.last;
  }

  const handlerPagination = (url, type) => {
    //TODO: this function is similar to handlerSearch and handlerShowCollection
    //It should be unified, perhaps by passing it to the context.
    if (inputSearched === "Collection All") {
      showCollection(url)
        .then((data) => {
          setPagination(data.pagination);
          let collection_result = data.releases.map((e) => {
            return e.basic_information;
          });
          setResult(collection_result);
          setInputSearched("Collection All");
        })
        .catch((error) => console.log(error));
    } else {
      search(url)
        .then((data) => {
          setPagination(data.pagination);
          setResult(data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="row">
      <Btn
        onClick={firstPage ? () => handlerPagination(firstPage) : () => {}}
        btn_text={`<<`}
        disabled={firstPage ? "" : "disabled"}
      />
      <Btn
        onClick={prevPage ? () => handlerPagination(prevPage) : () => {}}
        btn_text={`<`}
        disabled={prevPage ? "" : "disabled"}
      />
      {pagination.urls ? (
        <span>
          page {pagination.page} of {pagination.pages}
        </span>
      ) : null}
      <Btn
        onClick={nextPage ? () => handlerPagination(nextPage) : () => {}}
        btn_text={`>`}
        disabled={nextPage ? "" : "disabled"}
      />
      <Btn
        onClick={lastPage ? () => handlerPagination(lastPage) : () => {}}
        btn_text={`>>`}
        disabled={lastPage ? "" : "disabled"}
      />
    </div>
  );
};

export default Pagination;
