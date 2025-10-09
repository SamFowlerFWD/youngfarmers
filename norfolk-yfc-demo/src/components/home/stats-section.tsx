"use client";

import { motion } from "framer-motion";
import { Users, Building2, Award, Calendar } from "lucide-react";

export function StatsSection() {
  const stats = [
    { icon: Users, value: "500+", label: "Active Members" },
    { icon: Building2, value: "10", label: "Senior Clubs" },
    { icon: Award, value: "6", label: "Countrysider Groups" },
    { icon: Calendar, value: "75+", label: "Years of Heritage" },
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <stat.icon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
