import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
  const container = useRef();
  const currentYear = new Date().getFullYear();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 95%",
        once: true
      }
    });

    tl.from(".footer-col", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    })
      .from(".footer-bottom", {
        y: 20,
        opacity: 0,
        duration: 0.6
      }, "-=0.4");
  }, { scope: container });

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer ref={container} className="border-t border-gray-300 pt-20 pb-10 rounded-t-[40px]"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/01/bc/d4/01bcd4ec1589f806337924752bca24cd.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Section */}
          <div className="footer-col col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logos/logo.png"
                alt="DAK Technologies Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-[var(--hds-color-text)]/80 text-sm leading-relaxed mb-6">
              Building future-ready digital solutions for modern enterprises. From SaaS to DevOps, we deliver excellence in every line of code.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center text-[var(--hds-color-text)] hover:bg-[var(--hds-color-primary)] hover:text-white transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center text-[var(--hds-color-text)] hover:bg-[var(--hds-color-primary)] hover:text-white transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center text-[var(--hds-color-text)] hover:bg-[var(--hds-color-primary)] hover:text-white transition-all">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="text-[var(--hds-color-heading)] font-bold mb-6 text-sm uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[var(--hds-color-text)]/80 hover:text-[var(--hds-color-primary)] text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="footer-col">
            <h3 className="text-[var(--hds-color-heading)] font-bold mb-6 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy-policy" className="text-[var(--hds-color-text)]/80 hover:text-[var(--hds-color-primary)] text-sm font-medium transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-[var(--hds-color-text)]/80 hover:text-[var(--hds-color-primary)] text-sm font-medium transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                {/* <Link to="/about" className="text-[var(--hds-color-text)]/80 hover:text-[var(--hds-color-primary)] text-sm font-medium transition-colors">
                  Cookie Policy
                </Link> */}
              </li>

            </ul>
            {/* <h3 className="text-[var(--hds-color-heading)] font-bold mb-6 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-4">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[var(--hds-color-text)]/80 hover:text-[var(--hds-color-primary)] text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul> */}
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h3 className="text-[var(--hds-color-heading)] font-bold mb-6 text-sm uppercase tracking-wider">
              Contact
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[var(--hds-color-text)]/80">
                <Phone size={18} className="shrink-0 text-[var(--hds-color-primary)]" />
                <span>+91 95943 53773</span>
              </li>

              <li className="flex items-start gap-3 text-sm text-[var(--hds-color-text)]/80">
                <Mail size={18} className="shrink-0 text-[var(--hds-color-primary)]" />
                <span>support@daktechno.com</span>
              </li>

              <li className="flex items-start gap-3 text-sm text-[var(--hds-color-text)]/80 leading-relaxed">
                <MapPin size={18} className="shrink-0 text-[var(--hds-color-primary)]" />
                <span>
                  Sadoday Palace, Gaddigodam, Nagpur, Maharashtra – 440001
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom border-t border-black/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[var(--hds-color-text)]/60">
          <p>© {currentYear} DAK Technologies. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Built with precision by</span>
            <Link to="https://www.daktechno.com" className="text-black hover:text-[var(--hds-color-primary)] font-bold transition-colors" target="_blank">
              DAK Technologies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
