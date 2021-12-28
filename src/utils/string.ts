export const truncateString = (string: string, maxLength: number) => {
  if (string.length > maxLength) {
    return string.substring(0, maxLength - 3) + "...";
  }
  return string;
};
