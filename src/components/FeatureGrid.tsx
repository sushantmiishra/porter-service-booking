import React from "react";
import { Briefcase, ArrowRight, ShoppingCart } from "@phosphor-icons/react";

interface FeatureItem {
  icon: React.ReactNode;
  label: string;
  image: string;
  imageAlt: string;
}

const features: FeatureItem[] = [
  {
    icon: <Briefcase size={32} weight="regular" className="text-accent" />,
    label: "Assistance with carrying your luggage",
    image: "https://c.animaapp.com/mnq5awfheED1yM/img/ai_2.png",
    imageAlt: "Airport staff carrying passenger luggage",
  },
  {
    icon: <ArrowRight size={32} weight="regular" className="text-accent" />,
    label: "Support from airport entry to check-in area",
    image: "https://c.animaapp.com/mnq5awfheED1yM/img/ai_3.png",
    imageAlt: "Traveler receiving assistance in airport terminal",
  },
  {
    icon: <ShoppingCart size={32} weight="regular" className="text-accent" />,
    label: "Help with trolley management",
    image: "https://c.animaapp.com/mnq5awfheED1yM/img/ai_4.png",
    imageAlt: "Airport trolleys organized in row",
  },
];

const FeatureGrid: React.FC = () => {
  return (
    <div className="px-6 pt-6 pb-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="
              bg-neutral-50 rounded-lg border border-neutral-200
              flex flex-col items-center overflow-hidden
              transition-all duration-300 ease-in-out
              hover:-translate-y-1 hover:shadow-md
            "
            style={{ borderRadius: "16px" }}
          >
            <div
              className="w-full h-28 overflow-hidden"
              style={{ borderRadius: "16px 16px 0 0" }}
            >
              <img
                src={feature.image}
                alt={feature.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover hero-image-fade"
              />
            </div>
            <div className="flex flex-col items-center px-3 py-4 gap-2">
              <div className="flex items-center justify-center text-accent">
                {feature.icon}
              </div>
              <p className="font-body text-caption text-neutral-700 text-center leading-snug">
                {feature.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
