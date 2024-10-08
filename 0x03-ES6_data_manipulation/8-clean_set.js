export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  return [...set]
    .filter((word) => typeof word === 'string' && word.startsWith(startString))
    .map((word) => word.slice(startString.length))
    .join('-');
}
