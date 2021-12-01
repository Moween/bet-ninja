import format from 'date-fns/format';
import parseJSON from 'date-fns/parseJSON';
import lightFormat from 'date-fns/lightFormat';
import subDays from 'date-fns/subDays';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

export const getTime = (date) => format(parseJSON(date), 'HH:mm');

export const getDate = (date) => format(parseJSON(date), 'dd/MM/yyyy');

export const getPastDates = (days) =>
  lightFormat(subDays(new Date(), days), 'yyyy-MM-dd');

const showOutcomeIcon = (outcome) => {
  if (outcome === 'WON') {
    return <CheckIcon sx={{ color: '#0099FA' }} />;
  } else if (!outcome) {
    return null;
  }

  return <CloseIcon sx={{ color: '#E70008' }} />;
};

export default showOutcomeIcon;
