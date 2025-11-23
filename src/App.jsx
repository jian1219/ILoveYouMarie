import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Intro from "./pages/Intro";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
