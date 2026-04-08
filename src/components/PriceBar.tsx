import React, { useState } from "react";
import { CircleNotch } from "@phosphor-icons/react";

const PriceBar: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleBookNow = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-20 bg-background border-t border-neutral-200"
      style={{ height: "80px" }}
    >
      <div className="mx-auto max-w-app h-full flex items-center justify-between px-6 gap-4">
        <div className="flex flex-col">
          <span className="font-body text-caption text-neutral-500">
            Starts From
          </span>
          <span
            className="font-sans text-h3 font-semibold text-foreground"
            style={{ letterSpacing: "-0.025em" }}
          >
            $24.99
          </span>
        </div>
        <button
          onClick={handleBookNow}
          disabled={loading}
          aria-label="Book Porter Service now"
          className="
            flex items-center justify-center gap-2
            bg-primary text-primary-foreground
            font-sans font-medium text-body
            px-8 py-3 rounded-full
            shadow-primary
            hover:bg-primary-hover
            active:bg-primary-active
            focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
            transition-all duration-200 ease-in-out
            hover:scale-105
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
            min-w-[130px]
          "
          style={{ height: "48px" }}
        >
          {loading ? (
            <CircleNotch size={20} weight="regular" className="animate-spin" />
          ) : null}
          <span>{loading ? "Booking..." : "Book Now"}</span>
        </button>
      </div>
    </div>
  );
};

export default PriceBar;
