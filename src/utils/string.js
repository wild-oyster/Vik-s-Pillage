export const truncateString = (string, maxLength) => {
  if (string.length <= maxLength) {
    return string;
  }
  return string.substr(0, maxLength) + "...";
};
