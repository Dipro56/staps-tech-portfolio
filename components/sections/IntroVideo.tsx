'use client';

import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';

interface IntroVideoProps {
  videoRef: React.RefObject<HTMLDivElement>;
  isVideoVisible: boolean;
}

export default function IntroVideo({
  videoRef,
  isVideoVisible,
}: IntroVideoProps) {
  return (
    <section
      id="services"
      ref={videoRef}
      className="py-20 md:py-32 px-4 md:px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVideoVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isVideoVisible
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
              <FiPlay className="text-black" />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              INTRODUCING STAPS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={
              isVideoVisible
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            See Our Work in Action
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isVideoVisible
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Creative IT solutions and content that drives real results.
          </motion.p>
        </div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isVideoVisible
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.95 }
          }
          transition={{ delay: 0.5, duration: 0.8 }}
          className="rounded-3xl overflow-hidden border border-white/10 bg-white/5"
        >
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isVideoVisible
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ delay: 0.8 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Video Quality', value: '4K' },
            { label: 'Engagement', value: '85%' },
            { label: 'Retention', value: '95%' },
            { label: 'Delivery', value: '<48h' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
            >
              <div className="text-xl font-bold text-green-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
