'use client';

import { pricing } from '@/data/pricing';
import SectionHeader from '@/components/ui/SectionHeader';
import GradientCard from '@/components/ui/GradientCard';
import { motion, useScroll, useTransform } from 'framer-motion';

import {
  FiCheck,
} from 'react-icons/fi';

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

export default function Pricing() {

     const handleClick = () => {
    window.open(
      `https://wa.me/8801326226621?text=${encodeURIComponent('Hello I want to book a call')}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
         <section id="pricing" className="py-20 md:py-32 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-black/30 to-emerald-950/20"></div>
        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 md:p-2 rounded-lg">
                <span className="text-black font-bold text-sm md:text-base">
                  $
                </span>
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
            viewport={{ once: true, margin: '-100px' }}
            className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                name: 'Starter',
                price: '$999/mo',
                popular: false,
                features: [
                  '12 Shorts/Month',
                  '48h Delivery',
                  'Basic Analytics',
                  '1 Revision Round',
                ],
                cta: 'Get Started',
              },
              {
                name: 'Growth',
                price: '$2,499/mo',
                popular: true,
                features: [
                  '30 Shorts/Month',
                  'Long-Form Editing',
                  'Advanced Strategy',
                  '3 Revision Rounds',
                  'Performance Reports',
                ],
                cta: 'Most Popular',
              },
              {
                name: 'Scale',
                price: 'Custom',
                popular: false,
                features: [
                  'Unlimited Content',
                  'Dedicated Team',
                  'Full Strategy',
                  'Priority Support',
                  'Custom Analytics',
                ],
                cta: 'Contact Sales',
              },
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
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4 md:mb-6">
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="text-gray-400 ml-2 text-sm md:text-base">
                      /month
                    </span>
                  )}
                </div>
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-300 text-sm md:text-base"
                    >
                      <FiCheck className="text-green-400 flex-shrink-0 text-sm md:text-base" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  onClick={handleClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block cursor-pointer w-full py-3 md:py-4 rounded-lg font-semibold text-center transition-all text-sm md:text-base ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-black hover:shadow-lg hover:shadow-green-500/25'
                      : 'bg-gradient-to-br from-white/10 to-white/5 text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 hover:text-black'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
}
