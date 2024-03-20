import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const StudentInfo = () => {
  const { staffId } = useParams();
  const [staffData, setStaffData] = useState([]);

  const handleApprove = async (data) => {
    let body = { data };
    console.log(data);
    let response = await fetch(
      "http://localhost:8080/staff/revaluationApprove",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    console.log(response);
  };

  useEffect(() => {
    if (staffId) {
      fetch(`http://localhost:8080/staff/${staffId}`)
        .then((response) => response.json())
        .then((data) => setStaffData(data))
        .catch((error) => console.error("Error fetching student data:", error));
    }
  }, [staffId]);

  return (
    <div className="container mt-5">
      <h2>Staff Information for Staff Id: {staffId}</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Approve Revaluation</th>
            <th>Staff Id</th>
            <th>Staff Name</th>
            <th>Revaluation Id</th>
            <th>Script Id</th>
            <th>Student Id</th>
          </tr>
        </thead>
        <tbody>
          {staffData.map((data, index) => (
            <tr key={index}>
              <td>
                <Link
                  onClick={async () => {
                    handleApprove(data);
                  }}
                  to={`/staff/revaluationApproved`}
                >
                  Approve
                </Link>
              </td>
              <td>{data.Staff_Id}</td>
              <td>{data.Staff_Name}</td>
              <td>{data.Revaluation_Id}</td>
              <td>{data.Script_Id}</td>
              <td>{data.Student_Id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentInfo;
