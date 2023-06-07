import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/home";
import Services from "./Pages/service";
import About from "../src/Pages/about";
import Team from "../src/Pages/team";
import Register from "../src/Pages/register";
import Login from "../src/Pages/login";
import Faq from "../src/Pages/faq";

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/service" element={<Services />} />
        <Route path="/faq" element={<Faq />} />

        </Routes>
       </Router>
    </div>
  );
}

export default App;
