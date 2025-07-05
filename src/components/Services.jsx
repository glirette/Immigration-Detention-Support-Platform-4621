import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFileText, FiVideo, FiUsers, FiClock, FiCheck, FiGlobe } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiFileText,
      title: "Document Notarization",
      description: "Professional notarization of power of attorney and other important documents",
      features: [
        "Power of attorney documents",
        "Affidavits and sworn statements",
        "Immigration document authentication",
        "Legal document verification"
      ]
    },
    {
      icon: FiVideo,
      title: "Remote Notarization",
      description: "Secure video notarization services for those unable to meet in person",
      features: [
        "Secure video calls",
        "Identity verification",
        "Document authentication",
        "Real-time processing"
      ]
    },
    {
      icon: FiUsers,
      title: "Family Document Services",
      description: "Notarization services for families dealing with immigration situations",
      features: [
        "Family affidavits",
        "Supporting documents",
        "Witness statements",
        "Document certification"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Notary Services for Alligator Alcatraz Detention
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In partnership with Notary Geek, we provide professional notary services for families 
            affected by ICE detention at the Alligator Alcatraz facility in Florida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <SafeIcon icon={service.icon} className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <SafeIcon icon={FiGlobe} className="h-12 w-12 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Partnership with Notary Geek
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Our notary services are powered by NotaryGeek.net, a trusted online notary service 
            that specializes in immigration and detention-related document notarization.
          </p>
          <a
            href="https://notarygeek.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <SafeIcon icon={FiGlobe} className="mr-2 h-5 w-5" />
            Visit Notary Geek
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg"
        >
          <div className="flex items-center mb-4">
            <SafeIcon icon={FiFileText} className="h-6 w-6 text-yellow-600 mr-3" />
            <h3 className="text-lg font-semibold text-yellow-800">Important Notice</h3>
          </div>
          <p className="text-yellow-700">
            <strong>We are notaries, not attorneys.</strong> We can only notarize documents and verify identities. 
            We cannot provide legal advice or prepare legal documents. Please consult with a qualified attorney 
            for legal advice regarding your specific situation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;