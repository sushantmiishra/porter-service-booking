import React, { useState } from "react";

const SHORT_TEXT =
  "Travel light while we take care of your luggage. Our professional porters are available to assist you from the airport entrance all the way to the check-in counter.";
const EXTRA_TEXT =
  " Whether you have heavy bags, multiple suitcases, or need extra help navigating the terminal, our trained staff are here to make your journey seamless and stress-free. Available 24/7 at all major terminals.";

const ServiceDescriptionCard: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-background px-6 pt-6 pb-4">
      <h1
        className="font-sans text-h2 font-semibold text-foreground tracking-tight mb-3"
        style={{ letterSpacing: "-0.025em" }}
      >
        Porter Service
      </h1>
      <div className="font-body text-body-sm text-neutral-600 leading-relaxed">
        <span>{SHORT_TEXT}</span>
        <span
          className="read-more-expand inline"
          style={{
            maxHeight: expanded ? "200px" : "0px",
            overflow: "hidden",
            display: "inline",
            verticalAlign: "top",
          }}
        >
          {expanded && EXTRA_TEXT}
        </span>
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="ml-1 text-secondary font-medium text-body-sm hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
            aria-label="Read more about Porter Service"
          >
            read more...
          </button>
        )}
        {expanded && (
          <button
            onClick={() => setExpanded(false)}
            className="ml-1 text-secondary font-medium text-body-sm hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
            aria-label="Show less about Porter Service"
          >
            show less
          </button>
        )}
      </div>
      <div className="mt-5 border-b border-neutral-200" />
    </div>
  );
};

export default ServiceDescriptionCard;
