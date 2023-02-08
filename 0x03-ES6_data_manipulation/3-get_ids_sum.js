function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) return -1;
  return arr.reduce((x, item) => x + item.id, 0);
}
export default getStudentIdsSum;
