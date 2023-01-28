import React, { useState, useEffect } from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import axios from "axios";

export function ApiPdfView() {
  const [file, setFile] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchPDF() {
      const response = await axios.post(
        // "https://your-api-endpoint.com/pdf-file",
        "http://20.204.122.192:8080/stlap/upload/",
        {
          responseType: "blob", // Ensure that the response is treated as a blob
        }
      );
      setFile(response.data);
    }
    fetchPDF();
  }, []);

  const onDocumentLoadSuccess = (pdf) => {
    setTotalPages(pdf.numPages);
  };

  return (
    <div>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from({ length: totalPages }, (_, i) => (
          <Page key={i + 1} pageNumber={i + 1} />
        ))}
      </Document>
    </div>
  );
}
