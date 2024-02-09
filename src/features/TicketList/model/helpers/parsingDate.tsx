import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import ruLocale from 'dayjs/locale/ru';

dayjs.extend(localizedFormat).locale(ruLocale);

const parsingDate = (dateString: string) => {
  const dateObj = dayjs(dateString);
  const formattedTime = dateObj.format('HH.mm');
  const formattedDate = dateObj.format('DD MMM dd.');

  return {
    time: formattedTime,
    date: formattedDate,
  };
};

export { parsingDate };
