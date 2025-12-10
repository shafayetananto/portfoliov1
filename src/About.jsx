import InfiniteSlider from "./InfiniteSlider";
import { useTextRevealAnimation } from './hooks/useTextRevealAnimation.js';

export default function About() {
  const headingRef = useTextRevealAnimation({ animationType: 'heading' });
  const paragraphRef = useTextRevealAnimation({ animationType: 'paragraph' });
  return (
    <>
      <section id="about" className="max-w-5xl mx-auto px-6 py-10 flex flex-col items-center scroll-mt-28">
        <div className="mb-12 text-center">
          <h2 ref={headingRef} className="text-2xl md:text-3xl lg:text-4xl font-bold text-accentP mb-8 text-center font-poppins">
            About me
          </h2>
          <p ref={paragraphRef} className="mx-auto max-w-3xl text-lg text-[#94a3b8]">
            Get to know the mind behind the work
          </p>
        </div>

        <div className="space-y-6 text-textP text-sm md:text-md lg:text-lg leading-relaxed">
          <p>
            I'm Shafayet, a front-end engineer who enjoys transforming concepts into quick, seamless, and eye-catching online experiences. Working with the current JavaScript ecosystem, my goal is to design user interfaces that are simple and pleasurable.
          </p>

          <p>
            Everything I create is guided by clear design principles and clean code. I like coming up with UI patterns, responsive layouts, and subtle interactions that add character to a website without making it too difficult to use.
          </p>

          <p>
            I’m always refining my craft, learning, and staying up-to-date with front-end best practices so every project gets better than the last.
          </p>

          <p>
            When I'm not coding, you can probably find me reading something interesting, watching football or movies, playing a quick game of chess, or unwinding with a cup of coffee.
          </p>
        </div>
      </section>
      <InfiniteSlider />
    </>
  );
}