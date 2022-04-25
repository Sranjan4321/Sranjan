import { useContext } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { Nav, A } from "../main.styled";
import { AuthContext } from "../context/AuthContext";
import { Home } from "./Home";
import { About } from "./About";
import Books from "./Books";
import { Login } from "./Login";
import { RequiredAuth } from "../Routes/RequiredAuth";

export const Navbar = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully

  return (
    <>
      <Nav>
        <A>
          <NavLink to="/">Home</NavLink>
        </A>
        <A>
          <NavLink to="about">About</NavLink>
        </A>
        <A>
          <NavLink to="books">Books</NavLink>
        </A>
        <A>
          <NavLink to="login">Login</NavLink>
        </A>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
