import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="px-6 py-20 bg-gray-50">
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
            className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h2>
          <motion.div
            className="w-24 h-1 mx-auto bg-yellow-400"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Director's Image */}
          <motion.div
            className="relative lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative p-8 shadow-xl bg-gradient-to-br from-gray-100 to-gray-300 rounded-2xl">
              <motion.img
                src="/images/director/deopal-rathi.jpg"
                alt="Deopal Rathi - Director, Tirupati Security Services"
                className="object-cover object-top w-full shadow-lg h-96 rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating Card */}
              <motion.div
                className="absolute p-6 bg-white shadow-2xl -bottom-8 -right-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-1 text-xl font-bold text-gray-900">
                  Deopal Rathi
                </h3>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-xs text-gray-500">
                    Industry Leader
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6 lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <motion.h3
                className="mb-4 text-3xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Professional Security Agency Since 2015
              </motion.h3>

              <motion.p
                className="mb-6 text-lg leading-relaxed text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                We are a professional security agency providing customized
                security and training solutions to PSU's, Industries, Commercial
                and Business houses. Founded in 2015, we strive to provide
                solutions to all the security needs of an establishment or
                individuals.
              </motion.p>
            </div>

            <motion.div
              className="p-6 bg-white border-l-4 border-yellow-400 shadow-lg rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-3 text-xl font-semibold text-gray-900">
                Our Commitment to Excellence
              </h4>
              <p className="leading-relaxed text-gray-700">
                Our staff is well-trained and fully screened to safeguard your
                property and assets. They are also well versed with the uses of
                latest security gadgets and surveillance techniques. Our company
                aims to provide the best trained professional security
                operatives in the country.
              </p>
            </motion.div>

            {/* Team Members */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="p-6 text-left bg-white shadow-lg rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 bg-yellow-400 rounded-full">
                    <span className="text-lg font-bold text-gray-900">DR</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Deopal Rathi</h5>
                    <p className="text-sm text-gray-600">Director & Founder</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  Dynamic personality with rich experience in diverse fields of
                  Human resource & management. He is well versed in the field of
                  management and has excellent organizing and planning skills.
                  He has the ability to build long lasting client relationship &
                  satisfaction is always a priority.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
