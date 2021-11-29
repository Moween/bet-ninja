import format from "date-fns/format";
import parseJSON from "date-fns/parseJSON";
import lightFormat from 'date-fns/lightFormat';
import subDays from 'date-fns/subDays';

export const getTime = (date) => format(parseJSON(date), "HH:mm");

export const getDate = (date) => format(parseJSON(date), "dd/MM/yyyy");

export const getPastDates = (days) =>
  lightFormat(subDays(new Date(), days), 'yyyy-MM-dd');
