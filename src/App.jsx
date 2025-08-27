import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nexus from "./components/Nexus";
import Vault from "./components/Vault";
import Prologue from "./components/Prologue";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Nexus />
      <Vault />
      <Prologue />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
