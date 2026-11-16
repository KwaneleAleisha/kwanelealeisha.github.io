import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import ToolBox from "./components/sections/ToolBox";
import Training from "./components/sections/Training";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import { site } from "./data/site";
import MotionEffects from "./components/layout/MotionEffects";
import { useRef } from "react";
import MobileBottomNav from "./components/layout/MobileBottomNav";

function App() {
  const appRoot = useRef(null);

  return (
    <div id="app-root" ref={appRoot} className="app-shell">
      <Navbar />
      <MotionEffects root={appRoot} />
      <a href="#main-content" className="sr-only z-[100] bg-white p-3 text-blue-700 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">{site.copy.skipToContent}</a>
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <ToolBox />
        <Training />
        <Contact />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

export default App;
