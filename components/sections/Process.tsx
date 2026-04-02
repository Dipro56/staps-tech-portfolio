'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCheck, FiTrendingUp } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Strategy',
      desc: 'Deep dive into your brand, audience, and goals to create a winning content strategy.',
      features: ['Brand Analysis', 'Audience Research', 'Competitor Analysis'],
      src: '/asset/step_1.jpg',
    },
    {
      num: '02',
      title: 'Content Creation',
      desc: 'Production of high-quality, platform-optimized content designed for maximum engagement.',
      features: ['Video Production', 'Editing & Optimization', 'A/B Testing'],
      src: '/asset/step_2.jpg',
    },
    {
      num: '03',
      title: 'Distribution & Growth',
      desc: 'Strategic distribution across platforms with data-driven optimization for continuous improvement.',
      features: [
        'Platform Strategy',
        'Performance Tracking',
        'Scaling Winners',
      ],
      src: '/asset/step_3.jpg',
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32 px-4 md:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-emerald-950/30 to-gray-900/40"></div>
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
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.3 }}
                className="relative"
              >
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-emerald-400 to-green-500"></div>
                <div className="ml-8 pl-4">
                  <div className="absolute left-0 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <span className="text-black font-bold">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{step.desc}</p>
                  <ul className="space-y-1">
                    {step.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-300 text-sm"
                      >
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
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: i * 0.3 }}
                  className={`flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                >
                  <div className="w-1/2 pr-12 pl-12">
                    <div className="relative">
                      <span className="text-6xl font-bold bg-gradient-to-r from-green-500/20 to-emerald-500/20 bg-clip-text text-transparent">
                        {step.num}
                      </span>
                      <h3 className="text-2xl font-bold text-white -mt-10 ml-8">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-gray-400">{step.desc}</p>
                    <ul className="mt-6 space-y-2">
                      {step.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-300"
                        >
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
                    <div className="ml-8 border border-white/10 rounded-xl p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex">
                        <Image src={step.src} alt={step.title} width={500} height={300} className='rounded-xl' />
                      {/* <div className="h-48 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 animate-pulse">
                        <Image src={step.src} alt={step.title} width={400} height={300} />
                      </div> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
