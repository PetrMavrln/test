function getWeek(someDate) {

  const endTime = new Date(someDate);
  const startTime = new Date(someDate.getFullYear(), someDate.getMonth() ,1);
  let numberOfDays = Math.floor((endTime - startTime) / (24 * 60 * 60 * 1000));
  let res = Math.ceil(( endTime.getDay() + 1 + numberOfDays) / 7);

  return res;

}

function getMonth(m) {

  if (!m) return m;

    m = m[0].toUpperCase() + m.slice(1);

  if (m === "Март" || m === "Август") {
    m = m + "а";
  } else {
    m = m.slice(0, m.length-1) + "я";
  }

  return m;
}

function getDayInfo(date) {

  let daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  const newDate = new Date(date);
  let year = newDate.getFullYear();
  let month = newDate.toLocaleString('default', { month: "long" });
  month = getMonth(month);
  let week = getWeek(newDate);
  let day = newDate.getDay();
  let result = (`${daysOfWeek[day]}, ${week} неделя ${month} ${year} года`);

  return result
}

getDayInfo('1.31.2022');
