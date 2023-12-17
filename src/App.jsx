import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Skills, Projects, StarsCanvas, Education } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="relative z-0 pt-20">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
