export const convertEpochDate = (date) => {
  return new Date(date).toUTCString();
}
