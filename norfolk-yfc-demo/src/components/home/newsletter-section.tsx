"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest news, events, and opportunities
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white text-gray-900"
            />
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
          <p className="text-sm mt-4 opacity-75">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
