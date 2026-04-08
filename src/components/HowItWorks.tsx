import React from "react";
import {
  NumberCircleOne,
  NumberCircleTwo,
  NumberCircleThree,
  NumberCircleFour,
} from "@phosphor-icons/react";

const steps = [
  {
    icon: (
      <NumberCircleOne
        size={32}
        weight="regular"
        className="text-accent flex-shrink-0"
      />
    ),
    title: "Book Your Service",
    description:
      "Select the Porter Service and choose your preferred date and time.",
  },
  {
    icon: (
      <NumberCircleTwo
        size={32}
        weight="regular"
        className="text-accent flex-shrink-0"
      />
    ),
    title: "Meet Your Porter",
    description: "Your dedicated porter will meet you at the airport entrance.",
  },
  {
    icon: (
      <NumberCircleThree
        size={32}
        weight="regular"
        className="text-accent flex-shrink-0"
      />
    ),
    title: "Luggage Assistance",
    description:
      "The porter will carry and manage your luggage throughout the terminal.",
  },
  {
    icon: (
      <NumberCircleFour
        size={32}
        weight="regular"
        className="text-accent flex-shrink-0"
      />
    ),
    title: "Check-In Support",
    description: "Receive full support until you reach the check-in counter.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="px-6 pt-6 pb-4 flex flex-col gap-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-start gap-4 bg-neutral-50 rounded-lg border border-neutral-200 p-4"
          style={{ borderRadius: "16px" }}
        >
          {step.icon}
          <div>
            <p className="font-sans text-body-sm font-medium text-foreground mb-1">
              {step.title}
            </p>
            <p className="font-body text-caption text-neutral-500">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowItWorks;
