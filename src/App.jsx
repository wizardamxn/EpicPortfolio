// import Hero from "./sections/Hero";
// import Navbar from "./sections/Navbar";
// import About from "./sections/About";
// import Projects from "./sections/Projects";
// import SkillsComponent from "./sections/Skills";
// import Contact from "./sections/Contact";
// import Footer from "./sections/Footer";

// function App() {
//   return (
//     <div className="scroll-smooth container mx-auto max-w-7xl">
//       <Navbar />
//       <Hero />
//       <About />
//       <Projects />
//       <SkillsComponent />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import SkillsComponent from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    // CHANGED: Removed 'container mx-auto max-w-7xl'
    // Added 'bg-[#030412]' so the whole page defaults to your midnight theme
    // Added 'overflow-x-hidden' to prevent horizontal scrollbars from animations
    <main className="scroll-smooth min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <SkillsComponent />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;