import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Lavoro from "./components/Lavoro";
import Formazione from "./components/Formazione";
import Contatti from "./components/Contatti";
import Progetti from "./components/Progetti";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar visibile sempre */}
        <div className="page-content">
          <Routes>
            {/* Routes per navigare tra le pagine */}
            <Route path="/" element={<About />} />
            <Route path="/lavoro" element={<Lavoro />} />
            <Route path="/formazione" element={<Formazione />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/about" element={<About />} />
            <Route path="/progetti" element={<Progetti />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
