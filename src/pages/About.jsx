import { motion } from 'framer-motion'
import { Twitter, LinkedinIcon as Linkedin, Zap } from 'lucide-react'
import CTASection from '../components/CTASection'
import { team, stats, timeline } from '../data/team'
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from '../animations/variants'

const socialIconMap = { twitter: Twitter, linkedin: Linkedin }

export default function About() {
  return (
    <div className="pt-28">
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div variants={fadeLeft} initial="hidden" animate="visible">
              <span className="section-label mb-5 inline-flex">
                <Zap size={10} className="fill-nova-400 text-nova-400" />
                About NovaFlow
              </span>
              <h1 className="section-title mb-5">
                We Exist to Make<br />
                <span className="gradient-text">Digital Growth Simple</span>
              </h1>
              <p className="text-white/50 leading-relaxed mb-5">
                NovaFlow Digital was born from frustration with agencies that delivered beautiful work with no measurable outcomes. We set out to build something different — an AI-first agency where strategy and execution are inseparable.
              </p>
              <p className="text-white/50 leading-relaxed">
                Today we are a team of designers, developers, AI engineers, and growth strategists serving ambitious companies globally. Our north star is simple: every dollar you invest with us should generate multiple in return.
              </p>
            </motion.div>

            <motion.div variants={fadeRight} initial="hidden" animate="visible" className="grid grid-cols-2 gap-4">
              {stats.map(stat => (
                <div key={stat.label} className="glass gradient-border rounded-2xl p-6 text-center">
                  <p className="font-display font-bold text-4xl gradient-text mb-2">{stat.value}</p>
                  <p className="text-white/40 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                label: 'Our Mission',
                title: 'Democratize AI-Powered Growth',
                body: 'We believe every ambitious business deserves access to AI-powered digital systems once reserved for Fortune 500 companies. We package enterprise-grade technology into accessible, results-focused services.',
              },
              {
                label: 'Our Vision',
                title: 'The Most Trusted Digital Growth Partner',
                body: 'To be the agency that 10,000 market-leading companies trust to build and automate their digital businesses. A world where every brand has an intelligent growth engine working for them 24/7.',
              },
            ].map(item => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-strong gradient-border rounded-2xl p-8"
              >
                <span className="section-label mb-4 inline-flex">{item.label}</span>
                <h3 className="font-display font-bold text-xl text-white mb-4">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.span variants={fadeUp} className="section-label mb-4 inline-flex">
              <Zap size={10} className="fill-nova-400 text-nova-400" />
              The Team
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title mb-4">Meet the Builders</motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mx-auto">A small team of specialists with a singular obsession: your growth.</motion.p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(member => (
              <motion.div key={member.id} variants={fadeUp} className="glass gradient-border rounded-2xl p-6 text-center card-hover group">
                <div className="relative inline-block mb-4">
                  <img src={member.avatar} alt={member.name} className="w-20 h-20 rounded-2xl object-cover ring-2 ring-white/10 group-hover:ring-nova-500/30 transition-all duration-300" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-[#060612]" />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-1">{member.name}</h3>
                <p className="text-nova-400 text-xs font-mono mb-3">{member.role}</p>
                <p className="text-white/40 text-xs leading-relaxed mb-4">{member.bio}</p>
                <div className="flex items-center justify-center gap-2">
                  {Object.entries(member.socials).map(([platform, href]) => {
                    const SocialIcon = socialIconMap[platform] || Twitter
                    return (
                      <a
                        key={platform}
                        href={href}
                        className="w-7 h-7 rounded-lg bg-white/[0.05] flex items-center justify-center text-white/30 hover:text-white transition-colors duration-200"
                      >
                        <SocialIcon size={12} />
                      </a>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.span variants={fadeUp} className="section-label mb-4 inline-flex">
              <Zap size={10} className="fill-nova-400 text-nova-400" />
              Our Journey
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title mb-4">
              From Idea to <span className="gradient-text">Industry Leader</span>
            </motion.h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-nova-500/30 via-nova-500/10 to-transparent" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 pl-16 relative"
                >
                  <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-nova-500/30 border-2 border-nova-500" />
                  <div className="glass gradient-border rounded-xl p-5 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-nova-400 text-xs font-bold">{item.year}</span>
                      <h3 className="font-display font-bold text-white text-sm">{item.title}</h3>
                    </div>
                    <p className="text-white/45 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}