import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./app/Layout"
import Page from "./app/Page"
import EpisodesPage from "./app/episodes/Page"
import ContactPage from "./app/contact/Page"
import NeuroShortsPage from "./app/neuroshorts/Page"
import { AudioProvider } from "./context/AudioContext"
import "./App.css"

function App() {
  return (
    <AudioProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/episodes" element={<EpisodesPage />} />
            <Route path="/neuroshorts" element={<NeuroShortsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </AudioProvider>
  )
}

export default App

