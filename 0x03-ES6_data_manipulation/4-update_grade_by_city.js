function compareAndUpdate(student, newGradesArr) {
  // create a shallow copy of student object
  const updatedStudent = { ...student };
  // Find the matching grade object in the newsGradesArr
  const gradeObj = newGradesArr.find((grade) => grade.studentId === student.id);

  // If grade exists and is defined, update students object
  if (gradeObj && gradeObj.grade !== undefined) {
    updatedStudent.grade = gradeObj.grade;
  } else {
    updatedStudent.grade = 'N/A';
  }

  return updatedStudent;
}

export default function updateStudentGradeByCity(studentsArr, city, newGradesArr) {
  return studentsArr
    .filter((student) => student.location === city)
    .map((student) => compareAndUpdate(student, newGradesArr));
}
