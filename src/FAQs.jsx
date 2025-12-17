import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTextRevealAnimation } from './hooks/useTextRevealAnimation.js';

const faqs = [
  {
    question: "What types of projects do you work on?",
    answer: "I build fast, modern, and visually clean websites, including portfolios, landing pages, and single-page applications. If it lives on the web and needs a smooth user experience, I can create it"
  },
  {
    question: "How long does it take to complete a website?",
    answer: "It depends on the project size, but most websites take 1–2 weeks. Larger or more complex projects may take a bit longer. I always share a clear timeline before starting."
  },
  {
    question: "Do you provide responsive and mobile-friendly designs?",
    answer: "Every project I build is fully responsive, ensuring your website looks flawless on desktop, tablet, and mobile."
  },
  {
    question: "Can you help with animations or interactive elements?",
    answer: "Absolutely. I use tools like Framer Motion, GSAP, and custom JavaScript to add smooth, modern animations while keeping performance strong."
  },
  {
    question: "Will I be able to update the website later?",
    answer: "Yes. I write clean, easy-to-understand code, so you can update text, images, or sections whenever you need. If you want ongoing help, I can offer support as well."
  },
  {
    question: "How do we start working together?",
    answer: (
      <>
        You can contact me through the form on my website or email me directly at{' '}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = 'mailto:' + 'shafayetbinzaman06' + '@' + 'gmail.com';
          }}
          className="text-accentB hover:underline cursor-pointer font-medium"
        >
          shafayetbinzaman06@gmail.com
        </a>
        . Tell me about your project, and I'll get back to you with ideas, suggestions, and a clear plan to move forward.
      </>
    )
  }
];

const useStaggeredAnimation = (itemCount) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  return { containerRef, isVisible };
};

export default function FAQs() {
  const headingRef = useTextRevealAnimation({ animationType: 'heading' });
  const paragraphRef = useTextRevealAnimation({ animationType: 'paragraph' });
  const [openIndex, setOpenIndex] = useState(null);
  const [contentHeights, setContentHeights] = useState([]);
  const answerRefs = useRef([]);
  const rafIdRef = useRef(null);
  const resizeTimeout = useRef(null);
  const { containerRef, isVisible } = useStaggeredAnimation(faqs.length);

  const recalcHeights = useCallback(() => {
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    rafIdRef.current = requestAnimationFrame(() => {
      const heights = answerRefs.current.map((el) => el?.scrollHeight || 0);
      setContentHeights(heights);
    });
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useLayoutEffect(() => {
    recalcHeights();

    const handleResize = () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(() => {
        recalcHeights();
      }, 120);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [recalcHeights]);

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAccordion(index);
    }
  };

  return (
    <div className="min-h-screen bg-[#000319] px-4 py-16 font-sans">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 ref={headingRef} className="text-2xl md:text-3xl lg:text-4xl font-bold text-accentP mb-8 text-center font-poppins">
            Things You Might Want to Know
          </h2>
          <p ref={paragraphRef} className="mx-auto max-w-3xl text-lg text-[#94a3b8]">
            Everything you need to know about working together
          </p>
        </div>

        <div ref={containerRef} className="flex flex-col">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item mb-4 overflow-hidden border-b border-[#334155]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.5s ease-out ${index * 0.2}s, transform 0.5s ease-out ${index * 0.1}s`
              }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="cursor-pointer flex w-full items-center justify-between gap-4 px-6 py-6 text-left text-inherit hover:bg-gray-900 transition-colors duration-300 ease-in-out rounded"
              >
                <h3 className="m-0 text-sm md:text-lg font-semibold leading-7 text-[#f8fafc]">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-6 w-6 flex-shrink-0 text-accentB transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`faq-answer ${openIndex === index ? 'open' : 'closed'} overflow-hidden px-6 transition-[max-height,opacity,padding] duration-300 ease-out will-change-[max-height,opacity,padding] ${openIndex === index ? 'pt-1 pb-5 opacity-100' : 'pt-0 pb-0 opacity-0'}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                ref={(el) => { answerRefs.current[index] = el; }}
                style={{
                  maxHeight: openIndex === index
                    ? `${contentHeights[index] || 500}px`
                    : '0px',
                }}
              >
                <p className="mb-5 text-base leading-7 text-textS">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}