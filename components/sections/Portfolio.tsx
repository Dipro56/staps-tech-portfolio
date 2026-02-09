'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiPlay, FiGlobe } from 'react-icons/fi';
import { fadeUp } from '@/components/animations/motionVariants';
import Link from 'next/link';

const reelPortfolio = [
  { title: 'Faceless Content', src: '/asset/video/Reel_1.mp4' },
  { title: 'Reels & Shorts', src: '/asset/video/Reel_2.mp4' },
  { title: 'Podcast Reel', src: '/asset/video/Reel_3.mp4' },
  { title: 'Personal Intro', src: '/asset/video/Reel_4.mp4' },
  { title: 'Personal Blog', src: '/asset/video/Reel_5.mp4' },
];

const websitePortfolio = [
  {
    title: 'Shadhin',
    description:
      'Largest audio platform of Bangladesh. Users can enjoy different kinds of audio content here.',
    image: '/asset/shadhin_project.png',
    tags: ['Javascript', 'React', 'Next.js', 'Zustand'],
    liveLink: 'https://shadhinmusic.com/',
  },
  {
    title: 'Infiniti',
    description:
      'Document processing software used for document editing and storing.',
    image: '/asset/infinite.png',
    tags: ['React', 'Typescript', 'Redux'],
    liveLink: 'http://100.42.178.85:3002/',
  },
  {
    title: 'Win',
    description:
      'A quiz platform. Users can enjoy different types of quizzes here.',
    image: '/asset/win.png',
    tags: ['Javascript', 'React', 'Next.js', 'Redux'],
    liveLink: 'https://win2gain.com',
  },
  {
    title: 'Shadhin CMS',
    description:
      'For monitoring and observing different types of revenue for Shadhin company.',
    image: '/asset/shadhincms.png',
    tags: ['Javascript', 'React', 'Redux'],
    liveLink: 'http://shadhincms.shadhin.co/login',
  },
  {
    title: 'BRAN FC Slot Booker',
    description: 'Booking football match slots for players of BRAN FC club.',
    image: '/asset/branfc_project.png',
    tags: ['Typescript', 'React', 'Redux', 'Node', 'Express'],
    liveLink: 'https://bran-fc-slot-booking.vercel.app/home',
    // githubLink:
    //   'https://github.com/Dipro56/bran-fc-slot-booking-frontend',
  },
  // {
  //   title: 'ISSB',
  //   description:
  //     'Online course platform to serve candidates preparing for ISSB exams.',
  //   image: '/asset/issb_solution.png',
  //   tags: ['Javascript', 'React', 'Redux'],
  //   liveLink: 'https://www.issbsolution.com/',
  // },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 md:py-32 px-4 md:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/40 to-black" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            OUR WORK
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            A glimpse of what we’ve built
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From scroll-stopping videos to high-converting websites, here’s a
            selection of our recent work.
          </p>
        </motion.div>

        {/* Video Editing Portfolio */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10 mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl text-black text-xl">
              <FiPlay />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Video Editing
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                High-performing video content crafted for reach, retention, and
                conversions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reelPortfolio.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl
                 border border-white/10 bg-gradient-to-br from-white/10 to-white/5
                 backdrop-blur-sm transition"
              >
                {/* Video */}
                <video
                  src={item.src}
                  className="w-full  object-cover rounded-xl z-10 relative"
                  controls
                  preload="metadata"
                  muted
                  controlsList="nodownload nofullscreen noremoteplayback"
                />

                {/* Optional overlay for hover effect */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none transition" />

                {/* Video title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 pointer-events-none">
                  <span className="text-white font-medium">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Website Portfolio */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl text-black text-xl">
              <FiGlobe />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Website Services
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Modern, scalable websites designed to convert and perform
                flawlessly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websitePortfolio.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-gradient-to-br from-white/10 to-white/5
                           border border-white/10 rounded-2xl p-6
                           backdrop-blur-sm transition flex flex-col"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-xl object-cover w-full h-48 mb-4"
                />
                <h4 className="text-white font-semibold text-lg mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-3 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags?.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.liveLink && (
                  <div className="mt-auto">
                    <Link
                      href={project.liveLink}
                      className="bg-green-500 cursor-pointer hover:bg-green-600 text-black font-semibold px-4 py-2 rounded-lg transition"
                    >
                      Visit Live
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
