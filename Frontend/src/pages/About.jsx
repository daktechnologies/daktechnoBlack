import {
  Rocket,
  Zap,
  Target,
  Wrench,
  Handshake,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const coreValues = [
    {
      icon: <Target size={40} />,
      title: "Clarity in Complexity",
      desc: "We distill convoluted enterprise workflows into streamlined, intuitive user experiences.",
    },
    {
      icon: <Wrench size={40} />,
      title: "Commitment to Craft",
      desc: "Software is our craft. We obsess over code quality, security, and elegant architecture.",
    },
    {
      icon: <Handshake size={40} />,
      title: "Client-First Partnership",
      desc: "Your success is our metric. We operate as a seamless extension of your internal teams.",
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Continuous Evolution",
      desc: "In a kinetic digital landscape, stagnation is failure. We are perpetually learning and adapting.",
    },
  ];

  const strengths = [
    {
      icon: <Zap size={24} />,
      title: "Architectural Rigor",
      desc: "Systems designed to withstand immense scale and volatility without compromising performance.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Kinetic Velocity",
      desc: "Accelerated deployment cycles ensuring rapid time-to-market for critical business features.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative px-6 md:px-16 py-20 md:py-32 rounded-b-2xl overflow-hidden bg-gradient-to-b from-[#051a3f] to-[#02142c] mb-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(6,182,212,0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(6,182,212,0.1) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>

        {/* Gradient Accent */}
        <div className="absolute top-0 right-0 w-[60%] h-[120%] bg-gradient-to-l from-cyan-500/10 to-transparent -skew-x-12 transform origin-top-right z-0 opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              Who We Are
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              From a Vision to a{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Technology Powerhouse.
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-lg leading-relaxed mb-8">
              We engineer digital transformation for the modern enterprise. At D
              A K Technologies, we believe in building resilient, scalable, and
              beautifully designed software that drives measurable kinetic
              momentum for our clients.
            </p>

            <button className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl font-semibold">
              Learn Our Story
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
            <img
              alt="Modern corporate office"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh3CdizHuCi5KqEYF5xdpXk_aSW4zqbPBETYsCXaaCAO8YYfXjS6kOLuOJ1Me_m94_PqaWlZfQXRWRJFlbjB3dkYX26SIj5fZyKdQmt4UN6QQIkmPbf3focTMPOW6YItv4jg9nOtsQcQW-uwxa_cNs42WMo3jDAJwZL_lxsDZs7hyBnhNWPkDm6j86NCT8FVWWByMbXAm11VQ6Rz7yqbKYES6sHkJnW_XC-ums677AlvosgjEPKtDsnP2cqY8ClejbVHjZ_rjQnGk"
            />
          </div>
        </div>
      </section>

      {/* OUR MISSION & DNA SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-[#051a3f] to-[#03152f] p-8 md:p-10 rounded-2xl shadow-xl border-t-2 border-cyan-500/50 relative overflow-hidden">
            {/* Icon Background */}
            <div className="absolute -right-8 -top-8 opacity-5">
              <Rocket size={150} className="text-cyan-400" />
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed relative z-10">
              To demystify complex technological landscapes and empower
              enterprises with high-performance, intuitive software solutions.
              We bridge the gap between legacy infrastructure and future-proof
              innovation, ensuring our partners remain agile and authoritative
              in their respective industries.
            </p>
          </div>

          {/* The Strength of DAK */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-3">
              The Strength of D A K Technologies
            </h2>
            <p className="text-gray-400 mb-8">
              Our DNA is coded with precision, resilience, and a relentless
              pursuit of excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {strengths.map((strength, idx) => (
                <div
                  key={idx}
                  className="bg-[#051a3f] p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="flex items-center gap-3 mb-4 text-cyan-400">
                    {strength.icon}
                    <h3 className="font-bold text-white text-lg">
                      {strength.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">{strength.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR CORE VALUES SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The principles that guide every line of code we write and every
            partnership we forge.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-[#051a3f] to-[#02142c] p-8 rounded-2xl shadow-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20 cursor-default"
            >
              <div className="w-14 h-14 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
