import type React from "react"
import { Link } from "react-router-dom"
import { labExercises, exerciseCategories } from "../lib/lab-data"
import {
  Eye,
  Brain,
  Lightbulb,
  PuzzleIcon as PuzzlePiece,
  Heart,
  MessageSquare,
  Clock,
  ArrowRight,
  Dumbbell,
} from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  Eye: <Eye className="w-full h-full" />,
  Brain: <Brain className="w-full h-full" />,
  Lightbulb: <Lightbulb className="w-full h-full" />,
  PuzzlePiece: <PuzzlePiece className="w-full h-full" />,
  Heart: <Heart className="w-full h-full" />,
  MessageSquare: <MessageSquare className="w-full h-full" />,
}

export default function LaboratorioPreview() {
  const featuredExercises = labExercises.filter((ex) => ex.featured)

  return (
    <section className="mb-16">
      <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-2xl p-8 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lab-pattern.svg')] opacity-20"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Dumbbell className="h-6 w-6 text-white" />
                <h2 className="text-3xl font-bold text-white">Laboratorio Mental</h2>
              </div>
              <p className="text-white/90 max-w-xl">
                Ejercicios interactivos para entrenar tu cerebro y poner en práctica los conceptos del podcast
              </p>
            </div>
            <Link
              to="/laboratorio"
              className="flex items-center bg-white/20 hover:bg-white/30 transition-colors text-white px-4 py-2 rounded-full text-sm font-medium self-start md:self-auto"
            >
              Explorar todos los ejercicios
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredExercises.map((exercise) => (
              <div
                key={exercise.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-5 hover:bg-white/20 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${exerciseCategories[exercise.category].color} flex items-center justify-center text-white p-2`}
                  >
                    {iconMap[exerciseCategories[exercise.category].icon]}
                  </div>
                  <span className="flex items-center text-xs text-white/80">
                    <Clock size={12} className="mr-1" />
                    {exercise.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{exercise.title}</h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">{exercise.description}</p>

                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium text-white">
                    {exerciseCategories[exercise.category].name}
                  </span>
                  <span className="text-white text-sm font-medium group-hover:underline">Comenzar</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Categorías de Entrenamiento</h3>
          <Link
            to="/laboratorio"
            className="text-teal-600 dark:text-teal-400 hover:underline text-sm font-medium flex items-center"
          >
            Ver todas
            <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(exerciseCategories).map(([key, category]) => (
            <Link
              key={key}
              to={`/laboratorio?category=${key}`}
              className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center hover:shadow-md transition-all border border-slate-200 dark:border-slate-700"
            >
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} mx-auto flex items-center justify-center text-white p-3 mb-3`}
              >
                {iconMap[category.icon]}
              </div>
              <h4 className="font-medium mb-1">{category.name}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

