'use client';

import { motion } from 'framer-motion';
import { services } from '@/data/services';
import SectionHeader from '@/components/ui/SectionHeader';
import GradientCard from '@/components/ui/GradientCard';
import {
  staggerContainer,
  fadeUp,
} from '@/components/animations/motionVariants';
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

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-black/30 to-gray-900/20"></div>

      <div className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
              <FiTarget className="text-black" />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            What STAPS Does
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Full-stack creative and marketing solutions designed to grow brands,
            boost engagement, and drive conversions.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              icon: <FiImage />,
              title: 'Graphics Design',
              desc: 'High-impact visuals that stop the scroll and strengthen brand identity.',
              features: [
                'Thumbnail Design',
                'Social Media Post Design',
                'Official Posts & Banners',
              ],
            },
            {
              icon: <FiPlay />,
              title: 'Video Editing',
              desc: 'Professional video editing optimized for retention and performance.',
              features: [
                'Reels & Shorts',
                'Long-Form Videos',
                'Faceless & Talking Head',
                'Podcast & Vlog Editing',
                'Commercial Ads',
              ],
            },
            {
              icon: <FiTrendingUp />,
              title: 'Digital Marketing & SEO',
              desc: 'Growth-focused strategies that convert views into real results.',
              features: [
                'Facebook Ad Campaigns',
                'Post Boosting',
                'YouTube SEO Optimization',
              ],
            },
            {
              icon: <FiGlobe />,
              title: 'Website Services',
              desc: 'Modern, responsive websites built for performance and scalability.',
              features: [
                'Web Design',
                'Web Development',
                'Website Maintenance',
              ],
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-green-400/50 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl inline-block mb-6">
                <div className="text-2xl text-black">{service.icon}</div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-5 text-sm">{service.desc}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                  >
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
  );
}
