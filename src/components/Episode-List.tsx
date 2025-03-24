import { Link } from "react-router-dom"
import { Clock, Calendar } from 'lucide-react'
import { episodes } from "../lib/data"

export default function EpisodeList() {
  const recentEpisodes = episodes.slice(1, 4)

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Episodios Recientes</h2>
        <Link to="/episodes" className="text-teal-600 dark:text-teal-400 hover:underline">
          Ver todos los episodios
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentEpisodes.map((episode) => (
          <div 
            key={episode.id} 
            className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md border border-teal-100 dark:border-teal-900/30 hover:shadow-lg transition-all flex flex-col"
          >
            <div className="aspect-video bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 flex items-center justify-center overflow-hidden">
              <img
                src={episode.image || "/placeholder.svg"}
                alt={episode.title}
                className="w-50 h-50 object-cover"
              />
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
              <Link
                to={`/episodes#${episode.id}`}
                className="text-teal-600 dark:text-teal-400 hover:underline text-sm font-medium"
              >
                Escuchar episodio →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
