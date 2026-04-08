import React from "react";

interface TabSwitcherProps {
  activeTab: number;
  onTabChange: (index: number) => void;
}

const TABS = ["What's Included", "How it works"];

const TabSwitcher: React.FC<TabSwitcherProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <nav
      role="tablist"
      aria-label="Service information tabs"
      className="flex w-full bg-background border-b border-neutral-200"
    >
      {TABS.map((tab, index) => (
        <button
          key={tab}
          role="tab"
          aria-selected={activeTab === index}
          aria-controls={`tabpanel-${index}`}
          id={`tab-${index}`}
          onClick={() => onTabChange(index)}
          className={`
            flex-1 py-4 px-4 text-body-sm font-medium font-sans transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-inset
            relative cursor-pointer
            ${
              activeTab === index
                ? "text-primary"
                : "text-neutral-500 hover:text-neutral-700"
            }
          `}
        >
          {tab}
          <span
            className={`
              absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ease-in-out
              ${activeTab === index ? "bg-secondary opacity-100" : "opacity-0"}
            `}
          />
        </button>
      ))}
    </nav>
  );
};

export default TabSwitcher;
