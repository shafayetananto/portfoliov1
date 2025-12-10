import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Navbar';
import Portal from './Portal';
import Hero from './Hero';
import About from './About';
import Workflow from './Workflow';
import Projects from './Projects'
import ProjectDetails from './ProjectDetails';
import FAQs from './FAQs';
import Contact from './Contact';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={
          <>
            <Portal />
            <Hero />
            <About />
            <Workflow />
            <Projects />
            <FAQs />
            <Contact />
          </>
        } />

        <Route path="/project/:name" element={<ProjectDetails />} />

      </Routes>

      <Footer />
    </>
  );
}
