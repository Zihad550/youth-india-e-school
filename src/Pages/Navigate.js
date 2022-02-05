import React from "react";
import { useNavigate } from "react-router-dom";

const Navigate = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="ml-4 text-white my-2 bg-blue-400 px-4 py-1 rounded-tl-lg rounded-bl-lg"
      >
        Edit Teacher Profile
      </button>
      <button
        onClick={() => navigate("/editStudentProfile")}
        className=" text-white my-2 bg-violet-400 px-4 py-1 rounded-tr-lg rounded-br-lg"
      >
        Edit Student Profile
      </button>
    </div>
  );
};

export default Navigate;
