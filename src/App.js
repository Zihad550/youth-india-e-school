import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditStudentProfile from "./Pages/EditStudentProfile/EditStudentProfile";
import EditTeacherProfile from "./Pages/EditTeacherProfile/EditTeacherProfile";
import Navigate from "./Pages/Navigate";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigate />
        <Routes>
          <Route path="/" element={<EditTeacherProfile />} />
          <Route path="/editStudentProfile" element={<EditStudentProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
