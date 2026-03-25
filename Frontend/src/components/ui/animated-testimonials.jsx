import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion as m, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { cn } from "../../utils/cn";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const rotations = testimonials.map((_, i) => (i * 7) % 21 - 10);

  return (
    <section id="testimonials" className="relative z-0 bg-gradient-to-b from-white to-gray-50/40 py-28">
      <div
        className={cn("max-w-6xl mx-auto px-6 md:px-12 lg:px-20", className)}>

        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--hds-color-heading)]">
            What Our <span className="text-[var(--hds-color-primary)]">Clients Say</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[var(--hds-color-text)]/70">
            Real feedback from engineering leaders and entrepreneurs who
            built their digital future with DAK Technologies.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <div className="relative h-[480px] w-full">
              <AnimatePresence mode="wait">
                {testimonials.map((testimonial, index) => (
                  <m.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: rotations[index],
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : rotations[index],
                      zIndex: isActive(index)
                        ? 999
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: rotations[index],
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom">
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      draggable={false}
                      className="h-full w-full rounded-[2.5rem] object-cover object-center shadow-2xl border border-white/20" />
                  </m.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-between flex-col py-4">
            <m.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}>
              <h3 className="text-3xl font-bold text-[var(--hds-color-heading)]">
                {testimonials[active].name}
              </h3>
              <p className="text-lg font-medium text-[var(--hds-color-primary)] mt-1">
                {testimonials[active].designation}
              </p>
              <m.p className="text-xl text-[var(--hds-color-text)] mt-10 leading-relaxed font-medium italic">
                &quot;{testimonials[active].quote.split(" ").map((word, index) => (
                  <m.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block">
                    {word}&nbsp;
                  </m.span>
                ))}&quot;
              </m.p>
            </m.div>
            <div className="flex gap-6 pt-12 md:pt-0">
              <button
                onClick={handlePrev}
                className="h-12 w-12 rounded-xl border border-gray-200 bg-white shadow-sm flex items-center justify-center group/button hover:border-[var(--hds-color-primary)] hover:text-[var(--hds-color-primary)] transition-all duration-300">
                <IconArrowLeft
                  className="h-6 w-6 group-hover/button:-translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="h-12 w-12 rounded-xl border border-gray-200 bg-white shadow-sm flex items-center justify-center group/button hover:border-[var(--hds-color-primary)] hover:text-[var(--hds-color-primary)] transition-all duration-300">
                <IconArrowRight
                  className="h-6 w-6 group-hover/button:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedTestimonials;
