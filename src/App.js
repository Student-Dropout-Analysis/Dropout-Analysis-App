import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Navbar from "./components/Navbar/Navbar.js";
import{Route,Routes} from "react-router-dom"

function App() {
  
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  </>
  );
}

export default App;
