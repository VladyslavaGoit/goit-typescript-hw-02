/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
    Sunday 
}

const weekend = [Days.Saturday, Days.Sunday]

const isWeekend = (day:Days):boolean => {
  return weekend.includes(day)
}