import logo from './logo.svg';

import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>  
    );
  
    // <div className="App">
    //   <div className = "Header">

    //   </div>
    //   <div className = "Filters">
    //     <Filter></Filter>
    //   </div>
    //   <div className = "Content">
    //   <BondList>
    //   </BondList>
    //   </div>
    // </div>

}

export default App;
