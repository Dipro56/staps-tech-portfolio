'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const socials = [
    { name: 'Instagram', url: 'https://www.instagram.com/stapstech05/' },
    { name: 'Facebook', url: 'https://www.facebook.com/stapstech' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/stapstech/' },
  ];

  return (
    <footer className="py-12 md:py-16 border-t border-white/10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900/30"></div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          {/* Logo */}
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

          {/* Social Links */}
          <div className="flex gap-4 md:gap-6">
            {socials.map((social) => (
              <motion.div
                key={social.name}
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm md:text-base"
                >
                  {social.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-xs md:text-sm">
            © {new Date().getFullYear()} STAPS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
