import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, HelpCircle } from 'lucide-react'
import PricingCard from '../components/PricingCard'
import FAQAccordion from '../components/FAQAccordion'
import CTASection from '../components/CTASection'
import { pricingPlans, addons } from '../data/pricing'
import { faqs } from '../data/faq'
import { fadeUp, staggerContainer } from '../animations/variants'

export default function Pricing() {
  const [currency, setCurrency] = useState('USD')

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeUp} className="section-label mb-5 inline-flex">
              <Zap size={10} className="fill-nova-400 text-nova-400" />
              Pricing
            </motion.span>
            <motion.h1 variants={fadeUp} className="section-title mb-5 max-w-3xl mx-auto">
              Invest in Growth,<br />
              <span className="gradient-text">See the Returns</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="section-subtitle mx-auto">
              Every package is scoped to deliver measurable ROI. No retainer rabbit holes,
              no scope creep — just clear deliverables and real results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Currency Selector */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-3 glass gradient-border rounded-xl px-5 py-3">
              <span className="text-white/40 text-xs font-mono">Display prices in</span>
              <select
                value={currency}
                onChange={e => setCurrency(e.target.value)}
                className="bg-transparent text-nova-400 text-sm font-mono focus:outline-none cursor-pointer"
              >
                {['USD', 'NZD', 'AUD', 'GBP', 'EUR', 'CAD', 'SGD', 'INR'].map(c => (
                  <option key={c} value={c} className="bg-[#0d0d1f]">{c}</option>
                ))}
              </select>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 items-center"
          >
            {pricingPlans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} index={i} currency={currency} />
            ))}
          </motion.div>

          {/* Payment terms note */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white/25 text-xs font-mono mt-8"
          >
            All prices shown are estimates · 50% deposit required to begin · remaining 50% due on completion
          </motion.p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="font-display font-bold text-2xl text-white mb-2">Add-On Services</h2>
              <p className="text-white/40 text-sm">Extend any package with these optional extras.</p>
            </motion.div>
            <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-4">
              {addons.map(addon => (
                <motion.div
                  key={addon.name}
                  variants={fadeUp}
                  className="glass gradient-border rounded-xl flex items-center justify-between px-5 py-4"
                >
                  <span className="text-white/70 text-sm">{addon.name}</span>
                  <span className="text-nova-400 font-mono text-sm font-medium">{addon.price}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong gradient-border rounded-2xl p-8 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-nova-500/10 flex items-center justify-center mx-auto mb-4">
              <Zap size={24} className="text-nova-400" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-3">Our Commitment to You</h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-xl mx-auto">
              We work in milestones — 50% deposit to kick off, and the remaining 50% only once
              you're happy with the final result. Every project includes revision rounds so you
              get exactly what you envisioned. No risk, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 pb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-2xl text-white mb-2">Pricing FAQs</h2>
          </div>
          <FAQAccordion faqs={faqs.slice(0, 4)} />
        </div>
      </section>

      <CTASection
        title="Not Sure Which Plan Is Right?"
        subtitle="Book a free 30-minute strategy call and we'll recommend exactly what you need — no upselling."
      />
    </div>
  )
}