import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [staffId, setStaffId] = useState("");

  return (
    <div className="container mt-5">
      <form>
        <div className="form-group">
          <label>Enter Staff Id:</label>
          <input
            type="text"
            className="form-control"
            value={staffId}
            onChange={(e) => setStaffId(e.target.value)}
          />
        </div>
        <Link to={`/staff/${staffId}`} className="btn btn-primary">
          Submit
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
