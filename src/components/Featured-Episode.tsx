import { Link } from "react-router-dom"
import { Clock, Calendar } from 'lucide-react'
import AudioPlayer from "./Audio-Player"
import { episodes } from "../lib/data"

export default function FeaturedEpisode() {
  // Get the latest episode
  const featuredEpisode = episodes[0]

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Último Episodio</h2>
        <Link to="/episodes" className="text-teal-600 dark:text-teal-400 hover:underline">
          Ver todos los episodios
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md border border-teal-100 dark:border-teal-900/30 hover:shadow-lg transition-all">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="aspect-square bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={featuredEpisode.image || "/placeholder.svg"}
                  alt={featuredEpisode.title}
                  className="object-cover rounded-lg w-100 h-100"
                />
              </div>
            </div>

            <div className="md:w-2/3 space-y-4">
              <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm space-x-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>{featuredEpisode.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{featuredEpisode.duration}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold">{featuredEpisode.title}</h3>

              <p className="text-slate-500 dark:text-slate-400">{featuredEpisode.description}</p>

              <div className="pt-4">
                <AudioPlayer audioSrc={featuredEpisode.audioSrc} />
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {featuredEpisode.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-teal-600 dark:text-teal-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
