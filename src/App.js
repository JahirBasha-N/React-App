import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RevaluationApplied from "./components/RevaluationApplied";
import StudentInfo from "./components/StudentInfo";
import StaffLogin from "./components/StaffLogin";
import StaffInfo from "./components/StaffInfo";
import RevaluationApproved from "./components/RevaluationApproved";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/students" element={<LoginForm />} />
        <Route path="/staff" element={<StaffLogin />} />
        <Route path="/staff/:staffId" element={<StaffInfo />} />
        <Route
          path="/staff/revaluationApproved"
          element={<RevaluationApproved />}
        />
        <Route path="/students/:rollNumber" element={<StudentInfo />} />
        <Route path="/students/revaluation" element={<RevaluationApplied />} />
      </Routes>
    </Router>
  );
}

export default App;
