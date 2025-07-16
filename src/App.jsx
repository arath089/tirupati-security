import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Partners from "./components/Partners";
import About from "./components/About";
import Contact from "./components/Contact";
import Licensing from "./components/Licensing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Testimonials />
      <Services />
      <Partners />
      <About />
      <Contact />
      <Licensing />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
