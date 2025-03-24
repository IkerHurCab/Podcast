"use client"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert("¡Suscrito! Te has suscrito correctamente a nuestro boletín.")

    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <section className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg p-8 md:p-12 border border-teal-100 dark:border-teal-900/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Mantente Informado</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          Suscríbete a nuestro boletín para recibir notificaciones sobre nuevos episodios, contenido exclusivo y anuncios especiales.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Introduce tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-slate-800"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-md hover:from-teal-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Suscribiendo..." : "Suscribirse"}
          </button>
        </form>

        <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
          Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
        </p>
      </div>
    </section>
  )
}
