import React from "react";

const GiveAttendance = () => {
  return (
    <div>
      <h2 className="text-center text-4xl mt-3 mb-10">
        School Admin Dashboard
      </h2>

      {/* staff and student */}
      <div className="flex mx-20 mb-10">
        <button className="text-gray-900 bg-gray-300 py-1 px-5 mb-6 border-2 border-gray-500 rounded-sm hover:bg-blue-300 w-3/4">
          Staff
        </button>
        <button className="text-gray-900 bg-gray-300 py-1 px-5 mb-6 border-2 border-l-0 border-gray-500 rounded-sm hover:bg-blue-300 w-full">
          Student
        </button>
      </div>

      {/* admin attendance */}
      <div>
        <p className="ml-14 bg-white inline-block px-1  z-10">
          Admin Attendance
        </p>
        <div className="border-x-2 border-b-2 border-t-2 pt-10 border-gray-400 w-3/4 ml-10 pl-10 pb-10 -mt-3 ">
          <button className="text-gray-900 bg-gray-300 py-1 w-1/3 mb-6 border-2 border-gray-400 rounded-sm hover:bg-yellow-200 block">
            Teacher Attendance
          </button>
          <button className="text-gray-900 bg-gray-300 py-1 w-1/2  border-2 border-gray-400 rounded-sm hover:bg-yellow-200 ">
            Admin Attendance
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiveAttendance;
