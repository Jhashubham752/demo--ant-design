import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import DataTable from "./Pages/DataTable";
import LoginForm from "./Pages/LoginForm";
import "antd/dist/antd.css";
import Register from "./Pages/Register";
function App() {

  return (

    <>
      <Routes>
        <Route element={<Dashboard />} path="/" exact />
        <Route element={<LoginForm />} path="/login" exact />
        <Route element={<DataTable />} path="/table" exact />
        <Route element={<Register />} path="/Register" exact />

      </Routes>
    </>


  );
}

export default App;
