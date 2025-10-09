"use client";

import { motion } from "framer-motion";
import { Article } from "@/lib/news-data";

interface ArticleContentProps {
  article: Article;
}

export function ArticleContent({ article }: ArticleContentProps) {
  // Split content into paragraphs
  const paragraphs = article.content.split('\n\n');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      {/* Featured Image Placeholder */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-blue-500/20 mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/20 text-9xl font-bold">
            {article.title.charAt(0)}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <p className="text-white text-sm">Featured image for: {article.title}</p>
        </div>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        {paragraphs.map((paragraph, index) => {
          // Check if paragraph looks like a quote (starts with a quote mark or "said")
          const isQuote = paragraph.includes('"') && paragraph.split(' ').length < 50;

          if (isQuote && paragraph.includes('"')) {
            return (
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border-l-4 border-primary pl-6 py-4 my-8 bg-muted/30 rounded-r-lg italic text-xl"
              >
                {paragraph}
              </motion.blockquote>
            );
          }

          return (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="text-foreground/90 leading-relaxed text-lg mb-6"
            >
              {paragraph}
            </motion.p>
          );
        })}
      </div>
    </motion.div>
  );
}
