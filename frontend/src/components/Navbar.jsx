import React, { useState,useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="md:flex justify-between items-center p-4  relative">
      {/* Logo + Mobile Menu Button */}
      <div className="flex gap-4 items-center">
        <Link className="flex gap-4 items-center" to={"/"}>
        <img className="w-6" src="/assets/navbar/icon.png" alt="icon" />
          <h1 className="font-bold text-primary">Todo Daily</h1>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary text-2xl ml-auto"
        >
          ☰
        </button>
      </div>

      {/* Navigation Links  */}
      <ul
        className={`md:flex gap-4 ${
          menuOpen ? "absolute top-12 left-0 w-full bg-white p-4 shadow-md" : "hidden md:flex"
        }`}
      >
        <NavLink to={"/auth/login"} className="block py-2 md:py-0 text-primary">
          Login
        </NavLink>
        <NavLink to={"/auth/register"} className="block py-2 md:py-0">
          Signup
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
