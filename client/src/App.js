import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Request from "./pages/Request";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/Home"  element={<Home />} />
          <Route path = "/Details/byId/:id"  element = {<Details/>} />
          <Route path="/Request" element = {<Request/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// we need to prepare a api request for our own api and show all the users details.
// to do that we nwwd to acess the get end point in routes.
// use axios
