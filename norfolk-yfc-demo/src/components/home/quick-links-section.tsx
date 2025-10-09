import Link from "next/link";
import { MapPin, UserPlus, ShoppingBag, Calendar, Trophy, Newspaper } from "lucide-react";
import { Card } from "@/components/ui/card";

export function QuickLinksSection() {
  const links = [
    { icon: MapPin, title: "Find a Club", href: "/clubs", color: "bg-primary" },
    { icon: UserPlus, title: "Join as Member", href: "/membership", color: "bg-secondary" },
    { icon: ShoppingBag, title: "Shop", href: "/shop", color: "bg-accent" },
    { icon: Calendar, title: "Events", href: "/events", color: "bg-primary" },
    { icon: Trophy, title: "Competitions", href: "/competitions", color: "bg-secondary" },
    { icon: Newspaper, title: "News", href: "/news", color: "bg-accent" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Norfolk YFC</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className={`w-16 h-16 ${link.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <link.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">{link.title}</h3>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
