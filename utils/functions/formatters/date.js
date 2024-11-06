import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export const formatDate = dayjs;
formatDate.extend(relativeTime);

export const randomDate = (start, end, format) => {
  const startFormatted = formatDate(start).valueOf();
  const endFormatted = formatDate(end).valueOf();
  const newDate =
    Math.floor(Math.random() * (endFormatted - startFormatted)) +
    startFormatted;
  const newDateFormatted = formatDate(newDate).format(format);
  return newDateFormatted;
};
