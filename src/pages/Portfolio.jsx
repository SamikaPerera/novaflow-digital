import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap } from 'lucide-react'
import PortfolioCard from '../components/PortfolioCard'
import CTASection from '../components/CTASection'
import { portfolioItems, portfolioCategories } from '../data/portfolio'
import { fadeUp, staggerContainer, scaleIn } from '../animations/variants'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeUp} className="section-label mb-5 inline-flex">
              <Zap size={10} className="fill-nova-400 text-nova-400" />
              Our Work
            </motion.span>
            <motion.h1 variants={fadeUp} className="section-title mb-5 max-w-3xl mx-auto">
              Projects We're{' '}
              <span className="gradient-text">Proud Of</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="section-subtitle mx-auto">
              Every project below represents a measurable business outcome. Not just
              beautiful design — real, documented results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="glass gradient-border rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '150+', label: 'Projects Completed' },
              { value: '$24M+', label: 'Revenue Generated' },
              { value: '22', label: 'Countries Served' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="font-display font-bold text-3xl gradient-text">{stat.value}</p>
                <p className="text-white/40 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {portfolioCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-nova-500 text-white shadow-lg shadow-nova-500/30'
                    : 'glass text-white/50 hover:text-white hover:bg-white/[0.07]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map(item => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTASection
        title="Ready to Be Our Next Success Story?"
        subtitle="Let's build something that makes it into this portfolio."
      />
    </div>
  )
}