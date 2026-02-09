'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

/* ------------------ animations ------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

/* ------------------ data ------------------ */

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'CEO, TechScale Inc.',
    quote:
      'STAPS transformed our content strategy. Our engagement grew by 400% in just three months.',
    rating: 5,
    image: '/asset/client_1.jpg',
  },
  {
    name: 'Sarah Chen',
    role: 'Marketing Director',
    quote:
      'The team delivers exceptional quality consistently. Best investment we made in marketing.',
    rating: 5,
    image: '/asset/client_2.jpg',
  },
  {
    name: 'Emily Rivera',
    role: 'Founder, GrowthLab',
    quote:
      'Their data-driven approach took our video content from good to exceptional.',
    rating: 5,
    image: '/asset/client_3.jpg',
  },
  {
    name: 'Daniel Moore',
    role: 'Head of Growth, ScaleUp',
    quote:
      'Reliable, fast, and extremely high quality. Working with STAPS feels like having an in-house team.',
    rating: 5,
    image: '/asset/client_4.jpg',
  },
  {
    name: 'Priya Patel',
    role: 'Product Marketing Lead',
    quote:
      'Clear communication, strong strategy, and flawless execution from start to finish.',
    rating: 5,
    image: '/asset/client_5.jpg',
  },
];

/* ------------------ component ------------------ */

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 px-4 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500">
            Testimonials
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
            Trusted by growing teams
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-400 leading-relaxed">
            Founders, marketers, and operators rely on STAPS to deliver
            consistent, high-impact results.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03]
                         p-6 md:p-8 transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <FiStar
                    key={idx}
                    className="text-yellow-400 fill-yellow-400 text-sm"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-6">“{t.quote}”</p>

              {/* Client */}
              <div className="flex items-center gap-4">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-white">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
