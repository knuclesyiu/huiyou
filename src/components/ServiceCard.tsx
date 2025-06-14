import React, { FC } from "react";
import { IconType } from "react-icons"; // Import IconType for typing

interface ServiceCardProps {
  icon: IconType;
  size?: number;
  text: string;
  subtext: string;
  strengths: string[];
}

const ServiceCard: FC<ServiceCardProps> = ({
  icon: Icon,
  size = 20,
  text,
  subtext,
  strengths,
}) => {
  return (
    <div className="flex-col gap-0">
      <div className="flex bg-(--color-primary) rounded-tl-lg rounded-tr-lg h-2"></div>
      <div className="bg-white p-6 rounded-bl-lg rounded-br-lg shadow-lg min-h-100">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-(--color-primary) rounded-full mb-4">
          <Icon size={size} />
        </div>
        <h2 className="text-xl font-bold mb-4">{text}</h2>
        <p className="text-gray-600 mb-4">{subtext}</p>
        <ul className="space-y-2 text-gray-600">
          {strengths.map((strength, index) => (
            <li key={index} className="flex items-center">
              <span className="text-(--color-primary) mr-2">✔</span> {strength}
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="text-(--color-primary) font-medium mt-4 inline-block"
        >
          Learn More &rarr;
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
