import { format } from "date-fns";
import { DatePicker } from "@progress/kendo-react-dateinputs";

export const DatePicker1 = () => {
  const a = "12-09-1999";
  const dateObj = new Date(a.split("-").reverse().join("/"));
  const formattedDate = format(dateObj, "dd-MMM-yyyy");
  return <DatePicker format="dd-MMM-yyyy" value={dateObj} />;
};
