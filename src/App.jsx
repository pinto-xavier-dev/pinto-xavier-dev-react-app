// src/App.jsx
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { useState } from "react";
//import technologies from "./pages/technologies";

export default function App() {
  const [selectedTech, setSelectedTech] = useState(null);
  const randomContent =
    "Welcome! I’m a web engineer passionate about modern frameworks and cloud-native apps.";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main + Sidebar */}
      <div className="flex flex-1">
        {/* Main content takes remaining space */}
        <MainContent
          selectedTech={selectedTech}
          randomContent={randomContent}
        />

        {/* Sidebar sits to the right */}
        <Sidebar
          onSelect={setSelectedTech}
          selectedTech={selectedTech}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
