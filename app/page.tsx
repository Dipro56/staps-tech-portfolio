'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiCheck, FiPlay, FiUsers, FiTrendingUp, FiTarget, FiStar, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const videoRef = useRef(null);

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
      { threshold: 0.3 }
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
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

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
                <span className="text-xs text-gray-400 hidden md:block">Scale With Content</span>
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
              <motion.a
                href="#book"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-black px-5 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 group"
              >
                <span>Book a Call</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

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
            animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
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
              <motion.a
                href="#book"
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
                className="block py-3 px-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-black font-semibold text-center mt-4"
              >
                Book a Call
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* HERO - Enhanced for Mobile */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-24 md:pt-32 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50"></div>
        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="relative z-10 w-full max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6 md:mb-8 p-2 md:p-3 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/20 backdrop-blur-sm"
          >
            <div className="text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20">
              🚀 SCALING BRANDS WITH VIDEO
            </div>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight px-2">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block text-white"
            >
              We Help Brands
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mt-2 md:mt-4"
            >
              Scale With Content
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 md:mt-6 max-w-2xl mx-auto text-gray-300 text-base md:text-lg lg:text-xl px-4"
          >
            STAPS builds high-performing video systems that drive attention,
            trust, and revenue — without guesswork.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
          >
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-500 text-black px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center gap-2 group text-base md:text-lg"
            >
              View Pricing
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border border-white/20 bg-white/5 px-6 md:px-8 py-3 md:py-4 rounded-lg hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 flex items-center justify-center gap-2 group text-base md:text-lg"
            >
              <FiPlay />
              View Work
            </motion.a>
          </motion.div>

          {/* Stats - Responsive Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto px-4"
          >
            {[
              { value: '500+', label: 'Projects' },
              { value: '10M+', label: 'Views Generated' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Support' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* INTRO VIDEO - Responsive */}
      <section id="services" className="py-20 md:py-32 px-4 md:px-6 relative" ref={videoRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVideoVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="text-center mb-10 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVideoVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-3 md:mb-4"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 md:p-2 rounded-lg">
                <FiPlay className="text-black text-sm md:text-base" />
              </div>
              <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                INTRODUCING STAPS
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isVideoVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white"
            >
              See Our Work in Action
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVideoVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2"
            >
              Watch how we transform brands through strategic video content that drives real results
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVideoVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative group"
          >
            <div className="relative rounded-xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm shadow-xl md:shadow-2xl shadow-green-500/10 border border-white/10">
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="STAPS - Scaling Brands With Content"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isVideoVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
              className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
            >
              {[
                { label: 'Video Quality', value: '4K' },
                { label: 'Engagement Rate', value: '85%' },
                { label: 'Client Retention', value: '95%' },
                { label: 'Delivery Time', value: '< 48h' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-3 md:p-5 rounded-lg md:rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm">
                  <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVideoVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1 }}
            className="mt-8 md:mt-12 text-center"
          >
            <div className="inline-flex flex-wrap gap-2 md:gap-4 justify-center mb-4 md:mb-6">
              {['Content Strategy', 'Video Editing', 'Performance Analytics', 'Brand Growth'].map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 text-xs md:text-sm font-medium border border-green-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
              This video showcases our comprehensive approach to content creation, from initial strategy 
              to final delivery. See how we combine creativity with data-driven insights to produce 
              content that not only looks great but also delivers measurable results.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVideoVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center gap-2 group text-sm md:text-base"
              >
                <FiPlay />
                View More Videos
              </motion.a>
              <motion.a
                href="#case-studies"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-4 md:px-6 py-2.5 md:py-3 border border-white/20 bg-white/5 rounded-lg hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 text-sm md:text-base"
              >
                See Case Studies
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* CLIENT LOGOS - Responsive */}
      <section className="py-16 md:py-20 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
        <div className="relative z-10">
          <motion.h2 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl md:text-2xl font-bold text-center text-gray-400 mb-8 md:mb-12"
          >
            Trusted by industry leaders
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-20 max-w-6xl mx-auto"
          >
            {['Brand1', 'Brand2', 'Brand3', 'Brand4', 'Brand5'].map((brand, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-gray-300 text-lg md:text-xl lg:text-2xl font-bold transition-colors hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400 hover:bg-clip-text hover:text-transparent px-2"
              >
                {brand}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES - Responsive Grid */}
      <section id="services" className="py-20 md:py-32 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-black/30 to-gray-900/20"></div>
        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 md:p-2 rounded-lg">
                <FiTarget className="text-black text-sm md:text-base" />
              </div>
              <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              What STAPS Does
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
              Comprehensive video content solutions designed for maximum engagement and conversion
            </p>
          </motion.div>

          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FiPlay />,
                title: 'Short-Form Content',
                desc: 'Reels, Shorts & TikToks built to retain attention and maximize virality.',
                features: ['Platform Optimization', 'Hook Creation', 'Retention Focus']
              },
              {
                icon: <FiTrendingUp />,
                title: 'Long-Form Editing',
                desc: 'YouTube & podcast editing optimized for watch time and audience retention.',
                features: ['Storytelling', 'Pacing Control', 'SEO Optimization']
              },
              {
                icon: <FiTarget />,
                title: 'Content Strategy',
                desc: 'Proven systems to turn views into consistent leads and sustainable growth.',
                features: ['Analytics Driven', 'Content Planning', 'Performance Tracking']
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl md:rounded-2xl hover:border-green-400/50 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl inline-block mb-4 md:mb-6">
                  <div className="text-xl md:text-2xl text-black">{service.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
                      <FiCheck className="text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="py-20 md:py-32 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-black/30 to-emerald-950/20"></div>
        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 md:p-2 rounded-lg">
                <FiStar className="text-black text-sm md:text-base" />
              </div>
              <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                CASE STUDIES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Success Stories
            </h2>
          </motion.div>

          <div className="mt-12 md:mt-20 max-w-6xl mx-auto space-y-6 md:space-y-12">
            {[
              {
                client: 'Tech Startup',
                industry: 'SaaS',
                results: ['+3.2M views in 60 days', '400% engagement growth', '2,500+ leads generated'],
                description: 'Built a content system that consistently delivers high-converting video content.'
              },
              {
                client: 'E-commerce Brand',
                industry: 'Fashion',
                results: ['10M+ impressions', '25% increase in CTR', '$500K+ in attributed revenue'],
                description: 'Transformed their social media presence with strategic short-form content.'
              },
              {
                client: 'Personal Brand',
                industry: 'Finance',
                results: ['100K new followers', '5M+ total views', '3x audience growth'],
                description: 'Established authority through consistent, high-value long-form content.'
              }
            ].map((caseStudy, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.2 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-white">{caseStudy.client}</h3>
                      <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 w-fit">
                        {caseStudy.industry}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm md:text-base mb-4">{caseStudy.description}</p>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 whitespace-nowrap text-sm md:text-base text-center"
                  >
                    View Case Study
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS - Responsive Timeline */}
      <section id="process" className="py-20 md:py-32 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-emerald-950/30 to-gray-900/40"></div>
        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 md:p-2 rounded-lg">
                <FiTrendingUp className="text-black text-sm md:text-base" />
              </div>
              <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                OUR PROCESS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              How We Deliver Results
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
              A systematic approach to content creation that guarantees success
            </p>
          </motion.div>

          <div className="mt-12 md:mt-20 relative">
            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-12">
              {[
                {
                  num: '01',
                  title: 'Discovery & Strategy',
                  desc: 'Deep dive into your brand, audience, and goals to create a winning content strategy.',
                  features: ['Brand Analysis', 'Audience Research', 'Competitor Analysis']
                },
                {
                  num: '02',
                  title: 'Content Creation',
                  desc: 'Production of high-quality, platform-optimized content designed for maximum engagement.',
                  features: ['Video Production', 'Editing & Optimization', 'A/B Testing']
                },
                {
                  num: '03',
                  title: 'Distribution & Growth',
                  desc: 'Strategic distribution across platforms with data-driven optimization for continuous improvement.',
                  features: ['Platform Strategy', 'Performance Tracking', 'Scaling Winners']
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.3 }}
                  className="relative"
                >
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-emerald-400 to-green-500"></div>
                  <div className="ml-8 pl-4">
                    <div className="absolute left-0 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <span className="text-black font-bold">{step.num}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{step.desc}</p>
                    <ul className="space-y-1">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                          <FiCheck className="text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop Timeline */}
            <div className="hidden lg:block relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-green-500 via-emerald-400 to-green-500"></div>

              <div className="max-w-6xl mx-auto space-y-24">
                {[
                  {
                    num: '01',
                    title: 'Discovery & Strategy',
                    desc: 'Deep dive into your brand, audience, and goals to create a winning content strategy.',
                    features: ['Brand Analysis', 'Audience Research', 'Competitor Analysis']
                  },
                  {
                    num: '02',
                    title: 'Content Creation',
                    desc: 'Production of high-quality, platform-optimized content designed for maximum engagement.',
                    features: ['Video Production', 'Editing & Optimization', 'A/B Testing']
                  },
                  {
                    num: '03',
                    title: 'Distribution & Growth',
                    desc: 'Strategic distribution across platforms with data-driven optimization for continuous improvement.',
                    features: ['Platform Strategy', 'Performance Tracking', 'Scaling Winners']
                  }
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: i * 0.3 }}
                    className={`flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                  >
                    <div className="w-1/2 pr-12 pl-12">
                      <div className="relative">
                        <span className="text-6xl font-bold bg-gradient-to-r from-green-500/20 to-emerald-500/20 bg-clip-text text-transparent">{step.num}</span>
                        <h3 className="text-2xl font-bold text-white -mt-10 ml-8">{step.title}</h3>
                      </div>
                      <p className="mt-4 text-gray-400">{step.desc}</p>
                      <ul className="mt-6 space-y-2">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-300">
                            <FiCheck className="text-green-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative w-1/2">
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center z-10">
                        <span className="text-black font-bold">{step.num}</span>
                      </div>
                      <div className="ml-8 border border-white/10 rounded-xl p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
                        <div className="h-48 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 animate-pulse"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Responsive Grid */}
      <section id="testimonials" className="py-20 md:py-32 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-black/30 to-gray-900/20"></div>
        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 md:p-2 rounded-lg">
                <FiUsers className="text-black text-sm md:text-base" />
              </div>
              <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              What Our Clients Say
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                name: 'Alex Johnson',
                role: 'CEO, TechScale Inc.',
                quote: 'STAPS transformed our content strategy. Our engagement grew by 400% in just 3 months.',
                rating: 5
              },
              {
                name: 'Sarah Chen',
                role: 'Marketing Director',
                quote: 'The team delivers exceptional quality consistently. Best investment we made in marketing.',
                rating: 5
              },
              {
                name: 'Marcus Rivera',
                role: 'Founder, GrowthLab',
                quote: 'Their data-driven approach took our video content from good to exceptional.',
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl md:rounded-2xl hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <FiStar key={idx} className="text-yellow-400 fill-yellow-400 text-sm md:text-base" />
                  ))}
                </div>
                <p className="text-gray-300 italic text-sm md:text-base mb-4 md:mb-6">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-white text-base md:text-lg">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRICING - Responsive Grid */}
      <section id="pricing" className="py-20 md:py-32 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-black/30 to-emerald-950/20"></div>
        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 md:p-2 rounded-lg">
                <span className="text-black font-bold text-sm md:text-base">$</span>
              </div>
              <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                PRICING
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Choose Your Plan
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
              Flexible pricing designed to scale with your business
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                name: 'Starter',
                price: '$999/mo',
                popular: false,
                features: ['12 Shorts/Month', '48h Delivery', 'Basic Analytics', '1 Revision Round'],
                cta: 'Get Started'
              },
              {
                name: 'Growth',
                price: '$2,499/mo',
                popular: true,
                features: ['30 Shorts/Month', 'Long-Form Editing', 'Advanced Strategy', '3 Revision Rounds', 'Performance Reports'],
                cta: 'Most Popular'
              },
              {
                name: 'Scale',
                price: 'Custom',
                popular: false,
                features: ['Unlimited Content', 'Dedicated Team', 'Full Strategy', 'Priority Support', 'Custom Analytics'],
                cta: 'Contact Sales'
              }
            ].map((plan, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: plan.popular ? 1.02 : 1.01 }}
                className={`rounded-xl md:rounded-3xl p-6 md:p-8 relative ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-green-500/20 border border-green-400/50' 
                    : 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10'
                } backdrop-blur-sm`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 md:px-4 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-black text-xs md:text-sm font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4 md:mb-6">
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-gray-400 ml-2 text-sm md:text-base">/month</span>
                  )}
                </div>
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                      <FiCheck className="text-green-400 flex-shrink-0 text-sm md:text-base" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href="#book"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block py-3 md:py-4 rounded-lg font-semibold text-center transition-all text-sm md:text-base ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-black hover:shadow-lg hover:shadow-green-500/25' 
                      : 'bg-gradient-to-br from-white/10 to-white/5 text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 hover:text-black'
                  }`}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA - Responsive */}
      <section id="contact" className="py-20 md:py-32 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-black/40 to-gray-900/30"></div>
        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
              
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 relative z-10">
                Ready to Scale Your Brand?
              </h2>
              <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-6 md:mb-8 relative z-10 px-2">
                Book a free strategy session with our team and get a custom content plan
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center relative z-10"
              >
                <motion.a
                  href="#book"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-500 text-black px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2 group"
                >
                  Book Free Strategy Call
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#pricing"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto border border-white/20 bg-white/5 px-6 md:px-8 py-3 md:py-4 rounded-lg hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 text-sm md:text-base"
                >
                  View Pricing Details
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER - Responsive */}
      <footer className="py-12 md:py-16 border-t border-white/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900/30"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <div className="flex items-center gap-3">
              <Image
                src="/asset/STAPS_Logo.png"
                alt="STAPS"
                width={60}
                height={60}
                className="rounded-lg bg-gradient-to-br from-white/10 to-white/5 p-1.5"
              />
              <div>
                <span className="font-bold text-lg md:text-xl bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  STAPS
                </span>
                <p className="text-xs text-gray-400 mt-1">
                  Scaling brands with high-performance content
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 md:gap-6">
              {['Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map((social, i) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm md:text-base"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 text-center">
            <p className="text-gray-500 text-xs md:text-sm">
              © {new Date().getFullYear()} STAPS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}