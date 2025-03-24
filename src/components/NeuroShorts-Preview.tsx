import type React from "react";

import { useRef } from "react";
import { Link } from "react-router-dom";
import { neuroShorts } from "../lib/shorts-data";
import { useAudio } from "../context/AudioContext";
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
  ArrowRight,
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

export default function NeuroShortsPreview() {
  const { playEpisode } = useAudio();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const previewShorts = neuroShorts.slice(0, 6);

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
    <section className="mb-16">
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/neural-pattern.svg')] opacity-20"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">NeuroShorts</h2>
              <p className="text-white/90">
                Respuestas rápidas en menos de 2 minutos
              </p>
            </div>
            <Link
              to="/neuroshorts"
              className="flex items-center bg-white/20 hover:bg-white/30 transition-colors text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              Ver todos
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <button
              onClick={() => handleScroll("left")}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {previewShorts.map((short) => (
              <div key={short.id} className="flex-shrink-0 w-72 snap-start">
                <div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 h-48 flex flex-col justify-between text-white relative overflow-hidden group cursor-pointer hover:bg-white/20 transition-colors"
                  onClick={() => playShort(short)}
                >
                  <div className="absolute top-3 right-3 w-10 h-10 opacity-30">
                    {iconMap[short.icon]}
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">
                        {short.category}
                      </span>
                      <span className="flex items-center text-xs">
                        <Clock size={10} className="mr-1" />
                        {short.duration}
                      </span>
                    </div>
                    <h3 className="text-base font-bold line-clamp-2">
                      {short.question}
                    </h3>
                  </div>

                  <button className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 transition-colors rounded-full px-3 py-1.5 text-xs font-medium mt-2 self-start">
                    <Play size={12} />
                    <span>Reproducir</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
