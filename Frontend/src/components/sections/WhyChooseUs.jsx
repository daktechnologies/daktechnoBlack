import { useRef } from 'react';
import { CheckCircle, Star, MapPin, Award, Settings, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WhyChooseUs = () => {
  const container = useRef();

  const features = [
    {
      icon: <CheckCircle size={32} />,
      title: "Unmatched Quality",
      description: "Premium materials and superior craftsmanship in every project"
    },
    {
      icon: <Star size={32} />,
      title: "Rapid Deployment",
      description: "Fast manufacturing and installation to meet tight deadlines"
    },
    {
      icon: <Award size={32} />,
      title: "Expert Engineering",
      description: "Precision-designed structures for durability and performance"
    },
    {
      icon: <Settings size={32} />,
      title: "Full Customization",
      description: "Tailored solutions to match your exact specifications"
    },
    {
      icon: <MapPin size={32} />,
      title: "Nationwide Service",
      description: "Reliable delivery and installation across India"
    },
    {
      icon: <Users size={32} />,
      title: "Trusted by Leaders",
      description: "Proven track record with top companies and institutions"
    }
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(".why-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
      .fromTo(".why-feature",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        "-=0.4"
      )
      .fromTo(".why-clients",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.2"
      );

  }, { scope: container, revertOnUpdate: true });

  return (
    <section ref={container} id="why-choose-us" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="why-title text-4xl md:text-5xl font-bold text-[var(--hds-color-heading)] mb-6 tracking-tight">
            Why Choose <span className="text-[var(--hds-color-primary)]">DAK</span> Technologies?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="why-feature group p-10 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="text-[var(--hds-color-primary)] mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--hds-color-heading)] mb-4">
                {feature.title}
              </h3>
              <p className="text-[var(--hds-color-text)]/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="why-clients bg-[var(--hds-color-primary)] text-white p-12 rounded-3xl shadow-xl">
          <h3 className="text-3xl font-bold mb-8 text-center tracking-tight">Enterprise Success Stories</h3>
          <p className="text-lg leading-relaxed mb-8 text-center text-white/90 font-medium">
            DAK Technologies has earned the trust of leading fintech startups, e-commerce giants,
            healthcare providers, educational institutions, and government organizations across India.
            Our digital solutions have enhanced operational efficiency, improved user experiences,
            and provided robust scalable infrastructure in highly competitive global markets.
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-white text-[var(--hds-color-primary)] rounded-full font-bold hover:bg-gray-50 transition-colors">
              Read Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
