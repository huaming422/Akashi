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
import { NotificationContainer } from "react-notifications";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const {
    themeMode,
    setThemeMode
  } = useContext(AppContext);

  return (
    <div
      className={`App flex flex-col bg-[#F9E8D0] ${themeMode ? "darkmode" : ""}`}
      style={{ minHeight: "100vh" }}
    >
      <NotificationContainer />
      <Router>
        <Header darkmode={themeMode} setDarkMode={setThemeMode} />
        <Routes>
          <Route path="/" element={<Home darkmode={themeMode} />} />
          <Route path="/cloud" element={<Cloud darkmode={themeMode} />} />
          <Route path="/burn" element={<Burn darkmode={themeMode} />} />
        </Routes>
        <Footer darkmode={themeMode} />
      </Router>
    </div>
  );
}

export default App;