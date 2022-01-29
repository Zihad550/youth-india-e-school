import { BrowserRouter, Route, Routes } from "react-router-dom";
import GiveAttendance from "./Pages/Attendance/SchoolAdminDashboard/GiveAttendance/GiveAttendance";
import UpdateAttendance from "./Pages/Attendance/SchoolAdminDashboard/UpdateAttendance/UpdateAttendance";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/giveAttendance" element={<GiveAttendance />} />
          <Route path="/updateAttendance" element={<UpdateAttendance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
