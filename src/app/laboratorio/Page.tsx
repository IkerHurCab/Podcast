"use client"

import type React from "react"

import { useState } from "react"
import { exerciseCategories, labExercises, type ExerciseCategory } from "../../lib/lab-data"
import {
  Eye,
  Brain,
  Lightbulb,
  PuzzleIcon as PuzzlePiece,
  Heart,
  MessageSquare,
  Clock,
  BarChart3,
  ChevronRight,
} from "lucide-react"

// Mapa de iconos para usar según la categoría
const iconMap: Record<string, React.ReactNode> = {
  Eye: <Eye className="w-full h-full" />,
  Brain: <Brain className="w-full h-full" />,
  Lightbulb: <Lightbulb className="w-full h-full" />,
  PuzzlePiece: <PuzzlePiece className="w-full h-full" />,
  Heart: <Heart className="w-full h-full" />,
  MessageSquare: <MessageSquare className="w-full h-full" />,
}

// Mapa de colores para los niveles de dificultad
const difficultyColors: Record<string, string> = {
  principiante: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  intermedio: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  avanzado: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
}

export default function LaboratorioPage() {
  const [activeCategory, setActiveCategory] = useState<ExerciseCategory | "todos">("todos")
  const [searchQuery, setSearchQuery] = useState("")

  // Filtrar ejercicios por categoría y búsqueda
  const filteredExercises = labExercises.filter((exercise) => {
    const matchesCategory = activeCategory === "todos" || exercise.category === activeCategory
    const matchesSearch =
      exercise.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exercise.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen py-12">
      {/* Encabezado con fondo especial */}
      <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lab-pattern.svg')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Laboratorio Mental</h1>
            <p className="text-xl text-white/90">
              Ejercicios interactivos para entrenar tu cerebro y aplicar lo aprendido
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Buscador */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Buscar ejercicios..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Categorías */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Categorías de Ejercicios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button
              onClick={() => setActiveCategory("todos")}
              className={`p-4 rounded-lg border transition-all ${
                activeCategory === "todos"
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20"
                  : "border-slate-200 dark:border-slate-700 hover:border-teal-300 dark:hover:border-teal-700"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white p-2">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium">Todos los ejercicios</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Ver ejercicios de todas las categorías</p>
                </div>
              </div>
            </button>

            {Object.entries(exerciseCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key as ExerciseCategory)}
                className={`p-4 rounded-lg border transition-all ${
                  activeCategory === key
                    ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20"
                    : "border-slate-200 dark:border-slate-700 hover:border-teal-300 dark:hover:border-teal-700"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white p-2`}
                  >
                    {iconMap[category.icon]}
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">{category.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">{category.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Ejercicios destacados */}
        {activeCategory === "todos" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Ejercicios Destacados</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {labExercises
                .filter((ex) => ex.featured)
                .map((exercise) => (
                  <div
                    key={exercise.id}
                    className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group"
                  >
                    <div className="aspect-video bg-slate-100 dark:bg-slate-700 relative overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${exerciseCategories[exercise.category].color} opacity-20`}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 text-white">
                          {iconMap[exerciseCategories[exercise.category].icon]}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[exercise.difficulty]}`}
                        >
                          {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
                        </span>
                        <span className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                          <Clock size={12} className="mr-1" />
                          {exercise.duration}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-2">{exercise.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">{exercise.description}</p>

                      <div className="flex items-center justify-between">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exerciseCategories[exercise.category].color} text-white`}
                        >
                          {exerciseCategories[exercise.category].name}
                        </span>
                        <button className="flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
                          Comenzar
                          <ChevronRight size={16} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Lista de ejercicios */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {activeCategory === "todos"
              ? "Todos los Ejercicios"
              : `Ejercicios de ${exerciseCategories[activeCategory].name}`}
          </h2>

          {filteredExercises.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <p className="text-slate-500 dark:text-slate-400">
                No se encontraron ejercicios que coincidan con tu búsqueda.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
                >
                  <div className={`h-2 bg-gradient-to-r ${exerciseCategories[exercise.category].color}`}></div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${exerciseCategories[exercise.category].color} flex items-center justify-center text-white p-2`}
                      >
                        {iconMap[exerciseCategories[exercise.category].icon]}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[exercise.difficulty]}`}
                        >
                          {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
                        </span>
                        <span className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                          <Clock size={12} className="mr-1" />
                          {exercise.duration}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mb-2">{exercise.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                      {exercise.description}
                    </p>

                    <button className="w-full py-2 mt-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-md hover:from-teal-600 hover:to-cyan-600 transition-all flex items-center justify-center">
                      Comenzar ejercicio
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sección informativa */}
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">¿Por qué entrenar tu cerebro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Neuroplasticidad</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Tu cerebro cambia constantemente en respuesta a nuevas experiencias y desafíos. El entrenamiento
                cognitivo aprovecha esta capacidad para fortalecer conexiones neuronales específicas.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Transferencia de habilidades</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Las habilidades que desarrollas en estos ejercicios pueden transferirse a situaciones de la vida real,
                mejorando tu rendimiento en el trabajo, estudios y relaciones personales.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Reserva cognitiva</h3>
              <p className="text-slate-600 dark:text-slate-300">
                El entrenamiento regular crea una "reserva cognitiva" que puede proteger contra el deterioro cognitivo
                relacionado con la edad y algunas enfermedades neurodegenerativas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

