import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Stack from "./pages/stack/Stack";
import Contact from "./pages/contact/Contact";
import { useTheme } from "./ThemeContext";


function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`container ${theme}`}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about/" element={<About />} />
            <Route path="/work/" element={<Projects />} />
            <Route path="/stack/" element={<Stack />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}