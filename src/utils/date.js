export const getDate = () => {
  const d = new Date();
  const dt = {
    YYYY: d.getFullYear(),
    MM: ('00' + (d.getMonth() + 1)).slice(-2),
    DD: d.getDate(),
    HH: d.getHours(),
    MI: d.getMinutes(),
  };
  return `${dt.YYYY}-${dt.MM}-${dt.DD} ${dt.HH}:${dt.MI}`;
}