export const formatDate = (date) => {
  let articleDate = {};
  let dateFormatted = date.split("T");
  let time = dateFormatted[1].split(".");
  articleDate.date = dateFormatted[0];
  articleDate.time = time[0];
  return articleDate;
};
