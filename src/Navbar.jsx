import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "workflow", label: "Workflow" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setActiveId("");
      return;
    }

    const updateActive = () => {
      const scrollPos = window.scrollY + 140;
      let current = navItems[0].id;

      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (!el) return;
        const top = el.offsetTop;
        if (scrollPos >= top - 40) {
          current = item.id;
        }
      });

      setActiveId(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [isHomePage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (id) => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false);
  };

  const renderNavItem = (item) => {
    const isActive = activeId === item.id;

    return (
      <button
        key={item.id}
        onClick={() => handleNavClick(item.id)}
        className={`cursor-pointer group relative px-3 py-1.5 text-sm font-medium transition-colors duration-300 ${isActive
            ? "text-textP"
            : "text-textS"
          }`}
      >
        <span
          className={`pointer-events-none absolute inset-0 rounded-xl transition-all duration-300 ease-out ${isActive
              ? "opacity-100 scale-100 bg-secondary"
              : "opacity-0 scale-95"
            }`}
        />

        <span className="relative inline-flex items-center gap-1">
          {item.label}
          <span
            className={`absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-accentP transition-transform duration-300 ease-out ${isActive ? "scale-x-0" : "group-hover:scale-x-100"
              }`}
          />
        </span>
      </button>
    );
  };

  return (
    <>
      <header className="fixed top-4 left-1/2 z-50 hidden md:block w-[min(550px,calc(100%-5rem))] -translate-x-1/2">
        <nav className="backdrop-blur-xl bg-primary/65 border border-gray-400 shadow-[0_12px_36px_rgba(0,0,0,0.42)] rounded-2xl px-4.5 sm:px-5.5 py-2.5 flex items-center justify-center gap-1">
          <div className="flex items-center gap-5 font-poppins">
            {navItems.map(renderNavItem)}
          </div>
        </nav>
      </header>

      <button
        aria-label="Toggle navigation"
        className="cursor-pointer md:hidden fixed top-4 right-4 z-50 inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-textP transition hover:border-white/30 hover:bg-white/5"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div className="md:hidden fixed top-14 right-4 z-50 backdrop-blur-xl bg-primary/85 border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.45)] rounded-xl px-3 py-2 space-y-1 font-poppins">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-lg transition-colors ${activeId === item.id
                  ? "bg-secondary"
                  : "bg-transparent"
                }`}
            >
              <button
                onClick={() => handleNavClick(item.id)}
                className={`cursor-pointer group w-full text-left px-3 py-2 text-sm font-medium transition-colors ${activeId === item.id
                    ? "text-textP"
                    : "text-textS"
                  }`}
              >
                <span className="relative inline-flex w-full">
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-accentP transition-transform duration-300 ease-out ${activeId === item.id
                        ? "scale-x-0"
                        : "group-hover:scale-x-100"
                      }`}
                  />
                </span>
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}