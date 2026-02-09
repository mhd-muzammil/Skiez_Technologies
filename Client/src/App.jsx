import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import { Toaster } from "react-hot-toast";
import { Loader2 } from "lucide-react";
import PrivacyTechnologies from "./pages/Privacy";
import TermsTechnologies from "./pages/Terms";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <Loader2 className="w-10 h-10 animate-spin text-cyan-500" />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-gray-900 text-white min-h-screen overflow-hidden">
        <Navbar />
        <main className="pt-20 md:pt-24 min-h-screen">
          <Toaster position="top-right" />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/careers" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyTechnologies />} />
              <Route path="/terms" element={<TermsTechnologies />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
