import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Sparkles, Bot, PenTool, ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cardHover } from '../animations/variants'

const iconMap = { Globe, Sparkles, Bot, PenTool }


export default function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || Globe
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover={expanded ? undefined : 'hover'}
      className="relative group glass gradient-border rounded-2xl overflow-hidden card-hover"
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 rounded-2xl`} />

      {/* Main card content */}
      <div className="relative p-6">
        {/* Icon */}
        <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-5 shadow-lg ${service.glow}`}>
          <div className="w-full h-full rounded-xl bg-[#060612] flex items-center justify-center">
            <Icon size={22} className="text-white" />
          </div>
        </div>

        {/* Number */}
        <span className="absolute top-5 right-5 font-mono text-xs text-white/15">
          0{index + 1}
        </span>

        <h3 className="font-display font-bold text-lg text-white mb-1.5">{service.title}</h3>
        <p className="text-nova-400 text-xs font-mono mb-3">{service.tagline}</p>
        <p className="text-white/45 text-sm leading-relaxed mb-5">{service.description}</p>

{/* Features */}
        <ul className="space-y-2 mb-5">
          {service.features.slice(0, 3).map(f => (
            <li key={f} className="flex items-center gap-2 text-xs text-white/50">
              <div className="w-1 h-1 rounded-full bg-nova-400" />
              {f}
            </li>
          ))}
        </ul>

        {/* Learn more button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-medium text-nova-400 hover:text-nova-300 transition-colors group/btn"
        >
          {expanded ? 'Show less' : 'Learn more'}
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>

      {/* Expanded section */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-white/[0.06]">
              <p className="text-white/40 text-xs font-mono uppercase tracking-widest mt-5 mb-3">
                Everything included
              </p>
              <ul className="space-y-2.5 mb-6">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/60">
                    <div className="w-4 h-4 rounded-full bg-nova-500/20 flex items-center justify-center flex-shrink-0">
                      <Check size={9} className="text-nova-400" strokeWidth={3} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Ready to get started with {service.title}? Our team will build a custom
                strategy tailored to your business goals — no cookie-cutter solutions.
              </p>

              <Link
                to="/contact"
                className="btn-primary inline-flex w-full justify-center"
                onClick={e => e.stopPropagation()}
              >
                Get Started with {service.title}
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}