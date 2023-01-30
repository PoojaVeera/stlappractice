import React, { useState } from "react";
// import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

export function Pdf() {
  const [file, setFile] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const onDocumentLoadSuccess = (pdf) => {
    setTotalPages(pdf.numPages);
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} accept="application/pdf" />

      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from({ length: totalPages }, (_, i) => (
          <Page key={i + 1} pageNumber={i + 1} />
        ))}
      </Document>
    </div>
  );
}
