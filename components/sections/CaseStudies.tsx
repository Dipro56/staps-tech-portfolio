'use client';

import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function CaseStudies() {
  const cases = [
    {
      client: 'Tech Startup',
      industry: 'SaaS',
      results: ['3.2M Views', '400% Engagement', '2,500 Leads'],
    },
    {
      client: 'E-commerce Brand',
      industry: 'Fashion',
      results: ['10M Impressions', '25% CTR', '$500K Revenue'],
    },
    {
      client: 'Personal Brand',
      industry: 'Finance',
      results: ['100K Followers', '5M Views', '3x Growth'],
    },
  ];

  return (
    <section id="case-studies" className="py-20 md:py-32 px-4 md:px-6 relative">
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
              results: [
                '+3.2M views in 60 days',
                '400% engagement growth',
                '2,500+ leads generated',
              ],
              description:
                'Built a content system that consistently delivers high-converting video content.',
            },
            {
              client: 'E-commerce Brand',
              industry: 'Fashion',
              results: [
                '10M+ impressions',
                '25% increase in CTR',
                '$500K+ in attributed revenue',
              ],
              description:
                'Transformed their social media presence with strategic short-form content.',
            },
            {
              client: 'Personal Brand',
              industry: 'Finance',
              results: [
                '100K new followers',
                '5M+ total views',
                '3x audience growth',
              ],
              description:
                'Established authority through consistent, high-value long-form content.',
            },
          ].map((caseStudy, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.2 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {caseStudy.client}
                    </h3>
                    <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 w-fit">
                      {caseStudy.industry}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base mb-4">
                    {caseStudy.description}
                  </p>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-300 text-sm md:text-base"
                      >
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
  );
}
