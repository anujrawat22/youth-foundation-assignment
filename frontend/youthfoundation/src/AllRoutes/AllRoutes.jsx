import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/main/main";
import Books from "../components/books/books";
import Addbooks from "../components/addbooks/addbooks";
import Updatebook from "../components/updateBooks/updatebook";



function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/books" element={<Books/>}></Route>
      <Route path="/addbooks" element={<Addbooks/>}></Route>
      <Route path="/update" element={<Updatebook/> }></Route>
    </Routes>
  );
}

export default AllRoutes;
