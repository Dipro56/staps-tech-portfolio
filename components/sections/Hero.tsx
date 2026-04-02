'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { fadeUp } from '@/components/animations/motionVariants';
import {
  FiArrowRight,
  FiPlay,
} from 'react-icons/fi';

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
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

export default function Hero() {
  return (
      <section className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-24 md:pt-44 text-center relative">
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
            transition={{ delay: 0.2, type: 'spring' }}
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
              {/* We Help Brands */}
              From concept to creation
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mt-2 md:mt-4"
            >
              {/* Scale With Content */}
              we make you stand out
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 md:mt-6 max-w-2xl mx-auto text-gray-300 text-base md:text-lg lg:text-xl px-4"
          >
            {/* STAPS builds high-performing video systems that drive attention,
            trust, and revenue — without guesswork. */}
            A full-service digital agency delivering scroll-stopping visuals,
            powerful content, and technology that drives real growth.
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
              { value: '24/7', label: 'Support' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
  );
}
