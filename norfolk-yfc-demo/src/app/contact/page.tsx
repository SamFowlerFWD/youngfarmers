"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Send,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    club: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        club: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Contact Us"
        description="Have a question or want to learn more about Norfolk YFC? We're here to help!"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible. Usually within 1-2 business days.
              </p>

              {formSubmitted ? (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                      <h3 className="text-xl font-bold text-green-900">
                        Message Sent!
                      </h3>
                    </div>
                    <p className="text-green-800">
                      Thank you for contacting Norfolk YFC. We've received your
                      message and will respond as soon as possible.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">
                      Your Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.smith@example.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number (optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="07XXX XXXXXX"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="club">Your Club (if applicable)</Label>
                    <Input
                      id="club"
                      name="club"
                      type="text"
                      value={formData.club}
                      onChange={handleChange}
                      placeholder="e.g., Norwich YFC"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={6}
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
              </div>

              {/* Office Details */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">
                    County Office
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          Address
                        </div>
                        <div className="text-gray-600 text-sm">
                          Norfolk YFC County Office
                          <br />
                          41B Taverham Road
                          <br />
                          Drayton, Norwich
                          <br />
                          Norfolk, NR8 6RL
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Phone</div>
                        <a
                          href="tel:01603213688"
                          className="text-primary hover:underline"
                        >
                          01603 213688
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Email</div>
                        <a
                          href="mailto:office@norfolkyfc.org.uk"
                          className="text-primary hover:underline"
                        >
                          office@norfolkyfc.org.uk
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          Opening Hours
                        </div>
                        <div className="text-gray-600 text-sm">
                          Tuesday - Friday: 9:00am - 2:30pm
                          <br />
                          <span className="text-gray-500">
                            Closed Monday, weekends, and bank holidays
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-red-50 border-red-200">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-red-900 mb-3">
                    Emergency Contact
                  </h3>
                  <p className="text-sm text-red-800 mb-4">
                    For urgent matters outside office hours, please contact:
                  </p>
                  <div className="space-y-2">
                    <div className="font-semibold text-red-900">
                      Tom Fraser - County Chairman
                    </div>
                    <a
                      href="tel:07393430294"
                      className="text-red-900 hover:underline font-semibold flex items-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      07393 430294
                    </a>
                    <p className="text-xs text-red-700 mt-2">
                      For safeguarding concerns, please refer to our safeguarding
                      policy in the resources section or contact the office.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Follow Us on Social Media
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://facebook.com/norfolkyfc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Facebook className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Facebook
                        </div>
                        <div className="text-sm text-gray-500">
                          @NorfolkYFC
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://instagram.com/norfolkyfc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Instagram className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Instagram
                        </div>
                        <div className="text-sm text-gray-500">
                          @norfolkyfc
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://twitter.com/norfolkyfc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="bg-blue-400 w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Twitter className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Twitter/X
                        </div>
                        <div className="text-sm text-gray-500">
                          @NorfolkYFC
                        </div>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Find Us
            </h2>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 mb-2">Map integration coming soon</p>
                <p className="text-sm text-gray-400">
                  41B Taverham Road, Drayton, Norwich, NR8 6RL
                </p>
                <Button variant="outline" className="mt-4" asChild>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=41B+Taverham+Road+Drayton+Norwich+NR8+6RL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Looking for Something Else?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Find Your Local Club
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Browse our 16 clubs across Norfolk and find one near you.
                  </p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href="/clubs">View Clubs</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Join Norfolk YFC
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Learn about membership options and how to join.
                  </p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href="/membership">Membership Info</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Member Resources
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Access policies, forms, guides, and training materials.
                  </p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href="/resources">View Resources</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Sign up for our newsletter to receive the latest news, events, and
              opportunities from Norfolk YFC.
            </p>
            <Badge variant="outline">
              Newsletter signup integrated with member portal
            </Badge>
          </div>
        </div>
      </section>
    </>
  );
}
