import moment from 'moment';
import {DateFormat} from 'lib/constants';

export const formatToDateTime = (
  date: Date | string,
  format: string = DateFormat.MonthDateYearFormat
) => {
  return moment(date).format(format);
};

export const formatDateShortFormat = (
  date?: Date | string,
  dateFormat = DateFormat.ShortDayMonthYearFormat
) => {
  if (!date) {
    return '';
  }

  return formatToDateTime(date, dateFormat);
};

export const formatDateWithStartDay = (date: Date | string) => {
  return moment(date).startOf('day').format(DateFormat.MonthDateYearFormat);
};

export const formatDateWithEndDay = (date: Date | string) => {
  return moment(date).endOf('day').format(DateFormat.MonthDateYearFormat);
};

export const currentDateShortFormat = () => {
  return formatToDateTime(new Date(), DateFormat.ShortDayMonthYearFormat);
};

export const getDateTimeNow = () => {
  return moment().utc().toISOString();
};

export const getDateNow = () => {
  return moment().toDate();
};

export const getAddDaysToDate = (value: number) => {
  return moment().add(value, 'days').toDate();
};

export const toLocaleDate = (date: string) => {
  return new Date(date).toLocaleString([], {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const dateStringToDate = (dateString: string): Date => {
  const date = moment(dateString, DateFormat.DayMonthTwoYearFormat).toDate(); // dateString: DD/MM/YY
  //const date = new Date(dateString); // always: mm/dd/yy
  return date ?? new Date(); // return dd/mm/yy
};

export const formatRemoveTime = (date = new Date()) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

export const isSameDate = (date1: Date | string, date2: Date | string) => {
  const result = moment(date1).isSame(date2, 'day');
  return result;
};

export const addDays = (date: Date, days: number) => {
  return moment(date).add(days, 'days').toDate();
};

export const toMomentDate = (date: Date) => {
  return moment(date).toDate();
};

export const dateStringAddDays = (date: string, days: number) => {
  const addedDate = addDays(dateStringToDate(date), days);

  return moment(addedDate).format(DateFormat.ShortMonthDayFormat);
};
