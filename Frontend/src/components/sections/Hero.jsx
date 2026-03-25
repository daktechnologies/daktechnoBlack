// import { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ArrowRight, Building2 } from 'lucide-react';
// import { DotGlobeHero } from '../ui/GlobeHero';

// const Hero = () => {
//   const container = useRef();

//   useGSAP(() => {
//     const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

//     tl.from(".hero-title", { y: 100, opacity: 0, duration: 1, stagger: 0.2 })
//       .from(".hero-sub", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
//       .from(".hero-btn", { scale: 0.8, opacity: 0, duration: 0.5 }, "-=0.3")
//       .from(".hero-icon", { scale: 0, rotation: 180, duration: 0.8 }, "-=0.2");
//   }, { scope: container });

//   return (
//     <section id="home">
//     <DotGlobeHero 
//       ref={container}
//       rotationSpeed={0.003}
//       globeRadius={1.2}
//       className="pt-16"
//     >
//       <div className="hero-icon mb-8 p-4 bg-secondary-700 rounded-full">
//         <Building2 size={48} className="text-primary-100" />
//       </div>

//       <h1 className="hero-title display-text text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-center mb-6">
//         Royal <span className="text-secondary-700">Shelter</span>
//         <br />
//         <span className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-secondary-600">Solutions</span>
//       </h1>

//       <p className="hero-sub text-secondary-700 mt-6 text-lg md:text-xl max-w-3xl text-center leading-relaxed px-4 font-medium">
//         Engineering Excellence in Modular Infrastructure
//       </p>

//       <p className="hero-sub text-secondary-600 mt-4 text-base md:text-lg max-w-2xl text-center leading-relaxed px-4">
//         Delivering innovative and sustainable infrastructure solutions that redefine standards of quality, efficiency, and comfort across India.
//       </p>

//       <div className="flex flex-col sm:flex-row gap-4 mt-10">
//         <button className="hero-btn px-8 py-4 bg-secondary-700 text-primary-100 rounded-full font-heading font-semibold flex items-center justify-center gap-2 hover:bg-secondary-800 transition-colors shadow-lg">
//           Explore Our Solutions <ArrowRight size={20} />
//         </button>
//         <button className="hero-btn px-8 py-4 border-2 border-secondary-700 text-secondary-700 rounded-full font-heading font-semibold hover:bg-secondary-700 hover:text-primary-100 transition-colors">
//           Get Quote
//         </button>
//       </div>
//     </DotGlobeHero>
//     </section>
//   );
// };

// export default Hero;



import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Cpu } from 'lucide-react';
import scrollToSection from '../../utils/scrollToSection';
import SpiderWeb from '../ui/SpiderWeb';
import PageLoader from '../ui/PageLoader';

const Hero = () => {
  const container = useRef(null);

  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // 3000 ka matlab hai 3 seconds (aap ise badha bhi sakte hain)
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  /* HERO TEXT ANIMATION */
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    if (isInitialLoading) return;

    tl.fromTo('.hero-title',
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo('.hero-sub',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo('.hero-btn',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 },
        '-=0.3'
      )
      .fromTo('.hero-icon',
        { scale: 0, rotation: 10 },
        { scale: 1, rotation: 0, duration: 0.8 },
        '-=0.2'
      );
  }, { scope: container, dependencies: [isInitialLoading] });

  return (
    <>
      {isInitialLoading ? <PageLoader /> : null}
      <section
        id="home"
        ref={container}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* 🕸 SPIDER WEB EFFECT (Contains dynamic background & canvas) */}
        <SpiderWeb color="rgba(255, 255, 255, 0.4)" particleCount={200} distanceThreshold={200} />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          {/* <div className="hero-icon mb-8 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
            <Cpu size={48} className="text-white" />
          </div> */}

          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 mt-4 leading-[1.1] tracking-tight flex flex-col items-center justify-center">
            {/* DAK <span className="bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] bg-clip-text text-transparent">
              Technologies
            </span> */}
             DAK <span className="text-white">Technologies</span> 
            {/*<img
              src="/logos/white-logo.png"
              alt="DAK Technologies Logo"
              className="h-34 w-auto object-contain"
            />*/}
            <br />
            <span className="text-2xl md:text-4xl font-semibold text-gray-300">
              Building Future-Ready Digital Solutions
            </span>
          </h1>

          <p className="hero-sub mt-4 text-lg md:text-xl max-w-3xl text-gray-200 font-medium">
            We design, develop, and deploy scalable web applications,
            enterprise software, and modern digital platforms.
          </p>

          <p className="hero-sub mt-2 text-base md:text-lg max-w-2xl text-gray-400">
            Empowering businesses through innovation, performance, and security.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <a className="hero-btn stripe-button stripe-button-primary" href="/services#web">
              Our Services <ArrowRight size={18} />
            </a>

            <a
              className="hero-btn stripe-button bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md px-5 py-3 rounded-md font-medium transition-all duration-200 flex items-center gap-2"
              href="#contact"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  scrollToSection("contact");
                }
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
