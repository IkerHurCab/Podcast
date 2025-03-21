import { Link } from "react-router-dom"
import { Clock, Calendar } from "lucide-react"
import AudioPlayer from "./Audio-Player"
import { episodes } from "../lib/data"

export default function FeaturedEpisode() {
  // Get the latest episode
  const featuredEpisode = episodes[0]

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Latest Episode</h2>
        <Link to="/episodes" className="text-purple-600 dark:text-purple-400 hover:underline">
          View all episodes
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="aspect-square bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <img
                  src={featuredEpisode.image || "/placeholder.svg"}
                  alt={featuredEpisode.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="md:w-2/3 space-y-4">
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm space-x-4">
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

              <p className="text-gray-500 dark:text-gray-400">{featuredEpisode.description}</p>

              <div className="pt-4">
                <AudioPlayer audioSrc={featuredEpisode.audioSrc} />
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {featuredEpisode.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm"
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

