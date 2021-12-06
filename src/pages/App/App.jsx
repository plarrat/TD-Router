import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHTML from "../../components/NavbarHTML/NavbarHTML";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import UsersHome from "../UsersHome/UsersHome";

export default function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <NavbarHTML />
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>

        <Routes>
          <Route path="/users" element={<UsersHome />}></Route>
          <Route path="/users/*" element={<UsersHome />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
