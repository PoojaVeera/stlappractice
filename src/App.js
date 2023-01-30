import React from "react";
import "./App.scss";
import { ApiPdfView } from "./pages/ApiPdfView";
import { ImgPdf } from "./pages/ImgPdf";
import { Pdf } from "./pages/PDF";
import ImageView from "./pages/ImageView";
import { PdfView } from "./pages/PdfView";

function App() {
  return (
    <div className="App">
      {/* <ImageView /> */}
      {/* <PdfView /> */}
      {/* <Pdf /> */}
      {/* <ApiPdfView /> */}
      <ImgPdf />
    </div>
  );
}

export default App;
