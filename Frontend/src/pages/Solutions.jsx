import { Lightbulb, Layers, Zap, Target, Globe, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Solutions() {
  const solutions = [
    {
      id: 1,
      title: "Digital Transformation",
      subtitle: "Modernize Your Business Operations",
      description:
        "End-to-end digital transformation services to modernize legacy systems, streamline operations, and improve customer experiences.",
      icon: <Lightbulb size={40} color="white" />,
      // color: "from-amber-400 to-orange-400",
      color: "from-amber-400 to-orange-400",
      bgColor: "bg-amber-500/20",
      borderColor: "border-amber-500",
      features: [
        "Legacy System Modernization",
        "Process Automation & RPA",
        "Business Intelligence Implementation",
        "Change Management & Training",
      ],
      span: "md:col-span-2",
    },
    {
      id: 2,
      title: "Enterprise Cloud Solutions",
      subtitle: "Scalable & Secure Infrastructure",
      description:
        "Migrate and manage your enterprise applications on modern cloud platforms with minimal downtime and maximum security.",
      icon: <Layers size={32} color="white" />,
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500",
      features: [
        "Multi-Cloud Strategy",
        "Cloud Migration & Deployment",
        "Containerization & Orchestration",
        "Cloud Cost Optimization",
      ],
      span: "md:col-span-1",
    },
    {
      id: 3,
      title: "Cybersecurity & Compliance",
      subtitle: "Protect Your Digital Assets",
      description:
        "Comprehensive security solutions to protect your infrastructure, data, and applications from evolving cyber threats.",
      icon: <Lock size={32} color="white" />,
      color: "from-red-400 to-pink-400",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500",
      features: [
        "Security Audits & Assessments",
        "Compliance Management",
        "Incident Response Planning",
        "Zero-Trust Architecture",
      ],
      span: "md:col-span-1",
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      subtitle: "Intelligent Automation & Insights",
      description:
        "Leverage AI and ML to unlock hidden insights, automate complex processes, and drive data-driven decision making.",
      icon: <Zap size={32} color="white" />,
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "AI Model Development & Training",
      ],
      span: "md:col-span-1",
    },
    {
      id: 5,
      title: "Custom Development",
      subtitle: "Tailored Software Solutions",
      description:
        "Build powerful, scalable custom applications designed specifically for your unique business needs and challenges.",
      icon: <Target size={32} color="white" />,
      color: "from-green-400 to-teal-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500",
      features: [
        "Web Application Development",
        "Mobile App Development",
        "API & Integration Services",
        "Enterprise Architecture",
      ],
      span: "md:col-span-1",
    },
    {
      id: 6,
      title: "Digital Experience",
      subtitle: "Omnichannel Customer Engagement",
      description:
        "Create exceptional digital experiences across all touchpoints with modern, responsive, and intuitive platforms.",
      icon: <Globe size={32} color="white" />,
      color: "from-cyan-400 to-blue-400",
      bgColor: "bg-cyan-500/20",
      borderColor: "border-cyan-500",
      features: [
        "UX/UI Design & Development",
        "Web & Mobile Platforms",
        "Progressive Web Apps",
        "Customer Portal Solutions",
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
            Comprehensive Solutions for Every Challenge
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From digital transformation to AI and cybersecurity, we deliver
            end-to-end solutions that drive business growth.
          </p>
        </div>
      </section>

      {/* SOLUTIONS BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className={`${solution.span} bg-gradient-to-br from-[#051a3f] to-[#03152f] rounded-2xl shadow-xl p-10 border-t-2 ${solution.borderColor} hover:shadow-2xl transition-all duration-300 group cursor-pointer`}
            >
              <div
                className={`inline-block p-3 rounded-lg ${solution.bgColor} mb-6 group-hover:scale-110 transition-transform`}
              >
                <div
                  className={`bg-gradient-to-r ${solution.color} text-transparent bg-clip-text`}
                >
                  {solution.icon}
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {solution.title}
              </h2>
              <p
                className={`text-sm font-semibold bg-gradient-to-r ${solution.color} text-transparent bg-clip-text mb-4`}
              >
                {solution.subtitle}
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {solution.description}
              </p>

              <h4 className="text-sm font-bold text-cyan-400 mb-3 uppercase tracking-widest">
                Key Features
              </h4>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-gray-300 text-sm flex items-start gap-2"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.color} mt-1.5 flex-shrink-0`}
                    ></span>
                    {feature}
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
            Let's Build Your Success Story
          </h2>
          <p className="text-gray-300 mb-8">
            Our expert team is ready to help you navigate your digital journey.
          </p>
          <Link
            to="/contact"
            className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-3 rounded-xl font-semibold text-white"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
