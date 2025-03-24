import { Link } from "react-router-dom"
import { Brain, Twitter, Instagram, Youtube, Copyright, Image, Music } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Brain className="h-6 w-6 text-gradient-to-r from-teal-500 to-cyan-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                NeuroSynapse
              </span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 mb-4 max-w-md">
              Explicaciones simples sobre cómo funciona nuestra mente y cómo aplicarlo al día a día. Conversaciones
              dinámicas, casos reales, consejos prácticos y entrevistas con expertos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-teal-500 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-500 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-500 transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/episodes"
                  className="text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors"
                >
                  Episodios
                </Link>
              </li>
              <li>
                <Link
                  to="/neuroshorts"
                  className="text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors"
                >
                  NeuroShorts
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors">
                  Libros Recomendados
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors">
                  Guías Prácticas
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors">
                  Ejercicios Mentales
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sección de licencias Creative Commons */}
        <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-6">
          <h3 className="font-bold mb-3 text-sm">Licencias</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start space-x-2">
              <Image size={18} className="text-slate-500 dark:text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Las imágenes utilizadas en este sitio están bajo licencia{" "}
                <a
                  href="https://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                  Creative Commons Attribution 4.0 (CC BY 4.0)
                </a>
                . Se requiere atribución adecuada para su uso.
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <Music size={18} className="text-slate-500 dark:text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Todo el contenido de audio es creación original de NeuroSynapse y está protegido bajo{" "}
                <a
                  href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                  Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 (CC BY-NC-ND 4.0)
                </a>
                .
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2 mb-6">
            <Copyright size={18} className="text-slate-500 dark:text-slate-400 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-slate-500 dark:text-slate-400">
              El contenido del sitio web está licenciado bajo{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 dark:text-teal-400 hover:underline"
              >
                Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)
              </a>
              . Puedes compartir y adaptar el material siempre que des el crédito apropiado, proporciones un enlace a la
              licencia e indiques si se han realizado cambios.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} NeuroSynapse. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

