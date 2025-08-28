import { useEffect, useState } from "react";
import { techMap } from "../data/technologiesData";

const MainSection = ({ selectedTech, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedTech) {
      setIsVisible(false);
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, [selectedTech]);

  const techData = techMap[selectedTech];
  if (!techData) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div
        className={`relative max-w-2xl w-full mx-4 transition-all duration-500 transform
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="rounded-2xl shadow-lg p-8 bg-white/90 backdrop-blur-md border border-gray-200">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
          >
            &times;
          </button>

          {/* Header */}
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">{techData.name}</h2>
            <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {techData.version}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            {techData.description}
          </p>

          {/* Version Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Version Info</h3>
              <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-800 mb-2">
                  <span className="font-medium">Current Version:</span> {techData.version}
                </p>
                <p className="text-gray-800">
                  <span className="font-medium">Last Used:</span> {techData.lastUsed}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
