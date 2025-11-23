import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import Flower from "./pages/Flower";
import Message from "./pages/Message";
import Pictures from "./pages/Pictures";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/flower" element={<Flower />} />
        <Route path="/message" element={<Message />} />
        <Route path="/pictures" element={<Pictures />} />
      </Routes>
    </Router>
  );
}

export default App;
