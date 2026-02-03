import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { ArticleHeader } from "@/components/news/article-header";
import { ArticleContent } from "@/components/news/article-content";
import { AuthorBio } from "@/components/news/author-bio";
import { RelatedArticles } from "@/components/news/related-articles";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getArticleBySlug, getRelatedArticles, articles } from "@/lib/news-data";
import { DemoNotice } from "@/components/news/demo-notice";
import type { Metadata } from "next";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all articles
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | Norfolk YFC News',
    };
  }

  return {
    title: `${article.title} | Norfolk YFC News`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedDate,
      authors: [article.author.name],
      tags: article.tags,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, 3);

  return (
    <div className="min-h-screen">
      {/* Back to News Link */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <DemoNotice />
          {/* Article Header */}
          <ArticleHeader article={article} />

          <Separator className="my-8" />

          {/* Article Content */}
          <ArticleContent article={article} />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-sm font-medium mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <AuthorBio author={article.author} />

          {/* Share Section */}
          <div className="mt-8 p-6 bg-muted/30 rounded-lg text-center">
            <p className="text-muted-foreground mb-2">
              Did you enjoy this article? Share it with your network!
            </p>
            <p className="text-sm text-muted-foreground">
              Use the share buttons at the top of the page
            </p>
          </div>

          {/* Comments Placeholder */}
          <Card className="mt-8 bg-gradient-to-br from-muted/30 to-muted/10">
            <CardContent className="pt-8 text-center">
              <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-bold mb-2">Comments Coming Soon</h3>
              <p className="text-muted-foreground mb-4">
                We&apos;re building a space for you to share your thoughts and connect with other members.
              </p>
              <p className="text-sm text-muted-foreground">
                For now, share your feedback on our social media channels or at your local club meeting!
              </p>
            </CardContent>
          </Card>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-6xl mx-auto">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary/10 via-blue-500/10 to-yellow-500/10 py-16 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don&apos;t miss out on the latest news, events, and stories from Norfolk YFC.
            Follow us on social media or subscribe to our newsletter.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/news">Browse All News</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
