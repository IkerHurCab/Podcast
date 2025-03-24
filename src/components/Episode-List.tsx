import { Link } from "react-router-dom";
import { Clock, Calendar, Play } from "lucide-react";
import { episodes } from "../lib/data";
import { useAudio } from "../context/AudioContext";

export default function EpisodeList() {
  const recentEpisodes = episodes.slice(1, 4);
  const { playEpisode } = useAudio();

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Episodios Recientes</h2>
        <Link
          to="/episodes"
          className="text-teal-600 dark:text-teal-400 hover:underline"
        >
          Ver todos los episodios
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentEpisodes.map((episode) => (
          <div
            key={episode.id}
            className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md border border-teal-100 dark:border-teal-900/30 hover:shadow-lg transition-all flex flex-col"
          >
            <div className="aspect-video bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 relative group">
              <div className="flex items-center justify-center">
                <img
                  src={episode.image || "/placeholder.svg"}
                  alt={episode.title}
                  className="w-70 h-70 object-cover"
                />
              </div>
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
            <div className="p-5 flex-1 flex flex-col">
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
              <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 flex-1">
                {episode.description.length > 120
                  ? `${episode.description.substring(0, 120)}...`
                  : episode.description}
              </p>
              <button
                onClick={() => playEpisode(episode)}
                className="text-teal-600 dark:text-teal-400 hover:underline text-sm font-medium flex items-center"
              >
                <Play size={14} className="mr-1" />
                Escuchar episodio
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
