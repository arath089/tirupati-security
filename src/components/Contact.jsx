import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { State, City } from "country-state-city";

const Contact = () => {
  const [state, handleSubmit] = useForm("xzzvbveq");
  const [phoneError, setPhoneError] = useState("");
  const [selectedStateCode, setSelectedStateCode] = useState("");
  const [indianStates, setIndianStates] = useState([]);
  const [citiesInState, setCitiesInState] = useState([]);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  // Use your reCAPTCHA v2 site key
  const RECAPTCHA_SITE_KEY = "6Lcn4YUrAAAAAO5yPIPc5vJZJaU8lNtA7hGnmnr9";

  // Check if reCAPTCHA is loaded
  useEffect(() => {
    const checkRecaptcha = () => {
      if (window.grecaptcha && window.grecaptcha.render) {
        setRecaptchaLoaded(true);
      } else {
        setTimeout(checkRecaptcha, 100);
      }
    };

    checkRecaptcha();
  }, []);

  // Render reCAPTCHA when loaded
  useEffect(() => {
    if (recaptchaLoaded) {
      try {
        window.grecaptcha.render("recaptcha-container", {
          sitekey: RECAPTCHA_SITE_KEY,
          callback: (response) => {
            setRecaptchaValue(response);
          },
          "expired-callback": () => {
            setRecaptchaValue(null);
          },
        });
      } catch (error) {
        console.error("reCAPTCHA render error:", error);
      }
    }
  }, [recaptchaLoaded]);

  useEffect(() => {
    // Get all Indian states (IN is the country code for India)
    const states = State.getStatesOfCountry("IN");
    setIndianStates(states);
  }, []);

  useEffect(() => {
    // Get cities when state changes
    if (selectedStateCode) {
      const cities = City.getCitiesOfState("IN", selectedStateCode);
      setCitiesInState(cities);
    } else {
      setCitiesInState([]);
    }
  }, [selectedStateCode]);

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile number format
    return phoneRegex.test(phone);
  };

  const handlePhoneChange = (e) => {
    const phone = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (phone.length > 10) {
      return; // Don't allow more than 10 digits
    }
    e.target.value = phone;

    if (phone.length === 10) {
      if (validatePhoneNumber(phone)) {
        setPhoneError("");
      } else {
        setPhoneError("Phone number must start with 6, 7, 8, or 9");
      }
    } else if (phone.length > 0) {
      setPhoneError("Phone number must be exactly 10 digits");
    } else {
      setPhoneError("");
    }
  };

  const handleStateChange = (e) => {
    setSelectedStateCode(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Check if reCAPTCHA is completed
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA verification");
      return;
    }

    try {
      await handleSubmit(e);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  if (state.succeeded) {
    return (
      <section className="px-6 py-20 bg-gradient-to-b from-gray-600 to-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="p-12 bg-white shadow-xl rounded-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full"
            >
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-4 text-2xl font-bold text-gray-900"
            >
              Message Sent Successfully!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-600"
            >
              Thank you for contacting us. We'll get back to you within 24
              hours.
            </motion.p>
            <motion.button
              className="px-6 py-3 mt-6 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              onClick={() => window.location.reload()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Send Another Message
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="px-6 py-20 bg-gradient-to-b from-gray-600 to-gray-400"
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
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
            Ready for Safety?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Contact us today.
          </motion.p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="p-8 bg-white shadow-xl rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <form
            onSubmit={onSubmit}
            method="POST"
            action="https://formspree.io/f/xzzvbveq"
            className="space-y-6"
          >
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="mt-1 text-sm text-red-500"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email Address (Optional)
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="mt-1 text-sm text-red-500"
              />
            </motion.div>

            {/* Phone Number Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Phone Number *
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                required
                maxLength="10"
                className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="9876543210 (10 digits)"
                onChange={handlePhoneChange}
              />
              {phoneError && (
                <p className="mt-1 text-sm text-red-500">{phoneError}</p>
              )}
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
                className="mt-1 text-sm text-red-500"
              />
            </motion.div>

            {/* State Dropdown */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="state"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                State *
              </label>
              <select
                id="state"
                name="state"
                required
                value={selectedStateCode}
                onChange={handleStateChange}
                className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="">Select State</option>
                {indianStates.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
              {/* Hidden field to send readable state name */}
              <input
                type="hidden"
                name="state_name"
                value={
                  indianStates.find((s) => s.isoCode === selectedStateCode)
                    ?.name || ""
                }
              />
              <ValidationError
                prefix="State"
                field="state"
                errors={state.errors}
                className="mt-1 text-sm text-red-500"
              />
            </motion.div>

            {/* City Dropdown */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                City *
              </label>
              <select
                id="city"
                name="city"
                required
                disabled={!selectedStateCode}
                className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="">
                  {selectedStateCode
                    ? "Select City"
                    : "Please select state first"}
                </option>
                {citiesInState.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              <ValidationError
                prefix="City"
                field="city"
                errors={state.errors}
                className="mt-1 text-sm text-red-500"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Tell us about your security needs..."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="mt-1 text-sm text-red-500"
              />
            </motion.div>

            {/* reCAPTCHA v2 Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div id="recaptcha-container"></div>
            </motion.div>

            {/* reCAPTCHA Info Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="p-3 border border-green-200 rounded-lg bg-green-50"
            >
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-xs text-green-700">
                  <span className="font-medium">Protected by reCAPTCHA:</span>{" "}
                  Please complete the verification above to submit your message.
                </p>
              </div>
            </motion.div>

            {/* Display any errors */}
            {state.errors && state.errors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 border border-red-200 rounded-lg bg-red-50"
              >
                <h4 className="font-medium text-red-800">Submission Error:</h4>
                <div className="mt-1 text-sm text-red-700">
                  {state.errors.map((error, index) => (
                    <p key={index}>
                      {error.field
                        ? `${error.field}: ${error.message}`
                        : error.message || JSON.stringify(error)}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={
                state.submitting ||
                phoneError ||
                !selectedStateCode ||
                !recaptchaValue
              }
              className="w-full px-6 py-4 font-bold text-white transition-all duration-300 bg-gray-900 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              whileHover={{ scale: state.submitting || phoneError ? 1 : 1.02 }}
              whileTap={{ scale: state.submitting || phoneError ? 1 : 0.98 }}
            >
              {state.submitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 mr-3 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                  Sending...
                </div>
              ) : (
                "Submit"
              )}
            </motion.button>

            {/* reCAPTCHA branding (required by Google) */}
            <div className="text-xs text-center text-gray-500">
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Terms of Service
              </a>{" "}
              apply.
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
