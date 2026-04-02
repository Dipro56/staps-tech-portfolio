import { motion } from 'framer-motion';
import { fadeUp } from '@/components/animations/motionVariants';

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      {subtitle && (
        <p className="text-green-400 uppercase tracking-widest text-sm mb-4">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
    </motion.div>
  );
}
