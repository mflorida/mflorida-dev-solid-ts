const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
] as const;

export function employmentPeriod(start: string, end: string) {
  console.log('employmentPeriod');
  const timeZoneOffset = (new Date()).getTimezoneOffset();
  const startDate: Date = new Date(start + 'T01:01:01.001' + timeZoneOffset);
  const endDate: Date | any = /^[0-9]/.test(end)
    ? new Date(end + 'T01:01:01.001' + timeZoneOffset)
    : end;
  return (
    (months[startDate.getMonth()] + ', ' + startDate.getFullYear()) +
    ' - ' +
    (
      endDate.getMonth && endDate.getFullYear
        ? (months[endDate.getMonth()] + ', ' + endDate.getFullYear())
        : endDate
    )
  )
}
