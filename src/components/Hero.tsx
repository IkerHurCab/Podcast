import { Link } from "react-router-dom"
import { Headphones, Mic, Radio } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-purple-100 to-white dark:from-purple-900/20 dark:to-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full">
            <Headphones size={48} className="text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">CodeWaves</h1>
        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Dive into the world of web development with insights, interviews, and coding adventures
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/episodes"
            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Listen Now
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-md hover:bg-purple-50 dark:hover:bg-purple-900/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Subscribe
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <Mic className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Weekly Episodes</h3>
            <p className="text-gray-500 dark:text-gray-400">
              New content every week covering the latest in web development
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <Radio className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Interviews</h3>
            <p className="text-gray-500 dark:text-gray-400">Learn from industry leaders and innovative developers</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <Headphones className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Practical Insights</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Actionable tips and tricks you can apply to your projects
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

