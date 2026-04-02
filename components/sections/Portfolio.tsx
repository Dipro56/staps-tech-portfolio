// 'use client';

// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiPlay, FiGlobe, FiX, FiVideo } from 'react-icons/fi';
// import { fadeUp } from '@/components/animations/motionVariants';
// import Link from 'next/link';
// import { useState } from 'react';

// const reelPortfolio = [
//   { title: 'Faceless Content', src: '/asset/video/Reel_1.mp4' },
//   { title: 'Reels & Shorts', src: '/asset/video/Reel_2.mp4' },
//   { title: 'Podcast Reel', src: '/asset/video/Reel_3.mp4' },
//   { title: 'Personal Intro', src: '/asset/video/Reel_4.mp4' },
// ];

// const landscapePortfolio = [
//   {
//     title: 'Talking Head Video Editing Rishi Raju',
//     src: 'https://www.youtube.com/embed/MBTLEJoihqU?modestbranding=1&rel=0&controls=1',
//   },
//   {
//     title: 'Talking Head Video Portfolio',
//     src: 'https://www.youtube.com/embed/ePAy7Q78v7E?modestbranding=1&rel=0&controls=1',
//   },
//   {
//     title: 'Talking Head Video Editing',
//     src: 'https://www.youtube.com/embed/tn0aOO1vH7Q?modestbranding=1&rel=0&controls=1',
//   },
//   {
//     title: 'Talking Head Video Edit I Sit Down Video Edit',
//     src: 'https://www.youtube.com/embed/khSdmtRNJJ4?modestbranding=1&rel=0&controls=1',
//   },
//   {
//     title: 'Podcast Video Editing I STAPS Tech',
//     src: 'https://www.youtube.com/embed/mPKmmcItxPU?modestbranding=1&rel=0&controls=1',
//   },
// ];
// const websitePortfolio = [
//   {
//     title: 'Shadhin',
//     description:
//       'Largest audio platform of Bangladesh. Users can enjoy different kinds of audio content here.',
//     image: '/asset/shadhin_project.png',
//     tags: ['Javascript', 'React', 'Next.js', 'Zustand'],
//     liveLink: 'https://shadhinmusic.com/',
//   },
//   {
//     title: 'Infiniti',
//     description:
//       'Document processing software used for document editing and storing.',
//     image: '/asset/infinite.png',
//     tags: ['React', 'Typescript', 'Redux'],
//     liveLink: 'http://100.42.178.85:3002/',
//   },
//   {
//     title: 'Win',
//     description:
//       'A quiz platform. Users can enjoy different types of quizzes here.',
//     image: '/asset/win.png',
//     tags: ['Javascript', 'React', 'Next.js', 'Redux'],
//     liveLink: 'https://win2gain.com',
//   },
//   {
//     title: 'Shadhin CMS',
//     description:
//       'For monitoring and observing different types of revenue for Shadhin company.',
//     image: '/asset/shadhincms.png',
//     tags: ['Javascript', 'React', 'Redux'],
//     liveLink: 'http://shadhincms.shadhin.co/login',
//   },
//   {
//     title: 'BRAN FC Slot Booker',
//     description: 'Booking football match slots for players of BRAN FC club.',
//     image: '/asset/branfc_project.png',
//     tags: ['Typescript', 'React', 'Redux', 'Node', 'Express'],
//     liveLink: 'https://bran-fc-slot-booking.vercel.app/home',
//     // githubLink:
//     //   'https://github.com/Dipro56/bran-fc-slot-booking-frontend',
//   },
//   // {
//   //   title: 'ISSB',
//   //   description:
//   //     'Online course platform to serve candidates preparing for ISSB exams.',
//   //   image: '/asset/issb_solution.png',
//   //   tags: ['Javascript', 'React', 'Redux'],
//   //   liveLink: 'https://www.issbsolution.com/',
//   // },
// ];

// export default function Portfolio() {
//   const [activeVideo, setActiveVideo] = useState<string | null>(null);

//   const isYoutube = (url: string | string[]) => url.includes('youtube');

//   return (
//     <section id="portfolio" className="relative py-20 md:py-32 px-4 md:px-6">
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/40 to-black" />
//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <p className="text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
//             OUR WORK
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
//             A glimpse of what we’ve built
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             From scroll-stopping videos to high-converting websites, here’s a
//             selection of our recent work.
//           </p>
//         </motion.div>

//         {/* Vertical Reels */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="space-y-10 mb-20"
//         >
//           <div className="flex items-center gap-4 mb-6">
//             <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl text-black text-xl">
//               <FiPlay />
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold text-white">
//                 Video Editing
//               </h3>
//               <p className="text-gray-400 text-sm mt-1">
//                 High-performing reel content crafted for reach, retention, and
//                 conversions.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
//             {reelPortfolio.map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -6 }}
//                 onClick={() => setActiveVideo(item.src)}
//                 className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20 transition"
//               >
//                 <video
//                   src={item.src}
//                   muted
//                   loop
//                   preload="metadata"
//                   className="w-full aspect-[9/16] object-cover opacity-80 group-hover:opacity-100 transition"
//                   onMouseEnter={(e) => e.currentTarget.play()}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.pause();
//                     e.currentTarget.currentTime = 0;
//                   }}
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="bg-white/90 text-black p-4 rounded-full group-hover:scale-110 transition">
//                     <FiPlay size={22} />
//                   </div>
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
//                   <span className="text-white font-medium">{item.title}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Landscape Videos */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="space-y-10 mb-20"
//         >
//           <div className="flex items-center gap-4 mb-6">
//             <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl text-black text-xl">
//               <FiVideo />
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold text-white">
//                 Landscape Video Projects
//               </h3>
//               <p className="text-gray-400 text-sm mt-1">
//                 Long-form cinematic and promotional videos.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {landscapePortfolio.map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -6 }}
//                 onClick={() => setActiveVideo(item.src)}
//                 className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20 transition"
//               >
//                 <div className="relative w-full aspect-video">
//                   <iframe
//                     src={item.src}
//                     className="absolute inset-0 w-full h-full "
//                     title={item.title}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />
//                 </div>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   {/* <div className="bg-white/90 text-black p-4 rounded-full group-hover:scale-110 transition">
//                     <FiPlay size={22} />
//                   </div> */}
//                 </div>
//                 {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
//                   <span className="text-white font-medium">{item.title}</span>
//                 </div> */}
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Websites */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="space-y-10"
//         >
//           <div className="flex items-center gap-4 mb-6">
//             <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl text-black text-xl">
//               <FiGlobe />
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold text-white">
//                 Website Services
//               </h3>
//               <p className="text-gray-400 text-sm mt-1">
//                 Modern, scalable websites designed to convert and perform
//                 flawlessly.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {websitePortfolio.map((project, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ y: -6 }}
//                 className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm transition flex flex-col"
//               >
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   width={600}
//                   height={400}
//                   className="rounded-xl object-cover w-full h-48 mb-4"
//                 />
//                 <h4 className="text-white font-semibold text-lg mb-2">
//                   {project.title}
//                 </h4>
//                 <p className="text-gray-400 text-sm mb-3 flex-1">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-3">
//                   {project.tags?.map((tag, tIdx) => (
//                     <span
//                       key={tIdx}
//                       className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-md"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 {project.liveLink && (
//                   <div className="mt-auto">
//                     <Link
//                       href={project.liveLink}
//                       className="bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 text-black font-semibold px-4 py-2 rounded-lg transition"
//                     >
//                       Visit Live
//                     </Link>
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {activeVideo && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
//             onClick={() => setActiveVideo(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.85 }}
//               animate={{ scale: 1 }}
//               className="relative w-full max-w-3xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setActiveVideo(null)}
//                 className="absolute -top-12 right-0 text-white text-2xl"
//               >
//                 <FiX />
//               </button>

//               {isYoutube(activeVideo) ? (
//                 <div className="relative w-full aspect-video rounded-xl overflow-hidden">
//                   <iframe
//                     src={activeVideo}
//                     className="absolute inset-0 w-full h-full"
//                     title="Landscape Video"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />
//                 </div>
//               ) : (
//                 <video
//                   src={activeVideo}
//                   controls
//                   autoPlay
//                   controlsList="nofullscreen nodownload noremoteplayback"
//                   className="w-full max-h-[80vh]  rounded-xl shadow-2xl"
//                 />
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiGlobe, FiX, FiVideo } from 'react-icons/fi';
import { fadeUp } from '@/components/animations/motionVariants';
import Link from 'next/link';
import { useState } from 'react';

/* ================= DATA ================= */

const reelPortfolio = [
  {
    title: 'Faceless Content',
    src: '/asset/video/Reel_1.mp4',
    thumbnail: '/asset/thumbs/thumb_reel_1.PNG',
  },
  {
    title: 'Reels & Shorts',
    src: '/asset/video/Reel_2.mp4',
    thumbnail: '/asset/thumbs/thumb_reel_2.PNG',
  },
  {
    title: 'Podcast Reel',
    src: '/asset/video/Reel_3.mp4',
    thumbnail: '/asset/thumbs/thumb_reel_3.PNG',
  },
  {
    title: 'Personal Intro',
    src: '/asset/video/Reel_4.mp4',
    thumbnail: '/asset/thumbs/thumb_reel_4.PNG',
  },
];

const landscapePortfolio = [
  {
    title: 'Talking Head Editing',
    src: 'https://res.cloudinary.com/dqvwnpohw/video/upload/v1775124202/Talking_Head_Video_edit_Rishi_Raju_tqechp.mp4',
    thumbnail: '/asset/thumbs/thumb_video_4.PNG',
  },
  {
    title: 'Podcast Editing',
    src: 'https://res.cloudinary.com/dqvwnpohw/video/upload/v1775123637/Sit_Down_Fitness_video_Deana_Jamal_i3llr9.mp4',
    thumbnail: '/asset/thumbs/thumb_video_2.PNG',
  },
  {
    title: 'YouTube Documentary',
    src: 'https://res.cloudinary.com/dqvwnpohw/video/upload/v1775123352/Talking_Head_Sit_Down_Video_Edit_teqhhh.mp4',
    thumbnail: '/asset/thumbs/thumb_video_3.PNG',
  },
  
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

/* ================= COMPONENT ================= */

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'reels' | 'landscape'>('reels');

  return (
    <section id="portfolio" className="relative py-20 md:py-32 px-4 md:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/40 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            OUR WORK
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Premium Portfolio
          </h2>
        </motion.div>

        <div className="flex justify-center mb-12 gap-4">
          {['reels', 'landscape'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'reels' | 'landscape')}
              className={`px-6 py-3 rounded-full font-medium cursor-pointer transition ${
                activeTab === tab
                  ? 'bg-green-500 text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {tab === 'reels' ? 'Reels' : 'Landscape'}
            </button>
          ))}
        </div>

        {activeTab === 'reels' ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="mb-20"
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
                  High-performing reel content crafted for reach, retention, and
                  conversions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {reelPortfolio.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  onClick={() => setActiveVideo(item.src)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <div className="relative aspect-[9/16]">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className={`object-cover transition ${
                        hoveredIndex === i ? 'opacity-0 scale-110' : ''
                      }`}
                    />

                    {hoveredIndex === i && (
                      <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white text-black p-3 rounded-full">
                        <FiPlay />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div variants={fadeUp} className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl text-black text-xl">
                <FiVideo />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Landscape Video Projects
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Long-form cinematic and promotional videos.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {landscapePortfolio.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  onClick={() => setActiveVideo(item.src)}
                  onMouseEnter={() => setHoveredIndex(i + 100)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className={`object-cover transition ${
                        hoveredIndex === i + 100 ? 'opacity-0 scale-110' : ''
                      }`}
                    />

                    {hoveredIndex === i + 100 && (
                      <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white text-black p-4 rounded-full">
                        <FiPlay />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

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
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm transition flex flex-col"
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
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 text-black font-semibold px-4 py-2 rounded-lg transition"
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

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl px-4"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-2 text-white text-3xl"
              >
                <FiX />
              </button>

              <div className="aspect-video rounded-xl overflow-hidden">
                <video
                  src={activeVideo}
                  controls
                  autoPlay
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
