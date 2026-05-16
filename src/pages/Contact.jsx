import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Mail, MapPin, Send, Twitter, Linkedin, Instagram } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { fadeLeft, fadeRight, staggerContainer } from '../animations/variants'

// 🔑 PASTE YOUR KEYS HERE
const EMAILJS_SERVICE_ID = 'service_xzbh7j6'
const EMAILJS_TEMPLATE_ID = 'template_r4evmcp'
const EMAILJS_PUBLIC_KEY = 'ThFSkIurfTuOir9dj'

const servicesList = [
  'Website Development', 'AI Automations', 'SEO Strategy',
  'Content Creation', 'Website Maintenance', 'Full Package', 'Other',
]

const budgetList = [
  'Under $2,000', '$2,000 to $5,000', '$5,000 to $10,000',
  '$10,000 to $25,000', '$25,000+',
]

const contactInfo = [
  { Icon: Mail, label: 'Email', value: 'novaflowbuild@gmail.com', href: 'mailto:novaflowbuild@gmail.com' },
  { Icon: MapPin, label: 'Location', value: 'Remote · Worldwide', href: '#' },
]

const socialLinks = [
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', service: '', budget: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'Not provided',
          service: formData.service,
          budget: formData.budget || 'Not specified',
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-28">
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={{hidden:{opacity:0,y:30},visible:{opacity:1,y:0}}} className="section-label mb-5 inline-flex">
              <Zap size={10} className="fill-nova-400 text-nova-400" />
              Contact
            </motion.span>
            <motion.h1 variants={{hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{delay:0.1}}}} className="section-title mb-5 max-w-2xl mx-auto">
              Let's Build Something <span className="gradient-text">Great Together</span>
            </motion.h1>
            <motion.p variants={{hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{delay:0.2}}}} className="section-subtitle mx-auto">
              Tell us about your project. We will get back to you within 24 hours with a tailored strategy and quote.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {contactInfo.map(({ Icon, label, value, href }) => (
                <a key={label} href={href}
                  className="flex items-center gap-4 glass gradient-border rounded-xl p-4 group hover:bg-white/[0.04] transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-nova-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-nova-400" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs mb-0.5">{label}</p>
                    <p className="text-white/80 text-sm group-hover:text-white transition-colors">{value}</p>
                  </div>
                </a>
              ))}

              <div className="glass gradient-border rounded-xl p-5">
                <p className="text-white/40 text-xs font-mono mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map(({ Icon, href, label }) => (
                    <a key={label} href={href} aria-label={label}
                      className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass gradient-border rounded-xl overflow-hidden h-52 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-nova-950 to-[#060612] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="text-nova-500/40 mx-auto mb-2" />
                    <p className="text-white/25 text-xs font-mono">Remote · Worldwide</p>
                    <p className="text-white/15 text-xs">Working across all time zones</p>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-strong gradient-border rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-nova-500/20 flex items-center justify-center mx-auto mb-5">
                    <Zap size={28} className="text-nova-400" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">Message Sent! 🎉</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                    Thanks for reaching out. We will review your project details and respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <div className="glass-strong gradient-border rounded-2xl p-7">
                  <h3 className="font-display font-bold text-lg text-white mb-6">Tell Us About Your Project</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/50 text-xs font-mono mb-1.5">Full Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange}
                          placeholder="Alex Johnson" required
                          className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 border border-white/[0.08] focus:border-nova-500/50 focus:outline-none transition-colors duration-200" />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs font-mono mb-1.5">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange}
                          placeholder="alex@company.com" required
                          className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 border border-white/[0.08] focus:border-nova-500/50 focus:outline-none transition-colors duration-200" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs font-mono mb-1.5">Company</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange}
                        placeholder="Your Company (optional)"
                        className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 border border-white/[0.08] focus:border-nova-500/50 focus:outline-none transition-colors duration-200" />
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs font-mono mb-1.5">Service Interested In</label>
                      <select name="service" value={formData.service} onChange={handleChange} required
                        className="w-full glass rounded-xl px-4 py-3 text-sm text-white/70 border border-white/[0.08] focus:border-nova-500/50 focus:outline-none transition-colors duration-200 bg-transparent appearance-none cursor-pointer">
                        <option value="" disabled className="bg-[#0d0d1f]">Select a service...</option>
                        {servicesList.map(s => <option key={s} value={s} className="bg-[#0d0d1f]">{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs font-mono mb-1.5">Budget Range</label>
                      <select name="budget" value={formData.budget} onChange={handleChange}
                        className="w-full glass rounded-xl px-4 py-3 text-sm text-white/70 border border-white/[0.08] focus:border-nova-500/50 focus:outline-none transition-colors duration-200 bg-transparent appearance-none cursor-pointer">
                        <option value="" disabled className="bg-[#0d0d1f]">Select budget...</option>
                        {budgetList.map(b => <option key={b} value={b} className="bg-[#0d0d1f]">{b}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs font-mono mb-1.5">Tell Us More</label>
                      <textarea name="message" value={formData.message} onChange={handleChange}
                        placeholder="Describe your project, goals, and timeline..." required rows={5}
                        className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 border border-white/[0.08] focus:border-nova-500/50 focus:outline-none transition-colors duration-200 resize-none" />
                    </div>

                    {error && (
                      <p className="text-red-400 text-xs text-center bg-red-500/10 border border-red-500/20 rounded-xl py-2 px-4">
                        {error}
                      </p>
                    )}

                    <button type="submit" disabled={loading}
                      className="btn-primary w-full justify-center py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={14} />
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                    <p className="text-white/20 text-xs text-center">We typically respond within 24 hours · No spam, ever</p>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}