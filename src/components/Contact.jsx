import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMessageCircle, FiClock, FiMapPin, FiExternalLink, FiFileText } = FiIcons;

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Immediate Notary Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't wait when your loved one needs document notarization. Contact us now for 
            immediate assistance with detention-related document notarization services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-green-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiMessageCircle} className="h-8 w-8 text-green-600 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">WhatsApp Support</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Get immediate help through WhatsApp. Our team is ready to assist with 
                urgent document notarization needs for detention situations.
              </p>
              <a
                href="https://notary.im"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <SafeIcon icon={FiMessageCircle} className="mr-2 h-5 w-5" />
                Contact via WhatsApp
                <SafeIcon icon={FiExternalLink} className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiPhone} className="h-8 w-8 text-blue-600 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">Pre-Registration</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Pre-register for notary services to ensure you're prepared for any 
                document notarization needs that may arise during detention.
              </p>
              <a
                href="https://notary.cx/nd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <SafeIcon icon={FiPhone} className="mr-2 h-5 w-5" />
                Pre-Register Now
                <SafeIcon icon={FiExternalLink} className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact Options</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <SafeIcon icon={FiClock} className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">24/7 Emergency Notary Support Available</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiMapPin} className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">Serving Alligator Alcatraz ICE Facility, Florida</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiMail} className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">Online document notarization</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-yellow-800 mb-2">Urgent Situations</h4>
              <p className="text-yellow-700 mb-4">
                If your loved one has been detained at Alligator Alcatraz or any ICE facility, 
                contact us immediately. Time-sensitive document notarization can be crucial for their case.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://notary.im"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors text-center"
                >
                  Emergency WhatsApp
                </a>
                <a
                  href="https://notary.cx/nd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors text-center"
                >
                  Quick Registration
                </a>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <div className="flex items-center mb-4">
                <SafeIcon icon={FiFileText} className="h-6 w-6 text-red-600 mr-3" />
                <h4 className="text-lg font-semibold text-red-800">Important Disclaimer</h4>
              </div>
              <p className="text-red-700 text-sm">
                <strong>We are notaries, not attorneys.</strong> We can only notarize documents and verify identities. 
                We cannot provide legal advice or prepare legal documents. Please consult with a qualified attorney 
                for legal advice regarding your specific situation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;