import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show first page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

//   not relevant for single page
  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

//   not relevant for single page
  function previousPage() {
    changePage(-1);
  }

//   not relevant for single page
  function nextPage() {
    changePage(1);
  }

  // set pdf val to = props sent in given the prop sent in will be a linked .pdf
  const { pdf } = props;

  
  return (
    <>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} scale={2}/>
      </Document>
      {/* <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div> */}
    </>
  );
}