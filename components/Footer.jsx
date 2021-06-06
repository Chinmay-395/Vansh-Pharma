import React from "react";

const Footer = () => {
  return (
    <div className="footer-2 container mx-auto pt-6 md:pt-12">
      <div className="container px-4 mx-auto">
        <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
          <div className="footer-info lg:w-1/3 md:px-4">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-white h-8 w-8 mr-2"
            >
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
            <p className="text-white">
              If you’re in need of medicines – we’re here by your side. Stay
              safe and buy online!
            </p>
          </div>

          <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
            <div className="sm:flex">
              <div className="sm:flex-1 mt-4 sm:mt-0">
                <h6 className="text-base font-medium text-white uppercase mb-2">
                  What we offer
                </h6>
                <div>
                  <a href="#" className="text-white py-1 block hover:underline">
                    Blocks
                  </a>
                  <a href="#" className="text-white py-1 block hover:underline">
                    Resources
                  </a>
                  <a href="#" className="text-white py-1 block hover:underline">
                    Tools
                  </a>
                  <a href="#" className="text-white py-1 block hover:underline">
                    Tutorials
                  </a>
                  <a href="#" className="text-white py-1 block hover:underline">
                    Freebies
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
            <div className="sm:flex">
              <div className="sm:flex-1 mt-4 sm:mt-0">
                <h6 className="text-base font-medium text-white uppercase mb-2">
                  Contact Us
                </h6>
                <div>
                  <a href="#" className="text-white py-1 block hover:underline">
                    Blocks
                  </a>
                  <a href="#" className="text-white py-1 block hover:underline">
                    Resources
                  </a>
                  <a href="#" className="text-white py-1 block hover:underline">
                    Tools
                  </a>
                  <a href="#" className="text-white py-1 block hover:underline">
                    Tutorials
                  </a>
                  <a href="#" className="text-white py-1 block hover:underline">
                    Freebies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-solid border-gray-200 mt-4 py-4">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:-mx-4 md:items-center">
            <div className="md:flex-1 md:px-4 text-center md:text-left">
              <p className="text-white">
                &copy; <strong>chinmaydali</strong>
              </p>
            </div>
            <div className="md:flex-1 md:px-4 text-center md:text-right">
              <a
                href="#"
                className="py-2 px-4 text-white inline-block hover:underline"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="py-2 px-4 text-white inline-block hover:underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
