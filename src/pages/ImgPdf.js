import React, { useState } from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import { Button } from "@progress/kendo-react-buttons";

export function ImgPdf() {
  const [imageUrl, setImageUrl] = useState(null);
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setImageUrl(URL.createObjectURL(selectedFile));
    }
  };
  const onDocumentLoadSuccess = (pdf) => {
    setTotalPages(pdf.numPages);
  };
  const previewFile = () => {
    setShow(true);
  };
  return (
    <div>
      <input type="file" onChange={onFileChange} accept="application/pdf" />
      <Button onClick={previewFile}>Preview</Button>
      {show && (
        <div>
          {imageUrl && <img src={imageUrl} alt="Uploaded" />}
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from({ length: totalPages }, (_, i) => (
              <Page key={i + 1} pageNumber={i + 1} />
            ))}
          </Document>
        </div>
      )}
    </div>
  );
}
