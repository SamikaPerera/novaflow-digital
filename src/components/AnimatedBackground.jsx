import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Primary orb */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Secondary orb */}
      <motion.div
        className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Tertiary orb */}
      <motion.div
        className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -30, 10, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  )
}