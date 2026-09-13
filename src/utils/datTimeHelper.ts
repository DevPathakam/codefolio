import { Duration, ReadableDuration } from '@/types/app.types';
import moment from 'moment';

export const getDuration = (monthYearObj: ReadableDuration): Duration => {
  const startDate = moment(
    `${monthYearObj.month} ${monthYearObj.year}`,
    'MMM YYYY',
  );
  const endDate = moment();

  const totalMonths = endDate.diff(startDate, 'months');
  const duration = moment.duration(totalMonths, 'months');
  return {
    years: duration.years(),
    months: duration.months(),
  };
};

export const formatDuration = (duration: Duration): string => {
  const { years, months } = duration;
  const yearStr = `${years} year${years !== 1 ? 's' : ''}`;
  const monthStr = `${months} month${months !== 1 ? 's' : ''}`;

  return `${yearStr}, ${monthStr}`;
};

export const calculateExperience = (monthYearObj: ReadableDuration): string => {
  const duration = getDuration(monthYearObj);
  return formatDuration(duration);
};
