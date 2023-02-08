function updateStudentGradeByCity(arr, city, newGrades) {
  return arr.filter((item) => item.location === city).map((student) => {
    const grades = newGrades.filter((grade) => grade.studentId === student.id);
    const obj = {
      ...student,
      grade: grades[0] ? grades[0].grade : 'N/A',
    };
    return obj;
  });
}
export default updateStudentGradeByCity;
