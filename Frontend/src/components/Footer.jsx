import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Cog,
  Lightbulb,
  User,
  Mail,
  Phone,
  MapPin,
  Brain,
  BookOpen,
  Briefcase,
  Shield,
  FileText,
} from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="border-t border-white/20 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <h1 className="text-4xl font-bold">D A K</h1>
            <p className="tracking-[4px] text-xs">TECHNOLOGIES</p>

            <p className="mt-6 text-gray-400 leading-7">
              We partner with visionaries to build future-ready digital
              solutions.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-5">Quick Links</h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <NavLink
                  to="/"
                  className="flex items-center gap-2 hover:text-cyan-400 transition"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  <Home size={16} />
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className="flex items-center gap-2 hover:text-cyan-400 transition"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  <Cog size={16} />
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/solutions"
                  className="flex items-center gap-2 hover:text-cyan-400 transition"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  <Lightbulb size={16} />
                  Solutions
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="flex items-center gap-2 hover:text-cyan-400 transition"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  <User size={16} />
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-5">Resources</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-cyan-400 transition"
                >
                  <Brain size={16} />
                  Insights
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-cyan-400 transition"
                >
                  <BookOpen size={16} />
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-cyan-400 transition"
                >
                  <Briefcase size={16} />
                  Case Studies
                </a>
              </li>
              <li>
                <NavLink
                  to="/careers"
                  className="flex items-center gap-2 hover:text-cyan-400 transition"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  <Briefcase size={16} />
                  Careers
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-5">Connect</h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3 hover:text-cyan-400 transition">
                <Mail size={18} />
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p>contact@daktechno.com</p>
                  <p>info@daktechno.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 hover:text-cyan-400 transition">
                <Phone size={18} />
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p>+91 9130567772</p>
                  <p>+91 8446170543</p>
                </div>
              </div>

              <div className="flex items-start gap-3 hover:text-cyan-400 transition">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500">Address</p>
                  <p>
                    716, Virat Nagar, Begur Road, Bommanahalli, Bengaluru -
                    560068.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500">
            © {new Date().getFullYear()} D A K Technologies. All rights
            reserved.
          </div>
          <div className="flex gap-6 text-gray-400 text-sm">
            <NavLink
              to="/privacy-policy"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <Shield size={14} />
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms-of-service"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <FileText size={14} />
              Terms of Service
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
