import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import useScrollTop from '../hooks/useScrollTop'

export default function FloatingContactButton() {
  const { showButton, scrollToTop } = useScrollTop()

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Back to top button */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass gradient-border flex items-center justify-center
              text-white/60 hover:text-white transition-colors duration-200
              hover:bg-white/[0.08] cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Contact button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <Link
          to="/contact"
          className="w-12 h-12 rounded-full flex items-center justify-center
            bg-gradient-to-br from-nova-600 to-nova-500
            shadow-lg shadow-nova-500/30
            hover:shadow-nova-500/50 hover:scale-110
            transition-all duration-300 cursor-pointer"
          aria-label="Contact us"
        >
          <MessageSquare size={18} className="text-white" />
        </Link>
      </motion.div>
    </div>
  )
}