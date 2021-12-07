import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHTML from "../../components/NavbarHTML/NavbarHTML";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import UsersHome from "../UsersHome/UsersHome";
import UsersFormUpdate from "../UsersFormUpdate/UsersFormUpdate";
import Error404 from "./../../components/Error404/Error404";
import UsersProvider from "../../providers/UsersProvider";

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

        <UsersProvider>
          <Routes>
            <Route path="/users" element={<UsersHome />}></Route>
            <Route path="/users/*" element={<UsersHome />}></Route>
            <Route path="/users/:id" element={<UsersFormUpdate />}></Route>
          </Routes>
        </UsersProvider>
        <Routes>
          {/* <Route path="*" exact={true} element={<Error404 />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}
