import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <Router>
      <div className='container-fluid px-0'>
        <MainRoutes />
      </div>
    </Router>
  );
}

export default App;
