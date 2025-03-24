"use client";

import { episodes } from "../../lib/data";
import ProductionProcess from "../../components/Production-Progress";
import { Calendar, Clock, Play } from "lucide-react";
import { useAudio } from "../../context/AudioContext";

export default function Page() {
  const { playEpisode } = useAudio();

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Todos los Episodios</h1>

      <div className="grid gap-8 mb-16">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-teal-100 dark:border-teal-900/30 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/5">
                <div className="aspect-square bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-lg overflow-hidden relative group flex items-center justify-center hover:cursor-pointer">
                  <img
                    src={episode.image || "/placeholder.svg"}
                    alt={episode.title}
                    className="w-60 h-60"
                  />

                  <button
                    onClick={() => playEpisode(episode)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={`Reproducir ${episode.title}`}
                  >
                    <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center">
                      <Play
                        size={20}
                        className="text-teal-600 dark:text-teal-400 ml-1"
                      />
                    </div>
                  </button>
                </div>
              </div>

              <div className="md:w-4/5">
                <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm space-x-4 mb-2">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{episode.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{episode.duration}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-2">{episode.title}</h2>
                <p className="mb-4 text-slate-600 dark:text-slate-300">
                  {episode.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {episode.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-teal-600 dark:text-teal-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => playEpisode(episode)}
                  className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-md hover:from-teal-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all"
                >
                  Reproducir episodio
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProductionProcess />
    </main>
  );
}
