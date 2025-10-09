"use client";

import { motion } from "framer-motion";
import { Article } from "@/lib/news-data";
import { NewsCard } from "./news-card";

interface RelatedArticlesProps {
  articles: Article[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="py-12 border-t">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-8">
          <div className="h-1 w-12 bg-primary" />
          <h2 className="text-3xl font-bold">Related Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NewsCard article={article} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
