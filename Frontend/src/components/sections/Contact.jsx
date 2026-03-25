import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import { toast } from 'react-toastify';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sendContactEmail } from "@/services/contactApi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact = () => {
  const container = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successSubmit, setSuccessSubmit] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(".contact-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
      .fromTo(".contact-info",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(".contact-form",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 },
        "-=0.3"
      );
  }, { scope: container, revertOnUpdate: true });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Project requirements cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please correct the errors before submitting.", { theme: "dark" });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactEmail(formData);

      setSuccessSubmit(true);
      toast.success("Message sent successfully! We'll get back to you soon.", { theme: "dark" });

      setTimeout(() => {
        setSuccessSubmit(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({});
      }, 2000);
    } catch (error) {
      toast.error(error.message || "Failed to send email. Please try again.", {
        theme: "dark",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={container} className="py-24 bg-gray-50/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="contact-title text-4xl md:text-5xl font-bold text-[var(--hds-color-heading)] mb-6 tracking-tight">
            Get in <span className="text-[var(--hds-color-primary)]">Touch</span>
          </h2>
          <p className="text-lg text-[var(--hds-color-text)] max-w-3xl mx-auto font-medium">
            Ready to transform your digital presence? Contact us today for expert consultation and customized enterprise solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-[var(--hds-color-heading)] mb-8">DAK Technologies</h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[var(--hds-color-primary)]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={20} className="text-[var(--hds-color-primary)]" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--hds-color-heading)] mb-1">Headquarters</p>
                    <p className="text-[var(--hds-color-text)]/80 leading-relaxed">
                      Sadoday Palace, Gaddigodam,<br />
                      Nagpur, Maharashtra – 440001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[var(--hds-color-primary)]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={20} className="text-[var(--hds-color-primary)]" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--hds-color-heading)] mb-1">Direct Line</p>
                    <p className="text-[var(--hds-color-text)]/80">+91 95943 53773</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[var(--hds-color-primary)]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={20} className="text-[var(--hds-color-primary)]" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--hds-color-heading)] mb-1">Email Support</p>
                    <p className="text-[var(--hds-color-text)]/80">support@daktechno.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[var(--hds-color-primary)]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe size={20} className="text-[var(--hds-color-primary)]" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--hds-color-heading)] mb-1">Official Website</p>
                    <a
                      href="http://www.daktechno.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--hds-color-primary)] font-semibold hover:underline"
                    >
                      www.daktechno.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[var(--hds-color-heading)] mb-8">Send us a Message</h3>

              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-[var(--hds-color-heading)] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-[var(--hds-color-primary)] focus:border-transparent outline-none transition-all ${errors.name ? "border-red-400" : "border-gray-200"
                        }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[var(--hds-color-heading)] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-[var(--hds-color-primary)] focus:border-transparent outline-none transition-all ${errors.email ? "border-red-400" : "border-gray-200"
                        }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-[var(--hds-color-heading)] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-[var(--hds-color-primary)] focus:border-transparent outline-none transition-all ${errors.phone ? "border-red-400" : "border-gray-200"
                      }`}
                    placeholder="+91 00000 00000"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[var(--hds-color-heading)] mb-2">
                    Project Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-[var(--hds-color-primary)] focus:border-transparent outline-none transition-all resize-none ${errors.message ? "border-red-400" : "border-gray-200"
                      }`}
                    placeholder="Tell us about your digital goals..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || successSubmit}
                  className="w-full stripe-button stripe-button-primary justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : successSubmit ? "Message Sent ✓" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
