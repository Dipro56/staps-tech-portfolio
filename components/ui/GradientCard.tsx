import { motion } from 'framer-motion';

export default function GradientCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-2xl p-[1px] bg-gradient-to-br from-green-500/50 to-purple-500/50"
    >
      <div className="rounded-2xl bg-black/80 p-8 h-full">
        {children}
      </div>
    </motion.div>
  );
}
