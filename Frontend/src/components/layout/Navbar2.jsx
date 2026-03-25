import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";
import scrollToSection from "../../utils/scrollToSection";
import useScrollSpy from "../../hooks/useScrollSpy";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".nav-logo", {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }).from(
      ".nav-item",
      {
        y: -15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        clearProps: "all",
      },
      "-=0.4"
    );
  }, { scope: navRef });

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Services",
      id: "services",
      dropdown: [
        { name: "Web Development", href: "/services#web" },
        { name: "Mobile Apps", href: "/services#mobile" },
        { name: "UI/UX Design", href: "/services#design" },
        { name: "Enterprise Solutions", href: "/services#enterprise" },
      ],
    },
    { name: "Projects", id: "projects" },
    { name: "Why Choose Us", id: "why-choose-us" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const activeSection = useScrollSpy(
    navItems.map((item) => item.id),
    100
  );

  const handleNavClick = (e, item) => {
    e.preventDefault();
    const sectionId = item.id || item;

    if (item.path) {
      navigate(item.path);
      setIsOpen(false);
      return;
    }

    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/", { replace: false });
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }

    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 bg-white border-b border-[hsl(var(--border))] shadow-sm text-[var(--hds-color-heading)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="#home"
            className="nav-logo flex items-center space-x-2"
            onClick={(e) => handleNavClick(e, "home")}
          >
            <img
              src="/logos/logo.png"
              alt="DAK Technologies Logo"
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div
                      key={item.name}
                      className="relative group h-full flex items-center"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="nav-item relative group px-4 py-2 text-sm font-medium transition-all duration-300 text-[var(--hds-color-text)] hover:text-[var(--hds-color-primary)]">
                        {item.name}
                        <span
                          className={cn(
                            "absolute bottom-0 left-4 w-[calc(100%-2rem)] h-[2px] bg-[var(--hds-color-primary)] transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100",
                            activeDropdown === item.name && "scale-x-100"
                          )}
                        />
                      </button>

                      {/* DROPDOWN */}
                      <div
                        className={cn(
                          "absolute left-0 top-full w-72 rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-100 shadow-2xl transition-all duration-300 origin-top",
                          activeDropdown === item.name
                            ? "opacity-100 translate-y-0 visible scale-100"
                            : "opacity-0 -translate-y-3 invisible scale-95"
                        )}
                      >
                        <div className="p-5 space-y-3">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 rounded-lg text-sm font-medium text-[var(--hds-color-text)] hover:bg-gray-50 hover:text-[var(--hds-color-primary)] transition"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={item.name}
                    href={`#${item.id}`}
                    className={cn(
                      "nav-item relative group px-4 py-2 text-sm font-medium transition-all duration-300",
                      activeSection === item.id
                        ? "text-[var(--hds-color-primary)]"
                        : "text-[var(--hds-color-text)] hover:text-[var(--hds-color-primary)]"
                    )}
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    {item.name}

                    <span
                      className={cn(
                        "absolute bottom-0 left-0 w-full h-[2px] bg-[var(--hds-color-primary)] transition-transform duration-300 ease-out origin-left",
                        activeSection === item.id
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[var(--hds-color-text)] hover:text-[var(--hds-color-heading)] hover:bg-[hsl(var(--secondary))] transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isOpen
              ? "max-h-[500px] opacity-100 bg-white rounded-b-md shadow-sm border-t border-[hsl(var(--border))]"
              : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                      className="w-full text-left px-4 py-3 text-base font-medium text-[var(--hds-color-text)] flex justify-between items-center hover:bg-[hsl(var(--secondary))] rounded-md transition-all"
                    >
                      {item.name}
                      <span className={cn("transition-transform duration-200", activeDropdown === item.name ? "rotate-180" : "")}>
                        ▼
                      </span>
                    </button>

                    {activeDropdown === item.name && (
                      <div className="pl-6 space-y-2 animate-in slide-in-from-top-2 duration-300">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-2 text-sm text-[var(--hds-color-text)] hover:text-[var(--hds-color-primary)]"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  className="block px-4 py-3 text-base font-medium text-[var(--hds-color-text)] hover:text-[var(--hds-color-primary)] hover:bg-[hsl(var(--secondary))] rounded-md transition-all"
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
