import { useEffect, useState } from "react";
import { techMap } from "../data/technologiesData"; // 👈 use the map

const MainSection = ({ selectedTech }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [selectedTech]);

  const techData = techMap[selectedTech]; // ✅ O(1) lookup

  if (!techData) {
    return (
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to My Tech Portfolio
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Select a technology from the sidebar to learn more
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 p-8">
      <div
        className={`max-w-4xl mx-auto transition-all duration-500 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* ✅ Lighter semi-transparent glassy card */}
        <div className="rounded-2xl shadow-lg p-8 
                        bg-white/10 backdrop-blur-sm border border-white/10">
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">{techData.name}</h2>
            <span className="ml-4 px-3 py-1 bg-blue-100/50 text-blue-800 rounded-full text-sm font-medium">
              {techData.version}
            </span>
          </div>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            {techData.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Version Info
              </h3>
              <div className="bg-white/30 p-4 rounded-lg border border-white/20">
                <p className="text-gray-800 mb-2">
                  <span className="font-medium">Current Version:</span>{" "}
                  {techData.version}
                </p>
                <p className="text-gray-800">
                  <span className="font-medium">Last Used:</span>{" "}
                  {techData.lastUsed}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
