import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  let token = window.localStorage.getItem("token")
  console.log("first token " , token)
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        
        {/* Routes before Login */}

        <Route
          path="/login"
          element={<Login onLoginUpdate={setIsLoggedIn} />}
        ></Route>
        <Route
          path="/signup"
          element={<Signup onLoginUpdate={setIsLoggedIn} />}
        ></Route>

        {/* Routes after login */}
        
        {isLoggedIn && (
          <>
            <Route
              path="/logout"
              element={<Logout onLoginUpdate={setIsLoggedIn} />}
            ></Route>
            <Route path="/about" element={<About />}></Route>
            
          </>
        )}

        {/* Routes for everyone */}

        <Route
          path="/"
          element={
            <Home isLoggedIn={isLoggedIn} onLoginUpdate={setIsLoggedIn} />
          }
        ></Route>
        <Route
          path="/home"
          element={
            <Home isLoggedIn={isLoggedIn} />
          }
        ></Route>

        <Route path="/:pageName" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


function Login({ onLoginUpdate }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        onLoginUpdate(true);
        navigate("/");
      }}
    >
      Login
    </button>
  );
}

function Signup({ onLoginUpdate }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        onLoginUpdate(true);
        navigate("/");
      }}
    >
      Signup
    </button>
  );
}

function Logout({ onLoginUpdate }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        onLoginUpdate(false);
        navigate("/");
        window.localStorage.setItem("token","")
      }}
    >
      Logout
    </button>
  );
}


function PageNotFound() {
  const params = useParams();
  let message = `"${params.pageName}" page not found!`;
  if (params.pageName == "about") {
    message = "You need to be logged in to access this page.";
  }

  return <p>{message}</p>;
}




export default App;