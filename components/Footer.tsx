"use client";

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>We are a couple at yubelium pilgrimage journey to seek blessing and forgiveness.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#home" className="hover:text-gray-600 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-600 hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#prayer" className="hover:text-gray-600 hover:underline">
                  Prayer
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-600 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} FSDevlopment, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
