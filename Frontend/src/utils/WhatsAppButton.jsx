import { useRef } from "react";
import { MessageCircle } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const buttonRef = useRef(null);

  const phoneNumber = "9130567772";
  const message = "Hello DAK Technologies, I would like to inquire about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useGSAP(() => {
    const tl = gsap.timeline();

    // Smooth entrance
    tl.fromTo(
      buttonRef.current,
      { scale: 0, opacity: 0, y: 40 },
      { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)", delay: 1 }
    );

    // Subtle floating
    gsap.to(buttonRef.current, {
      y: -6,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Soft pulse glow
    gsap.to(buttonRef.current, {
      boxShadow: "0 0 25px rgba(37, 211, 102, 0.6)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, { scope: buttonRef });

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.12,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 group">
      
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black text-white text-xs px-3 py-1 opacity-0 group-hover:opacity-100 transition duration-300">
        Chat with DAK Technologies
      </span>

      <a
        ref={buttonRef}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex h-16 w-16 items-center justify-center rounded-full 
                   bg-[#25D366] text-white shadow-xl 
                   transition-colors duration-300 hover:bg-[#1ebe5d]"
        aria-label="Chat on WhatsApp"
      >
        {/* <MessageCircle size={30} strokeWidth={2.5} /> */}
        <FaWhatsapp size={40} strokeWidth={2.5} />
      </a>
    </div>
  );
}
