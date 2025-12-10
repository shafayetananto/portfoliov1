import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTextRevealAnimation } from './hooks/useTextRevealAnimation.js';
gsap.registerPlugin(ScrollTrigger);

export default function Workflow () {
  const headingRef = useTextRevealAnimation({ animationType: 'heading' });
  const paragraphRef = useTextRevealAnimation({ animationType: 'paragraph' });

  const cardsRef = useRef([]);
  const numbersRef = useRef([]);
  const containerRef = useRef(null);

  const workflowData = [
    {
      number: "00",
      title: "Goal Mapping",
      action: "I focus on understanding your goals, your audience, and the core purpose your website has to achieve.",
      ensures: "A smooth, aligned kickoff that keeps the entire project on track."
    },
    {
      number: "01",
      title: "Structure Blueprint",
      action: "I map out the layout and flow so every section has a clear purpose.",
      ensures: "You see the entire website blueprint before anything gets built."
    },
    {
      number: "02",
      title: "Design Phase",
      action: "I craft a clean, modern look with strong hierarchy, spacing, and branding.",
      ensures: "Your website stands out instantly and feels ready for real users."
    },
    {
      number: "03",
      title: "Development Phase",
      action: "I develop a smooth, responsive experience backed by clean, efficient, and scalable code.",
      ensures: "Your website works perfectly on all devices, every time."
    },
    {
      number: "04",
      title: "Refinement Stage",
      action: "I refine the details, fix the rough spots, and elevate the final result.",
      ensures: "The site feels polished, intentional, and exactly how you imagined it."
    },
    {
      number: "05",
      title: "Deployment & Support",
      action: "I deploy the site, handle the tech, and stay available for quick help.",
      ensures: "You launch with confidence, no stress, no surprises."
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    const numbers = numbersRef.current;

    cards.forEach((card, index) => {
      if (!card) return;

      gsap.set(card, {
        opacity: 0,
        y: 30
      });

      gsap.set(numbers[index], {
        opacity: 0,
        scale: 0.8
      });

      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          once: true
        }
      });

      gsap.to(numbers[index], {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          once: true
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id='workflow' className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 ref={headingRef} className="text-2xl md:text-3xl lg:text-4xl font-bold text-accentP mb-8 text-center font-poppins">
            My Workflow
          </h2>
          <p ref={paragraphRef} className="mx-auto max-w-3xl text-lg text-[#94a3b8]">
            From concept to launch, here’s how I bring your vision to life
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {workflowData.map((item, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 transition-all duration-300 hover:scale-[1.2] hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 rounded-2xl transition-all duration-300" />

              <div className="relative z-10">
                <div className="mb-6">
                  <div
                    ref={el => numbersRef.current[index] = el}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110"
                  >
                    <span className="text-2xl font-bold text-textP">{item.number}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-textP mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-accentP mb-2">The Process:</p>
                  <p className="text-slate-300 leading-relaxed">
                    {item.action}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-accentB mb-2">Why it matters:</p>
                  <p className="text-slate-300 leading-relaxed font-medium">
                    {item.ensures}
                  </p>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
