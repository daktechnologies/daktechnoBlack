import { Code2, Cloud, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      subtitle: "Software Built Around Your Business",
      description:
        "We architect and build bespoke enterprise applications designed to streamline operations, enhance user experience, and drive measurable growth.",
      icon: <Code2 size={40} />,
      color: "from-cyan-400 to-blue-400",
      bgColor: "bg-cyan-500/20",
      borderColor: "border-cyan-500",
      items: [
        "Web & Mobile Application Development",
        "Enterprise System Integration (ERP/CRM)",
        "Legacy System Modernization",
        "API Design & Development",
      ],
      span: "md:col-span-2",
    },
    {
      id: 2,
      title: "Cloud Infrastructure & DevOps",
      subtitle: "Scalable, Secure, and Cost-Optimized Infrastructure",
      description:
        "Ensure high availability and rapid deployment with robust cloud architectures and automated CI/CD pipelines tailored to your enterprise.",
      icon: <Cloud size={32} />,
      color: "from-blue-400 to-purple-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500",
      items: [
        "Cloud Migration Strategy",
        "AWS, Azure & GCP Management",
        "Infrastructure as Code (IaC)",
      ],
      span: "md:col-span-1",
    },
    {
      id: 3,
      title: "IT Strategy & Consulting",
      subtitle: "A Technology Roadmap Aligned with Your Vision",
      description:
        "Align your technology investments with strategic business goals through comprehensive audits, risk assessments, and transformation roadmaps.",
      icon: <BarChart3 size={32} />,
      color: "from-cyan-400 to-teal-400",
      bgColor: "bg-teal-500/20",
      borderColor: "border-teal-500",
      items: [
        "Digital Transformation Planning",
        "Security & Compliance Audits",
        "Technology Stack Optimization",
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
            Full-Cycle Technology Services for the Modern Enterprise.
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Accelerate your digital transformation with high-performance
            engineering, scalable cloud architecture, and strategic IT
            consulting.
          </p>
        </div>
      </section>

      {/* SERVICES BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1: Custom Software (Full Width) */}
          <div
            className={`${services[0].span} bg-gradient-to-br from-[#051a3f] to-[#03152f] rounded-2xl shadow-xl p-10 border-t-2 border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all`}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Icon */}
              <div className="bg-cyan-500/20 text-cyan-400 p-4 rounded-xl flex-shrink-0 h-fit">
                {services[0].icon}
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {services[0].title}
                </h2>
                <p className="text-cyan-400 text-lg font-semibold mb-4">
                  {services[0].subtitle}
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {services[0].description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services[0].items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="text-cyan-400 flex-shrink-0 mt-1"
                      />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Cloud Infrastructure */}
          <div className="bg-gradient-to-br from-[#051a3f] to-[#03152f] rounded-2xl shadow-xl p-8 border border-blue-500/30 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all">
            <div className="bg-blue-500/20 text-blue-400 p-3 rounded-lg inline-block mb-6">
              {services[1].icon}
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">
              {services[1].title}
            </h2>
            <p className="text-blue-400 font-semibold mb-4">
              {services[1].subtitle}
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {services[1].description}
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-4">
              {services[1].items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle
                    size={18}
                    className="text-blue-400 flex-shrink-0"
                  />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service 3: IT Strategy */}
          <div className="bg-gradient-to-br from-[#051a3f] to-[#03152f] rounded-2xl shadow-xl p-8 border border-teal-500/30 hover:border-teal-500/60 hover:shadow-2xl hover:shadow-teal-500/20 transition-all">
            <div className="bg-teal-500/20 text-teal-400 p-3 rounded-lg inline-block mb-6">
              {services[2].icon}
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">
              {services[2].title}
            </h2>
            <p className="text-teal-400 font-semibold mb-4">
              {services[2].subtitle}
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {services[2].description}
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-4">
              {services[2].items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle
                    size={18}
                    className="text-teal-400 flex-shrink-0"
                  />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gradient-to-r from-[#051a3f] to-[#0d2845] py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Partner with D A K Technologies to build resilient, scalable, and
            innovative software solutions.
          </p>
          <Link
            to="/contact"
            className="flex items-center gap-3 justify-center mx-auto bg-cyan-500 hover:bg-cyan-400 transition px-10 py-4 rounded-xl font-semibold text-lg text-white shadow-lg hover:shadow-xl hover:shadow-cyan-500/30"
          >
            Schedule a Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
