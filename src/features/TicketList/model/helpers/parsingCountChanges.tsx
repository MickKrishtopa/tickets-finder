const parsingCountChanges = (count: number) => {
  if (count === 1) {
    return 'Без пересадок';
  }

  if (count === 2) {
    return '1 пересадка';
  }

  if (count > 2 && count < 6) {
    return `${count} пересадки`;
  }

  return `${count} пересадок`;
};

export { parsingCountChanges };
