import React from "react";
import {
  FaFileAlt,
  FaCalendarAlt,
  FaUsers,
  FaDollarSign,
  FaShieldAlt,
  FaEnvelope,
} from "react-icons/fa";
import { serviceCardsData } from "../data/serviceCardData";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <section id="services" className="w-full max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
            Our Services
          </h1>
          <p className="text-gray-600 mt-4">
            We offer a comprehensive range of company secretarial services to
            ensure your business remains compliant with all statutory
            requirements.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cards */}
          {serviceCardsData.map((card) => (
            <ServiceCard
              key={card.id}
              icon={card.icon}
              text={card.text}
              subtext={card.subtext}
              strengths={card.strengths}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
