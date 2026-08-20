"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef(null);

  // Detectar scroll para el fondo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detectar sección activa
  useEffect(() => {
    const sections = ["technology", "gallery", "accessories", "about"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#technology", label: "Design" },
    { href: "#gallery", label: "Gallery" },
    { href: "#accessories", label: "Models" },
    { href: "#about", label: "About" },
  ];

  return (
    <>
      <motion.header
        ref={menuRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl transition-all duration-500 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border border-black/5" 
            : "bg-transparent"
        } ${isMenuOpen ? "rounded-3xl" : "rounded-full"}`}
        style={{
          boxShadow: isScrolled 
            ? "0 4px 24px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)" 
            : "none"
        }}
      >
        <div className="flex items-center justify-between px-4 pl-6 py-2.5">
          {/* Logo */}
          <Link 
            href="#hero" 
            className="relative group"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-xl font-bold tracking-tight text-gray-900 transition-all duration-300 group-hover:tracking-wider">
              MONO
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  activeSection === link.href.replace("#", "")
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link.label}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gray-900 transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`} 
                />
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Link
              href="#reserve"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gray-900 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Contact</span>
              <ArrowRight 
                size={16} 
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
              />
              <span className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-100 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="px-6 pt-6 pb-8 bg-white rounded-b-3xl">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{link.label}</span>
                        <ArrowRight 
                          size={18} 
                          className="text-gray-400 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" 
                        />
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 px-4"
                  >
                    <Link
                      href="#reserve"
                      className="flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-white bg-gray-900 rounded-2xl transition-all duration-300 hover:bg-gray-800 active:scale-95 shadow-lg shadow-gray-900/20"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                      <ArrowRight size={18} />
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Overlay para menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}