function getStudentsByLocation(arr, loc) {
  if (!Array.isArray(arr)) return [];
  return arr.filter((item) => item.location === loc);
}
export default getStudentsByLocation;
