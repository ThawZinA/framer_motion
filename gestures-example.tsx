import React from 'react'
import { motion } from 'framer-motion'

export default function GesturesExample() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <h1 className="col-span-full text-4xl font-bold text-white text-center mb-8">Gesture Animations</h1>
        
        {/* Hover animation */}
        <div className="text-center space-y-4">
          <h3 className="text-xl text-white font-semibold">Hover Effects</h3>
          <motion.div
            className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl mx-auto cursor-pointer"
            whileHover={{
              scale: 1.2,
              rotate: 10,
              borderRadius: "50%"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
        
        {/* Tap animation */}
        <div className="text-center space-y-4">
          <h3 className="text-xl text-white font-semibold">Tap Effects</h3>
          <motion.div
            className="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl mx-auto cursor-pointer"
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "50%"
            }}
          />
        </div>
        
        {/* Drag animation */}
        <div className="text-center space-y-4">
          <h3 className="text-xl text-white font-semibold">Drag</h3>
          <motion.div
            className="w-32 h-32 bg-gradient-to-r from-pink-400 to-red-500 rounded-2xl mx-auto cursor-grab active:cursor-grabbing"
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            whileDrag={{ scale: 1.2, rotate: 15 }}
          />
        </div>
        
        {/* Focus animation */}
        <div className="text-center space-y-4">
          <h3 className="text-xl text-white font-semibold">Focus</h3>
          <motion.input
            className="w-64 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none"
            placeholder="Click to focus"
            whileFocus={{
              scale: 1.05,
              borderColor: "#60a5fa",
              boxShadow: "0 0 20px rgba(96, 165, 250, 0.4)"
            }}
          />
        </div>
      </div>
    </div>
  )
}