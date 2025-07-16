import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="text-white bg-gray-950">
      <div className="px-6 py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4 space-x-3">
              <div className="flex items-center justify-center bg-yellow-400 rounded-lg w-14 h-14">
                <img
                  src="/images/logo.png"
                  alt="Tirupati Security Logo"
                  className="object-contain w-20 h-20"
                />
              </div>
              <span className="text-xl font-bold">
                Tirupati Security Services Pvt Ltd.
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-200">Company</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 transition-colors duration-200 hover:text-yellow-400"
                >
                  About Us
                </button>
              </li>
              <li>
                <span
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 transition-colors duration-200 hover:text-yellow-400"
                >
                  Jobs
                </span>
              </li>
              <li>
                <span className="text-gray-300 transition-colors duration-200 hover:text-yellow-400">
                  Licensing
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Services Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-200">Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 transition-colors duration-200 hover:text-yellow-400"
                >
                  Security Guards
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 transition-colors duration-200 hover:text-yellow-400"
                >
                  Gunmen Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 transition-colors duration-200 hover:text-yellow-400"
                >
                  Lady Guards
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 transition-colors duration-200 hover:text-yellow-400"
                >
                  Business Security
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-200">Contact</h3>
            <ul className="space-y-3">
              <li>
                <div className="text-gray-300">
                  <p className="mb-1 text-sm font-medium text-gray-400">
                    Email:
                  </p>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-300 underline transition-colors duration-200 hover:text-yellow-400 decoration-gray-500 hover:decoration-yellow-400"
                  >
                    tirupatiservices255@gmail.com
                  </button>
                </div>
              </li>
              <li>
                <div className="text-gray-300">
                  <p className="mb-1 text-sm font-medium text-gray-400">
                    Phone:
                  </p>
                  <div className="space-y-1">
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="block text-gray-300 underline transition-colors duration-200 hover:text-yellow-400 decoration-gray-500 hover:decoration-yellow-400"
                    >
                      +91-9151922025
                    </button>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="block text-gray-300 underline transition-colors duration-200 hover:text-yellow-400 decoration-gray-500 hover:decoration-yellow-400"
                    >
                      +91-9639311102
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="text-gray-300">
                  <p className="mb-1 text-sm font-medium text-gray-400">
                    Address:
                  </p>
                  <p className="text-sm leading-relaxed text-gray-300">
                    6A, Industrial Area, Fazalganj,
                    <br />
                    Kanpur, Uttar Pradesh, India
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col items-center justify-between pt-8 mt-12 border-t border-gray-800 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-400">
            © 2015 Tirupati Security Services Pvt Ltd. All rights reserved.
          </p>

          <div className="flex mt-4 space-x-6 md:mt-0">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm text-gray-400 transition-colors duration-200 hover:text-yellow-400"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("clients")}
              className="text-sm text-gray-400 transition-colors duration-200 hover:text-yellow-400"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-gray-400 transition-colors duration-200 hover:text-yellow-400"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-gray-400 transition-colors duration-200 hover:text-yellow-400"
            >
              Contact
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
