"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArticleCategory, getCategoryCounts } from "@/lib/news-data";

interface NewsCategoryFilterProps {
  selectedCategory: ArticleCategory | 'all';
  onCategoryChange: (category: ArticleCategory | 'all') => void;
}

const categories: { value: ArticleCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All News' },
  { value: 'events', label: 'Events' },
  { value: 'achievements', label: 'Achievements' },
  { value: 'member-stories', label: 'Member Stories' },
  { value: 'community', label: 'Community' },
  { value: 'competitions', label: 'Competitions' },
];

export function NewsCategoryFilter({ selectedCategory, onCategoryChange }: NewsCategoryFilterProps) {
  const counts = getCategoryCounts();

  return (
    <section className="border-b bg-white sticky top-20 z-40 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category, index) => {
            const isActive = selectedCategory === category.value;
            const count = counts[category.value] || 0;

            return (
              <motion.button
                key={category.value}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => onCategoryChange(category.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  "hover:scale-105 active:scale-95",
                  isActive
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {category.label}
                <span className={cn(
                  "ml-2 px-2 py-0.5 rounded-full text-xs",
                  isActive ? "bg-white/20" : "bg-background"
                )}>
                  {count}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
