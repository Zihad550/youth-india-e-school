import React, { useState } from "react";

const EditStudentProfile = () => {
  const [data, setData] = useState({});
  console.log(data);

  const handleFormData = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    if (Object.keys(data).length === 5) {
      alert("Successfully edited");
      e.target.reset();
    }
  };
  return (
    <div>
      <h2 className="text-center my-5 text-5xl border-b-2 pb-2 border-amber-700 mx-20">
        Edit Student Profile
      </h2>
      <form className="w-3/4 mx-auto" onSubmit={handleEditProfile}>
        <input
          className="border border-gray-400 focus:outline-gray-500 w-full mb-2 text-xl py-1 rounded-md pl-2"
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleFormData}
        />
        <input
          className="border border-gray-400 focus:outline-gray-500 w-full mb-2 text-xl py-1 rounded-md pl-2"
          type="number"
          placeholder="Class"
          name="class"
          min="1"
          max="10"
          onChange={handleFormData}
        />
        <input
          className="border border-gray-400 focus:outline-gray-500 w-full mb-2 text-xl py-1 rounded-md pl-2"
          type="number"
          placeholder="Id"
          name="id"
          min="1"
          onChange={handleFormData}
        />
        <input
          className="border border-gray-400 focus:outline-gray-500 w-full mb-2 text-xl py-1 rounded-md pl-2"
          type="text"
          placeholder="School"
          name="school"
          onChange={handleFormData}
        />
        <input
          className="border border-gray-400 focus:outline-gray-500 w-full mb-2 text-xl py-1 rounded-md pl-2"
          type="number"
          placeholder="Age"
          name="age"
          min="3"
          onChange={handleFormData}
        />
        <button
          type="submit"
          className="bg-blue-400 rounded-md py-1 px-5 text-lg text-white hover:bg-blue-500"
        >
          Edit Student Profile
        </button>
      </form>
    </div>
  );
};

export default EditStudentProfile;
