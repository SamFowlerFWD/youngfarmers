"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      title: "About",
      href: "/about",
      submenu: [
        { title: "Our Story", href: "/about" },
        { title: "Our Team", href: "/about/team" },
        { title: "Membership", href: "/membership" },
      ],
    },
    {
      title: "Find a Club",
      href: "/clubs",
    },
    {
      title: "Events",
      href: "/events",
      submenu: [
        { title: "Calendar", href: "/events" },
        { title: "Competitions", href: "/competitions" },
      ],
    },
    {
      title: "Shop",
      href: "/shop",
    },
    {
      title: "Jobs",
      href: "/jobs",
    },
    {
      title: "News",
      href: "/news",
    },
    {
      title: "Resources",
      href: "/resources",
    },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm"
          : "bg-white"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/norfolk-yfc-logo.png"
              alt="Norfolk YFC"
              width={200}
              height={62}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) =>
              item.submenu ? (
                <div key={item.title} className="relative group">
                  <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                    {item.title}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.title}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/tender">Tender Submission</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/cms">CMS Demo</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/membership">Join Now</Link>
            </Button>
            <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t">
            {navItems.map((item) => (
              <div key={item.title} className="space-y-1">
                <Link
                  href={item.href}
                  className="block py-2 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.title}
                        href={subitem.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2 border-t">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/tender">Tender Submission</Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/cms">CMS Demo</Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/membership">Join Now</Link>
              </Button>
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
