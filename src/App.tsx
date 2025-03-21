import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./app/Layout";
import Page from "./app/Page";
import EpisodesPage from "./app/episodes/Page";
import ContactPage from "./app/contact/Page";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
