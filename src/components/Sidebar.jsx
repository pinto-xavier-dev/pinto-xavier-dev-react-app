import { useState, useEffect } from 'react';
const showDebug = false;

const Sidebar = ({ onTechSelect, selectedTech }) => {
  const [scrollOffset, setScrollOffset] = useState(0);

  const technologies = [
    { id: 'react', icon: '⚛️', name: 'React', color: 'bg-white text-gray-700' },
    { id: 'angular', icon: '🅰️', name: 'Angular', color: 'bg-white text-gray-700' },
    { id: 'vue', icon: '💚', name: 'Vue.js', color: 'bg-white text-gray-700' },
    { id: 'typescript', icon: '📘', name: 'TypeScript', color: 'bg-white text-gray-700' },
    { id: 'javascript', icon: '🟨', name: 'JavaScript', color: 'bg-white text-gray-700' },
    { id: 'nodejs', icon: '🟢', name: 'Node.js', color: 'bg-white text-gray-700' },
    { id: 'python', icon: '🐍', name: 'Python', color: 'bg-white text-gray-700' },
    { id: 'docker', icon: '🐋', name: 'Docker', color: 'bg-white text-gray-700' },
    { id: 'kubernetes', icon: '☸️', name: 'Kubernetes', color: 'bg-white text-gray-700' },
    { id: 'aws', icon: '☁️', name: 'AWS', color: 'bg-white text-gray-700' },
    { id: 'mongodb', icon: '🍃', name: 'MongoDB', color: 'bg-white text-gray-700' },
    { id: 'postgresql', icon: '🐘', name: 'PostgreSQL', color: 'bg-white text-gray-700' },
    { id: 'redis', icon: '🔴', name: 'Redis', color: 'bg-white text-gray-700' },
    { id: 'graphql', icon: '💜', name: 'GraphQL', color: 'bg-white text-gray-700' },
    { id: 'nxdev', icon: '🔧', name: 'Nx', color: 'bg-white text-gray-700' },
    { id: 'ngrx', icon: '🏪', name: 'NgRx', color: 'bg-white text-gray-700' },
    { id: 'jest', icon: '🃏', name: 'Jest', color: 'bg-white text-gray-700' },
    { id: 'webpack', icon: '📦', name: 'Webpack', color: 'bg-white text-gray-700' },
    { id: 'tailwind', icon: '🎨', name: 'Tailwind', color: 'bg-white text-gray-700' },
    { id: 'sass', icon: '💄', name: 'Sass', color: 'bg-white text-gray-700' }
  ];

  const extendedTechnologies = [...technologies, ...technologies, ...technologies];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollOffset(prev => {
        const newOffset = prev + 1;
        return newOffset >= technologies.length * 80 ? 0 : newOffset;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [technologies.length]);

  const handleTechClick = (techId) => {
    onTechSelect(techId);
  };

  return (
    <aside className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 w-80 min-h-screen overflow-hidden relative shadow-inner">
 
<div className="p-2">

        {/* Tech stack header */}
      <div className="p-2 text-lg font-semibold mb-4 text-center relative z-10">
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-700">
          Tech Stack
        </h2>
      </div>
   
</div>

{/* AI Skills */}
<div className="p-4 flex justify-center">
  <div
    className="w-48 h-28 flex items-center justify-center rounded-xl 
               text-white font-semibold text-lg cursor-pointer
               bg-gradient-to-br from-blue-300 via-purple-200 to-blue-400 
               shadow-md transition-transform duration-300 hover:scale-105"
  >
    <span className="font-bold text-xl drop-shadow">
      AI/ML App Design
    </span>
  </div>
</div>



      {/* Scrolling tech grid */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 grid grid-cols-3 gap-2 p-4"
          style={{ 
            transform: `translateY(-${scrollOffset}px)`,
            transition: 'transform 0.05s linear'
          }}
        >
          {extendedTechnologies.map((tech, index) => (
            <button
              key={`${tech.id}-${index}`}
              onClick={() => handleTechClick(tech.id)}
              className={`
                ${tech.color} ${selectedTech === tech.id ? 'ring-2 ring-gray-500 scale-105' : 'hover:scale-102'}
                rounded-xl p-3 transition-all duration-300 transform shadow-sm
                flex flex-col items-center justify-center min-h-20 font-semibold
              `}
            >
              <span className="text-2xl mb-1">{tech.icon}</span>
              <span className="text-xs text-center leading-tight">{tech.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quick select */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4 text-center">Quick Select</h3>
        <div className="grid grid-cols-2 gap-2">
          {technologies.slice(0, 4).map((tech) => (
            <button
              key={tech.id}
              onClick={() => handleTechClick(tech.id)}
              className={`
                ${tech.color} ${selectedTech === tech.id ? 'ring-2 ring-gray-500' : ''}
                rounded-lg p-2 text-xs font-semibold hover:bg-gray-100 transition-all duration-200
              `}
            >
              {tech.icon} {tech.name}
            </button>
          ))}
        </div>
      </div>

      { showDebug &&
        <div className="p-4 text-xs text-gray-600">
          <p>Current selected: {selectedTech}</p>
          <p>onTechSelect type: {typeof onTechSelect}</p>
        </div>
      }
    </aside>
  );
};

export default Sidebar;