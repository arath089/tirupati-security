import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(true);
  const { scrollY } = useScroll();

  // Transform values for smooth transitions - keep blur constant
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Get actual section positions from DOM
      const heroSection =
        document.getElementById("hero") || document.querySelector("section");
      const testimonialsSection = document.getElementById("testimonials");
      const servicesSection = document.getElementById("services");
      const aboutSection = document.getElementById("about");
      const contactSection = document.getElementById("contact");
      const partnersSection = document.getElementById("partners");

      const currentScroll = window.scrollY + 100; // Add offset for nav height

      // Define sections with actual DOM positions
      const sections = [];

      if (heroSection) {
        sections.push({
          id: "hero",
          start: 0,
          end: testimonialsSection
            ? testimonialsSection.offsetTop
            : window.innerHeight,
          dark: true,
        });
      }

      if (testimonialsSection) {
        sections.push({
          id: "testimonials",
          start: testimonialsSection.offsetTop,
          end: servicesSection
            ? servicesSection.offsetTop
            : testimonialsSection.offsetTop + testimonialsSection.offsetHeight,
          dark: true,
        });
      }

      if (servicesSection) {
        sections.push({
          id: "services",
          start: servicesSection.offsetTop,
          end: partnersSection
            ? partnersSection.offsetTop
            : servicesSection.offsetTop + servicesSection.offsetHeight,
          dark: true,
        });
      }

      if (partnersSection) {
        sections.push({
          id: "partners",
          start: partnersSection.offsetTop,
          end: aboutSection
            ? aboutSection.offsetTop
            : partnersSection.offsetTop + partnersSection.offsetHeight,
          dark: false, // Partners section has gray-100 background
        });
      }

      if (aboutSection) {
        sections.push({
          id: "about",
          start: aboutSection.offsetTop,
          end: contactSection
            ? contactSection.offsetTop
            : aboutSection.offsetTop + aboutSection.offsetHeight,
          dark: false, // About section has gray-50 background
        });
      }

      if (contactSection) {
        sections.push({
          id: "contact",
          start: contactSection.offsetTop,
          end: contactSection.offsetTop + contactSection.offsetHeight,
          dark: true,
        });
      }

      const currentSection = sections.find(
        (section) =>
          currentScroll >= section.start && currentScroll < section.end
      );

      if (currentSection) {
        setIsDarkSection(currentSection.dark);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // Close mobile menu first for mobile
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    // Add a small delay to ensure menu closes before scrolling
    setTimeout(
      () => {
        let targetId = sectionId;

        // Map navigation IDs to actual section IDs
        if (sectionId === "partners") {
          targetId = "clients"; // Partners section actually has ID "clients"
        }

        const section = document.getElementById(targetId);
        if (section) {
          // Calculate offset for fixed navigation
          const navHeight = 100;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      },
      isMobileMenuOpen ? 300 : 0
    ); // Longer delay for mobile menu
  };

  const navItems = [
    { name: "Services", id: "services" },
    { name: "Why Us", id: "testimonials" },
    { name: "Clients", id: "partners" }, // This maps to "clients" section
    { name: "About", id: "about" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center max-w-full px-4 py-2">
      <motion.nav
        className="max-w-full px-4 py-2 transition-all duration-300 border rounded-full shadow-lg md:px-10 backdrop-blur-md border-white/10 bg-gray-600/20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between max-w-6xl gap-4 mx-auto">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-4"
            style={{ scale: logoScale }}
          >
            <motion.div
              className="flex items-center justify-center w-10 h-10 overflow-hidden bg-yellow-400 rounded-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(234, 179, 8, 0.4)",
                y: -2,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.img
                src="/images/logo.png"
                alt="Tirupati Security Logo"
                className="object-contain w-8 h-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
            <motion.span
              className={`font-bold text-lg md:text-xl transition-colors duration-300 ${
                isDarkSection ? "text-white" : "text-gray-900"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Tirupati Security
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isDarkSection
                    ? "text-gray-200 hover:text-yellow-400"
                    : "text-gray-700 hover:text-yellow-600"
                }`}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}

            <motion.button
              className="px-3 py-1 font-bold text-gray-900 transition-all duration-300 bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-400 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="relative flex flex-col items-center justify-center w-10 h-10 space-y-1 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              } ${isDarkSection ? "bg-white" : "bg-gray-900"}`}
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 6 : 0,
              }}
            />
            <motion.span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              } ${isDarkSection ? "bg-white" : "bg-gray-900"}`}
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            />
            <motion.span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              } ${isDarkSection ? "bg-white" : "bg-gray-900"}`}
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0,
              }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="absolute left-0 right-0 mt-5 bg-gray-800 rounded-xl md:hidden bg-opacity-95 backdrop-blur-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                className="block w-full py-2 text-left text-white transition-colors duration-300 hover:text-yellow-400"
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              className="w-full px-4 py-2 mt-4 font-bold text-gray-900 transition-all duration-300 bg-yellow-500 rounded-full hover:bg-yellow-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ delay: 0.3, duration: 0.3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navigation;
