import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { fadeUp } from '../animations/variants'

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      variants={fadeUp}
      className="glass gradient-border rounded-2xl p-6 card-hover relative overflow-hidden group"
    >
      {/* Quote icon */}
      <Quote size={32} className="absolute top-4 right-4 text-nova-500/10 group-hover:text-nova-500/20 transition-colors duration-300" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
        ))}
      </div>

      <p className="text-white/65 text-sm leading-relaxed mb-5 relative z-10">
        "{testimonial.content}"
      </p>

      {/* Result badge */}
      <div className="inline-block px-3 py-1 rounded-full bg-nova-500/10 border border-nova-500/20 mb-5">
        <span className="text-nova-400 text-xs font-mono font-medium">{testimonial.result}</span>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full ring-2 ring-white/10 object-cover"
        />
        <div>
          <p className="text-white font-display font-semibold text-sm">{testimonial.name}</p>
          <p className="text-white/35 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}