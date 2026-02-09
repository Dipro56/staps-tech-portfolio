'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  FiArrowRight,
  FiCheck,
  FiPlay,
  FiUsers,
  FiTrendingUp,
  FiTarget,
  FiStar,
  FiMenu,
  FiX,
  FiChevronDown,
  FiGlobe,
  FiImage,
} from 'react-icons/fi';

import Background from '@/components/layout/Background';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Hero from '@/components/sections/Hero';
import IntroVideo from '@/components/sections/IntroVideo';
import Brands from '@/components/sections/Brands';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import CTA from '@/components/sections/CTA';
import Portfolio from '@/components/sections/Portfolio';


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const videoRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle video visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  // Navigation items
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    // { label: 'Case Studies', href: '#case-studies' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

    const handleClick = () => {
    window.open(
      `https://wa.me/8801326226621?text=${encodeURIComponent('Hello I want to book a call')}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <div className="text-white font-sans overflow-x-hidden" ref={containerRef}>
      {/* Enhanced Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-emerald-950"></div>
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{ y: backgroundY }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </motion.div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>

      {/* ENHANCED NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl shadow-2xl shadow-green-500/10 py-3'
            : 'bg-gradient-to-b from-black/80 to-transparent backdrop-blur-lg py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-1 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                {/* <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div> */}
                <Image
                  src="/asset/STAPS_Logo.png"
                  alt="STAPS"
                  width={100}
                  height={100}
                  className="relative rounded-xl  cursor-pointer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  STAPS
                </span>
                <span className="text-xs text-gray-400 hidden md:block">
                  Scale With Content
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-3/4 transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-black px-5 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 group cursor-pointer"
                onClick={handleClick}
              >
                <span>Book a Call</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.9 }}
                className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={
              isMenuOpen
                ? { height: 'auto', opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 5 }}
                  className="block py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
               
                onClick={() => {
                  setIsMenuOpen(false)
                  handleClick()
                }}
                whileTap={{ scale: 0.95 }}
                className="block py-3 px-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-black font-semibold text-center mt-4"
              >
                Book a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      <Hero />

      <IntroVideo videoRef={videoRef} isVideoVisible={isVideoVisible} />

      <Brands />

      <Services />
      <Portfolio/>

      {/* <CaseStudies /> */}

      <Process />

      <Testimonials />
      <Pricing />

      <CTA />
      <Footer />
    </div>
  );
}
