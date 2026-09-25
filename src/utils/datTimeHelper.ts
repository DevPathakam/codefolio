import { Duration, ReadableDuration } from '@/types/app.types';
import moment from 'moment';

export const getDuration = (
  usingSince: ReadableDuration,
  lastUsed?: ReadableDuration,
): Duration => {
  const startDate = moment(
    `${usingSince.month} ${usingSince.year}`,
    'MMM YYYY',
  );
  const endDate = lastUsed
    ? moment(`${lastUsed.month} ${lastUsed.year}`, 'MMM YYYY')
    : moment();

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

export const calculateExperience = (
  usingSince: ReadableDuration,
  lastUsed?: ReadableDuration,
): string => {
  const duration = getDuration(usingSince, lastUsed);
  return formatDuration(duration);
};
