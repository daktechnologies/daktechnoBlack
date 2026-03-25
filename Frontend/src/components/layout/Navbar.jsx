

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";
import scrollToSection from "../../utils/scrollToSection";
import useScrollSpy from "../../hooks/useScrollSpy";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const Navbar = () => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // useGSAP(() => {
  //   const tl = gsap.timeline();
  //   tl.fromTo(".nav-logo",
  //     { y: -50, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
  //   )
  //     .fromTo(".nav-item",
  //       { y: -20, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
  //       "-=0.5"
  //     );
  // }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".nav-logo", {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
      .from(".nav-item", {
        y: -15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        clearProps: "all"
      }, "-=0.4");
  }, { scope: navRef });


  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    {
      name: "Services",
      dropdown: [
        { name: "Web Development", href: "/services#web" },
        { name: "Mobile Apps", href: "/services#mobile" },
        { name: "UI/UX Design", href: "/services#design" },
        { name: "Enterprise Solutions", href: "/services#enterprise" },
      ],
    },
    { name: "Projects", href: "#projects" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];


  const activeSection = useScrollSpy(
    navItems
      .filter((item) => item.href)
      .map((item) => item.href.replace("#", "")),
    100
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled || isOpen
          ? "bg-white/50 backdrop-blur-md border-b border-gray-100 shadow-sm text-[var(--hds-color-heading)]"
          : "bg-transparent text-white"
      )}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          {/* <a
            href="#home"
            className="nav-logo flex items-center space-x-2"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                scrollToSection("home");
              }
            }}
          >
            {scrolled || isOpen ? (
              <span className="text-xl font-bold text-[var(--hds-color-primary)]">DAK <span className="text-[var(--hds-color-heading)]">Technologies</span></span>
            ) : (
              <span className="text-xl font-bold text-white">DAK Technologies</span>
            )}
          </a> */}

         <a
  href="#home"
  className="nav-logo flex items-center space-x-2"
  onClick={(e) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      scrollToSection("home");
    }
  }}
>
  {scrolled || isOpen ? (
    <img
      src="/logos/logo.png"
      alt="DAK Logo"
      className="h-14 w-auto object-contain"
    />
  ) : (
    <img
      src="/logos/white-logo.png"
      alt="DAK Logo White"
      className="h-14 w-auto object-contain"
    />
  )}
</a>

          {/* Desktop Navigation */}
          <div className="hidden md:block h-full">
            <div className="ml-10 flex items-center space-x-1 h-full">

              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div
                      key={item.name}
                      className="relative group h-full flex items-center"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="nav-item relative group px-4 py-2 text-sm font-semibold transition-all duration-300 hover:text-[var(--hds-color-primary)]">
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
                    href={item.href}
                    className={cn(
                      "nav-item relative group px-4 py-2 text-sm font-semibold transition-all duration-300",
                      activeSection === item.href.replace("#", "")
                        ? "text-[var(--hds-color-primary)]"
                        : "text-inherit hover:text-[var(--hds-color-primary)]"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href.replace("#", ""));
                    }}
                  >
                    {item.name}
                    <span
                      className={cn(
                        "absolute bottom-0 left-4 w-[calc(100%-2rem)] h-[2px] bg-[var(--hds-color-primary)] transition-transform duration-300 ease-out origin-left",
                        activeSection === item.href.replace("#", "")
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </a>
                );
              })}

            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[var(--hds-color-text)] hover:text-[var(--hds-color-heading)] hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
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
                      className="w-full text-left px-4 py-3 font-bold text-[var(--hds-color-heading)] flex justify-between items-center"
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
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 font-bold transition-all rounded-lg",
                    activeSection === item.href.replace("#", "")
                      ? "text-[var(--hds-color-primary)] bg-gray-50"
                      : "text-[var(--hds-color-text)] hover:text-[var(--hds-color-primary)] hover:bg-gray-50"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href.replace("#", ""));
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navbar;
