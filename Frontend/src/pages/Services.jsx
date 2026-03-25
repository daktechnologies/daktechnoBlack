"use client";

import { services } from "../data/services";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import scrollToSection from "../utils/scrollToSection";

const Services = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const serviceIds = ["web", "mobile", "design", "enterprise"];

const handleContactClick = () => {
    if (location.pathname === "/") {
        scrollToSection("contact");
    } else {
        // 1. Home page par jao
        navigate("/");
        
        // 2. Loader ka wait karo (2s loader + 0.5s buffer)
        setTimeout(() => {
            scrollToSection("contact");
        }, 2500); 
    }
};

    return (
        <main className="bg-white">
            {/* HERO SECTION */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <Badge className="mb-6 bg-[var(--hds-color-primary)]/10 text-[var(--hds-color-primary)] px-4 py-1.5 text-sm font-semibold rounded-full border-none hover:text-white">
                        Our Expertise
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-bold mb-8 text-[var(--hds-color-heading)] tracking-tight">
                        Comprehensive <span className="text-[var(--hds-color-primary)]">IT Digital</span> Solutions
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-[var(--hds-color-text)]/70 leading-relaxed font-medium">
                        We partner with ambitious companies to build scalable digital products,
                        from high-performance web platforms to secure enterprise systems.
                    </p>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            id={serviceIds[index]}
                            className="group border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-[2rem] overflow-hidden p-4 scroll-mt-24"
                        >
                            <CardHeader className="pb-4">
                                <Badge className="w-fit mb-6 bg-gray-50 text-[var(--hds-color-primary)] font-bold px-4 py-1 rounded-lg border-gray-100">
                                    {service.badge}
                                </Badge>
                                <CardTitle className="text-3xl font-bold text-[var(--hds-color-heading)]">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <p className="text-lg text-[var(--hds-color-text)]/80 mb-8 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                    {service.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center text-sm font-medium text-[var(--hds-color-text)]/70 px-4 py-3 bg-gray-50 rounded-xl border border-transparent group-hover:border-gray-100 transition-colors"
                                        >
                                            <CheckCircle2
                                                size={18}
                                                className="mr-3 text-[var(--hds-color-primary)] shrink-0"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </div>

                                <Button
                                    className="w-full sm:w-auto stripe-button stripe-button-primary py-6 px-10 rounded-xl"
                                >
                                    Explore Solution
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="py-32 bg-gray-50/50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold mb-6 text-[var(--hds-color-heading)] tracking-tight">
                            Our Development Lifecycle
                        </h2>
                        <p className="text-[var(--hds-color-text)]/60 max-w-2xl mx-auto text-lg">
                            We follow a rigorous, enterprise-grade process to ensure every line of code
                            contributes to your business success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connection Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gray-200 -z-10" />

                        {["Discovery & Strategy", "Agile Development", "Deployment & Care"].map((step, index) => (
                            <div key={index} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 rounded-2xl bg-[var(--hds-color-primary)] text-white flex items-center justify-center text-2xl font-bold mb-8 shadow-lg shadow-[var(--hds-color-primary)]/20">
                                    {index + 1}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-[var(--hds-color-heading)]">
                                    {step}
                                </h3>
                                <p className="text-[var(--hds-color-text)]/70 leading-relaxed font-medium">
                                    We combine deep technical expertise with strategic business thinking
                                    to deliver results that scale with your growth.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-32">
                <div className="max-w-4xl mx-auto px-6 text-center bg-[var(--hds-color-primary)] rounded-[3rem] py-20 shadow-2xl shadow-[var(--hds-color-primary)]/20 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />

                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight relative z-10">
                        Next Level Transformation Starts Here
                    </h2>
                    <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto relative z-10 font-medium">
                        Contact DAK Technologies today for a free consultation and project audit.
                    </p>
                    <Button
                        size="lg"
                        onClick={handleContactClick}
                        // onClick={() => navigate("/#contact")}
                        className="bg-white text-[var(--hds-color-primary)] hover:bg-gray-100 px-12 py-8 text-lg font-bold rounded-2xl shadow-xl transition-all hover:scale-105 relative z-10"
                    >
                        Schedule a Demo
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default Services;
