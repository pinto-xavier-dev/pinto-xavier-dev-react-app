import { useState, useEffect } from "react";

const verses = [
  "The fear of the Lord is the beginning of wisdom. – Proverbs 9:10",
  "I can do all things through Christ who strengthens me. – Philippians 4:13",
  "Commit to the Lord whatever you do, and He will establish your plans. – Proverbs 16:3",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "For God has not given us a spirit of fear, but of power, love and self-discipline. – 2 Timothy 1:7",
  "Trust in the Lord with all your heart and lean not on your own understanding. – Proverbs 3:5",
  "Be still, and know that I am God. – Psalm 46:10",
  "The Lord will fight for you; you need only to be still. – Exodus 14:14",
  "My grace is sufficient for you, for my power is made perfect in weakness. – 2 Corinthians 12:9",
  "Every good and perfect gift is from above. – James 1:17"
];

const Footer = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % verses.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        
        {/* Left column: Socials + Bible Verses */}
        <div className="flex flex-col space-y-4 max-w-md">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/kx-pinto" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
            <a href="mailto:pinto.xavier.dev@gmail.com">📧 Gmail</a>
            <a href="https://github.com/pinto-xavier-dev" target="_blank" rel="noopener noreferrer">🐱 GitHub</a>
          </div>

          {/* Fixed Verse Box */}
          <div className="h-16 flex items-center overflow-hidden">
            <p
              key={index} // re-trigger transition on change
              className="text-gray-300 italic transition-opacity duration-700 ease-in-out opacity-100 animate-fade"
            >
              {verses[index]}
            </p>
          </div>
        </div>

        {/* Right side: Professional tagline */}
        <p className="text-gray-400 mt-6 md:mt-0">
          Professional Software Engineer Portfolio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
