export const weakMap = new WeakMap();
const MAX_CALLS_ENDPOINT = 5;
export function queryAPI(endPoint) {
  if (!weakMap.has(endPoint)) {
    weakMap.set(endPoint, 0);
  }
  weakMap.set(endPoint, weakMap.get(endPoint) + 1);
  if (weakMap.get(endPoint) >= MAX_CALLS_ENDPOINT) {
    throw new Error('Endpoint load is high');
  }
}
