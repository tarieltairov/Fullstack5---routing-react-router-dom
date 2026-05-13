// helper для URL

export function buildNextParams(
  current: URLSearchParams,
  key: string,
  value: string,
) {
  const next = new URLSearchParams(current);

  if (value) {
    next.set(key, value);
  } else {
    next.delete(key);
  }

  // при смене любого фильтра - сбрасываем страницу на 1
  if (key !== 'page') {
    next.delete('page');
  }

  return next;
}
