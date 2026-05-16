import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, Check, ArrowRight } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import { services } from '../data/services'
import { fadeUp, staggerContainer } from '../animations/variants'

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We learn about your goals, audience, and current challenges in a focused 30-minute strategy session.' },
  { step: '02', title: 'Strategy & Proposal', desc: 'We deliver a custom growth plan with clear deliverables, timelines, and projected outcomes.' },
  { step: '03', title: 'Build & Launch', desc: 'Our team executes with precision — iterating with your feedback at every milestone.' },
  { step: '04', title: 'Optimize & Scale', desc: 'Post-launch we monitor, optimize, and evolve your digital assets for compounding results.' },
]

export default function Services() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={fadeUp} className="section-label mb-5 inline-flex">
              <Zap size={10} className="fill-nova-400 text-nova-400" />
              Our Services
            </motion.span>
            <motion.h1 variants={fadeUp} className="section-title mb-5 max-w-3xl mx-auto">
              Everything You Need to{' '}
              <span className="gradient-text">Win Online</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="section-subtitle mx-auto">
              From high-converting websites to intelligent AI automations — we deliver the complete
              digital growth stack for businesses that refuse to settle.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="section-label mb-4 inline-flex">
              <Zap size={10} className="fill-nova-400 text-nova-400" />
              Our Process
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title mb-4">
              How We Work
            </motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mx-auto">
              A streamlined, transparent process from first call to launch — and beyond.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="relative glass gradient-border rounded-2xl p-6"
              >
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 w-6 h-px bg-gradient-to-r from-nova-500/30 to-transparent z-10" />
                )}
                <div className="w-10 h-10 rounded-xl bg-nova-500/10 flex items-center justify-center mb-4">
                  <span className="font-mono text-nova-400 text-sm font-bold">{item.step}</span>
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="glass-strong gradient-border rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label mb-5 inline-flex">
                <Zap size={10} className="fill-nova-400 text-nova-400" />
                Why NovaFlow
              </span>
              <h2 className="section-title mb-5">
                Built for Results, <br />
                <span className="gradient-text">Not Just Deliverables</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-7">
                Most agencies deliver websites. We deliver growth systems. Every project
                is measured by one thing: your ROI. Our team of specialists brings
                startup energy with enterprise execution.
              </p>
              <Link to="/contact" className="btn-primary inline-flex">
                Book a Free Strategy Call
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                'AI-first approach to every project',
                'Dedicated account manager & Slack channel',
                'Weekly progress reports, no surprises',
                'Results-based pricing on select projects',
                'Proprietary CRO framework built on 150+ projects',
                'Post-launch optimization included',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-nova-500/20 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-nova-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/65 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}