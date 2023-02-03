export default function appendToEachArrayValue(array, appendString) {
  let a = 0;
  for (const idx of array) {
    array[a] = appendString + idx;
    a += 1;
  }

  return array;
}
