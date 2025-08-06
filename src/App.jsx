import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import SkillsComponent from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Pricing from "./sections/Pricing";

function App() {
  return (
    <div className="scroll-smooth container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <SkillsComponent />

      {/* <Pricing /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
