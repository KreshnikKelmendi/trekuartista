import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer/Footer";
import TeamPage from "./Pages/TeamPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactPage from "./Pages/ContactPage";
import WorkPage from "./Pages/WorkPage";
import SinglePageOfWork from "./Pages/SinglePageOfWork";
import ErrorPage from "./Pages/ErrorPage";
import { motion } from "framer-motion";
import logo from "./Components/Assets/trekuartistaLogoFooter.png";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <motion.div
          className="flex bg-black justify-center items-center h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            className="object-cover w-[100px] lg:w-[10%] h-auto"
            src={logo}
            alt=""
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </motion.div>
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-team" element={<TeamPage />} />
            <Route path="/about-trekuartista" element={<AboutUsPage />} />
            <Route path="/our-works" element={<WorkPage />} />
            <Route path="/our-works/:workID" element={<SinglePageOfWork />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
