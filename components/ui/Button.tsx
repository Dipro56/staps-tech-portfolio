import { FiArrowRight } from 'react-icons/fi';

export default function Button({ children }: { children: string }) {
  return (
    <button className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-4 rounded-xl transition">
      {children}
      <FiArrowRight />
    </button>
  );
}
