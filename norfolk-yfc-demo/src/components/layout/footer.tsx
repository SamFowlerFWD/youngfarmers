import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <Image
              src="/images/norfolk-yfc-logo.png"
              alt="Norfolk YFC"
              width={180}
              height={56}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm mb-4">
              Do More, Be More with Norfolk YFC. Join us for friendship, skills, and community.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/clubs" className="hover:text-white transition-colors">Find a Club</Link></li>
              <li><Link href="/membership" className="hover:text-white transition-colors">Join as Member</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/competitions" className="hover:text-white transition-colors">Competitions</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">Office: 01603 213688</p>
                  <p className="text-sm text-xs">Emergency: County Chair Tom Fraser</p>
                  <p className="text-sm">07393430294</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm">info@norfolkyfc.co.uk</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">Office Hours:</p>
                  <p className="text-sm">Tuesday - Friday</p>
                  <p className="text-sm">9am - 2:30pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest news and events.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Partner Organizations */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <h3 className="text-white font-semibold mb-4 text-center">Our Supporters</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="https://rnaa.org.uk" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
              RNAA
            </a>
            <a href="https://clantrust.org" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
              CLAN Trust
            </a>
            <a href="https://chadacre-trust.org.uk" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
              Chadacre Trust
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              &copy; {currentYear} Norfolk Federation of Young Farmers Clubs. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
