import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cardHover } from '../animations/variants'

export default function PortfolioCard({ item }) {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="group relative glass rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-60`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060612] via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="section-label text-[10px] px-2 py-1">{item.category}</span>
        </div>

        {/* Arrow */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight size={14} className="text-white" />
        </div>

        {/* Metrics */}
        <div className="absolute bottom-3 right-3 glass rounded-lg px-3 py-1.5">
          <p className="font-display font-bold text-sm text-white">{item.metrics.result}</p>
          <p className="text-white/50 text-[10px]">{item.metrics.label}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-white text-base mb-1.5">{item.title}</h3>
        <p className="text-white/45 text-xs leading-relaxed mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.07] text-white/40 text-xs font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}