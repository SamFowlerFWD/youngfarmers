import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function NewsSection() {
  const news = [
    {
      id: 1,
      title: "Norfolk YFC Members Excel at National Competition",
      excerpt: "Our members brought home multiple awards from the National Finals, showcasing exceptional talent and dedication.",
      category: "Achievement",
      date: "October 5, 2025",
    },
    {
      id: 2,
      title: "New Countrysider Group Launches in North Norfolk",
      excerpt: "We're excited to announce the opening of our seventh Countrysider group, expanding opportunities for younger members.",
      category: "Announcement",
      date: "September 28, 2025",
    },
    {
      id: 3,
      title: "Community Fundraiser Raises £5,000 for CLAN Trust",
      excerpt: "Thank you to all our clubs for their amazing efforts in our autumn charity drive supporting local causes.",
      category: "Community",
      date: "September 20, 2025",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest News</h2>
          <p className="text-muted-foreground text-lg">
            Stay up to date with what's happening across Norfolk YFC
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{item.category}</Badge>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                <Button variant="link" className="p-0">
                  Read more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/news">View All News</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
