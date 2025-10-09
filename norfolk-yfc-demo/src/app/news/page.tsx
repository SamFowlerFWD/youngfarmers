"use client";

import { useState, useMemo } from "react";
import { NewsHero } from "@/components/news/news-hero";
import { NewsCategoryFilter } from "@/components/news/news-category-filter";
import { FeaturedArticle } from "@/components/news/featured-article";
import { NewsGrid } from "@/components/news/news-grid";
import { NewsSidebar } from "@/components/news/news-sidebar";
import { DemoNotice } from "@/components/news/demo-notice";
import {
  articles,
  getFeaturedArticle,
  getRecentArticles,
  searchArticles,
  getArticlesByCategory,
  type ArticleCategory
} from "@/lib/news-data";

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | 'all'>('all');

  const featuredArticle = getFeaturedArticle();
  const recentArticles = getRecentArticles(5);

  // Filter articles based on search and category
  const filteredArticles = useMemo(() => {
    let filtered = articles;

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = getArticlesByCategory(selectedCategory);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = searchArticles(searchQuery).filter(article =>
        selectedCategory === 'all' || article.category === selectedCategory
      );
    }

    // Exclude featured article from grid
    return filtered.filter(article => article.slug !== featuredArticle?.slug);
  }, [searchQuery, selectedCategory, featuredArticle?.slug]);

  // Get popular articles (first 3 non-featured)
  const popularArticles = articles
    .filter(article => article.slug !== featuredArticle?.slug)
    .slice(0, 3);

  const handleCategoryClick = (category: ArticleCategory) => {
    setSelectedCategory(category);
    // Scroll to grid
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <NewsHero searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Category Filter */}
      <NewsCategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Featured Article - Only show when no search and "all" category */}
      {featuredArticle && !searchQuery && selectedCategory === 'all' && (
        <FeaturedArticle article={featuredArticle} />
      )}

      {/* Main Content Grid with Sidebar */}
      <div className="container mx-auto px-4 py-8">
        <DemoNotice />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Grid - Takes up 2/3 on large screens */}
          <div className="lg:col-span-2">
            {searchQuery && (
              <div className="mb-6">
                <p className="text-muted-foreground">
                  {filteredArticles.length > 0 ? (
                    <>
                      Found <strong>{filteredArticles.length}</strong> article{filteredArticles.length !== 1 ? 's' : ''} matching &quot;{searchQuery}&quot;
                    </>
                  ) : (
                    <>No articles found matching &quot;{searchQuery}&quot;</>
                  )}
                </p>
              </div>
            )}
            <NewsGrid articles={filteredArticles} />
          </div>

          {/* Sidebar - Takes up 1/3 on large screens */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32">
              <NewsSidebar
                popularArticles={popularArticles}
                recentArticles={recentArticles}
                onCategoryClick={handleCategoryClick}
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
