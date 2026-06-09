import React from "react";
import {
  Menu,
  Home,
  Cog,
  Lightbulb,
  Building2,
  Briefcase,
  User,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-5 bg-[#03152f] border-b border-white/10">
        <div>
          <NavLink to="/">
            <h1 className="text-4xl font-bold tracking-wider">D A K</h1>
            <p className="text-xs tracking-[4px]">TECHNOLOGIES</p>
          </NavLink>
        </div>

        <ul className="hidden lg:flex gap-10 text-sm font-medium">
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 flex items-center gap-2"
                : "text-white flex items-center gap-2 hover:text-cyan-400 transition"
            }
          >
            <Home size={18} />
            <li>Home</li>
          </NavLink>

          {/* Services */}
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 flex items-center gap-2"
                : "text-white flex items-center gap-2 hover:text-cyan-400 transition"
            }
          >
            <Cog size={18} />
            <li>Services</li>
          </NavLink>

          {/* Solutions  */}
          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 flex items-center gap-2"
                : "text-white flex items-center gap-2 hover:text-cyan-400 transition"
            }
          >
            <Lightbulb size={18} />
            <li>Solutions</li>
          </NavLink>

          {/* Industries  */}
          <NavLink
            to="/industries"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 flex items-center gap-2"
                : "text-white flex items-center gap-2 hover:text-cyan-400 transition"
            }
          >
            <Building2 size={18} />
            <li>Industries</li>
          </NavLink>

          {/* Portfolio */}
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 flex items-center gap-2"
                : "text-white flex items-center gap-2 hover:text-cyan-400 transition"
            }
          >
            <Briefcase size={18} />
            <li>Portfolio</li>
          </NavLink>

          {/* About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 flex items-center gap-2"
                : "text-white flex items-center gap-2 hover:text-cyan-400 transition"
            }
          >
            <User size={18} />
            <li>About Us</li>
          </NavLink>

          {/* Careers */}
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 flex items-center gap-2"
                : "text-white flex items-center gap-2 hover:text-cyan-400 transition"
            }
          >
            <Users size={18} />
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
