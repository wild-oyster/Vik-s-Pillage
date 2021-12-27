export const truncateString = (string: string, maxLength: number) => {
  if (string.length <= maxLength) {
    return string;
  }
  return string.substr(0, maxLength) + "...";
};
