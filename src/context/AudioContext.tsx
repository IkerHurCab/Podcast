import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { episodes } from "../lib/data";

type Episode = (typeof episodes)[0];

interface AudioContextType {
  currentEpisode: Episode | null;
  isPlaying: boolean;
  duration: number;
  currentTime: number;
  volume: number;
  isMuted: boolean;
  audioRef: React.RefObject<HTMLAudioElement>;
  playEpisode: (episode: Episode) => void;
  togglePlay: () => void;
  handleTimeUpdate: () => void;
  handleVolumeChange: (value: number) => void;
  toggleMute: () => void;
  handleSeek: (value: number) => void;
  closePlayer: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playEpisode = (episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
    setCurrentTime(0);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleVolumeChange = (value: number) => {
    if (!audioRef.current) return;

    setVolume(value);
    audioRef.current.volume = value;
    setIsMuted(value === 0);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const handleSeek = (value: number) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const closePlayer = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setIsPlaying(false);
    setCurrentEpisode(null);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("loadedmetadata", setAudioData);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", setAudioData);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentEpisode]);

  useEffect(() => {
    if (currentEpisode && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Auto-play failed:", error);
        setIsPlaying(false);
      });
    }
  }, [currentEpisode]);

  const value = {
    currentEpisode,
    isPlaying,
    duration,
    currentTime,
    volume,
    isMuted,
    audioRef,
    playEpisode,
    togglePlay,
    handleTimeUpdate,
    handleVolumeChange,
    toggleMute,
    handleSeek,
    closePlayer,
  };

  return (
    <AudioContext.Provider
      value={{
        ...value,
        audioRef: audioRef as React.RefObject<HTMLAudioElement>,
      }}
    >
      {children}
      {currentEpisode && (
        <audio
          ref={audioRef}
          src={currentEpisode.audioSrc}
          preload="metadata"
        />
      )}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
