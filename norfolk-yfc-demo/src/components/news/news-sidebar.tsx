"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Layers, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Article, ArticleCategory, categoryConfig, getCategoryCounts } from "@/lib/news-data";
import { NewsCard } from "./news-card";
import { cn } from "@/lib/utils";

interface NewsSidebarProps {
  popularArticles?: Article[];
  recentArticles?: Article[];
  onCategoryClick?: (category: ArticleCategory) => void;
}

export function NewsSidebar({ popularArticles = [], recentArticles = [], onCategoryClick }: NewsSidebarProps) {
  const categoryCounts = getCategoryCounts();
  const categories: ArticleCategory[] = ['events', 'achievements', 'member-stories', 'community', 'competitions'];

  return (
    <div className="space-y-6">
      {/* Popular Articles */}
      {popularArticles.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5 text-primary" />
                Popular Articles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {popularArticles.slice(0, 3).map((article, index) => (
                <div key={article.slug}>
                  <Link href={`/news/${article.slug}`} className="group block">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {article.readTime} min read
                        </p>
                      </div>
                    </div>
                  </Link>
                  {index < popularArticles.slice(0, 3).length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Layers className="h-5 w-5 text-primary" />
              Categories
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {categories.map((category) => {
              const count = categoryCounts[category] || 0;
              const config = categoryConfig[category];

              return (
                <button
                  key={category}
                  onClick={() => onCategoryClick?.(category)}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className={cn("w-3 h-3 rounded-full", config.color)} />
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">
                      {config.label}
                    </span>
                  </div>
                  <Badge variant="secondary" className="bg-background">
                    {count}
                  </Badge>
                </button>
              );
            })}
          </CardContent>
        </Card>
      </motion.div>

      {/* Recent Articles */}
      {recentArticles.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="h-5 w-5 text-primary" />
                Recent Articles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentArticles.slice(0, 5).map((article) => (
                <div key={article.slug}>
                  <NewsCard article={article} variant="compact" />
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Newsletter CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20">
          <CardContent className="pt-6 text-center">
            <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest news and updates from Norfolk YFC.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Subscribe Now
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
