import { Link } from "react-router-dom"
import { Clock, Calendar } from "lucide-react"
import { episodes } from "../lib/data"

export default function EpisodeList() {
  // Skip the first episode (featured) and show the next 3
  const recentEpisodes = episodes.slice(1, 4)

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Recent Episodes</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentEpisodes.map((episode) => (
          <div
            key={episode.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col"
          >
            <div className="aspect-video bg-purple-100 dark:bg-purple-900/30">
              <img
                src={episode.image || "/placeholder.svg"}
                alt={episode.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm space-x-4 mb-2">
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

              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-grow">
                {episode.description.length > 120 ? `${episode.description.substring(0, 120)}...` : episode.description}
              </p>

              <Link
                to={`/episodes#${episode.id}`}
                className="w-full px-4 py-2 border border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 text-center rounded-md hover:bg-purple-50 dark:hover:bg-purple-900/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Listen to Episode
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/episodes"
          className="px-6 py-2 border border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-md hover:bg-purple-50 dark:hover:bg-purple-900/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          View All Episodes
        </Link>
      </div>
    </section>
  )
}

