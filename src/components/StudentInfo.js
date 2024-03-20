import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const StudentInfo = () => {
  const { rollNumber } = useParams();
  const [studentData, setStudentData] = useState([]);
  const [studentRevaluationData, setStudentRevaluationData] = useState([]);

  const handleChallenge = async (data) => {};

  const handleRevaluation = async (data) => {
    let body = { data };
    console.log(data);
    let response = await fetch("http://localhost:8080/students/revaluation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(response);
  };

  useEffect(() => {
    if (rollNumber) {
      fetch(`http://localhost:8080/students/${rollNumber}`)
        .then((response) => response.json())
        .then((data) => setStudentData(data))
        .catch((error) => console.error("Error fetching student data:", error));
    }
  }, [rollNumber]);

  useEffect(() => {
    if (rollNumber) {
      fetch(`http://localhost:8080/students/revaluationData/${rollNumber}`)
        .then((response) => response.json())
        .then((data) => setStudentRevaluationData(data))
        .catch((error) => console.error("Error fetching student data:", error));
    }
  }, [rollNumber]);

  return (
    <div className="container mt-5">
      <h2>Student Information for Roll Number: {rollNumber}</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Apply For Revaluation</th>
            <th>Student Id</th>
            <th>Roll Number</th>
            <th>Subject Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((data, index) => (
            <tr key={index}>
              <td>
                <Link
                  onClick={async () => {
                    handleRevaluation(data);
                  }}
                  to={`/students/revaluation`}
                >
                  Apply
                </Link>
              </td>
              <td>{data.Student_Id}</td>
              <td>{data.Roll_Number}</td>
              <td>{data.Subject_Name}</td>
              <td>{data.Marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <h2>Revaluation Information for Roll Number: {rollNumber}</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Student Id</th>
            <th>Roll Number</th>
            <th>Subject Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {studentRevaluationData.map((data, index) => (
            <tr key={index}>
              <td>
                <td>
                  {data.status === 2 ? (
                    <Link
                      onClick={async () => {
                        handleChallenge(data);
                      }}
                      to={`/students/challenged`}
                    >
                      Challenge
                    </Link>
                  ) : (
                    <span>Challenge</span>
                  )}
                </td>
              </td>
              <td>{data.Student_Id}</td>
              <td>{data.Roll_Number}</td>
              <td>{data.Subject_Name}</td>
              <td>{data.Marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentInfo;
