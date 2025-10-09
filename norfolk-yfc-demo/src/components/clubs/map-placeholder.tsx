'use client';

import { motion } from 'framer-motion';
import { Map, MapPin, Sparkles } from 'lucide-react';

export function MapPlaceholder() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Interactive Map
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore club locations across Norfolk and find the one nearest to you
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="relative bg-gradient-to-br from-[#2B9348]/5 via-muted/50 to-[#1E88E5]/5 rounded-2xl border-2 border-dashed border-border overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232B9348' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <div className="relative py-24 px-6 md:py-32 md:px-12">
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2,
                  }}
                  className="relative"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-[#2B9348] to-[#1E88E5] rounded-2xl flex items-center justify-center shadow-xl">
                    <Map className="h-12 w-12 text-white" />
                  </div>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="absolute -top-2 -right-2 bg-[#F4C430] rounded-full p-2 shadow-lg"
                  >
                    <Sparkles className="h-5 w-5 text-white" />
                  </motion.div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="space-y-3"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Coming Soon in Phase 5
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground max-w-lg">
                    Interactive map showing all 16 club locations across Norfolk with detailed information and directions
                  </p>
                </motion.div>

                {/* Feature List */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-3xl w-full"
                >
                  {[
                    'View all club locations',
                    'Get directions instantly',
                    'Filter by club type',
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-border"
                    >
                      <MapPin className="h-5 w-5 text-[#2B9348] flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </motion.div>

                {/* Mock Map Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 relative w-full max-w-2xl aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-xl border border-border overflow-hidden"
                >
                  {/* Simplified Norfolk Map Outline */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <svg
                      viewBox="0 0 400 300"
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100,150 L150,100 L250,120 L350,80 L380,140 L350,200 L280,250 L180,270 L100,240 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-[#2B9348]"
                      />
                    </svg>
                  </div>

                  {/* Mock Map Pins */}
                  <div className="absolute inset-0">
                    {[
                      { top: '30%', left: '40%', delay: 0.6 },
                      { top: '45%', left: '60%', delay: 0.65 },
                      { top: '60%', left: '35%', delay: 0.7 },
                      { top: '25%', left: '70%', delay: 0.75 },
                      { top: '70%', left: '55%', delay: 0.8 },
                    ].map((pin, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: pin.delay,
                          type: 'spring',
                          stiffness: 200,
                        }}
                        className="absolute"
                        style={{ top: pin.top, left: pin.left }}
                      >
                        <MapPin className="h-8 w-8 text-[#2B9348] drop-shadow-lg" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
