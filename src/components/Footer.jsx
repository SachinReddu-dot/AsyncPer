import React from 'react';
import 'remixicon/fonts/remixicon.css'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex justify-center text-2xl space-x-6 mb-8">
          <a href="#" className=" hover:text-blue-600">
            <i class="ri-facebook-circle-fill"></i>
          </a>
          <a href="#" className=" hover:text-blue-600">
              <i class="ri-twitter-x-fill"></i>
          </a>
          <a href="#" className=" hover:text-blue-600">
              <i class="ri-instagram-line"></i>
          </a>
          <a href="#" className=" hover:text-blue-600">
              <i class="ri-linkedin-fill"></i>
          </a>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          <a href="#" className="text-sm text-gray-400 hover:text-teal-400">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-teal-400">
            Terms of Service
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-teal-400">
            Contact Us
          </a>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
