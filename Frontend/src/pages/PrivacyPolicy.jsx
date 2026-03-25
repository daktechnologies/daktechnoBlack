import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import PageLoader from '@/components/ui/PageLoader';
import ScrollTrigger from "gsap/ScrollTrigger";

const PrivacyPolicy = () => {
    const container = useRef();
    const navigate = useNavigate();
    const [isInitialLoading, setIsInitialLoading] = useState(true);

gsap.registerPlugin(ScrollTrigger);

useGSAP(() => {
  if (isInitialLoading) return;

  gsap.from(".pp-content > *", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
  });

}, { scope: container, dependencies: [isInitialLoading] });
    
      useEffect(() => {
      // 3000 ka matlab hai 3 seconds (aap ise badha bhi sakte hain)
      const timer = setTimeout(() => {
        setIsInitialLoading(false);
      }, 2000); 
      return () => clearTimeout(timer);
    }, []);

    return (
        <>
        {isInitialLoading ? <PageLoader /> : null}
        <div ref={container} className="min-h-screen bg-white py-20 px-6">
            <div className="max-w-4xl mx-auto pp-content">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-[var(--hds-color-primary)] font-bold mb-10 hover:gap-3 transition-all"
                >
                    <ArrowLeft size={20} /> Back
                </button>

                <h1 className="text-4xl md:text-5xl font-bold text-[var(--hds-color-heading)] mb-4 tracking-tight">
                    Privacy Policy
                </h1>
                <p className="text-[var(--hds-color-text)] mb-10 font-medium">Last Updated: 24/02/2026</p>

                <div className="prose prose-slate max-w-none text-[var(--hds-color-text)] space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-[var(--hds-color-heading)] mb-4">1. Information We Collect</h2>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-[var(--hds-color-heading)]">1.1 Personal Information</h3>
                            <p>We may collect: Name, Email address, Phone number, Company name, and Billing details.</p>

                            <h3 className="text-lg font-bold text-[var(--hds-color-heading)]">1.2 Technical & Usage Data</h3>
                            <p>IP address, Browser type, Operating system, Pages visited, and Device information.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--hds-color-heading)] mb-4">2. How We Use Your Information</h2>
                        <p>We use collected information to provide and improve our services, manage accounts, process payments, and improve security. We do not sell your information.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--hds-color-heading)] mb-4">3. Data Protection & Security</h2>
                        <p>We use industry-standard measures such as Encryption, HTTPS, and Server security protocols. However, no online system is 100% secure.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--hds-color-heading)] mb-4">4. Your Rights</h2>
                        <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at support@daktechno.com.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--hds-color-heading)] mb-4">5. Cookies</h2>
                        <p>We use cookies to improve user experience and analyze website performance. You can disable cookies in your browser settings.</p>
                    </section>
                </div>

                <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-xl font-bold text-[var(--hds-color-heading)] mb-4">Contact Information</h3>
                    <p className="text-[var(--hds-color-text)]">
                        <strong>D A K Technologies</strong><br />
                        Sadoday Palace, Gaddigodam, Nagpur–01<br />
                        Email: support@daktechno.com<br />
                        Website: www.daktechno.com
                    </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default PrivacyPolicy;
