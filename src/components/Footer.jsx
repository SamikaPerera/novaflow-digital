import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, ArrowUpRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '../animations/variants'

// Social icons as SVGs (lucide-react version compatibility fix)
const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
)
const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
)
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
)
const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
)

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '/services' },
    { label: 'AI Automations', href: '/services' },
    { label: 'SEO Strategy', href: '/services' },
    { label: 'Content Creation', href: '/services' },
    { label: 'Maintenance', href: '/services' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

const socials = [
  { Icon: TwitterIcon, href: '#', label: 'Twitter' },
  { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
  { Icon: GithubIcon, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-nova-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14"
        >
          <motion.div variants={fadeUp} className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-nova-500 to-cyan-500 flex items-center justify-center">
                <Zap size={16} className="text-white fill-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Nova<span className="gradient-text">Flow</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              AI-powered digital agency building the next generation of high-performance brands and automated businesses.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/40 hover:text-white transition-colors duration-200 hover:bg-white/[0.08]"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={fadeUp}>
              <h4 className="font-display font-semibold text-sm text-white/90 mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.05]">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} NovaFlow Digital. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            Crafted with precision ✦ Powered by AI
          </p>
        </div>
      </div>
    </footer>
  )
}