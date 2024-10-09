export default function updateUniqueItems(mapData) {
  if (!(mapData instanceof Map)) {
    throw new Error('Cannot process');
  }

  mapData.forEach((value, key) => {
    if (value === 1) {
      mapData.set(key, 100);
    }
  });

  return mapData;
}
