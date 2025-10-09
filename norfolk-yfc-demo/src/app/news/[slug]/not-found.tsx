import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticleNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-20 text-center">
        <FileQuestion className="h-20 w-20 mx-auto text-muted-foreground/50 mb-6" />
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the article you&apos;re looking for. It may have been removed or the link might be incorrect.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/news">Browse All News</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
