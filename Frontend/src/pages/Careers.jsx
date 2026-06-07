import {
  Briefcase,
  Users,
  Heart,
  Rocket,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function Careers() {
  const lifeAtDAK = [
    {
      icon: <Rocket size={32} />,
      title: "Continuous Growth",
      desc: "We invest heavily in your development with dedicated learning budgets, mentorship programs, and clear career progression paths.",
      span: "md:col-span-2",
    },
    {
      icon: <Users size={32} />,
      title: "Inclusive Culture",
      desc: "A workplace where every voice is heard, valued, and empowered to make an impact.",
      span: "md:col-span-1",
    },
    {
      icon: <Heart size={32} />,
      title: "Comprehensive Wellness",
      desc: "Premium health coverage, mental health days, and flexible working arrangements to keep you at your best.",
      span: "md:col-span-1",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Meaningful Impact",
      desc: "Work on high-performance enterprise solutions that transform how businesses operate globally. Your code doesn't just ship; it matters.",
      span: "md:col-span-2",
    },
  ];

  const jobListings = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote (US/Canada)",
      type: "Full-time",
    },
    {
      title: "Product Designer (UX/UI)",
      department: "Design",
      location: "New York, NY / Hybrid",
      type: "Full-time",
    },
  ];

  const interviewSteps = [
    {
      step: "1",
      title: "Initial Chat",
      desc: "A 30-minute introductory call with our talent team to align on expectations and mutual fit.",
    },
    {
      step: "2",
      title: "Technical Deep Dive",
      desc: "A practical discussion with your future peers focusing on your past work and problem-solving approach.",
    },
    {
      step: "3",
      title: "Leadership Interview",
      desc: "Meet with engineering or product leadership to discuss overarching strategy and team dynamics.",
    },
    {
      step: "4",
      title: "Offer & Onboarding",
      desc: "We extend an offer and begin planning a seamless onboarding experience to set you up for success.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#051a3f] to-[#02142c] overflow-hidden">
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Build Your Career, Not Just a Résumé.
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              At D A K Technologies, we believe in fostering an environment
              where innovation meets purpose. Join a team that values your
              growth as much as the products we build.
            </p>

            <button className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl font-semibold text-white">
              View Open Roles
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
            <img
              alt="Team collaboration"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSwsGCRijlL5aQlR-Ew2aZOp1SpJ-0PjeT8avRyjI62bCnUojP6qC-jNv7Mo0HBNfdz6fxvld0P7hfxuhKa08mzcmNbAK4LtsVzSMljZFAHoYVu3xj8B_2DC5SPZ7zsmMmPS-7aHA_IJ2z46qS1M5Xh4OTLpUBgSxI9GEdmuViUdlhb2u9DDM5S5GBNOrCAvO0l1kpo5Bmcrl-yRPzFiJz05QOWcCI5kpQi14nh1E7HsJuvxxi8Fau8Mpq6l_2X-_XUVM6R-4dcEQ"
            />
          </div>
        </div>
      </section>

      {/* LIFE AT DAK SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Life at D A K Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're more than just a workplace. We're a community dedicated to
            excellence, continuous learning, and mutual support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lifeAtDAK.map((item, idx) => (
            <div
              key={idx}
              className={`${item.span} bg-gradient-to-br from-[#051a3f] to-[#03152f] p-8 rounded-2xl shadow-xl border border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all`}
            >
              <div className="text-cyan-400 mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CURRENT OPENINGS SECTION */}
      <section className="bg-gradient-to-b from-[#051a3f] to-[#02142c] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Current Openings
            </h2>
            <p className="text-gray-400 text-lg">
              Find your next big challenge.
            </p>
          </div>

          <div className="space-y-6">
            {jobListings.map((job, idx) => (
              <div
                key={idx}
                className="bg-[#051a3f] border border-cyan-500/20 hover:border-cyan-500/50 p-8 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-white hover:text-cyan-400 transition">
                      {job.title}
                    </h3>
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-lg text-sm font-semibold">
                      {job.department}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>
                <button className="px-8 py-3 border border-gray-600 hover:border-cyan-500 text-white hover:bg-cyan-500/10 rounded-xl font-semibold transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERVIEW PROCESS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Interview Process
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We value your time. Our process is designed to be transparent,
            efficient, and a two-way conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-0"></div>

          {interviewSteps.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-br from-[#051a3f] to-[#03152f] p-8 rounded-2xl shadow-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all text-center"
            >
              <div className="w-14 h-14 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg relative z-10">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
