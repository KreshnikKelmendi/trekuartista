import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer/Footer";
import TeamPage from "./Pages/TeamPage";


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-team" element={<TeamPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
