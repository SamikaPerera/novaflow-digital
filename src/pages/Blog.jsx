import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Search, Clock, ArrowRight, Tag, ChevronDown, X } from 'lucide-react'
import { blogPosts, blogCategories } from '../data/blog'
import CTASection from '../components/CTASection'
import { fadeUp, staggerContainer } from '../animations/variants'
import emailjs from '@emailjs/browser'

const fullContent = {
  1: `AI automation isn't the future — it's the present. Agencies that don't build automation into their core stack are already falling behind. Here's the exact stack we use at NovaFlow:\n\n**1. Lead Capture & Qualification**\nWe use n8n to connect our contact forms directly to an AI qualifier that scores leads based on budget, timeline, and fit. Only hot leads hit our CRM.\n\n**2. Content Generation Pipeline**\nClaude handles first drafts. A human editor refines. We produce 10x the content at 30% of the cost.\n\n**3. Client Reporting Automation**\nMonthly reports generate themselves — pulling data from GA4, Search Console, and our project tools into a branded PDF.\n\n**4. Email Nurture Sequences**\nAI-personalized follow-ups go out automatically based on what a lead clicked or downloaded. Open rates are up 40%.\n\nThe result? Our team of 6 outputs what a 25-person agency used to do. Start with one workflow, prove the ROI, then expand.`,

  2: `We audited 200 agency websites across different niches. The same mistakes keep showing up:\n\n**Mistake #1: No clear above-the-fold value proposition**\nVisitors decide in 3 seconds. If your headline is your agency name, you've already lost them.\n\n**Mistake #2: Portfolio without results**\nShowing a pretty website means nothing. Show the before/after metrics. Conversions up 47%. Leads up 3x. That's what clients buy.\n\n**Mistake #3: Generic CTAs**\n"Contact Us" converts at 1%. "Get Your Free Website Audit" converts at 8%. Be specific about what happens next.\n\n**Mistake #4: No social proof above the fold**\nTestimonials buried at the bottom might as well not exist. Put your strongest quote right at the top.\n\n**The Fix**\nRewrite your hero with a specific outcome. Add a result-focused case study. Change every CTA to describe the next step. These three changes alone can double your conversion rate.`,

  3: `SEO is a compounding asset. The agencies that win treat it like a long-term investment, not a monthly checkbox.\n\n**Month 1-3: Technical Foundation**\nFix crawl errors, improve Core Web Vitals, set up proper schema markup. Without this, nothing else works.\n\n**Month 3-6: Keyword Architecture**\nMap keywords to intent — informational, commercial, transactional. Build topic clusters, not isolated pages.\n\n**Month 6-12: Content Velocity**\nPublish 3-4 pieces per week. Use AI for drafts, humans for editing and unique insights. Internal linking is everything.\n\n**Month 12-14: Authority Building**\nGuest posts, digital PR, and linkable assets. One great study or tool can earn 200+ backlinks.\n\nThe client we took from 0 to 800K monthly visitors started with zero domain authority. Consistency and compounding did the work.`,

  4: `Building a GPT lead qualification agent sounds complex. Here's how we actually did it in 2 weeks:\n\n**Step 1: Define Qualification Criteria**\nWe worked with the sales team to identify what makes a lead "hot" — budget over $5K, timeline under 3 months, decision-maker contact.\n\n**Step 2: Build the Intake Form**\nA simple Typeform with 6 questions. Each answer feeds into our scoring model.\n\n**Step 3: Connect to GPT via n8n**\nThe form submission triggers an n8n workflow. GPT analyzes the answers and returns a score from 1-10 with reasoning.\n\n**Step 4: Route Based on Score**\n8-10: Immediate Slack alert to sales. 5-7: Automated nurture email. Under 5: Added to newsletter list.\n\n**Results after 90 days:**\n- 500 leads processed per day\n- 91% qualification accuracy vs human review\n- Sales team saves 3 hours per day\n\nThe whole system cost $400 to build and runs for $50/month.`,

  5: `Every high-converting landing page uses the same psychological principles. Here's what we embed in every build:\n\n**1. The Pattern Interrupt**\nYour hero needs to stop the scroll. Unexpected visuals, bold claims, or a contrarian statement all work. Boring headlines kill conversion.\n\n**2. The Value Ladder**\nGuide visitors from awareness → interest → desire → action. Each section should answer the question forming in their head.\n\n**3. Social Proof Placement**\nTestimonials work best directly after you make a claim. Claim → Proof → Next Claim. Never save all proof for the end.\n\n**4. Friction Reduction**\nEvery extra field in a form costs 10% conversion. Every extra click costs 20%. Ruthlessly cut everything that isn't essential.\n\n**5. The Risk Reversal**\nGuarantees, free trials, and "cancel anytime" messaging remove the final barrier. If you believe in your product, remove their risk.\n\nImplement these five principles and you'll outperform 94% of landing pages without changing a single design element.`,

  6: `Going from 4 to 60 pieces of content per week sounds impossible. Here's exactly how we restructured our process:\n\n**The Old Process (4 pieces/week)**\nWriter researches topic → writes draft → editor reviews → designer creates graphics → publish. 3-4 days per piece.\n\n**The New Process (60 pieces/week)**\n1. AI generates 20 topic ideas based on keyword gaps\n2. We pick the best 12\n3. AI writes first drafts (30 min each)\n4. Human editor refines voice and adds unique insights (45 min each)\n5. AI generates social variations from each post\n6. Canva templates auto-populate for graphics\n\n**The Key Insight**\nAI handles the structure and research. Humans add the experience, opinions, and brand voice. Neither alone produces great content — together they're unstoppable.\n\n**Results:**\n- Content output: 15x increase\n- Quality scores: maintained or improved\n- Cost per piece: reduced by 60%\n- Organic traffic: up 340% in 6 months`,
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedId, setExpandedId] = useState(null)
  const [expandedFeatured, setExpandedFeatured] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('') // 'loading' | 'success' | 'error'

const handleSubscribe = async () => {
  if (!newsletterEmail) return
  setNewsletterStatus('loading')
  try {
await emailjs.send(
  'service_xzbh7j6',
  'template_e9u8jyn',
  { subscriber_email: newsletterEmail },
  'ThFSklurfTuOir9dj'
)
    setNewsletterStatus('success')
    setNewsletterEmail('')
  } catch (err) {
    console.log('EmailJS Error:', err) // this will show the exact error
    setNewsletterStatus('error')
  }
}

  const featured = blogPosts.find(p => p.featured)
  const regular = blogPosts.filter(p => !p.featured)

  const filtered = (activeCategory === 'All' ? regular : regular.filter(p => p.category === activeCategory))
    .filter(p =>
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeUp} className="section-label mb-5 inline-flex">
              <Zap size={10} className="fill-nova-400 text-nova-400" />
              The Blog
            </motion.span>
            <motion.h1 variants={fadeUp} className="section-title mb-5 max-w-3xl mx-auto">
              Insights on AI, Growth,<br />
              <span className="gradient-text">and Digital Excellence</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="section-subtitle mx-auto">
              Actionable strategies from the team building the internet's most effective digital brands.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass gradient-border rounded-3xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 group cursor-pointer" onClick={() => setExpandedFeatured(!expandedFeatured)}>
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#060612] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 section-label text-[10px] px-2 py-1">Featured</span>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-nova-500/10 border border-nova-500/20 text-nova-400 text-xs font-mono">{featured.category}</span>
                    <span className="text-white/30 text-xs flex items-center gap-1"><Clock size={10} /> {featured.readTime}</span>
                  </div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4 leading-tight">{featured.title}</h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={featured.authorAvatar} alt={featured.author} className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="text-white/80 text-xs font-medium">{featured.author}</p>
                        <p className="text-white/30 text-xs">{featured.date}</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-1.5 text-nova-400 text-xs font-medium hover:text-nova-300 transition-colors">
                      {expandedFeatured ? 'Close' : 'Read Article'}
                      <ChevronDown size={13} className={`transition-transform duration-300 ${expandedFeatured ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded content for featured */}
              <AnimatePresence>
                {expandedFeatured && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 md:px-10 pb-10 border-t border-white/[0.06] pt-8">
                      {fullContent[featured.id].split('\n\n').map((para, i) => (
                        <p key={i} className={`text-white/60 text-sm leading-relaxed mb-4 ${para.startsWith('**') ? 'text-white font-semibold' : ''}`}>
                          {para.replace(/\*\*/g, '')}
                        </p>
                      ))}
                      <div className="flex flex-wrap gap-1.5 mt-6">
                        {featured.tags.map(tag => (
                          <span key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/[0.04] text-white/30 text-[10px] font-mono">
                            <Tag size={8} />{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      )}

      {/* Search + Filter */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full glass rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-white/25 border border-white/[0.08] focus:border-nova-500/40 focus:outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {blogCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    activeCategory === cat ? 'bg-nova-500 text-white' : 'glass text-white/40 hover:text-white hover:bg-white/[0.07]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/30 font-mono text-sm">No articles found for "{searchQuery}"</p>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map(post => (
                <motion.div
                  key={post.id}
                  variants={fadeUp}
                  className="glass gradient-border rounded-2xl overflow-hidden card-hover"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060612] to-transparent opacity-60" />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-nova-500/10 border border-nova-500/20 text-nova-400 text-[10px] font-mono">{post.category}</span>
                      <span className="text-white/25 text-[10px] flex items-center gap-1"><Clock size={9} /> {post.readTime}</span>
                    </div>

                    <h3 className="font-display font-bold text-white text-sm leading-snug mb-2">{post.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map(tag => (
                        <span key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/[0.04] text-white/30 text-[10px] font-mono">
                          <Tag size={8} />{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-white/[0.05] pt-4">
                      <div className="flex items-center gap-2">
                        <img src={post.authorAvatar} alt={post.author} className="w-6 h-6 rounded-full" />
                        <div>
                          <p className="text-white/60 text-[10px] font-medium">{post.author}</p>
                          <p className="text-white/25 text-[10px]">{post.date}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setExpandedId(expandedId === post.id ? null : post.id)}
                        className="text-nova-400 text-[10px] flex items-center gap-1 hover:text-nova-300 transition-colors"
                      >
                        {expandedId === post.id ? 'Close' : 'Read'}
                        <ChevronDown size={10} className={`transition-transform duration-300 ${expandedId === post.id ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {expandedId === post.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-white/[0.06] mt-4">
                            {fullContent[post.id].split('\n\n').map((para, i) => (
                              <p key={i} className={`text-xs leading-relaxed mb-3 ${para.startsWith('**') ? 'text-white/80 font-semibold' : 'text-white/45'}`}>
                                {para.replace(/\*\*/g, '')}
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

{/* Newsletter */}
      <section className="pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong gradient-border rounded-2xl p-8 text-center"
          >
            <span className="section-label mb-4 inline-flex">
              <Zap size={10} className="fill-nova-400 text-nova-400" />
              Newsletter
            </span>
            <h3 className="font-display font-bold text-xl text-white mb-2">Get Insights in Your Inbox</h3>
            <p className="text-white/40 text-sm mb-6">Weekly strategies on AI, growth, and digital excellence. No fluff.</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                className="flex-1 glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 border border-white/[0.08] focus:border-nova-500/40 focus:outline-none"
              />
              <button
                onClick={handleSubscribe}
                disabled={newsletterStatus === 'loading'}
                className="btn-primary text-xs py-3 px-5 whitespace-nowrap disabled:opacity-50"
              >
                {newsletterStatus === 'loading' ? 'Sending...' : 'Subscribe'}
              </button>
            </div>
            {newsletterStatus === 'success' && (
              <p className="text-nova-400 text-xs mt-3">✓ You're subscribed! Welcome aboard.</p>
            )}
            {newsletterStatus === 'error' && (
              <p className="text-red-400 text-xs mt-3">Something went wrong. Please try again.</p>
            )}
            <p className="text-white/20 text-xs mt-3">No spam · Unsubscribe anytime</p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}