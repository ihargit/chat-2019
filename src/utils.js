export const convertEpochDate = (date) => {
  return new Date(date * 1000).toUTCString();
}
