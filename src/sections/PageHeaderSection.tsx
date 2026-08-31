import { motion } from "framer-motion";

interface PageHeaderSectionProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHeaderSection({ eyebrow, title, subtitle }: PageHeaderSectionProps) {
  return (
    <section className="relative pt-40 pb-20 bg-[#26235e] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#4ed372] rounded-full" />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">{eyebrow}</span>
          <h1 className="text-3xl sm:text-5xl font-semibold text-white mt-4">{title}</h1>
          {subtitle && (
            <p className="text-gray-300 mt-5 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
