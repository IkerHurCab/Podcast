import Hero from "../components/Hero";
import FeaturedEpisode from "../components/Featured-Episode";
import EpisodeList from "../components/Episode-List";
import Newsletter from "../components/Newsletter";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <FeaturedEpisode />
        <EpisodeList />
        <Newsletter />
      </div>
    </main>
  );
}
