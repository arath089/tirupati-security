import React from "react";
import { motion } from "framer-motion";

const Licensing = () => {
  return (
    <section id="licensing" className="px-6 py-20 bg-gray-800">
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
            Licensing & Registration
          </motion.h2>
          <motion.div
            className="w-24 h-1 mx-auto bg-yellow-400"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="max-w-3xl mx-auto mt-6 text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Fully licensed and registered security service provider in Uttar
            Pradesh
          </motion.p>
        </motion.div>

        {/* Licensing Information Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* License Information */}
          <motion.div
            className="p-6 bg-gray-900 border border-gray-700 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 mr-3 bg-yellow-400 rounded-lg">
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">License</h3>
            </div>
            <p className="mb-2 text-gray-300">
              <span className="font-medium">Type:</span> Pasara License
            </p>
            <p className="mb-2 text-gray-300">
              <span className="font-medium">State:</span> Uttar Pradesh
            </p>
            <p className="text-gray-300">
              <span className="font-medium">Established:</span> 2015
            </p>
          </motion.div>

          {/* Tax Information */}
          <motion.div
            className="p-6 bg-gray-900 border border-gray-700 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 mr-3 bg-blue-500 rounded-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Tax Registration
              </h3>
            </div>
            <p className="mb-2 text-sm text-gray-300">
              <span className="font-medium">GSTIN:</span>
              <br />
              <span className="font-mono">09ACKPR9449J1ZO</span>
            </p>
            <p className="text-sm text-gray-300">
              <span className="font-medium">PAN:</span>
              <br />
              <span className="font-mono">ACKPR9449J</span>
            </p>
          </motion.div>

          {/* ESI Information */}
          <motion.div
            className="p-6 bg-gray-900 border border-gray-700 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 mr-3 bg-green-500 rounded-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                ESI Registration
              </h3>
            </div>
            <p className="text-sm text-gray-300">
              <span className="font-medium">ESI Number:</span>
              <br />
              <span className="font-mono">21000556850001018</span>
            </p>
          </motion.div>
        </div>

        {/* Registered Office */}
        <motion.div
          className="p-8 mt-12 bg-gray-900 border border-gray-700 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 mr-4 bg-red-500 rounded-lg">
              <svg
                className="text-white w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white">
              Registered Office
            </h3>
          </div>
          <div className="text-lg leading-relaxed text-gray-300">
            <p className="mb-2">6A, Industrial Area, Fazalganj</p>
            <p className="mb-2">Kanpur, Uttar Pradesh</p>
            <p>India</p>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-yellow-400 rounded-full">
            <svg
              className="w-5 h-5 mr-2 text-gray-900"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs font-bold text-gray-900 md:text-base">
              Fully Licensed & Compliant Security Provider
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Licensing;
