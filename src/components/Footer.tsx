import { Link } from "react-router-dom"
import { Github, Twitter, Linkedin, Rss } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">CodeWaves</h3>
            <p className="text-gray-500 dark:text-gray-400">
              A podcast about web development, programming, and tech trends.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/episodes"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Episodes
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Listen On</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Spotify
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Apple Podcasts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Google Podcasts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  RSS Feed
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                <Rss size={20} />
                <span className="sr-only">RSS</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} CodeWaves. All rights reserved.</p>
          <p className="mt-2 text-sm">
            This content is licensed under{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              className="hover:text-purple-600 dark:hover:text-purple-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY-NC-SA 4.0
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

