import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Certificate from "./Components/Certificate/Certificate";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
