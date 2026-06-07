import {
  Menu,
  ArrowRight,
  Cloud,
  Shield,
  Code2,
  Users,
  Rocket,
  Globe,
  Award,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  const services = [
    {
      icon: <Cloud size={40} />,
      title: "Cloud & DevOps",
      desc: "Accelerate your cloud journey with secure infrastructure.",
    },
    {
      icon: <Code2 size={40} />,
      title: "Custom Software Development",
      desc: "We design and build custom applications.",
    },
    {
      icon: <Shield size={40} />,
      title: "Cybersecurity",
      desc: "Protect your business with proactive security strategies.",
    },
  ];

  const stats = [
    {
      icon: <Users />,
      number: "250+",
      label: "Happy Clients",
    },
    {
      icon: <Rocket />,
      number: "500+",
      label: "Projects Delivered",
    },
    {
      icon: <Globe />,
      number: "30+",
      label: "Countries Served",
    },
    {
      icon: <Award />,
      number: "10+",
      label: "Years Of Excellence",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Engineering
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
                Digital Futures
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-300 max-w-xl leading-8">
              We build scalable, secure, and intelligent digital solutions that
              empower businesses to innovate and grow.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-xl font-semibold"
            >
              Let's Build Together
              <ArrowRight size={18} />
            </Link>

            <div className="flex flex-wrap gap-8 mt-12 text-gray-300">
              <span className="flex items-center gap-2">
                <Cloud size={20} className="text-cyan-400" />
                AWS
              </span>
              <span className="flex items-center gap-2">
                <Globe size={20} className="text-cyan-400" />
                Microsoft
              </span>
              <span className="flex items-center gap-2">
                <Cloud size={20} className="text-cyan-400" />
                Google Cloud
              </span>
              <span className="flex items-center gap-2">
                <Shield size={20} className="text-cyan-400" />
                Azure
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-16">
          {stats.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="text-cyan-400">{item.icon}</div>

              <div>
                <h2 className="text-4xl font-bold text-cyan-400">
                  {item.number}
                </h2>
                <p className="text-gray-300">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE COMPETENCIES */}
      <section className="bg-[#02142c] text-white py-16 px-6 md:px-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core Competencies
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl">
              Precision-tooled solutions for complex architectural challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <Cloud size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Cloud Architecture
              </h3>
              <p className="text-gray-400 leading-7">
                Scalable, resilient cloud infrastructures designed for
                high-availability enterprise environments.
              </p>
            </div>

            <div className="bg-gray-900 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <Code2 size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                AI/ML Solutions
              </h3>
              <p className="text-gray-400 leading-7">
                Intelligent predictive models and automation pipelines
                integrated seamlessly into existing workflows.
              </p>
            </div>

            <div className="bg-gray-900 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <Rocket size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Digital Transformation
              </h3>
              <p className="text-gray-400 leading-7">
                Comprehensive modernization of legacy systems to agile,
                API-first architectures.
              </p>
            </div>

            <div className="bg-gray-900 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <Shield size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Cybersecurity
              </h3>
              <p className="text-gray-400 leading-7">
                Zero-trust security frameworks protecting critical assets at
                every layer of the stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING PROCESS */}
      <section className="py-16 px-6 md:px-16 bg-[#02142c] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Engineering Process
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A rigorous, methodical approach to delivering fault-tolerant
              software.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Decorative connecting line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent -z-10"></div>

            {[
              {
                num: "1",
                title: "Discovery",
                desc: "Deep architectural review and requirements mapping.",
              },
              {
                num: "2",
                title: "Strategy",
                desc: "Blueprint design and stack selection for optimal performance.",
              },
              {
                num: "3",
                title: "Development",
                desc: "Agile implementation with continuous integration.",
              },
              {
                num: "4",
                title: "Optimization",
                desc: "Performance tuning and long-term scalability planning.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center font-bold text-xl text-white mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-6">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
