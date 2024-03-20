import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [rollNumber, setRollNumber] = useState("");

  return (
    <div className="container mt-5">
      <form>
        <div className="form-group">
          <label>Enter Roll Number:</label>
          <input
            type="text"
            className="form-control"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
        </div>
        <Link to={`/students/${rollNumber}`} className="btn btn-primary">
          Submit
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
