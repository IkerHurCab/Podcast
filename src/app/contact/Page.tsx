import { useState } from "react";

export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
    wantsToParticipate: boolean;
    audioFile: File | null;
  }>({
    name: "",
    email: "",
    message: "",
    wantsToParticipate: false,
    audioFile: null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert(
      "¡Formulario enviado! Gracias por contactarnos. Te responderemos pronto."
    );

    setFormData({
      name: "",
      email: "",
      message: "",
      wantsToParticipate: false,
      audioFile: null,
    });

    setIsSubmitting(false);
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contacto</h1>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md mb-8 border border-teal-100 dark:border-teal-900/30">
          <p className="mb-6">
            ¿Tienes una pregunta, sugerencia o quieres participar en el
            programa? Rellena el formulario y nos pondremos en contacto contigo.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Nombre
              </label>
              <input
                id="name"
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-slate-700"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-slate-700"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-slate-700"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="participate"
                type="checkbox"
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-slate-300 rounded"
                checked={formData.wantsToParticipate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    wantsToParticipate: e.target.checked,
                  })
                }
              />
              <label htmlFor="participate" className="text-sm font-medium">
                Quiero participar en un episodio futuro
              </label>
            </div>

            {formData.wantsToParticipate && (
              <div className="space-y-2">
                <label
                  htmlFor="audioFile"
                  className="block text-sm font-medium"
                >
                  Sube tu muestra de audio (opcional)
                </label>
                <input
                  id="audioFile"
                  type="file"
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-slate-700"
                  accept="audio/*"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      audioFile: e.target.files?.[0] || null,
                    })
                  }
                />
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Comparte una breve introducción o tus pensamientos sobre un
                  tema de psicología o neurociencia (máx. 2 minutos)
                </p>
              </div>
            )}

            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-md hover:from-teal-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-teal-100 dark:border-teal-900/30">
          <h2 className="text-2xl font-bold mb-4">Únete a la Comunidad</h2>
          <p className="mb-4">
            NeuroSynapse es más que un podcast—es una comunidad de personas
            interesadas en entender mejor su mente y aplicar ese conocimiento en
            su día a día.
          </p>
          <p>
            Síguenos en Twitter{" "}
            <a href="#" className="text-teal-600 hover:underline">
              @NeuroSynapsePod
            </a>{" "}
            y únete a nuestra comunidad en Discord para discusiones, recursos y
            contenido exclusivo.
          </p>
        </div>
      </div>
    </main>
  );
}
