import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4"><img src={logo} alt="" /></h3>
            <p className="text-gray-600 text-sm mb-4">
              Toshkent street, Tashkent, Uzbekistan, 200136
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11 1-.47-.03-.94-.09-1.42-.16-2.55-.37-4.8-1.38-6.32-3.37-.37.63-.58 1.36-.58 2.14 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.72 2.14 2.97 4.02 3.01-1.47 1.16-3.33 1.85-5.34 1.85-.35 0-.69-.02-1.03-.07 1.91 1.23 4.18 1.94 6.62 1.94 7.94 0 12.29-6.58 12.29-12.29 0-.19 0-.37-.01-.56.84-.61 1.57-1.37 2.15-2.24z" />
                </svg>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.5c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.5h-3v-5.5c0-1.38-.5-2.32-1.75-2.32-1.03 0-1.64.69-1.91 1.36-.1.24-.14.58-.14.92v5.54h-3v-11h3v1.54c.43-.67 1.2-1.62 2.91-1.62 2.14 0 3.75 1.4 3.75 4.4v6.68z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-500">Team</a></li>
              <li><a href="#" className="hover:text-blue-500">Careers</a></li>
              <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Product</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-500">Clinical Board</a></li>
              <li><a href="#" className="hover:text-blue-500">News</a></li>
              <li><a href="#" className="hover:text-blue-500">Events</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Security</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Subscribe</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to get the latest news from us
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="hello@gmail.com"
                className="w-full p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;