"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

interface NewsHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function NewsHero({ searchQuery, onSearchChange }: NewsHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-blue-500/10 to-yellow-500/10 py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-yellow-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            News & Stories
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Stay updated with the latest from Norfolk YFC - events, achievements, member stories, and community updates
          </p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-xl mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search news articles..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-12 h-14 text-base bg-white/80 backdrop-blur border-2 focus-visible:ring-2 focus-visible:ring-primary"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
