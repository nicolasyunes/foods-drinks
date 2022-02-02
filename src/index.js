// index.js
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,Link
} from "react-router-dom";
import About from "./About";
import App from "./App";
import Home from "./Home";

import {Container,Nav,Navbar} from "react-bootstrap"

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  rootElement
);