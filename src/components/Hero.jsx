import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Play } from 'lucide-react'
import { fadeUp, staggerContainer, scaleIn } from '../animations/variants'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border border-white/[0.03] animate-spin-slow" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-white/[0.04]" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-nova-500/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
{/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="section-label">
              <Zap size={10} className="fill-nova-400 text-nova-400" />
              AI Model Creation & Web Development
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp} className="section-title max-w-4xl">
            We Create{' '}
            <span className="relative">
              <span className="gradient-text">AI Models</span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nova-500/60 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
            <br />
            That Grow Your Brand
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={fadeUp} className="section-subtitle text-center mx-auto">
            Custom AI influencers and virtual brand ambassadors that create content, 
            drive engagement, and sell your products — 24/7, no photoshoots needed.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary px-7 py-3.5 text-sm">
              Start Your Project
              <ArrowRight size={15} />
            </Link>
            <Link to="/portfolio" className="btn-secondary px-7 py-3.5 text-sm">
              <Play size={13} className="fill-white/60" />
              View Our Work
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-6 pt-2">
            {[
              { value: '150+', label: 'Projects' },
              { value: '$24M+', label: 'Revenue Generated' },
              { value: '98%', label: 'Retention Rate' },
            ].map(stat => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="font-display font-bold text-white text-lg">{stat.value}</span>
                <span className="text-white/35 text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero visual / dashboard mockup */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative mt-16 mx-auto max-w-5xl"
        >
          <div className="relative glass-strong gradient-border rounded-2xl overflow-hidden p-1">
            {/* Fake browser chrome */}
            <div className="glass rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="glass rounded-md px-3 py-1 text-xs text-white/30 font-mono text-center">
                    novaflow.digital/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="grid grid-cols-3 gap-4 p-6">
                {[
                  { label: 'Revenue', value: '$84,291', change: '+24.3%', positive: true },
                  { label: 'Conversions', value: '4,218', change: '+18.7%', positive: true },
                  { label: 'Automation Tasks', value: '12,847', change: '+312%', positive: true },
                ].map(card => (
                  <div key={card.label} className="glass rounded-xl p-4">
                    <p className="text-white/40 text-xs font-mono mb-2">{card.label}</p>
                    <p className="font-display font-bold text-2xl text-white mb-1">{card.value}</p>
                    <span className={`text-xs font-mono ${card.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                      {card.change} this month
                    </span>
                  </div>
                ))}

                {/* Chart placeholder */}
                <div className="col-span-2 glass rounded-xl p-4">
                  <p className="text-white/40 text-xs font-mono mb-3">Revenue Growth</p>
                  <div className="flex items-end gap-1.5 h-20">
                    {[40, 55, 45, 70, 60, 80, 75, 90, 85, 100, 92, 110].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-nova-600 to-nova-400"
                        style={{ height: `${h}%` }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                      />
                    ))}
                  </div>
                </div>

                {/* AI status */}
                <div className="glass rounded-xl p-4">
                  <p className="text-white/40 text-xs font-mono mb-3">AI Automations</p>
                  {['Lead Qualifier', 'Email Nurture', 'Content Gen'].map(item => (
                    <div key={item} className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-white/60 text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Glow under card */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-nova-500/10 blur-3xl rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}