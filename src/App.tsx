import React, { useState } from "react";
import TopAppBar from "./components/TopAppBar";
import HeroSection from "./components/HeroSection";
import ServiceDescriptionCard from "./components/ServiceDescriptionCard";
import TabSwitcher from "./components/TabSwitcher";
import FeatureGrid from "./components/FeatureGrid";
import HowItWorks from "./components/HowItWorks";
import PriceBar from "./components/PriceBar";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <head>
        <title>Porter Service - Airport Assistance</title>
        <meta
          name="description"
          content="Travel light while we take care of your luggage. Professional porter service available at all major airport terminals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Porter Service",
            description:
              "Professional airport porter service to assist travelers with luggage from entry to check-in.",
            provider: {
              "@type": "LocalBusiness",
              name: "Airport Porter Services",
            },
            offers: {
              "@type": "Offer",
              price: "24.99",
              priceCurrency: "USD",
            },
          })}
        </script>
      </head>

      <div className="min-h-screen bg-neutral-100 flex items-start justify-center font-body">
        <main
          className="relative w-full max-w-app bg-background flex flex-col"
          style={{ minHeight: "100vh", paddingBottom: "80px" }}
        >
          {/* Hero with back button overlay */}
          <div className="relative">
            <HeroSection />
            <TopAppBar onBack={() => window.history.back()} />
          </div>

          {/* Service Description */}
          <ServiceDescriptionCard />

          {/* Tab Switcher */}
          <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Tab Content */}
          <section
            id="tabpanel-0"
            role="tabpanel"
            aria-labelledby="tab-0"
            hidden={activeTab !== 0}
          >
            {activeTab === 0 && <FeatureGrid />}
          </section>

          <section
            id="tabpanel-1"
            role="tabpanel"
            aria-labelledby="tab-1"
            hidden={activeTab !== 1}
          >
            {activeTab === 1 && <HowItWorks />}
          </section>
        </main>

        {/* Sticky Price Bar */}
        <PriceBar />
      </div>
    </>
  );
};

export default App;
