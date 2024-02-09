const parsingDuration = (duration: number) => {
  const hours = Math.round(duration / 60);
  const minuts = duration % 60;
  return `${hours} ч ${minuts} мин`;
};

export { parsingDuration };
