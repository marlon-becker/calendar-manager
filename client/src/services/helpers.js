import dateFns from 'date-fns';

const getDateKey = date => {
  return Number(
    `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${(
      '0' + date.getDate()
    ).slice(-2)}`
  );
};

const getDateFormatFromKey = dateKey => {
  const dateKeyString = dateKey.toString();
  const year = Number(dateKeyString.substr(0, 4));
  const month = Number(dateKeyString.substr(4, 2));
  const day = Number(dateKeyString.substr(6, 2));

  const date = new Date(year, month - 1, day);
  return dateFns.format(date, 'MM/DD/YYYY');
};

const getTimeFromDate = date => {
  const parsedDate = new Date(date);

  return dateFns.format(parsedDate, 'HH:mm') + 'h';
};

const getFormatDate = date => {
  const parsedDate = new Date(date);

  return dateFns.format(parsedDate, 'DD MMMM YYYY');
};
export { getDateKey, getDateFormatFromKey, getTimeFromDate, getFormatDate };
