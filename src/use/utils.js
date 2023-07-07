export const formatObjectDate = (date) => {
  return (
    Intl.DateTimeFormat("ru-RU").format(date) +
    " " +
    Intl.DateTimeFormat("ru-RU", {
      hour: "numeric",
      hour12: false,
      minute: "numeric",
    }).format(date)
  );
};
