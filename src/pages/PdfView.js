import React, { useState } from "react";
// import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

export function PdfView() {
  const [file, setFile] = useState(null);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} accept="application/pdf" />

      <Document file={file}>
        <Page pageNumber={1} />
        <Page pageNumber={7} />
      </Document>
    </div>
  );
}

// export default PdfView;
