import { useState, useRef } from "react";
import { neuroShorts } from "../../lib/shorts-data";
import { useAudio } from "../../context/AudioContext";
import {
  Brain,
  Lightbulb,
  Repeat,
  Sparkles,
  Heart,
  Search,
  Music,
  GitFork,
  Play,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-full h-full" />,
  Lightbulb: <Lightbulb className="w-full h-full" />,
  Repeat: <Repeat className="w-full h-full" />,
  Sparkles: <Sparkles className="w-full h-full" />,
  Heart: <Heart className="w-full h-full" />,
  Search: <Search className="w-full h-full" />,
  Music: <Music className="w-full h-full" />,
  GitFork: <GitFork className="w-full h-full" />,
};

export default function NeuroShortsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { playEpisode } = useAudio();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = Array.from(
    new Set(neuroShorts.map((short) => short.category))
  );

  const filteredShorts = activeCategory
    ? neuroShorts.filter((short) => short.category === activeCategory)
    : neuroShorts;

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 320;
    const currentScroll = scrollContainerRef.current.scrollLeft;

    scrollContainerRef.current.scrollTo({
      left:
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount,
      behavior: "smooth",
    });
  };

  const playShort = (short: (typeof neuroShorts)[0]) => {
    playEpisode({
      id: short.id,
      title: short.question,
      description: short.answer,
      audioSrc: short.audioSrc,
      duration: short.duration,
      date: "NeuroShorts",
      image: "/brain.png",
      tags: [short.category],
    });
  };

  return (
    <main className="min-h-screen py-12">
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/neural-pattern.svg')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              NeuroShorts
            </h1>
            <p className="text-xl text-white/90">
              Respuestas rápidas a tus preguntas sobre la mente en menos de 2
              minutos
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="mb-8 overflow-x-auto pb-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === null
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-16 relative">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Shorts Destacados</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => handleScroll("left")}
                className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {neuroShorts.slice(0, 6).map((short) => (
              <div key={short.id} className="flex-shrink-0 w-80 snap-start">
                <div
                  className={`bg-gradient-to-br ${short.color} rounded-xl p-6 h-64 flex flex-col justify-between text-white relative overflow-hidden group cursor-pointer`}
                  onClick={() => playShort(short)}
                >
                  <div className="absolute top-4 right-4 w-16 h-16 opacity-20">
                    {iconMap[short.icon]}
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                        {short.category}
                      </span>
                      <span className="flex items-center text-xs">
                        <Clock size={12} className="mr-1" />
                        {short.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{short.question}</h3>
                  </div>

                  <div className="mt-auto">
                    <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 transition-colors rounded-full px-4 py-2 text-sm font-medium">
                      <Play size={16} />
                      <span>Reproducir</span>
                    </button>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Play
                        size={24}
                        className={`text-${short.color
                          .split(" ")[1]
                          .replace("to-", "")}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Todos los NeuroShorts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredShorts.map((short) => (
            <div
              key={short.id}
              className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
              onClick={() => playShort(short)}
            >
              <div className={`h-3 bg-gradient-to-r ${short.color}`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${short.color} flex items-center justify-center text-white p-2`}
                  >
                    {iconMap[short.icon]}
                  </div>
                  <span className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                    <Clock size={12} className="mr-1" />
                    {short.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2">{short.question}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                  {short.answer}
                </p>

                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">
                    {short.category}
                  </span>
                  <button className="flex items-center text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300">
                    <Play size={14} className="mr-1" />
                    Reproducir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
