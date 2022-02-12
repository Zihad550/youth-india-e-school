import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LibrarySubject from "./Pages/LibrarySubject";
import Navigate from "./Pages/Navigate";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigate />
        <Routes>
          <Route path="/" element={<LibrarySubject />} />
          <Route path="/librarySubject" element={<LibrarySubject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
