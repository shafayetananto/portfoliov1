// Import all icons statically
import html5Icon from './assets/icons/html5.svg';
import css3Icon from './assets/icons/css3.svg';
import javascriptIcon from './assets/icons/javascript.svg';
import reactIcon from './assets/icons/react.svg';
import tailwindcssIcon from './assets/icons/tailwindcss.svg';
import reactrouterIcon from './assets/icons/reactrouter.svg';
import gsapIcon from './assets/icons/gsap.svg';
import framermotionIcon from './assets/icons/framermotion.svg';
import gitIcon from './assets/icons/git.svg';
import githubIcon from './assets/icons/github.svg';
import vercelIcon from './assets/icons/vercel.svg';
import restapiIcon from './assets/icons/restapi.svg';
import npmIcon from './assets/icons/npm.svg';
import vitejsIcon from './assets/icons/vitejs.svg';
import figmaIcon from './assets/icons/figma.svg';

export default function InfiniteSlider() {
  const iconMap = {
    'html5.svg': html5Icon,
    'css3.svg': css3Icon,
    'javascript.svg': javascriptIcon,
    'react.svg': reactIcon,
    'tailwindcss.svg': tailwindcssIcon,
    'reactrouter.svg': reactrouterIcon,
    'gsap.svg': gsapIcon,
    'framermotion.svg': framermotionIcon,
    'git.svg': gitIcon,
    'github.svg': githubIcon,
    'vercel.svg': vercelIcon,
    'restapi.svg': restapiIcon,
    'npm.svg': npmIcon,
    'vitejs.svg': vitejsIcon,
    'figma.svg': figmaIcon
  };

  const technologies = [
    { name: 'HTML5', icon: 'html5.svg', invert: false },
    { name: 'CSS3', icon: 'css3.svg', invert: false },
    { name: 'JavaScript', icon: 'javascript.svg', invert: false },
    { name: 'React', icon: 'react.svg', invert: false },
    { name: 'Tailwind CSS', icon: 'tailwindcss.svg', invert: false },
    { name: 'React Router', icon: 'reactrouter.svg', invert: false },
    { name: 'GSAP', icon: 'gsap.svg', invert: false },
    { name: 'Framer Motion', icon: 'framermotion.svg', invert: true },
    { name: 'Git', icon: 'git.svg', invert: false },
    { name: 'GitHub', icon: 'github.svg', invert: true },
    { name: 'Vercel', icon: 'vercel.svg', invert: true },
    { name: 'REST API', icon: 'restapi.svg', invert: true },
    { name: 'NPM', icon: 'npm.svg', invert: false },
    { name: 'Vite', icon: 'vitejs.svg', invert: false },
    { name: 'Figma', icon: 'figma.svg', invert: false }
  ];

  return (
    <div className="w-full py-12 px-8 md:px-32 lg:px-80 relative">
      <div className="absolute top-0 bottom-0 left-0 w-[100px] md:w-[250px] lg:w-[550px] z-10 pointer-events-none bg-gradient-to-r from-[rgb(0,3,25)] from-30% via-[rgba(0,3,25,0.8)] via-60% to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-0 w-[100px] md:w-[250px] lg:w-[550px] z-10 pointer-events-none bg-gradient-to-l from-[rgb(0,3,25)] from-30% via-[rgba(0,3,25,0.8)] via-60% to-transparent"></div>
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll">

          {/* First set of logos */}
          {technologies.map((tech, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="w-10 h-10 md:w-15 md:h-15">
                <img
                  src={iconMap[tech.icon]}
                  alt={tech.name}
                  className={`w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity ${tech.invert ? 'invert' : ''}`}
                />
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {technologies.map((tech, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="w-10 h-10 md:w-15 md:h-15">
                <img
                  src={iconMap[tech.icon]}
                  alt={tech.name}
                  className={`w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity ${tech.invert ? 'invert' : ''}`}
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}