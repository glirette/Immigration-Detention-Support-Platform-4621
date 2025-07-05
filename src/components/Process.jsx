import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUserPlus, FiPhone, FiCheckCircle, FiFileText } = FiIcons;

const Process = () => {
  const steps = [
    {
      icon: FiUserPlus,
      title: "Pre-Register",
      description: "Sign up at notary.cx/nd to prepare for potential document notarization needs",
      action: "Register Now",
      link: "https://notary.cx/nd"
    },
    {
      icon: FiPhone,
      title: "Contact Support",
      description: "Reach out via WhatsApp for immediate assistance with document notarization",
      action: "WhatsApp Help",
      link: "https://notary.im"
    },
    {
      icon: FiCheckCircle,
      title: "Document Notarization",
      description: "Complete the notarization process online or via secure video call",
      action: "Get Started",
      link: "https://notary.cx/nd"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How Alcatraz Help Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures you get the notary services you need quickly and efficiently, 
            especially during detention situations at Alligator Alcatraz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={step.icon} className="h-8 w-8 text-blue-600" />
              </div>
              
              <div className="text-sm font-semibold text-blue-600 mb-2">
                Step {index + 1}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-6">{step.description}</p>
              
              <a
                href={step.link}
                target={step.link.startsWith('http') ? '_blank' : '_self'}
                rel={step.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                {step.action}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg"
        >
          <div className="flex items-center mb-4">
            <SafeIcon icon={FiCheckCircle} className="h-6 w-6 text-red-500 mr-3" />
            <h3 className="text-lg font-semibold text-red-800">Important for Alligator Alcatraz Detention</h3>
          </div>
          <p className="text-red-700 mb-4">
            If your loved one is detained at the Alligator Alcatraz ICE facility in Florida, 
            time is critical. Pre-registering for notary services and having documents ready 
            for notarization can make a significant difference in their case. Contact us 
            immediately for urgent document notarization assistance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg"
        >
          <div className="flex items-center mb-4">
            <SafeIcon icon={FiFileText} className="h-6 w-6 text-yellow-600 mr-3" />
            <h3 className="text-lg font-semibold text-yellow-800">Notary Services Only</h3>
          </div>
          <p className="text-yellow-700">
            <strong>Important:</strong> We are notaries, not attorneys. We can only notarize documents 
            and verify identities. We cannot provide legal advice or prepare legal documents. 
            Please consult with a qualified attorney for legal advice regarding your specific situation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;