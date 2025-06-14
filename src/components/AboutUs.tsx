import React from "react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineTimer } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";

const AboutUs = () => {
  return (
    <div className="justify-center items-center flex py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <section id="about" className="w-full max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold relative after:absolute after:top-full after:left-1/2 after:transform after:-translate-x-1/2 after:h-0.5 after:w-4/5 after:bg-(--color-primary)">
            About Us
          </h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="bg-(--color-primary) text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Our Mission</h2>
            <p className="mb-6">
              To provide exceptional company secretarial services that ensure
              compliance, reduce administrative burden, and support business
              growth.
            </p>
            <h2 className="text-xl font-bold mb-4">Our Values</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-white bg-white/20 rounded-full p-1 mr-2">
                  ✔
                </span>
                Integrity & Professionalism
              </li>
              <li className="flex items-center">
                <span className="text-white bg-white/20 rounded-full p-1 mr-2">
                  ✔
                </span>
                Attention to Detail
              </li>
              <li className="flex items-center">
                <span className="text-white bg-white/20 rounded-full p-1 mr-2">
                  ✔
                </span>
                Client-Focused Solutions
              </li>
              <li className="flex items-center">
                <span className="text-white bg-white/20 rounded-full p-1 mr-2">
                  ✔
                </span>
                Regulatory Excellence
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Who We Are</h2>
            <p className="mb-6">
              Huiyou is a leading provider of company secretarial services with
              around 10 years of experience. Our team of qualified company
              secretaries and legal professionals ensures that your business
              meets all statutory requirements while maintaining good corporate
              governance.
            </p>
            <p className="mb-6">
              We work with businesses of all sizes, from startups to established
              corporations, providing tailored solutions that address their
              specific needs and challenges.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="text-blue-500 bg-blue-100 rounded-full p-2 mr-2">
                  <IoShieldCheckmarkOutline />
                </span>
                <div>
                  <h3 className="font-bold">Trusted</h3>
                  <p className="text-sm text-gray-600">By 100+ companies</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 bg-blue-100 rounded-full p-2 mr-2">
                  <GrCertificate />
                </span>
                <div>
                  <h3 className="font-bold">Professional</h3>
                  <p className="text-sm text-gray-600">Certified experts</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 bg-blue-100 rounded-full p-2 mr-2">
                  <MdOutlineTimer />
                </span>
                <div>
                  <h3 className="font-bold">Responsive</h3>
                  <p className="text-sm text-gray-600">24-hour response time</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 bg-blue-100 rounded-full p-2 mr-2">
                  <GrCompliance />
                </span>
                <div>
                  <h3 className="font-bold">Compliant</h3>
                  <p className="text-sm text-gray-600">
                    100% regulatory adherence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
