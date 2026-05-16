import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, CalendarCheck } from 'lucide-react'
import { fadeUp, staggerContainer } from '../animations/variants'

export default function CTASection({
  title = "Ready to Build Something Extraordinary?",
  subtitle = "Let's talk about your goals and build a strategy to get there.",
  primaryCta = { label: 'Start Your Project', href: '/contact' },
  secondaryCta = { label: 'Book a Free Call', href: '/contact' },
}) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-nova-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="glass-strong gradient-border rounded-3xl p-10 md:p-16">
            <motion.div variants={fadeUp}>
              <span className="section-label mb-6 inline-flex">
                <Zap size={10} className="fill-nova-400 text-nova-400" />
                Let's Work Together
              </span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="section-title mb-5 max-w-2xl mx-auto">
              {title}
            </motion.h2>

            <motion.p variants={fadeUp} className="section-subtitle mx-auto mb-8">
              {subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
              <Link to={primaryCta.href} className="btn-primary px-7 py-3.5">
                <Zap size={14} />
                {primaryCta.label}
                <ArrowRight size={14} />
              </Link>
              <Link to={secondaryCta.href} className="btn-secondary px-7 py-3.5">
                <CalendarCheck size={14} />
                {secondaryCta.label}
              </Link>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 text-white/25 text-xs font-mono">
              Free strategy call · No commitment · Results guaranteed
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}