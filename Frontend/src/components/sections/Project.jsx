import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
    Globe,
    ShoppingCart,
    Smartphone,
    Database,
    Check,
    ArrowUpRight
} from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import projects from "@/data/projects.json";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const iconMap = {
    Globe,
    ShoppingCart,
    Smartphone,
    Database
};

const Projects = () => {
    const navigate = useNavigate();
    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".projects-title", {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".projects-desc", {
                y: 30,
                opacity: 0,
                duration: 0.8
            }, "-=0.6")
            .fromTo(".project-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.4");

    }, { scope: container });

    return (
        <section
            ref={container}
            id="projects"
            className="relative py-28 scroll-mt-24 bg-gradient-to-b from-white to-gray-50/40 dark:from-background dark:to-muted/30"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-24">
                    <h2 className="projects-title text-4xl md:text-5xl font-bold mb-6">
                        Our <span className="text-[var(--hds-color-primary)]">IT Projects</span>
                    </h2>

                    <p className="projects-desc max-w-2xl mx-auto text-lg">
                        We design and build scalable digital products —
                        from high-performance websites to enterprise systems.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {projects.map((project) => {
                        const Icon = iconMap[project.icon];

                        return (
                            <div
                                key={project.id}
                                className="project-card group relative bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                            >
                                {/* Top Gradient Accent */}
                                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-[var(--hds-color-primary)]" />

                                {/* Icon */}
                                <div className="mb-6 w-14 h-14 rounded-xl flex items-center justify-center bg-[var(--hds-color-primary)]/10 text-[var(--hds-color-primary)] group-hover:scale-110 transition">
                                    <Icon size={28} />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-3">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground mb-6 flex-grow">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2 mb-6">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                                            <Check size={16} className="mr-2 text-[var(--hds-color-primary)]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <button
                                    onClick={() => navigate(`/projects/${project.id}`)}
                                    className="stripe-button stripe-button-secondary justify-between w-full group-hover:border-[var(--hds-color-primary)]"
                                >
                                    {project.buttonText}
                                    <ArrowUpRight size={16} />
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* View All */}
                <div className="mt-24 text-center flex justify-center">
                    <button
                        onClick={() => navigate("/projects")}
                        className="stripe-button stripe-button-primary px-10 py-4 text-lg"
                    >
                        View All Projects
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Projects;
