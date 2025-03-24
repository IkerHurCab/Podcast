import {
  Mic,
  AudioWaveformIcon as Waveform,
  Music,
  Upload,
} from "lucide-react";

export default function ProductionProcess() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Nuestro Proceso de Producción</h2>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-teal-100 dark:border-teal-900/30">
        <p className="mb-8">
          En NeuroSynapse, nos comprometemos a ofrecer contenido de audio de
          alta calidad. Así es como producimos cada episodio:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 p-3 rounded-full">
                <Mic className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Grabación</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Grabamos utilizando micrófonos profesionales en un entorno
                  acústicamente tratado para garantizar un audio claro. Para las
                  entrevistas, utilizamos Riverside.fm para capturar
                  conversaciones remotas de alta calidad.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 p-3 rounded-full">
                <Waveform className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Edición</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Cada episodio se edita cuidadosamente en Audacity para
                  eliminar el ruido de fondo, normalizar los niveles de audio y
                  mejorar la claridad. Recortamos pausas y errores manteniendo
                  el flujo natural de la conversación.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 p-3 rounded-full">
                <Music className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Música y Diseño de Sonido
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Añadimos música de intro/outro libre de derechos y efectos de
                  sonido para mejorar la experiencia auditiva. Nuestra intro
                  característica ayuda a los oyentes a reconocer inmediatamente
                  nuestro podcast.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 p-3 rounded-full">
                <Upload className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Publicación</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Los episodios se exportan como archivos MP3 (192kbps) para una
                  calidad y tamaño de archivo óptimos. Utilizamos FFmpeg para la
                  compresión final y el etiquetado de metadatos antes de
                  subirlos a plataformas de alojamiento de podcasts.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
          <h3 className="text-xl font-bold mb-2">
            Herramientas que Utilizamos
          </h3>
          <ul className="list-disc list-inside space-y-1 text-slate-500 dark:text-slate-400">
            <li>Audacity para grabación y edición</li>
            <li>FFmpeg para compresión y conversión de audio</li>
            <li>Rode PodMic e interfaz Focusrite Scarlett para grabación</li>
            <li>Adobe Audition para procesamiento avanzado de audio</li>
            <li>Canva para el diseño gráfico de los episodios</li>
            <li>Riverside.fm para entrevistas remotas</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
