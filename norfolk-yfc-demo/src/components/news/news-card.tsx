"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Article, categoryConfig, formatArticleDate } from "@/lib/news-data";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  article: Article;
  variant?: 'grid' | 'featured' | 'compact';
  priority?: boolean;
}

export function NewsCard({ article, variant = 'grid', priority = false }: NewsCardProps) {
  const categoryInfo = categoryConfig[article.category];

  if (variant === 'compact') {
    return (
      <Link href={`/news/${article.slug}`} className="group block">
        <motion.div
          whileHover={{ x: 4 }}
          className="flex gap-4 py-3 border-b last:border-b-0"
        >
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatArticleDate(article.publishedDate)}
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link href={`/news/${article.slug}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group border-2">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-full bg-gradient-to-br from-primary/20 to-blue-500/20 overflow-hidden">
                <Image
                  src={article.featuredImage}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={priority}
                  onError={(e) => {
                    // Hide image on error, show gradient background
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <Badge className={cn(categoryInfo.color, "absolute top-4 left-4 z-20 text-white border-0")}>
                  {categoryInfo.label}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-3">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 line-clamp-3 text-lg">
                    {article.excerpt}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {formatArticleDate(article.publishedDate)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {article.readTime} min read
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary/10 text-primary text-xs">
                          {article.author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{article.author.name}</p>
                        <p className="text-xs text-muted-foreground">{article.author.role}</p>
                      </div>
                    </div>
                    <Button className="group-hover:translate-x-1 transition-transform">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Link>
    );
  }

  // Grid variant (default)
  return (
    <Link href={`/news/${article.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -8 }}
      >
        <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 group">
          {/* Image */}
          <div className="relative h-48 bg-gradient-to-br from-primary/20 to-blue-500/20 overflow-hidden">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
              onError={(e) => {
                // Hide image on error, show gradient background with letter
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
            <Badge className={cn(categoryInfo.color, "absolute top-4 left-4 z-20 text-white border-0")}>
              {categoryInfo.label}
            </Badge>
          </div>

          <CardHeader className="flex-1">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatArticleDate(article.publishedDate)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime} min
              </span>
            </div>
            <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground line-clamp-3 text-sm">
              {article.excerpt}
            </p>
          </CardContent>

          <CardFooter className="flex items-center justify-between pt-0">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                  {article.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">{article.author.name}</p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
}
