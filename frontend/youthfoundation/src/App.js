
import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";

import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";



function App() {
  return (
    <>
      
        <Navbar />
        <div id="main">
          <Sidebar />
          <AllRoutes />
        </div>
     
    </>
  );
}

export default App;
