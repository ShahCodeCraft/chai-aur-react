import React from "react";

const StudentProps = ({ data }) => {
  return (
    <>
      <h1>Student List</h1>
      <table>
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-3">Student Name</th>
            <th className="border border-gray-300 px-4 py-3">Student Age</th>
            <th className="border border-gray-300 px-4 y-3">Student Course</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 y-3">
                {student.name}
              </td>
              <td className="border border-gray-300 px-4 y-3">{student.age}</td>
              <td className="border border-gray-300 px-4 y-3">
                {student.course}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default StudentProps;
