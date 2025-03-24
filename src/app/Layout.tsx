import type React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AudioPlayerFooter from "../components/AudioPlayerFooter";
import { useAudio } from "../context/AudioContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { currentEpisode } = useAudio();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-gray-900 dark:text-white">
      <Navbar />
      <div className={`flex-grow ${currentEpisode ? "pb-24 sm:pb-20" : ""}`}>
        {children}
      </div>
      <Footer />
      <AudioPlayerFooter />
    </div>
  );
}
