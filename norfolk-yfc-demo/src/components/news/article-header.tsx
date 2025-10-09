"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Share2, Twitter, Facebook, Linkedin, Mail, Link as LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Article, categoryConfig, formatArticleDate } from "@/lib/news-data";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ArticleHeaderProps {
  article: Article;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const [showCopied, setShowCopied] = useState(false);
  const categoryInfo = categoryConfig[article.category];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareUrl = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';
  const shareTitle = encodeURIComponent(article.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Category Badge */}
      <div>
        <Badge className={cn(categoryInfo.color, "text-white border-0 text-sm px-4 py-1")}>
          {categoryInfo.label}
        </Badge>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        {article.title}
      </h1>

      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-primary/10 text-primary">
              {article.author.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-foreground">{article.author.name}</p>
            <p className="text-sm">{article.author.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{formatArticleDate(article.publishedDate)}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          <span className="text-sm">{article.readTime} min read</span>
        </div>
      </div>

      {/* Share Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-4 border-t">
        <span className="text-sm font-medium flex items-center gap-2">
          <Share2 className="h-4 w-4" />
          Share:
        </span>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="h-9 w-9 p-0"
            asChild
          >
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="h-9 w-9 p-0"
            asChild
          >
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="h-9 w-9 p-0"
            asChild
          >
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="h-9 w-9 p-0"
            asChild
          >
            <a
              href={`mailto:?subject=${shareTitle}&body=Check out this article: ${shareUrl}`}
              aria-label="Share via Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="h-9 w-9 p-0 relative"
            onClick={handleCopyLink}
            aria-label="Copy link"
          >
            <LinkIcon className="h-4 w-4" />
            {showCopied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
                Copied!
              </span>
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
