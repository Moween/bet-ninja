import format from "date-fns/format";
import parseJSON from "date-fns/parseJSON";

export const getTime = (date) => format(parseJSON(date), "HH:mm");

export const getDate = (date) => format(parseJSON(date), "dd/MM/yyyy");
