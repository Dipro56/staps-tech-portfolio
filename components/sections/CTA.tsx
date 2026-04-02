import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function CTA() {

   const handleClick = () => {
    window.open(
      `https://wa.me/8801326226621?text=${encodeURIComponent('Hello I want to book a call')}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-black/40 to-gray-900/30"></div>
      <div className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 relative z-10">
              Ready to Scale Your Brand?
            </h2>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-6 md:mb-8 relative z-10 px-2">
              Book a free strategy session with our team and get a custom
              content plan
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center relative z-10"
            >
              <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-500 text-black px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2 group"
              >
                Book Free Strategy Call
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border border-white/20 bg-white/5 px-6 md:px-8 py-3 md:py-4 rounded-lg hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 text-sm md:text-base"
              >
                View Pricing Details
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
