export default function hasValuesFromArray(set, array) {
  // Return True if values exists else return False
  return array.every((value) => set.has(value));
}
