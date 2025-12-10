import { ArrowRight } from "lucide-react";
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);
import { useRef, useEffect } from "react";

export default function Hero() {
    const titleRef = useRef(null);
    useEffect(() => {
        const chars = "abcpqrxyz";
        const text = "Hi, I'm Shafayet";
        let iteration = 0;
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                if (titleRef.current) {
                    titleRef.current.innerHTML = text
                        .split("")
                        .map((letter, index) => {
                            const char = index < iteration ? text[index] : chars[Math.floor(Math.random() * chars.length)];

                            if (index === 8) {
                                return `<span class="text-accentP">${char}`;
                            } else if (index === 15) {
                                return `${char}</span>`;
                            } else if (index > 8 && index < 15) {
                                return char;
                            }
                            return char;
                        })
                        .join("");

                    if (iteration >= text.length) {
                        clearInterval(interval);
                    }

                    iteration += 1 / 2;
                }
            }, 30);

        }, 300);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section id="home" className="relative scroll-mt-28 overflow-hidden">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute rounded-full blur-[72px] bg-[radial-gradient(circle_at_center,#a78bfa70,#6366f150)] h-[380px] w-[1400px] rotate-[12deg] opacity-65 -top-[220px] left-1/4"></div>

                <div className="absolute rounded-full blur-[64px] bg-[radial-gradient(ellipse_at_center,#ec489960,#f43f5e40)] h-[310px] w-[980px] rotate-[-28deg] opacity-40 -top-[160px] -left-[120px]"></div>

                <div className="absolute rounded-full blur-[56px] bg-[radial-gradient(circle_at_center,#06b6d455,#0ea5e945)] h-[340px] w-[1200px] rotate-[42deg] opacity-50 -top-[190px] right-[80px]"></div>

                <div className="absolute rounded-full blur-[68px] bg-[radial-gradient(ellipse_at_center,#8b5cf655,#a855f740)] h-[420px] w-[1100px] rotate-[-15deg] opacity-35 -top-[280px] left-[600px]"></div>

                <div className="absolute rounded-full blur-[80px] bg-[radial-gradient(circle_at_center,#4f46e530,#6366f125)] h-[360px] w-[1600px] rotate-[8deg] opacity-30 -top-[350px] left-1/3"></div>
            </div>
            <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 lg:px-20">
                <div className="w-full max-w-3xl lg:-translate-x-8">
                    <a href="#contact"><div className="cursor-pointer flex items-center gap-2 mb-6 border border-gray-500 rounded-3xl px-2 py-1 w-45">
                        <div className="relative flex items-center">
                            <span className="flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                        </div>
                        <span className="text-sm md:text-md text-textP/90 font-mono">Available for Projects</span>
                    </div></a>

                    <h1 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-textP font-poppins">
                        Hi, I'm <span className="text-accentP">Shafayet</span>
                    </h1>

                    <h2 className="text-xl md:text-3xl lg:text-4xl font-medium mb-6 text-textP font-poppins">
                        Front End Engineer
                    </h2>

                    <p className="text-md md:text-xl text-textS leading-relaxed max-w-2xl">
                        I build fast, high-converting websites that turn your ideas into clean, powerful digital experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 text-textP">
                        <a href="#contact" className="w-full sm:w-auto">
                            <button className="btn-transition bg-accentP flex gap-2 px-4 py-2 rounded-4xl cursor-pointer group w-full sm:w-auto justify-center">
                                <span>Get in touch</span>
                                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </a>

                        <a href="#projects" className="w-full sm:w-auto">
                            <button className="btn-transition bg-accentB flex gap-2 px-4 py-2 rounded-4xl cursor-pointer group w-full sm:w-auto justify-center">
                                <span>View Projects</span>
                                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}