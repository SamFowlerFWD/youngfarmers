"use client";

import { Article } from "@/lib/news-data";
import { NewsCard } from "./news-card";
import { motion } from "framer-motion";
import { FileQuestion } from "lucide-react";

interface NewsGridProps {
  articles: Article[];
  showLoadMore?: boolean;
  onLoadMore?: () => void;
  isLoading?: boolean;
}

export function NewsGrid({ articles, showLoadMore = false, onLoadMore, isLoading = false }: NewsGridProps) {
  if (articles.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <FileQuestion className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
          <h3 className="text-2xl font-bold mb-2">No articles found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter to find what you&apos;re looking for.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

      {showLoadMore && onLoadMore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <button
            onClick={onLoadMore}
            disabled={isLoading}
            className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Loading...' : 'Load More Articles'}
          </button>
          <p className="text-sm text-muted-foreground mt-4">
            Showing {articles.length} articles
          </p>
        </motion.div>
      )}
    </section>
  );
}
