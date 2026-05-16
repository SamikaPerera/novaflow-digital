import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, TrendingUp, Shield, Clock } from 'lucide-react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import PortfolioCard from '../components/PortfolioCard'
import PricingCard from '../components/PricingCard'
import TestimonialCard from '../components/TestimonialCard'
import FAQAccordion from '../components/FAQAccordion'
import CTASection from '../components/CTASection'
import { services } from '../data/services'
import { portfolioItems } from '../data/portfolio'
import { pricingPlans } from '../data/pricing'
import { testimonials } from '../data/testimonials'
import { faqs } from '../data/faq'
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../animations/variants'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Trusted by */}
      <section className="py-12 border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-white/25 text-xs font-mono uppercase tracking-widest mb-8">
            Trusted by leading brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {['Nexus', 'Orbis', 'TerraFlow', 'Lumina', 'PulseAI', 'Zenith'].map(brand => (
              <span key={brand} className="font-display font-bold text-lg text-white/15 hover:text-white/35 transition-colors duration-300 cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-14"
          >
            <motion.div variants={fadeUp}>
              <span className="section-label mb-4 inline-flex">
                <Zap size={10} className="fill-nova-400 text-nova-400" />
                What We Do
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-title mb-4">
              Every Service You Need to{' '}
              <span className="gradient-text">Dominate Online</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mx-auto">
              From first impression to automated growth engine, NovaFlow delivers
              the full spectrum of modern digital services.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Showcase */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-nova-950/50 to-cyan-950/30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="section-label mb-5 inline-flex">
                <Zap size={10} className="fill-nova-400 text-nova-400" />
                AI Automation
              </span>
              <h2 className="section-title mb-5">
                Your Business Running<br />
                <span className="gradient-text">24/7 on Autopilot</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-7">
                We build intelligent automation systems that handle lead qualification,
                email nurturing, content generation, and customer support — all without
                human intervention. Your team focuses on what matters most.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: TrendingUp, text: 'Average 18 hours saved per week per team' },
                  { icon: Shield, text: '99.9% uptime with enterprise-grade reliability' },
                  { icon: Clock, text: 'Live in as little as 2 weeks' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-nova-500/10 flex items-center justify-center">
                      <Icon size={16} className="text-nova-400" />
                    </div>
                    <span className="text-white/60 text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <Link to="/services" className="btn-primary inline-flex">
                Explore AI Services
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* AI flow visualization */}
              <div className="glass-strong gradient-border rounded-2xl p-6 space-y-4">
                <p className="text-white/40 text-xs font-mono mb-2">Live automation pipeline</p>
                {[
                  { step: 'Lead Capture', status: 'active', count: '247 today' },
                  { step: 'AI Qualification', status: 'active', count: '231 qualified' },
                  { step: 'Personalized Email', status: 'active', count: '189 sent' },
                  { step: 'CRM Update', status: 'active', count: '189 updated' },
                  { step: 'Sales Alert', status: 'active', count: '42 hot leads' },
                ].map((item, i) => (
                  <div key={item.step} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-nova-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-nova-400 text-[10px] font-mono">{i + 1}</span>
                    </div>
                    <div className="flex-1 flex items-center justify-between glass rounded-lg px-3 py-2">
                      <span className="text-white/70 text-xs">{item.step}</span>
                      <span className="text-nova-400 text-xs font-mono">{item.count}</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                ))}
              </div>

              {/* Floating stat */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-strong gradient-border rounded-xl px-4 py-3"
              >
                <p className="text-white font-display font-bold text-xl">18hrs</p>
                <p className="text-white/40 text-xs">saved per week</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-5 mb-12"
          >
            <div>
              <motion.span variants={fadeUp} className="section-label mb-4 inline-flex">
                <Zap size={10} className="fill-nova-400 text-nova-400" />
                Our Work
              </motion.span>
              <motion.h2 variants={fadeUp} className="section-title">
                Projects That <span className="gradient-text">Speak Results</span>
              </motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Link to="/portfolio" className="btn-secondary text-xs py-2.5">
                View All Projects
                <ArrowRight size={13} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {portfolioItems.slice(0, 3).map(item => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-radial from-nova-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="section-label mb-4 inline-flex">
              <Zap size={10} className="fill-nova-400 text-nova-400" />
              Client Results
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title mb-4">
              Don't Take Our Word for It
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {testimonials.map(t => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24">
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
              Pricing
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title mb-4">
              Transparent Pricing, <span className="gradient-text">Real ROI</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mx-auto">
              Every package is designed to deliver measurable results. No vague retainers, no surprise fees.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 items-center"
          >
            {pricingPlans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="section-label mb-4 inline-flex">
              <Zap size={10} className="fill-nova-400 text-nova-400" />
              FAQs
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title mb-4">
              Answers to Your <span className="gradient-text">Top Questions</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FAQAccordion faqs={faqs} />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  )
}