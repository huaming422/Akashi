import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import "./App.css";
import "./dark.css";
import Home from "./pages/Home";
import Header from "./containers/Layouts/Header";
import Footer from "./containers/Layouts/Footer";
import Burn from "./pages/burn/burn";
import Cloud from "./pages/cloud/cloud";
import { useState } from "react";

function App() {
  const [darkmode, setDarkMode] = useState(true);

  return (
    <div
      className={`App flex flex-col bg-[#F9E8D0] ${darkmode ? "darkmode" : ""}`}
      style={{ minHeight: "100vh" }}
    >
      <Router>
        <Header darkmode={darkmode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkmode={darkmode} />} />
          <Route path="/cloud" element={<Cloud darkmode={darkmode} />} />
          <Route path="/burn" element={<Burn darkmode={darkmode} />} />
        </Routes>
        <Footer darkmode={darkmode} />
      </Router>
    </div>
  );
}

export default App;