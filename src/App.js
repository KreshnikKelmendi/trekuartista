import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer/Footer";
import TeamPage from "./Pages/TeamPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactPage from "./Pages/ContactPage";
import WorkPage from "./Pages/WorkPage";
import SinglePageOfWork from "./Pages/SinglePageOfWork";


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/about-trekuartista" element={<AboutUsPage />} />
          <Route path="/our-works" element={<WorkPage />} />
          <Route path="/our-works:id" element={<SinglePageOfWork />} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
