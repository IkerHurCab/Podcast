import { useAudio } from "../context/AudioContext";
import { Play, Pause, Volume2, VolumeX, X, Minimize2 } from "lucide-react";
import { useState } from "react";

export default function AudioPlayerFooter() {
  const {
    currentEpisode,
    isPlaying,
    duration,
    currentTime,
    volume,
    isMuted,
    togglePlay,
    handleVolumeChange,
    toggleMute,
    handleSeek,
    closePlayer,
  } = useAudio();

  const [isMinimized, setIsMinimized] = useState(false);

  if (!currentEpisode) return null;

  // Format time
  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-teal-100 dark:border-teal-900/30 shadow-lg z-50 transition-all duration-300 ${
        isMinimized ? "h-16" : "h-24 sm:h-20"
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col sm:flex-row items-center h-full">
          {/* Episode Info */}
          <div className="flex items-center space-x-3 w-full sm:w-1/3 py-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded overflow-hidden flex-shrink-0">
              <img
                src={currentEpisode.image || "/placeholder.svg"}
                alt={currentEpisode.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium truncate">
                {currentEpisode.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                NeuroSynapse
              </p>
            </div>
          </div>

          {/* Player Controls */}
          <div
            className={`flex-1 w-full sm:w-auto ${
              isMinimized ? "hidden" : "block"
            }`}
          >
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={togglePlay}
                className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full text-white hover:from-teal-600 hover:to-cyan-600 transition-all"
              >
                {isPlaying ? (
                  <Pause size={16} />
                ) : (
                  <Play size={16} className="ml-0.5" />
                )}
              </button>

              <div className="flex-1 max-w-xl">
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={duration || 0}
                  value={currentTime}
                  onChange={(e) => handleSeek(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal-500"
                />
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleMute}
                  className="text-slate-500 dark:text-slate-400 hover:text-teal-500"
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.1}
                  value={isMuted ? 0 : volume}
                  onChange={(e) =>
                    handleVolumeChange(parseFloat(e.target.value))
                  }
                  className="w-16 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal-500"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 sm:ml-auto">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors"
              aria-label={
                isMinimized ? "Expandir reproductor" : "Minimizar reproductor"
              }
            >
              <Minimize2 size={16} />
            </button>
            <button
              onClick={closePlayer}
              className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors"
              aria-label="Cerrar reproductor"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
