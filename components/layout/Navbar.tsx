'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';
import { navItems } from '@/data/navItems';
import { useScrollNavbar } from '@/hooks/useScrollNavbar';
import Link from 'next/link';

export default function Navbar() {
  const scrolled = useScrollNavbar();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    window.open(
      `https://wa.me/8801326226621?text=${encodeURIComponent('Hello I want to book a call')}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled ? 'bg-black/90 backdrop-blur-xl py-3' : 'bg-black/60 py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <Image src="/asset/STAPS_Logo.png" alt="STAPS" width={90} height={90} />

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-white/80 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-4 items-center">
          {/* Book a Call → WhatsApp */}
          <button
            onClick={handleClick}
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2
                       bg-green-500 hover:bg-green-600
                       text-black font-semibold
                       px-5 py-3 rounded-lg transition"
          >
            Book a Call <FiArrowRight />
          </button>

          {/* Mobile Menu */}
          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
