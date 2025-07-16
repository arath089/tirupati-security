import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ServiceCard = ({
  title,
  description,
  details,
  features,
  image,
  index,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    if (isFlipped) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  React.useEffect(() => {
    const rotateValue = isFlipped ? 180 : 0;
  }, [isFlipped, index]);

  return (
    <motion.div
      className="relative w-full"
      style={{ perspective: "1000px", height: "480px" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          height: "480px",
        }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          type: "tween",
        }}
        onClick={handleFlip}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            height: "480px",
            ...(isFlipped
              ? {}
              : {
                  rotateX: rotateX,
                  rotateY: rotateY,
                }),
          }}
        >
          {/* Front of Card */}
          <div
            className="absolute inset-0 flex flex-col w-full h-full bg-white shadow-lg rounded-2xl group"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              height: "480px",
            }}
          >
            <div className="relative flex-shrink-0 h-48 overflow-hidden bg-gray-200 rounded-t-2xl">
              <img
                src={image}
                alt={title}
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>

            <div className="flex flex-col justify-between flex-1 min-h-0 p-4 md:p-6">
              <div className="flex-1">
                <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 line-clamp-6">
                  {description}
                </p>
              </div>

              <div className="flex justify-center flex-shrink-0 mt-4">
                <button className="px-4 py-2 text-sm font-medium text-black transition-colors duration-200 bg-blue-100 rounded-full hover:bg-blue-300">
                  Click to learn more
                </button>
              </div>
            </div>

            <motion.div className="absolute flex items-center justify-center w-8 h-8 transition-opacity duration-200 bg-gray-800 rounded-full opacity-0 top-4 right-4 group-hover:opacity-100">
              <motion.div
                className="w-4 h-4 border-2 border-white border-dashed rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </div>

          {/* Back of Card */}
          <div
            className="absolute inset-0 flex flex-col w-full h-full bg-blue-900 shadow-lg rounded-2xl"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              height: "480px",
            }}
          >
            <motion.div
              className="absolute flex items-center justify-center w-8 h-8 transition-all bg-white rounded-full cursor-pointer top-4 right-4 bg-opacity-20 hover:bg-opacity-30"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
            >
              <motion.div
                className="w-4 h-0.5 bg-white absolute"
                animate={{ rotate: 45 }}
                whileHover={{ rotate: 135 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="w-4 h-0.5 bg-white absolute"
                animate={{ rotate: -45 }}
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <div className="flex flex-col h-full min-h-0 p-6 text-white">
              <div className="flex-1 min-h-0">
                <h3 className="mb-4 text-xl font-bold line-clamp-2">{title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-blue-100 line-clamp-4">
                  {details}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-200">Key Features:</h4>
                  <ul className="space-y-2 overflow-y-auto max-h-40">
                    {features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start text-sm text-blue-100"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: isFlipped ? 1 : 0,
                          x: isFlipped ? 0 : -20,
                        }}
                        transition={{ duration: 0.3, delay: idx * 0.1 + 0.3 }}
                      >
                        <div className="w-1.5 h-1.5 mr-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Security Guards",
      description:
        "Static security guards are uniformed security personnel that remain at a particular site for an agreed period of time. The static security guards can be used to open and close property at the start and end of the day.",
      details:
        "Our static security guards provide comprehensive protection for your business. They make an assessment of your business activity and provide collection or accurate security services with the introduction of our fully vetted, trained and licensed security officers who will operate round the clock.",
      features: [
        "Uniformed security personnel",
        "Site-specific protection",
        "Property access management",
        "Round-the-clock operation",
        "Fully vetted and licensed officers",
      ],
      image: "/images/services/static-security.jpg",
    },
    {
      title: "Gunmen Services",
      description:
        "Tirupati security services takes pride in providing strong, well-vetted Gunmen for the protection of your business assets.",
      details:
        "Sometimes, services are needed which require more stringent security actions and we believe we can provide the best security personnel for that task. For Business owners, this can come as a piece of mind that their assets are secured by the best of the best. Our Gunmen go through strict training and are qualified to handle weapons for security purposes.",
      features: [
        "Well-vetted personnel",
        "Strict training programs",
        "Licensed weapon handling",
        "High-risk security expertise",
        "Asset protection specialists",
      ],
      image: "/images/services/gunmen-bouncers.jpg",
    },
    {
      title: "Supervisors",
      description:
        "We provide well trained Supervisors for your own business needs. Our Supervisors can provide the best management and decision making skills so that you do not need to deal with day to day management of guards and housekeeping staff.",
      details:
        "Our experienced supervisors bring excellent management and decision-making skills to oversee your security operations. They handle day-to-day management of guards and housekeeping staff, allowing you to focus on your core business activities while ensuring optimal security management.",
      features: [
        "Experienced management personnel",
        "Decision-making expertise",
        "Staff coordination and oversight",
        "Operational efficiency",
        "Business-focused approach",
      ],
      image: "/images/services/supervisors.jpg",
    },
    {
      title: "Lady Guards",
      description:
        "We also provide female security guards and Gunmen for the needs depending on businesses and organizations. Our female security personnel are specially trained to handle situations requiring cultural sensitivity and professional discretion.",
      details:
        "Understanding the diverse security needs of modern businesses, we provide professional female security personnel who are specially trained to handle sensitive situations and provide security services in environments where female guards are preferred or required.",
      features: [
        "Female security specialists",
        "Culturally sensitive approach",
        "Professional training",
        "Diverse business needs coverage",
      ],
      image: "/images/services/lady-guards.jpg",
    },
    {
      title: "Housekeeping Services",
      description:
        "Top quality housekeeping services that are more in touch with today's business requirements. Good door supervisors can diffuse a situation before it becomes a problem.",
      details:
        "Our policy is to provide top quality housekeeping services that are more in touch with today's business requirements. We believe in 'Prevention Stops Aggression' and our approach is non-confrontational whenever possible. Our motto is 'Prevention Stops Aggression' and our belief is that everyone deserves to be treated with tact and respect.",
      features: [
        "Professional cleaning and maintenance",
        "Non-confrontational approach",
        "Trained door supervisors",
        "Customer-focused service",
      ],
      image: "/images/services/housekeeping.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="px-6 py-20 bg-gradient-to-b from-gray-950 to-gray-600"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="mb-4 text-4xl font-bold text-white md:text-5xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>

          <motion.div
            className="w-24 h-1 mx-auto bg-yellow-400"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              details={service.details}
              features={service.features}
              image={service.image}
              index={index}
            />
          ))}
        </div>

        {/* Bottom row with 2 cards centered */}
        <div className="grid max-w-4xl grid-cols-1 gap-12 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-2">
          {services.slice(3, 5).map((service, index) => (
            <ServiceCard
              key={index + 3}
              title={service.title}
              description={service.description}
              details={service.details}
              features={service.features}
              image={service.image}
              index={index + 3}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backfacevisibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default Services;
