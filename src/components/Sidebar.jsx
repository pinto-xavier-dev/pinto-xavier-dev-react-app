// src/components/Sidebar.jsx
import technologies from "../pages/technologies.js";

export default function Sidebar({ onSelect, selectedTech }) {
  return (
    <aside className="w-60 bg-white border-l p-4 overflow-y-auto">
      <h2 className="font-semibold mb-4">Technologies</h2>
      <ul className="space-y-3">
        {technologies.map((tech) => (
          <li
            key={tech.name}
            className={`flex items-center space-x-2 p-2 rounded cursor-pointer hover:bg-indigo-100 ${
              selectedTech?.name === tech.name ? "bg-indigo-200" : ""
            }`}
            onClick={() => onSelect(tech)}
          >
            <img
              src={`/assets/icons/${tech.icon}`}
              alt={tech.name}
              className="w-[50px] h-[50px] object-contain"
            />
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
