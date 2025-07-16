import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    {
      name: "Sahara India Pariwar",
      description:
        "Tirupati security services have been a part of our security detail for quite some time now and we have been completely satisfied by the amount of effort put in by their personnel and Mr. Rathi.",
      testimonial: "Nilabh Dwivedi (Branch Head)",
      website: "https://www.sahara.in/",
      logo: "/images/clients/sahara-india.png",
    },
    {
      name: "RSPL Group",
      description:
        "We have been trusting Tirupati services since a long time now and we have given 10 units to Mr. Rathi. We are positive that he handles their team with utmost attention and care.",
      testimonial: "",
      website: "https://www.rsplgroup.com/",
      logo: "/images/clients/rspl-group.png",
    },
    {
      name: "Paras Dairy",
      description:
        "When it comes to securing our assets, we have trusted Tirupati Security for years. Mr. Rathi has always been a phone call away and has always satisfied our security needs. Throughout the years, he has become a part of our family.",
      testimonial: "Anil K. Upadhyay (President)",
      website: "https://www.parasdairy.com/",
      logo: "/images/clients/paras-defence.png",
    },
    {
      name: "Narayana Education",
      description:
        "Tirupati Security has been always trusted with our educational institutes security. Their discipline and strictness has always impressed me.",
      testimonial: "Shweta Tiwari (Director)",
      website: "https://www.narayanagroup.com/",
      logo: "/images/clients/narayana-health.png",
    },
    {
      name: "Trident Auto Components",
      description:
        "Tirupati Security has been a reliable partner in safeguarding our premises. Their alertness, discipline, and no-nonsense approach to security have always given us peace of mind in our day-to-day operations.",
      testimonial: "",
      website:
        "https://www.indiamart.com/trident-auto-components-private-limited/",
      logo: "/images/clients/trident-logo.png",
    },
    {
      name: "SNG Solvents Private Ltd.",
      description:
        "Tirupati Security has always delivered dependable protection with unmatched professionalism.",
      testimonial: "Arjun Kumar (Manager)",
      website:
        "https://www.zaubacorp.com/SNG-SOLVENTS-PRIVATE-LIMITED-U15492UP2006PTC032502",
      logo: "/images/clients/sng-logo.png",
    },
    {
      name: "Vaibhav Edibles Pvt. Ltd.",
      description:
        "With Tirupati Security on-site, we’ve experienced seamless operations backed by consistent safety and vigilance.",
      testimonial: "",
      website:
        "https://www.indiamart.com/vaibhav-edibles-pvt-ltd/?srsltid=AfmBOordRfsvyrjoimTDtwEV9cr6C5-NNv4jelEX6U14QtORoyKJ1f3F",
      logo: "/images/clients/vaibhav-logo.png",
    },
  ];

  return (
    <section
      id="clients"
      className="px-6 py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-center text-white">
          Our Clients
        </h2>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {clients.map((client, index) => (
            <motion.div
              layoutId={`card-${index}`}
              key={index}
              onClick={() => setSelectedClient({ ...client, index })}
              className="p-3 bg-white shadow cursor-pointer rounded-xl"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.img
                src={client.logo}
                alt={client.name}
                className="object-contain w-full h-20 mx-auto"
                layoutId={`logo-${index}`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Morphing Modal */}
      <AnimatePresence>
        {selectedClient && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedClient(null)}
          >
            <motion.div
              className="relative w-full max-w-md p-6 text-center bg-white shadow-xl rounded-xl"
              onClick={(e) => e.stopPropagation()}
              layoutId={`card-${selectedClient.index}`}
              layout
            >
              <motion.div
                className="absolute flex items-center justify-center w-8 h-8 transition-all bg-gray-700 rounded-full cursor-pointer top-4 right-4 bg-opacity-80 hover:bg-opacity-100"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setSelectedClient(null)}
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

              <motion.img
                src={selectedClient.logo}
                alt={selectedClient.name}
                className="object-contain w-auto h-20 max-w-full mx-auto mb-4"
                layoutId={`logo-${selectedClient.index}`}
              />
              <h3 className="mb-2 text-xl font-bold text-gray-800">
                {selectedClient.name}
              </h3>
              <p className="mb-4 text-sm text-gray-700">
                "{selectedClient.description}"
              </p>
              {selectedClient.testimonial && (
                <p className="mb-4 text-xs text-gray-500">
                  — {selectedClient.testimonial}
                </p>
              )}
              <a
                href={selectedClient.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gray-700 rounded hover:bg-gray-800"
              >
                Visit Website
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Clients;
