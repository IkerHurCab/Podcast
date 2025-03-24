import { episodes } from "../../lib/data";
import AudioPlayer from "../../components/Audio-Player";
import ProductionProcess from "../../components/Production-Progress";

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Todos los Episodios</h1>
      
      <div className="grid gap-8 mb-16">
        {episodes.map((episode) => (
          <div key={episode.id} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-teal-100 dark:border-teal-900/30 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold mb-2">{episode.title}</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-4">{episode.date} • {episode.duration}</p>
            <p className="mb-4">{episode.description}</p>
            <AudioPlayer audioSrc={episode.audioSrc} />
          </div>
        ))}
      </div>
      
      <ProductionProcess />
    </main>
  );
}
