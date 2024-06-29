export const formateDate = (timestamp) => {
  const date = new Date(timestamp);

  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedDate = formatter.format(date);
  return formattedDate;
};
