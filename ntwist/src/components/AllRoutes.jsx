import React from "react";
import { Route, Routes } from "react-router-dom";
import Page from "../page/Page";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Page/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
