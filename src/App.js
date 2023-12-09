import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Login from "./components/Login/Login.js";
import Navbar from "./components/Navbar/Navbar.js";
import{Route,Routes} from "react-router-dom"
import Signup from "./components/Signup/Signup.js";

function App() {
  
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  </>
  );
}

export default App;
