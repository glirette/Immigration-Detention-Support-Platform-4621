import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiExternalLink, FiHeart } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <SafeIcon icon={FiShield} className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Alcatraz Help</span>
            </div>
            <p className="text-gray-400 mb-4">
              Providing notary services for families affected by ICE detention at 
              Alligator Alcatraz facility in Florida.
            </p>
            <p className="text-sm text-gray-500">
              In partnership with Notary Geek
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://notary.cx/nd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                >
                  Pre-Register for Notary
                  <SafeIcon icon={FiExternalLink} className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://notary.im"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                >
                  WhatsApp Support
                  <SafeIcon icon={FiExternalLink} className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://notarygeek.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                >
                  Notary Geek
                  <SafeIcon icon={FiExternalLink} className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Notary Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Power of Attorney Notarization</li>
              <li>Document Authentication</li>
              <li>Video Notarization</li>
              <li>Identity Verification</li>
              <li>Detention Document Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            © 2024 Alcatraz Help. Providing notary services for immigration families.
          </p>
          <p className="text-sm text-gray-500 flex items-center justify-center">
            Made with <SafeIcon icon={FiHeart} className="mx-1 h-4 w-4 text-red-400" /> for families in need
          </p>
          <p className="text-xs text-gray-600 mt-2">
            We are notaries, not attorneys. We cannot provide legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;