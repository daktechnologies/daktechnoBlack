import React from "react";
import { NavLink } from "react-router-dom";

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
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/solutions"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  Solutions
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-5">Resources</h3>

            <ul className="space-y-3 text-gray-400">
              <li>Insights</li>
              <li>Blog</li>
              <li>Case Studies</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-5">Connect</h3>

            <div className="space-y-4 text-gray-400">
              <p>contact@daktechno.com</p>
              <p>info@daktechno.com</p>
              <p>+91 9130567772</p>
              <p>+91 8446170543</p>
              <p>
                716, Virat Nagar, Begur Road, Bommanahalli, Bengaluru - 560068.
              </p>
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
              className="hover:text-cyan-400 transition"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms-of-service"
              className="hover:text-cyan-400 transition"
            >
              Terms of Service
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
