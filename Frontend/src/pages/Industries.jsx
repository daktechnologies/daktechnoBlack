import {
  Building2,
  Cpu,
  Zap,
  TrendingUp,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Industries() {
  const industries = [
    {
      id: 1,
      title: "Financial Services",
      subtitle: "Secure Banking & Fintech Solutions",
      description:
        "Empower your financial operations with secure, scalable platforms designed for regulatory compliance and seamless customer experiences.",
      icon: <TrendingUp size={40} color="white" />,
      color: "from-emerald-400 to-teal-400",
      bgColor: "bg-emerald-500/20",
      borderColor: "border-emerald-500",
      capabilities: [
        "Payment Processing Systems",
        "Blockchain & Cryptocurrency",
        "Risk Management Platforms",
        "Digital Banking Solutions",
      ],
      span: "md:col-span-2",
    },
    {
      id: 2,
      title: "Healthcare & Life Sciences",
      subtitle: "HIPAA-Compliant Healthcare Tech",
      description:
        "Transform patient care and operational efficiency with compliant, secure healthcare platforms and data management systems.",
      icon: <ShieldCheck size={32} color="white" />,
      color: "from-red-400 to-pink-400",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500",
      capabilities: [
        "EHR & EMR Systems",
        "Telemedicine Platforms",
        "Medical Data Analytics",
        "Patient Portal Development",
      ],
      span: "md:col-span-1",
    },
    {
      id: 3,
      title: "Manufacturing & Industrial",
      subtitle: "IoT & Industry 4.0 Solutions",
      description:
        "Modernize production with IoT sensors, predictive analytics, and automated workflows for increased efficiency and reduced downtime.",
      icon: <Cpu size={32} color="white" />,
      color: "from-orange-400 to-yellow-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500",
      capabilities: [
        "IoT Sensor Networks",
        "Predictive Maintenance",
        "Supply Chain Optimization",
        "Factory Automation",
      ],
      span: "md:col-span-1",
    },
    {
      id: 4,
      title: "Retail & E-Commerce",
      subtitle: "Omnichannel Commerce Platforms",
      description:
        "Build engaging customer experiences with scalable e-commerce platforms, inventory management, and unified commerce solutions.",
      icon: <Smartphone size={32} color="white" />,
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500",
      capabilities: [
        "E-Commerce Platforms",
        "POS & Inventory Management",
        "Customer Analytics",
        "Marketplace Integration",
      ],
      span: "md:col-span-1",
    },
    {
      id: 5,
      title: "Energy & Utilities",
      subtitle: "Smart Grid & Renewable Solutions",
      description:
        "Optimize energy distribution and consumption with smart grid technologies, renewable energy management, and consumption analytics.",
      icon: <Zap size={32} color="white" />,
      color: "from-yellow-400 to-green-400",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500",
      capabilities: [
        "Smart Grid Management",
        "Renewable Energy Tracking",
        "Consumption Analytics",
        "Energy Trading Platforms",
      ],
      span: "md:col-span-1",
    },
    {
      id: 6,
      title: "Real Estate & Construction",
      subtitle: "Digital Property Management",
      description:
        "Streamline property management, development planning, and customer interactions with integrated real estate technology solutions.",
      icon: <Building2 size={32} color="white" />,
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500",
      capabilities: [
        "Property Management Systems",
        "Project Planning Tools",
        "Virtual Tours & 3D Visualization",
        "Tenant Portal Solutions",
      ],
      span: "md:col-span-1",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#051a3f] to-[#02142c] py-20 md:py-24 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Industry-Specific Digital Solutions
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Proven expertise across diverse industries with deep domain
            knowledge and tailored technology strategies.
          </p>
        </div>
      </section>

      {/* INDUSTRIES BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className={`${industry.span} bg-gradient-to-br from-[#051a3f] to-[#03152f] rounded-2xl shadow-xl p-10 border-t-2 ${industry.borderColor} hover:shadow-2xl transition-all duration-300 group cursor-pointer`}
            >
              <div
                className={`inline-block p-3 rounded-lg ${industry.bgColor} mb-6 group-hover:scale-110 transition-transform`}
              >
                <div
                  className={`bg-gradient-to-r ${industry.color} text-transparent bg-clip-text`}
                >
                  {industry.icon}
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {industry.title}
              </h2>
              <p
                className={`text-sm font-semibold bg-gradient-to-r ${industry.color} text-transparent bg-clip-text mb-4`}
              >
                {industry.subtitle}
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {industry.description}
              </p>

              <h4 className="text-sm font-bold text-cyan-400 mb-3 uppercase tracking-widest">
                Key Capabilities
              </h4>
              <ul className="space-y-2">
                {industry.capabilities.map((capability, idx) => (
                  <li
                    key={idx}
                    className="text-gray-300 text-sm flex items-start gap-2"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${industry.color} mt-1.5 flex-shrink-0`}
                    ></span>
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 py-16 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-gray-300 mb-8">
            Let's discuss how our industry expertise can drive your digital
            transformation.
          </p>
          <Link
            to="/contact"
            className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-3 rounded-xl font-semibold text-white"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
