export default function getStudentIdsSum(studentsArr) {
  return studentsArr
    .filter((student) => student.id !== undefined)
    .map((student) => student.id)
    .reduce((acc, value) => acc + value, 0);
}
