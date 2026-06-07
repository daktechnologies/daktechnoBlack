import {
  Mail,
  MapPin,
  Lock,
  MessageCircle,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    helpTopic: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here

    const text = `
*New Inquiry*

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
helpTopic: ${formData.helpTopic}

Message:
${formData.message}
`;

    const whatsappUrl = `https://wa.me/919130567772?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Let's Start a Conversation.
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                Whether you're looking to modernize your legacy systems or build
                something entirely new, our team of experts is ready to partner
                with you. Reach out and let's explore how D A K Technologies can
                accelerate your digital transformation.
              </p>
            </div>

            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-[#051a3f] to-[#03152f] p-8 rounded-2xl shadow-xl border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-8">
                Direct Contact
              </h3>

              <div className="space-y-8">
                {/* Email */}
                <a
                  href="mailto:hello@daktechnologies.com"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="bg-cyan-500/20 text-cyan-400 p-3 rounded-full group-hover:bg-cyan-500/30 transition">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Us</p>
                    <p className="text-white font-semibold group-hover:text-cyan-400 transition">
                      contact@daktechno.com
                    </p>
                    <p className="text-white font-semibold group-hover:text-cyan-400 transition">
                      info@daktechno.com
                    </p>
                  </div>
                </a>

                {/* call */}
                <a
                  href="tel:+919130567772"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="bg-cyan-500/20 text-cyan-400 p-3 rounded-full group-hover:bg-cyan-500/30 transition">
                    <PhoneCall size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call Us</p>
                    <p className="text-white font-semibold group-hover:text-cyan-400 transition">
                      +91 9130567772
                    </p>
                    <p className="text-white font-semibold group-hover:text-cyan-400 transition">
                      +91 8446170543
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-500/20 text-cyan-400 p-3 rounded-full group-hover:bg-cyan-500/30 transition">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Headquarters</p>
                    <p className="text-white font-semibold">
                      716, virat nagar, begur road, bommanahalli, benglore -
                      560068.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            {/* <div className="hidden lg:block h-32 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 overflow-hidden relative">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-cyan-400 opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-blue-400 opacity-5 rounded-full blur-3xl"></div>
            </div> */}
          </div>

          {/* RIGHT COLUMN - FORM */}
          <div className="bg-gradient-to-br from-[#051a3f] to-[#03152f] p-10 rounded-2xl shadow-xl border border-cyan-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-white font-semibold mb-2"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-[#0a1f3a] border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    className="block text-white font-semibold mb-2"
                    htmlFor="email"
                  >
                    Work Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0a1f3a] border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Phone & Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-white font-semibold mb-2"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#0a1f3a] border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    className="block text-white font-semibold mb-2"
                    htmlFor="company"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Your Organization"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-[#0a1f3a] border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Help Topic Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-white font-semibold mb-2"
                    htmlFor="helpTopic"
                  >
                    How can we help?
                  </label>
                  <select
                    id="helpTopic"
                    value={formData.helpTopic}
                    onChange={handleChange}
                    className="w-full bg-[#0a1f3a] border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="enterprise">
                      Enterprise Software Development
                    </option>
                    <option value="cloud">Cloud Migration</option>
                    <option value="consulting">Digital Consulting</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <div></div>
              </div>

              {/* Message */}
              <div className="flex-grow flex flex-col">
                <label
                  className="block text-white font-semibold mb-2"
                  htmlFor="message"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us briefly about your goals and current challenges..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-[#0a1f3a] border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                ></textarea>
              </div>

              {/* Security & Submit */}
              <div className="flex flex-col gap-4 pt-4">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition px-8 py-3 rounded-xl font-semibold text-white"
                >
                  Send Message
                  <FaWhatsapp size={24} />
                </button>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Lock size={16} className="text-cyan-400" />
                  Your information is securely encrypted and never shared.
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
