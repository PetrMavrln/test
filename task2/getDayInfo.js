function getWeek(someDate) {

  const endTime = new Date(someDate);
  const startTime = new Date(someDate.getFullYear(), someDate.getMonth() ,1);
  let numberOfDays = Math.floor((endTime - startTime) / (24 * 60 * 60 * 1000));
  let res = Math.ceil(( endTime.getDay() + 1 + numberOfDays) / 7);

  return res;

}

function getDay(data) {

  let d = data.getDay();
  if (d == 0) {
    d = 7;
  }

  return d;
}

function getMonth(m) {
    if (!m) return m;

  return m[0].toUpperCase() + m.slice(1);
}

function getDayInfo(date) {

  let daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  const newDate = new Date(date);
  let year = newDate.getFullYear();
  let month = newDate.toLocaleString('default', { month: 'short' });
  month = getMonth(month);
  let week = getWeek(newDate);
  let day = getDay(newDate);
  let result = (`${daysOfWeek[day]}, ${week} неделя ${month} ${year} года`);

  alert(result);

  return result
}

getDayInfo('3.26.2022');
