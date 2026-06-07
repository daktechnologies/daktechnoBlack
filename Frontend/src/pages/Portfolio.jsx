import { TrendingDown, ArrowRight, BarChart3 } from "lucide-react";

export default function Portfolio() {
  const caseStudies = [
    {
      id: 1,
      title: "PaySecure",
      category: "FinTech",
      description:
        "Architected a zero-latency, highly resilient secure payment gateway capable of handling global peak transaction volumes without degradation, ensuring absolute data integrity.",
      metrics: [
        { value: "99.999%", label: "Uptime SLA Maintained" },
        { value: "12ms", label: "Avg Transaction Latency" },
      ],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDs8COkgLB8MUuAAhVHbE9Diz1SbvSEdZKiUvx7D_BoQov4bKp09WqCuS-ljF22vzblRsb_pW7yoSb7a2rMwjGpuW-hHB9eUHzL-6v5d6WJ84_3ZaXRdsphZX0TdgJ5W3KL0bCXiGqEu1auOMVj5cD3bmo6M1vLIaKFJavdK6h-netiiNcMC9pVclpDAdzmBcuOxUkPZPdhdR7UYKhUX0XAVbh7F7X11vKtw3uMZvbZdsORNakr9dHPTHozLXrIAsjXoL_XKgDVv_Y",
      featured: true,
    },
    {
      id: 2,
      title: "ShipFast Logistics",
      category: "Logistics",
      description:
        "Implemented an AI-driven route optimization engine that dynamically adjusts to traffic and weather, significantly reducing fuel burn and improving delivery accuracy.",
      metrics: [{ value: "24%", label: "Reduction in Fuel Costs YoY" }],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDs8COkgLB8MUuAAhVHbE9Diz1SbvSEdZKiUvx7D_BoQov4bKp09WqCuS-ljF22vzblRsb_pW7yoSb7a2rMwjGpuW-hHB9eUHzL-6v5d6WJ84_3ZaXRdsphZX0TdgJ5W3KL0bCXiGqEu1auOMVj5cD3bmo6M1vLIaKFJavdK6h-netiiNcMC9pVclpDAdzmBcuOxUkPZPdhdR7UYKhUX0XAVbh7F7X11vKtw3uMZvbZdsORNakr9dHPTHozLXrIAsjXoL_XKgDVv_Y",
      featured: false,
    },
    {
      id: 3,
      title: "MedConnect",
      category: "HealthTech",
      description:
        "Deployed a fully HIPAA-compliant, seamless telemedicine infrastructure. The platform connects patients with specialists instantly, prioritizing end-to-end encryption, data privacy, and high-fidelity video streaming over low-bandwidth connections.",
      metrics: [
        { value: "2M+", label: "Secure Consultations" },
        { value: "100%", label: "HIPAA Audit Compliance" },
        { value: "Zero", label: "Data Breaches" },
      ],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCyEymlB-Li6oe0ow5pQY9qxLHBJf8zsTvncGGsKjXKXbLW7ZzPiHjDzCYSBxxWrUWjut1aH_bXvZM2zYCC5Ax6yFhYs-ax5m1Hxin2Ook7gSnhLGAKozXfXH3v0JoHW5LFwb7KoLS8o7uRfC3LkmwHDTjT9nj1DxVc_DscqBieVNVc-nOdYH7fAfMhLDsLgz0CDrOTPnnz4ivXNjlBMvhlzmivk7yoyIMrHqa9CkRRueiWDS4paDlZB1XiNvPzHBqQ87aEQZmGhLY",
      featured: false,
      fullWidth: true,
    },
  ];

  return (
    <>
      {/* PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 text-center">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full mb-6">
          <BarChart3 size={16} className="text-cyan-400" />
          <span className="text-cyan-300 text-sm font-semibold uppercase tracking-widest">
            Case Studies
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
          Results. Not Just Reports.
        </h1>

        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We engineer high-performance software that solves complex enterprise
          challenges. Explore how our kinetic approach to development drives
          measurable impact across key industries.
        </p>
      </section>

      {/* CASE STUDIES SECTION */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 py-20 mb-20">
        <div className="space-y-8">
          {/* PaySecure - Featured Large Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-gradient-to-br from-[#051a3f] to-[#03152f] rounded-2xl shadow-xl border-t-2 border-cyan-500 overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all group cursor-pointer">
            {/* Image */}
            <div className="lg:col-span-1 h-64 lg:h-auto relative overflow-hidden bg-[#0a1f3a]">
              <img
                alt={caseStudies[0].title}
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                src={caseStudies[0].image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 p-10 flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm font-semibold mb-4">
                  {caseStudies[0].category}
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition">
                  {caseStudies[0].title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {caseStudies[0].description}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-700">
                {caseStudies[0].metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div className="text-3xl font-bold text-white mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ShipFast - Compact Card */}
          <div className="bg-gradient-to-br from-[#051a3f] to-[#03152f] rounded-2xl shadow-xl border border-blue-500/30 hover:border-blue-500/60 p-10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all group cursor-pointer">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-semibold mb-4">
                  {caseStudies[1].category}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
                  {caseStudies[1].title}
                </h3>
              </div>
              <TrendingDown className="text-blue-400 flex-shrink-0" size={32} />
            </div>

            <p className="text-gray-400 leading-relaxed mb-8">
              {caseStudies[1].description}
            </p>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-white mb-1">
                {caseStudies[1].metrics[0].value}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">
                {caseStudies[1].metrics[0].label}
              </div>
            </div>
          </div>

          {/* MedConnect - Full Width Dark Card */}
          <div className="bg-gradient-to-r from-[#0a1f3a] to-[#0d2845] rounded-2xl shadow-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/30 transition-all group cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Image */}
              <div className="lg:col-span-1 h-64 lg:h-auto relative overflow-hidden">
                <img
                  alt={caseStudies[2].title}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                  src={caseStudies[2].image}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f3a] via-[#0a1f3a]/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm font-semibold mb-4">
                    {caseStudies[2].category}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition">
                    {caseStudies[2].title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {caseStudies[2].description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700/50">
                  {caseStudies[2].metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-2xl font-bold text-white mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-[#051a3f] to-[#0d2845] py-20 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to build your next success story?
          </h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Partner with D A K Technologies to transform your complex
            requirements into robust, elegant software solutions.
          </p>
          <button className="flex items-center gap-3 justify-center mx-auto bg-cyan-500 hover:bg-cyan-400 transition px-10 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-cyan-500/30">
            Discuss Your Project
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
