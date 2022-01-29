import React from "react";
import GiveAttendance from "../GiveAttendance/GiveAttendance";
import UpdataAttendance from "../UpdateAttendance/UpdateAttendance";

const SchoolAdminDashboard = () => {
  return (
    <div>
      <GiveAttendance />
      <UpdataAttendance />
    </div>
  );
};

export default SchoolAdminDashboard;
