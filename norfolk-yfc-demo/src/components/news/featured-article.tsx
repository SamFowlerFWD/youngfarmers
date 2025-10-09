"use client";

import { Article } from "@/lib/news-data";
import { NewsCard } from "./news-card";
import { motion } from "framer-motion";

interface FeaturedArticleProps {
  article: Article;
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <div className="h-1 w-12 bg-primary" />
          <h2 className="text-2xl font-bold">Featured Story</h2>
        </div>
        <NewsCard article={article} variant="featured" priority />
      </motion.div>
    </section>
  );
}
