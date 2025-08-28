import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

const App = () => {
  const [selectedTech, setSelectedTech] = useState("react");

  useEffect(() => setSelectedTech("react"), []);

  return (
    <div className="relative min-h-screen flex flex-col bg-neutral-950 text-neutral-100 overflow-hidden">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 text-neutral-500/50 bg-dot-grid animate-pulse-slow" />
      <div className="pointer-events-none absolute inset-0 bg-radial-vignette" />
      <div className="pointer-events-none absolute -inset-1 blur-3xl opacity-40">
        <div className="absolute -top-1/3 -left-1/4 size-[60vmax] rounded-full bg-gradient-blob animate-blob" />
        <div className="absolute top-1/4 -right-1/3 size-[55vmax] rounded-full bg-gradient-blob-2 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-1/3 left-1/3 size-[50vmax] rounded-full bg-gradient-blob-3 animate-blob animation-delay-4000" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-scanlines opacity-[0.12]" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <MainSection selectedTech={selectedTech}  onClose={() => setSelectedTech(null)} />
          <Sidebar onTechSelect={setSelectedTech} selectedTech={selectedTech} />
        </div>
        <Footer />
        <Copyright />
      </div>
    </div>
  );
};

export default App;
