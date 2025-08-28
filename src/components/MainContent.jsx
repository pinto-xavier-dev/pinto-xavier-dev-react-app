import { motion, AnimatePresence } from "framer-motion";

export default function MainContent({ selectedTech, randomContent }) {
  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <AnimatePresence mode="wait">
        {!selectedTech ? (
          <motion.div
            key="random"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-bold mb-4">About Me</h2>
            <p>{randomContent}</p>
          </motion.div>
        ) : (
          <motion.div
            key={selectedTech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold mb-2">{selectedTech.name}</h2>
            <p className="text-gray-600 mb-3">{selectedTech.description}</p>
            <p className="text-sm text-gray-500">Version: {selectedTech.version}</p>
            <p className="text-sm text-gray-500">Last Used: {selectedTech.lastUsed}</p>
            <img
              src={`/assets/icons/${selectedTech.icon}`}
              alt={selectedTech.name}
              className="w-16 h-16 mt-4"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}