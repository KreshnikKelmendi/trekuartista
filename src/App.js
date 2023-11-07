import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer/Footer";
import TeamPage from "./Pages/TeamPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactPage from "./Pages/ContactPage";


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/about-trekuartista" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
