import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import PageLoader from '@/components/ui/PageLoader';
import ScrollTrigger from "gsap/ScrollTrigger";
    
const TermsOfService = () => {
    const container = useRef();
    const navigate = useNavigate();
    const [isInitialLoading, setIsInitialLoading] = useState(true);


    gsap.registerPlugin(ScrollTrigger);

useGSAP(() => {
  if (isInitialLoading) return;

  gsap.from(".tos-content > *", {
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
            <div className="max-w-4xl mx-auto tos-content">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-[var(--hds-color-primary)] font-bold mb-10 hover:gap-3 transition-all"
                >
                    <ArrowLeft size={20} /> Back
                </button>

                <h1 className="text-4xl md:text-5xl font-bold text-[var(--hds-color-heading)] mb-4 tracking-tight">
                    Terms of Service
                </h1>
                <p className="text-[var(--hds-color-text)] mb-10 font-medium">Last Updated: 24/02/2026</p>

                <div className="prose prose-slate max-w-none text-[var(--hds-color-text)] space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-[var(--hds-color-heading)] mb-4">1. Acceptance of Terms</h2>
                        <p>By using our website or services, you confirm that you have read and agree to be bound by these Terms. If you do not agree, please discontinue using our services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--hds-color-heading)] mb-4">2. Eligibility</h2>
                        <p>You must be at least 18 years old to use our services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--hds-color-heading)] mb-4">3. Services Provided</h2>
                        <p>D A K Technologies offers: IT services, SaaS platform, Custom software development, Server maintenance, and DevOps solutions. We may update, modify, or discontinue any part of our services without prior notice.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--hds-color-heading)] mb-4">4. User Responsibilities</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Use our services for unlawful activities</li>
                            <li>Attempt unauthorized access to our systems</li>
                            <li>Upload harmful files, malware, or viruses</li>
                            <li>Copy, modify, or distribute our content without permission</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--hds-color-heading)] mb-4">5. Intellectual Property Rights</h2>
                        <p>All content, designs, logos, code, and materials on www.daktechno.com are the property of D A K Technologies. Reproduction or distribution without permission is prohibited.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--hds-color-heading)] mb-4">6. Limitation of Liability</h2>
                        <p>To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages. Total liability is limited to the amount paid by you in the last 3 months, if applicable.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--hds-color-heading)] mb-4">7. Governing Law</h2>
                        <p>These Terms are governed by the laws of India. All disputes will fall under the jurisdiction of Nagpur, Maharashtra courts.</p>
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

export default TermsOfService;
