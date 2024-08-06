export function getThursday(previousWeek = false): Date {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const thursday = 4;
  let diff: number;

  if (previousWeek)
    diff =
      dayOfWeek >= thursday
        ? -(dayOfWeek - thursday + 7)
        : -(7 - (thursday - dayOfWeek));
  else
    diff =
      dayOfWeek <= thursday ? thursday - dayOfWeek : 7 - dayOfWeek + thursday;

  const nextThursday = new Date(today);
  nextThursday.setDate(today.getDate() + diff);
  return nextThursday;
}

export function setWeekDay(date: Date, week: number) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + (week - date.getDay())
  );
}

export function nextWeek(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
}

export function previousWeek(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
}

export function getCurrentHour(date: Date) {
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  return `${hour}:${minute}`;
}

export function getCurrentDate(date: Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).padStart(2, '0');
  return `${day}/${month}/${year}`;
}

export function getISODate(date: Date) {
  const copy = new Date(date);
  copy.setHours(-3);
  return copy.toISOString().split('T')[0];
}
