import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState,useEffect } from "react";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import Login from "./Login";
import { Button } from "@mui/material";
import {Modal} from "react-bootstrap"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token,setToken] = useState(null);
  
  
  useEffect (() => {
    const getToken = localStorage.getItem("token");
    
    console.log("tokensito " , token);

    if(getToken !== null) {
      setIsLoggedIn(true);
      setToken(getToken);
    }
    else {
       setIsLoggedIn(false);
       setToken(null);
    }
     
  

  },[])
  
  
  return (
    <BrowserRouter>
      <NavBar token={token} />
      <Routes>
        
        {/* Routes before Login */}

        <Route
          path="/login"
          element={<Login onLoginUpdate={setIsLoggedIn}/>}
        ></Route>
     

        {/* Routes after login */}
        
        {isLoggedIn && token !== null && (
          <>
            
          
            
          </>
        )}

        {/* Routes for everyone */}

        <Route
          path="/"
          element={
            <Home isLoggedIn={isLoggedIn} onLoginUpdate={setIsLoggedIn} token={token} />
          }
        ></Route>

        <Route path="/about" element={<About isLoggedIn={isLoggedIn} onLoginUpdate={setIsLoggedIn}  />}></Route>

        <Route
          path="/home"
          element={
            <Home isLoggedIn={isLoggedIn} onLoginUpdate={setIsLoggedIn} token={token} />
          }
        ></Route>
        
       

        <Route path="/:pageName" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}









function PageNotFound() {
  const params = useParams();
  let message = `"${params.pageName}" page not found!`;
  if (params.pageName == "about" || params.pageName == "home") {
    message = <h2>
      "You need to be logged in to access this page.";

    </h2>
    
  }

  return <h2>{message}</h2>;
}




export default App;