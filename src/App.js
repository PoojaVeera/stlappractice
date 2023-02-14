import React from "react";
import "./App.scss";
import { ApiPdfView } from "./pages/ApiPdfView";
import { ImgPdf } from "./pages/ImgPdf";
import { Pdf } from "./pages/PDF";
import ImageView from "./pages/ImageView";
import { PdfView } from "./pages/PdfView";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import DataPicker from "./pages/DataPicker";
import { DatePicker1 } from "./pages/DatePicker1";
import { DropdownColor } from "./pages/DropdownColor";

function App() {
  return (
    <div className="App">
      {/* <ImageView /> */}
      {/* <PdfView /> */}
      {/* <Pdf /> */}
      {/* <ApiPdfView /> */}
      {/* <ImgPdf /> */}
      {/* <DataPicker /> */}
      <DropdownColor />
    </div>
  );
}

export default App;
