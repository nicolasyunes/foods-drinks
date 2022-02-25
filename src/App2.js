import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
 
} from "react-router-dom";
import Login from "./Login"
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Logout from "./Logout";


function App2() {

  
  
  return (
    <BrowserRouter>
      <NavBar  />
      <Routes>
        <Route  path="/" element={<Login/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/logout" element={<Logout />}/>
      </Routes>
     
    </BrowserRouter>
  );
}


export default App2;