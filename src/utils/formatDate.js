export const formatDate = (date) => {
  const createDate = new Date(date);
  return createDate.toLocaleString("en-GB", { timeZone: "UTC" });
};
