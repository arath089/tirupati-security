import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const CountingNumber = ({ target, suffix = "", delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 steps for smooth animation
        const stepValue = target / steps;
        const stepDuration = duration / steps;

        let currentStep = 0;
        const interval = setInterval(() => {
          currentStep++;
          setCount(Math.min(Math.round(stepValue * currentStep), target));

          if (currentStep >= steps) {
            clearInterval(interval);
          }
        }, stepDuration);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, target, delay]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-6 py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 gap-16 mb-20 md:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center">
            <motion.h2
              className="mb-4 text-6xl font-bold text-white md:text-7xl"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CountingNumber target={500} suffix="+" />
            </motion.h2>
            <p className="text-xl text-gray-200">Security Personnel</p>
          </div>

          <div className="text-center">
            <motion.h2
              className="mb-4 text-6xl font-bold text-white md:text-7xl"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <CountingNumber target={24} suffix="/7" delay={200} />
            </motion.h2>
            <p className="text-xl text-gray-200">On Duty</p>
          </div>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <blockquote className="mb-8 text-xl font-normal leading-relaxed text-white md:text-2xl">
            "Tirupati security services have been a part of our security detail
            for quite some time now and we have been completely satisfied by the
            amount of effort put in by their personnel and Mr. Rathi."
          </blockquote>

          <motion.div
            className="inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-medium text-gray-400">
              Nilabh Dwivedi (Branch Head)
            </p>
            <p className="text-lg font-bold text-gray-400">
              Sahara India Pariwar
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
