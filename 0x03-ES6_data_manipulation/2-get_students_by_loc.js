export default function getStudentsByLocation(studentsArr, strLocation) {
  return studentsArr.filter((student) => student.location === strLocation);
}
