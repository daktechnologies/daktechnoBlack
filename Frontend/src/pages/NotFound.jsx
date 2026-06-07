import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#051a3f] to-[#02142c] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[150px] font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text leading-none">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <button className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition px-8 py-3 rounded-xl font-semibold text-white w-full sm:w-auto">
              <Home size={20} />
              Go Back Home
            </button>
          </Link>

          <button className="flex items-center justify-center gap-2 border-2 border-cyan-500 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 transition px-8 py-3 rounded-xl font-semibold w-full sm:w-auto">
            Contact Support <ArrowRight size={20} />
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-16">
          <h3 className="text-sm font-bold text-cyan-400 mb-6 uppercase tracking-widest">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Services", path: "/services" },
              { label: "Solutions", path: "/solutions" },
              { label: "Industries", path: "/industries" },
              { label: "Portfolio", path: "/portfolio" },
            ].map((link) => (
              <Link key={link.path} to={link.path}>
                <button className="text-gray-300 hover:text-cyan-400 transition font-medium text-sm w-full py-2">
                  {link.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
