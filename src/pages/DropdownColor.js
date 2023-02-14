import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import "../App.scss";

const data = [
  "Value 1",
  "Value 2",
  "Value 3",
  "Value 4",
  "Value 5",
  "Value 6",
  "Value 7",
  "Value 8",
  "Value 9",
  "Value 10",
];
// const itemRender = (li, itemProps) => {
//   return (
//     <li
//       className="item"
//       style={{
//         backgroundColor: "green",
//         color: "red",
//       }}
//       {...itemProps}
//     />
//   );
// };

// const itemRender = (li, itemProps) => {
//   const value = itemProps.dataItem;

//   return;
//   <div className="pp">React.cloneElement(li, li.props, value);</div>;
// };

const itemRender = (li, itemProps) => {
  const index = itemProps.index;
  const itemChildren = (
    <span
      style={{
        color: "green",
      }}
    >
      {li.props.children} {index}
    </span>
  );
  return React.cloneElement(li, li.props, itemChildren);
};

export const DropdownColor = () => {
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <DropDownList
        data={data}
        value={value}
        onChange={handleChange}
        itemRender={itemRender}
        // className="custom-dropdown"
      />
    </div>
  );
};
