const addMonth = (date: Date, month: number) => {
  date.setMonth(date.getMonth() + month);
  return date;
};

export default addMonth;
