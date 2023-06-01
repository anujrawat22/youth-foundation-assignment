import { createContext, useState } from "react";
import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";

import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

const UpdateContext = createContext();

function App() {
  const [id, setid] = useState("");
  return (
    <>
      <UpdateContext.Provider value={id}>
        <Navbar />
        <div id="main">
          <Sidebar />
          <AllRoutes />
        </div>
      </UpdateContext.Provider>
    </>
  );
}

export default App;
