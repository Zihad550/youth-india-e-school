import React, { useState } from "react";

const EditTeacherProfile = () => {
  const [data, setData] = useState({});
  console.log(data);

  const handleFormData = (e) => {
    let newData = { ...data };
    if (e.target.name === "subjects") {
      newData[e.target.name] = e.target.value;
      const data = newData.subjects.split(" ");
      newData[e.target.name] = data;
    } else {
      newData[e.target.name] = e.target.value;
    }
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
        Edit Teacher Profile
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
          type="text"
          placeholder="Subjects"
          name="subjects"
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

export default EditTeacherProfile;
