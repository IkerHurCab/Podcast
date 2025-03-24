import { Link } from "react-router-dom";
import { Brain, Lightbulb, Users } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-teal-50 to-white dark:from-teal-900/20 dark:to-slate-900 py-20">
      <div className="absolute inset-0 bg-[url('/neural-bg.svg')] bg-no-repeat bg-cover"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 p-4 rounded-full">
            <Brain
              size={48}
              className="text-gradient-to-r from-teal-500 to-cyan-500"
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
          NeuroSynapse
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Explicaciones simples sobre cómo funciona nuestra mente y cómo
          aplicarlo al día a día
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/episodes"
            className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-md hover:from-teal-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all"
          >
            Escuchar Ahora
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-teal-500 text-teal-600 dark:text-teal-400 dark:border-teal-400 rounded-md hover:bg-teal-50 dark:hover:bg-teal-900/20 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all"
          >
            Suscribirse
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-teal-100 dark:border-teal-900/30 hover:shadow-md transition-all">
            <div className="flex justify-center mb-4">
              <Brain className="h-8 w-8 text-gradient-to-r from-teal-500 to-cyan-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Episodios Semanales</h3>
            <p className="text-slate-500 dark:text-slate-400">
              Nuevo contenido cada semana sobre neurociencia y psicología
              aplicada
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-teal-100 dark:border-teal-900/30 hover:shadow-md transition-all">
            <div className="flex justify-center mb-4">
              <Users className="h-8 w-8 text-gradient-to-r from-teal-500 to-cyan-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Entrevistas con Expertos</h3>
            <p className="text-slate-500 dark:text-slate-400">
              Aprende de psicólogos, neurocientíficos y especialistas en
              desarrollo personal
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-teal-100 dark:border-teal-900/30 hover:shadow-md transition-all">
            <div className="flex justify-center mb-4">
              <Lightbulb className="h-8 w-8 text-gradient-to-r from-teal-500 to-cyan-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Consejos Prácticos</h3>
            <p className="text-slate-500 dark:text-slate-400">
              Técnicas y estrategias que puedes aplicar inmediatamente en tu
              vida diaria
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
