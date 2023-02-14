import { DatePicker } from "@progress/kendo-react-dateinputs";
import React from "react";

const DataPicker = () => {
  const value = new Date("24-sep-2022");
  return (
    <div
      className="App-header"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100px",
        width: "200px",
        right: "40%",
      }}
    >
      <DatePicker defaultValue={value} format="dd-MMM-yyyy" />
    </div>
  );
};

export default DataPicker;
