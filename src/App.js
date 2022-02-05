import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditTeacherProfile from "./Pages/EditTeacherProfile/EditTeacherProfile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EditTeacherProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
