// 'use client';

// import Image from 'next/image';
// import { brandList } from '@/data/brands';
// import { motion } from 'framer-motion';

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// };

// export default function Brands() {
//   return (
//     <section id="brands" className="py-16 md:py-24 px-4 md:px-6 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-gray-900/40 to-black/60"></div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: '-100px' }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <span className="text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
//             TRUSTED BY BRANDS
//           </span>

//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-3 mb-4">
//             Brands That Trust STAPS
//           </h2>

//           <p className="text-gray-400 max-w-2xl mx-auto">
//             We’ve partnered with creators, startups, and businesses worldwide to
//             deliver impactful digital solutions.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 items-center">
//           {brandList.map((logo, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="flex items-center justify-center"
//             >
//               <Image
//                 height={200}
//                 width={200}
//                 src={logo.image}
//                 alt={logo.alt}
//                 className="object-contain "
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import { brandList } from '@/data/brands';
import { motion } from 'framer-motion';

export default function BrandsMarquee() {
  return (
    <section
      id="brands"
      className="relative overflow-hidden py-20 md:py-28 px-4"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[700px] h-[700px] bg-emerald-500/10 blur-3xl rounded-full"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-14">
        <span
          className="text-xs tracking-widest font-semibold uppercase
                         bg-gradient-to-r from-emerald-400 to-green-400
                         bg-clip-text text-transparent"
        >
          Trusted by brands
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
          Brands That Trust STAPS
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
          Creators, startups, and businesses worldwide trust us to build
          high-impact digital experiences.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 30,
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[...brandList, ...brandList].map((logo, i) => (
            <div
              key={i}
              className="group flex items-center justify-center
                         rounded-xl
                         bg-white/5 backdrop-blur
                         border border-white/10
                         hover:border-emerald-400/40
                         transition"
            >
              <Image
                src={logo.image}
                alt={logo.alt}
                width={160}
                height={80}
                className=""
              />
            </div>
          ))}
        </motion.div>

        {/* Fade edges */}
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" /> */}
      </div>
    </section>
  );
}
