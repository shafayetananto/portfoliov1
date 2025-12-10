import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTextRevealAnimation } from './hooks/useTextRevealAnimation.js';

import frameDiaryImage from './assets/projects/frameDiary/frameDiary.webp';
import frameDiaryLogo from './assets/weblogos/frameDiaryLogo.svg';
import descriptaAiImage from './assets/projects/descriptaAi/descriptaAi.webp';
import descriptaAiLogo from './assets/weblogos/descriptaAiLogo.svg';
import laCorteRossoImage from './assets/projects/laCorteRosso/laCorteRosso.webp';
import laCorteRossoLogo from './assets/weblogos/laCorteRossoLogo.svg';

export default function Projects() {
  const headingRef = useTextRevealAnimation({ animationType: 'heading' });
  const paragraphRef = useTextRevealAnimation({ animationType: 'paragraph' });
  const cardRefs = useRef([]);

  useEffect(() => {


    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('project-card-in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      id: 1,
      name: "frameDiary",
      title: "FrameDiary",
      description: "Movie enthusiasts can easily manage their personal watchlists, find films, and examine details like cast and trailers with FrameDiary. Maintain a record of the movies you've seen, make a list of your favorites, and assemble a customized library of your favorite films.",
      image: frameDiaryImage,
      logo: frameDiaryLogo,
      technologies: ["React.js", "Tailwind CSS", "TMDB API", "HTML5", "React Router", "CSS3"],
      githubLink: "https://github.com/shafayetananto/framediary",
      liveLink: "https://framediary.vercel.app/",
      invert: false
    },
    {
      id: 2,
      name: "descriptaAi",
      title: "DescriptaAI",
      description: "You can write well-written product descriptions in a matter of seconds with DescriptaAI. Content creation is made quicker and simpler by entering your product details, selecting the tone, and instantly producing multiple ready-to-use descriptions.",
      image: descriptaAiImage,
      logo: descriptaAiLogo,
      technologies: ["React.js", "Tailwind CSS", "Gemini API", "HTML5", "AI", "CSS3", "Framer Motion"],
      githubLink: "https://github.com/shafayetananto/descripta-ai",
      liveLink: "https://descripta-ai.vercel.app/",
      invert: true
    },
    {
      id: 3,
      name: "laCorteRosso",
      title: "La Corte Rosso",
      description: "You can explore a fine-dining restaurant online at La Corte Rosso. Through the website, you can read about the restaurant's history, browse the entire menu with filters, see a gallery of pictures, and make reservations.",
      image: laCorteRossoImage,
      logo: laCorteRossoLogo,
      technologies: ["React.js", "Tailwind CSS", "React Router", "HTML5", "Swiper", "CSS3"],
      githubLink: "https://github.com/shafayetananto/lacorterosso",
      liveLink: "https://lacorterosso.vercel.app/",
      invert: false
    }
  ];

  return (
    <div id='projects' className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 scroll-mt-28 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 ref={headingRef} className="text-2xl md:text-3xl lg:text-4xl font-bold text-accentP mb-8 text-center font-poppins">
            Projects
          </h2>
          <p ref={paragraphRef} className="mx-auto max-w-3xl text-lg text-[#94a3b8]">
            A highlight reel of what I can create
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="project-card rounded-lg overflow-hidden border border-slate-700/50 p-6 bg-gray-900"
                style={{
                  '--slide-offset': isEven ? '80px' : '-80px',
                  '--slide-offset-mobile': isEven ? '30px' : '-30px'
                }}
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-2/5 h-64 md:h-auto overflow-hidden  hover:scale-105 transition duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                    <div className="flex items-center gap-1 mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-textP">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-base md:text-lg mb-6 flex-grow text-textS">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-1.5 py-0.75 rounded-full text-xs md:text-sm md:px-3 md-py-1.5 font-medium border border-gray-400 text-textP bg-slate-900 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link
                        to={`/project/${project.name}`}
                        className="flex items-center gap-1 px-2 py-1 md:px-4 md:py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-gray-400 text-white text-sm md:text-md bg-gray-950"
                      >
                        <Info size={15} />
                        <span>Details</span>
                      </Link>
                      <a
                        href={project.githubLink}
                        target='_blank'
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2 py-1 md:px-4 md:py-2  rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-gray-400 text-white text-sm md:text-md bg-gray-950"
                      >
                        <Github size={15} />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={project.liveLink}
                        target='_blank'
                        rel="noopener noreferrer"
                        className="btn-transition bg-accentB text-textP flex gap-2 px-4 py-2 rounded-lg cursor-pointer group w-full sm:w-auto justify-center font-medium items-center"
                      >
                        <ExternalLink size={18} />
                        <span>Live Preview</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}