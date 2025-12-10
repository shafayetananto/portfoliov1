import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECT_DATA } from './ProjectData.js';

// Carousel Component
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => setCurrentIndex(index);
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  if (images.length === 1) {
    return (
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden rounded-lg">
        <img src={images[0]} alt="Project" className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden rounded-lg group">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="cursor-pointer absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={goToNext}
        className="cursor-pointer absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

// Main Component
export default function ProjectDetails() {
  const { name } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [name]);

  const handleBackToProjects = () => {
    navigate(-1);
  };

  const project = PROJECT_DATA.find(p => p.name === name);

  if (!project) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-textP mb-4 font-poppins">Project Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300 flex items-center justify-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <button
          onClick={handleBackToProjects}
          className="cursor-pointer inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-6 sm:mb-8 group cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm sm:text-base">
            <span className="hidden lg:inline">Back to Projects</span>
            <span className="lg:hidden">Back</span>
          </span>
        </button>

        <div className="mb-6 sm:mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textP mb-2 sm:mb-3 font-poppins">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300">{project.tagline}</p>
        </div>

        <div className="mb-8 sm:mb-12 animate-fade-in">
          <Carousel images={project.images} />
        </div>

        <div className="space-y-8 sm:space-y-12">
          <section className="animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-bold text-textP mb-3 sm:mb-4 font-poppins">Overview</h2>
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">{project.overview}</p>
          </section>

          <section className="animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-bold text-textP mb-3 sm:mb-4 font-poppins">Key Features</h2>
            <ul className="space-y-2 sm:space-y-3">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-300">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="text-base sm:text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-bold text-textP mb-3 sm:mb-4 font-poppins">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-slate-700 text-slate-200 px-3 sm:px-4 py-2 rounded-full transition-colors text-sm sm:text-base"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </section>

          <section className="animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-bold text-textP mb-3 sm:mb-4 font-poppins">Challenges</h2>
            <ul className="space-y-2 sm:space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-300">
                  <span className="text-orange-400 mt-1 flex-shrink-0">▹</span>
                  <span className="text-base sm:text-lg">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-bold text-textP mb-3 sm:mb-4 font-poppins">What I Learned</h2>
            <ul className="space-y-2 sm:space-y-3">
              {project.learned.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-300">
                  <span className="text-green-400 mt-1 flex-shrink-0">▹</span>
                  <span className="text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 animate-fade-in">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-400 text-white px-5 sm:px-6 py-3 rounded-lg transition-all hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm sm:text-base">View on GitHub</span>
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-transition bg-accentB text-textP flex gap-2 px-4 py-2 rounded-lg cursor-pointer group w-full sm:w-auto justify-center items-center font-medium"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="text-sm sm:text-base">Live Preview</span>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};