import React from "react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-5 bg-[#03152f] border-b border-white/10">
        <div>
          <h1 className="text-4xl font-bold tracking-wider">D A K</h1>
          <p className="text-xs tracking-[4px]">TECHNOLOGIES</p>
        </div>

        <ul className="hidden lg:flex gap-10 text-sm font-medium">
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-cyan-400" : "text-white"
            }
          >
            <li>Home</li>
          </NavLink>

          {/* Services */}
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-cyan-400" : "text-white"
            }
          >
            <li>Services</li>
          </NavLink>

          {/* Solutions  */}
          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              isActive ? "text-cyan-400" : "text-white"
            }
          >
            <li>Solutions</li>
          </NavLink>

          {/* Industries  */}
          <NavLink
            to="/industries"
            className={({ isActive }) =>
              isActive ? "text-cyan-400" : "text-white"
            }
          >
            <li>Industries</li>
          </NavLink>

          {/* Portfolio */}
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "text-cyan-400" : "text-white"
            }
          >
            <li>Portfolio</li>
          </NavLink>

          {/* About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-cyan-400" : "text-white"
            }
          >
            <li>About Us</li>
          </NavLink>

          {/* Careers */}
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              isActive ? "text-cyan-400" : "text-white"
            }
          >
            <li>Careers</li>
          </NavLink>
        </ul>

        <NavLink to="/contact">
          <button className="hidden lg:flex bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-xl font-semibold text-white">
            Get In Touch
          </button>
        </NavLink>

        <button className="lg:hidden">
          <Menu />
        </button>
      </nav>
    </>
  );
}

export default Navbar;
