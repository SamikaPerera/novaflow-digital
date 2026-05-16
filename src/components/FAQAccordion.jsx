import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

export default function FAQAccordion({ faqs }) {
  const [openId, setOpenId] = useState(null)

  return (
    <div className="space-y-3">
      {faqs.map(faq => (
        <div
          key={faq.id}
          className={`glass gradient-border rounded-xl overflow-hidden transition-all duration-300 ${
            openId === faq.id ? 'bg-white/[0.05]' : ''
          }`}
        >
          <button
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
          >
            <span className={`font-display font-medium text-sm transition-colors duration-200 ${
              openId === faq.id ? 'text-white' : 'text-white/70'
            }`}>
              {faq.question}
            </span>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
              openId === faq.id ? 'bg-nova-500 text-white' : 'bg-white/10 text-white/50'
            }`}>
              {openId === faq.id ? <Minus size={12} /> : <Plus size={12} />}
            </div>
          </button>

          <AnimatePresence>
            {openId === faq.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="px-5 pb-5 text-sm text-white/50 leading-relaxed border-t border-white/[0.05] pt-4">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}