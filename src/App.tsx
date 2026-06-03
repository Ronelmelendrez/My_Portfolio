import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/layout/ScrollToTop";
import ScrollProgress from "./components/common/ScrollProgress";
import BackToTop from "./components/common/BackToTop";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen bg-navy">
            <div className="w-16 h-16 border-4 border-electric border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
      <BackToTop />
    </>
  );
}

export default App;