import { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import BottomSection from "../components/BottomSection";
import Footer from "../components/Footer";

export default function Home() {
  const [selectedTech, setSelectedTech] = useState(null);
  const [randomContent, setRandomContent] = useState("");

  const randomFacts = [
    "Passionate about building scalable enterprise software.",
    "Strong advocate of clean code and design patterns.",
    "10+ years in full-stack web development.",
    "Experienced in cloud-native architectures and DevOps.",
    "Enjoy mentoring and leading engineering teams."
  ];

  useEffect(() => {
    if (!selectedTech) {
      const random = randomFacts[Math.floor(Math.random() * randomFacts.length)];
      setRandomContent(random);
    }
  }, [selectedTech]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <div className="flex flex-1">
        <MainContent selectedTech={selectedTech} randomContent={randomContent} />
        <Sidebar onSelect={setSelectedTech} selectedTech={selectedTech} />
      </div>
      <BottomSection />
      <Footer />
    </div>
  );
}