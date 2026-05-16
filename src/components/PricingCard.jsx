import { motion } from 'framer-motion'
import { Check, Globe, Bot, PenTool, ArrowRight, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { scaleIn } from '../animations/variants'

const iconMap = { Globe, Bot, PenTool }

const currencies = {
  USD: { symbol: '$', rate: 1 },
  NZD: { symbol: 'NZ$', rate: 1.64 },
  AUD: { symbol: 'A$', rate: 1.53 },
  GBP: { symbol: '£', rate: 0.79 },
  EUR: { symbol: '€', rate: 0.92 },
  CAD: { symbol: 'CA$', rate: 1.36 },
  SGD: { symbol: 'S$', rate: 1.34 },
  INR: { symbol: '₹', rate: 83.5 },
}

export default function PricingCard({ plan, currency = 'USD' }) {
  const curr = currencies[currency]
  const Icon = iconMap[plan.icon] || Globe
  const minPrice = Math.round(plan.priceMin * curr.rate)
  const maxPrice = Math.round(plan.priceMax * curr.rate)

  return (
    <motion.div
      variants={scaleIn}
      className="relative rounded-2xl overflow-hidden"
    >
      <div className="h-full glass gradient-border rounded-2xl p-8 flex flex-col">

        {/* Icon */}
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} p-0.5 mb-6 shadow-lg ${plan.glow}`}>
          <div className="w-full h-full rounded-2xl bg-[#060612] flex items-center justify-center">
            <Icon size={24} className="text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-2xl text-white mb-2">{plan.name}</h3>
        <p className="text-white/45 text-sm mb-6">{plan.tagline}</p>

        {/* Price range */}
        <div className="glass gradient-border rounded-xl px-5 py-4 mb-6">
          <p className="text-white/30 text-xs font-mono mb-1">Price range</p>
          <div className="flex items-baseline gap-1">
            <span className="font-display font-bold text-3xl text-white">
              {curr.symbol}{minPrice.toLocaleString()}
            </span>
            <span className="text-white/40 text-lg mx-1">–</span>
            <span className="font-display font-bold text-3xl text-white">
              {curr.symbol}{maxPrice.toLocaleString()}
            </span>
          </div>
          <p className="text-nova-400/70 text-xs mt-1 font-mono">{plan.period}</p>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map(f => (
            <li key={f} className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-nova-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={9} className="text-nova-400" strokeWidth={3} />
              </div>
              <span className="text-white/65 text-sm">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contact" className="btn-primary w-full justify-center">
          <Zap size={13} />
          {plan.cta}
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  )
}