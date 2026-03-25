import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SmoothScroll from "./components/layout/SmoothScroll";
import ScrollToTop from "./utils/ScrollToTop";
import WhatsAppButton from "./utils/WhatsAppButton";
import PageLoader from "./components/ui/PageLoader";

// Layout Components (Lightweight - direct import ok)
import Navbar from "./components/layout/Navbar";
import Navbar2 from "./components/layout/Navbar2";
import Footer from "./components/layout/Footer";

// Lazy Loaded Components
const Hero = lazy(() => import("./components/sections/Hero"));
const About = lazy(() => import("./components/sections/About"));
const Projects = lazy(() => import("./components/sections/Project"));
const WhyChooseUs = lazy(() => import("./components/sections/WhyChooseUs"));
const Contact = lazy(() => import("./components/sections/Contact"));

const Product = lazy(() => import("./pages/Product"));
const Services = lazy(() => import("./pages/Services"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

const AnimatedTestimonials = lazy(() =>
  import("./components/ui/animated-testimonials").then((module) => ({
    default: module.AnimatedTestimonials,
  }))
);

import { testimonials } from "./data/testimonials";

function App() {
  // const [isInitialLoading, setIsInitialLoading] = useState(true);

  //   useEffect(() => {
  //   // 3000 ka matlab hai 3 seconds (aap ise badha bhi sakte hain)
  //   const timer = setTimeout(() => {
  //     setIsInitialLoading(false);
  //   }, 2000); 
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <main>
          {/* <Suspense fallback={isInitialLoading ? <PageLoader /> : null}> */}
          {/* {isInitialLoading ? <PageLoader /> : null} */}

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Hero />
                  <About />
                  <Projects />
                  <WhyChooseUs />
                  <AnimatedTestimonials
                    testimonials={testimonials}
                    autoplay
                  />
                  <Contact />
                  <Footer />
                </>
              }
            />

            <Route
              path="/services"
              element={
                <>
                  <Navbar2 />
                  <Services />
                  <Footer />
                </>
              }
            />

            <Route
              path="/products"
              element={
                <>
                  <Navbar2 />
                  <div className="h-16" />
                  <Product />
                  <Footer />
                </>
              }
            />

            <Route
              path="/terms-of-service"
              element={
                <>
                  <Navbar2 />
                  <TermsOfService />
                  <Footer />
                </>
              }
            />

            <Route
              path="/privacy-policy"
              element={
                <>
                  <Navbar2 />
                  <PrivacyPolicy />
                  <Footer />
                </>
              }
            />
          </Routes>
          {/* </Suspense> */}

          <WhatsAppButton />
          <ToastContainer position="bottom-right" autoClose={4000} />
        </main>
      </SmoothScroll>
    </Router>
  );
}

export default App;