"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  ExternalLink,
  Award,
  Users,
  Code,
  Briefcase,
  GraduationCap,
  Heart,
  Globe,
  Mail,
  Phone,
  MapPin,
  Tractor,
  Laptop,
} from "lucide-react";
import Link from "next/link";

export default function TenderSubmissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Tender Submission</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Norfolk Federation of Young Farmers Clubs - Website Development Project
          </p>
          <p className="text-lg text-white/80 mt-2">
            Submitted by: <strong>Sam Fowler</strong> | FWD Digital Solutions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Executive Summary */}
        <Card className="mb-8 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Executive Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed">
              This submission presents a comprehensive proposal for the Norfolk YFC website redevelopment,
              including a <strong>fully functional demonstration website</strong> built specifically for this tender.
              The demo site showcases all core requirements including e-commerce, event management, interactive club
              map, CMS interface, jobs board, and integration strategies for Office 365 and member database systems.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-900 mb-2">✅ Demo Site Available Now</p>
              <p className="text-green-800 text-sm">
                Navigate through this website to see working examples of all proposed features. This is not a mockup
                - it's a functional demonstration of what Norfolk YFC will receive.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* About the Developer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              About the Developer
            </CardTitle>
            <CardDescription>Sam Fowler - FWD Digital Solutions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Professional Background</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Code className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Full-Stack Web Developer</p>
                      <p className="text-sm text-gray-600">
                        Specializing in modern web applications, e-commerce solutions, and CMS platforms
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">FWD Digital Solutions</p>
                      <p className="text-sm text-gray-600">
                        <a
                          href="https://www.f-w-d.co.uk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          www.f-w-d.co.uk
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Tractor className="h-5 w-5 text-primary" />
                Agricultural & Rural Community Experience
              </h3>
              <div className="space-y-3">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="font-semibold text-green-900 mb-2">Qualified Farrier</p>
                  <p className="text-sm text-green-800">
                    Extensive knowledge of agricultural operations, livestock management, and rural business practices.
                    Deep understanding of the farming community and agricultural sector in Norfolk.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="font-semibold text-blue-900 mb-2">Farm Experience</p>
                  <p className="text-sm text-blue-800">
                    Worked on a mixed dairy and arable farm throughout childhood, providing hands-on understanding
                    of agricultural operations, farm management, and rural life.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <p className="font-semibold text-purple-900 mb-2">Norfolk YFC Engagement</p>
                  <p className="text-sm text-purple-800">
                    Recently delivered talks to Countrysiders groups across Norfolk, working with Moira Harrison
                    and Caroline Watson. Direct experience with YFC's younger members and understanding of
                    Countrysiders program objectives.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Not-for-Profit Sector Experience
              </h3>
              <div className="space-y-3">
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <p className="font-semibold text-orange-900 mb-2">Digital Lead - Norwich Canoe Club</p>
                  <p className="text-sm text-orange-800 mb-3">
                    Currently serving as Digital Lead for Norwich Canoe Club, a not-for-profit sports organisation.
                    This role demonstrates understanding of volunteer-led organisations, membership management,
                    and the unique challenges faced by community clubs.
                  </p>
                  <div className="space-y-1 text-sm text-orange-800">
                    <p>• Managing digital presence for member engagement</p>
                    <p>• Developing solutions within limited budgets</p>
                    <p>• Creating systems for volunteer administrators</p>
                    <p>• Understanding membership recruitment and retention</p>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <p className="font-semibold text-amber-900 mb-2">Eastern Counties British Farriers & Blacksmiths Association</p>
                  <p className="text-sm text-amber-800 mb-3">
                    Payment gateway and event booking system integrated into my own website for this professional association.
                    Demonstrates deep understanding of the farrier industry and agricultural sector through active involvement.
                  </p>
                  <div className="space-y-1 text-sm text-amber-800">
                    <p>• Payment terminal built into f-w-d.co.uk</p>
                    <p>• Event booking system integration</p>
                    <p>• Active member of farrier community</p>
                    <p>• First-hand agricultural sector knowledge</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Portfolio of Work */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Laptop className="h-6 w-6 text-primary" />
              Portfolio of Work
            </CardTitle>
            <CardDescription>Recent website development projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* JJ Horseboxes */}
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg">J&J Horseboxes</h3>
                  <Badge className="bg-green-100 text-green-800">E-commerce</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Full e-commerce platform for premium horsebox sales and customization. Features include:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Custom product configurator</li>
                  <li>• Stripe payment integration</li>
                  <li>• Admin inventory management</li>
                  <li>• Mobile-responsive design</li>
                </ul>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="https://jj-horseboxes.co.uk/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </a>
                </Button>
              </div>

              {/* Strength PT */}
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg">Strength PT</h3>
                  <Badge className="bg-blue-100 text-blue-800">Service Business</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Professional website for personal training business. Features include:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Service showcase and booking</li>
                  <li>• Client testimonials system</li>
                  <li>• Blog and resources</li>
                  <li>• Contact and inquiry forms</li>
                </ul>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="https://strengthpt.co.uk/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </a>
                </Button>
              </div>

              {/* Harford Attachments */}
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg">Harford Attachments</h3>
                  <Badge className="bg-purple-100 text-purple-800">Agricultural</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Agricultural machinery attachments website (currently undergoing major overhaul). Original site built 5 years ago demonstrates long-term client relationships.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Product catalog system</li>
                  <li>• Technical specifications</li>
                  <li>• Agricultural sector expertise</li>
                  <li>• Long-term support and updates</li>
                </ul>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="https://www.harfordattachments.co.uk/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </a>
                </Button>
              </div>

              {/* Serene Safety */}
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg">Serene Safety</h3>
                  <Badge className="bg-indigo-100 text-indigo-800">CRM Platform</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Safety services platform with integrated CRM and email management system.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Custom CRM development</li>
                  <li>• Email integration system</li>
                  <li>• Client management portal</li>
                  <li>• Automated workflows</li>
                </ul>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="https://serenesafety.co.uk/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </a>
                </Button>
              </div>

              {/* FWD Digital */}
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-primary/5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg">FWD Digital Solutions</h3>
                  <Badge className="bg-gray-800 text-white">Portfolio</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Professional portfolio and company website showcasing development capabilities and services.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Full portfolio showcase</li>
                  <li>• Service offerings</li>
                  <li>• Technical expertise</li>
                  <li>• Client testimonials</li>
                </ul>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="https://www.f-w-d.co.uk" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Client Testimonial */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Award className="h-6 w-6 text-blue-600" />
              Client Testimonial
            </CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-white rounded-r-lg">
              <p className="text-lg italic text-gray-700 mb-4">
                "Sam really listens to the client's brief and adds value to their ideas. He is naturally creative and
                takes time to understand and produce amazing outcomes. Highly recommended as someone who listens and adds
                value to businesses he works with."
              </p>
              <footer className="text-sm font-semibold text-gray-900">
                — Anna Kidd, Managing Director
                <br />
                <span className="text-gray-600">Harford Attachments (5+ year client)</span>
              </footer>
            </blockquote>
          </CardContent>
        </Card>

        {/* Why This Makes Me Ideal for Norfolk YFC */}
        <Card className="mb-8 border-2 border-green-500/30 bg-green-50/50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-green-900">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              Why This Background Makes Me Ideal for Norfolk YFC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900">Agricultural Understanding</p>
                    <p className="text-sm text-green-800">
                      My farrier background and farm experience mean I genuinely understand the agricultural
                      sector, farming challenges, and rural community values that Norfolk YFC represents.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900">YFC Knowledge</p>
                    <p className="text-sm text-green-800">
                      Through delivering talks to Countrysiders groups, I have direct experience with YFC's
                      activities, understand member engagement, and know the people involved (Moira Harrison,
                      Caroline Watson).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900">Community Organisation Experience</p>
                    <p className="text-sm text-green-800">
                      My role with Norwich Canoe Club demonstrates I understand volunteer-led organisations,
                      limited budgets, and the importance of user-friendly systems for non-technical administrators.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900">E-commerce Expertise</p>
                    <p className="text-sm text-green-800">
                      Proven track record with J&J Horseboxes e-commerce platform, demonstrating I can deliver
                      the shop and membership payment systems Norfolk YFC requires.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900">Long-term Commitment</p>
                    <p className="text-sm text-green-800">
                      5-year relationship with Harford Attachments shows I provide ongoing support and don't
                      disappear after launch - crucial for Norfolk YFC's long-term success.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900">Local Understanding</p>
                    <p className="text-sm text-green-800">
                      As a Norfolk-based developer with agricultural roots and YFC connections, I understand the
                      local context, community values, and what matters to members and their families.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tender Summary */}
        <Card className="mb-8 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-white">
          <CardHeader>
            <CardTitle className="text-2xl">Tender Summary</CardTitle>
            <CardDescription>All key information required for evaluation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Pricing */}
              <div className="bg-white rounded-lg p-6 border-2 border-green-200">
                <h3 className="font-bold text-lg text-green-900 mb-3">💰 Pricing</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Production:</span>
                    <span className="font-semibold">£2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Hosting (annual):</span>
                    <span className="font-semibold">£500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Support (monthly):</span>
                    <span className="font-semibold">£50</span>
                  </div>
                  <div className="border-t-2 border-green-300 pt-2 flex justify-between">
                    <span className="font-bold text-green-900">Year 1 Total:</span>
                    <span className="font-bold text-green-900 text-lg">£3,600</span>
                  </div>
                  <p className="text-xs text-green-700 pt-1">✓ No VAT to add</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                <h3 className="font-bold text-lg text-blue-900 mb-3">📅 Timeline</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-semibold text-blue-900">Start Date:</p>
                    <p className="text-gray-700">21 November 2025</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Launch Date:</p>
                    <p className="text-gray-700">31 May 2026</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Duration:</p>
                    <p className="text-gray-700">27 weeks</p>
                  </div>
                  <p className="text-xs text-blue-700 pt-1">✓ Fixed deadline commitment</p>
                </div>
              </div>

              {/* Business Capability */}
              <div className="bg-white rounded-lg p-6 border-2 border-orange-200">
                <h3 className="font-bold text-lg text-orange-900 mb-3">🛡️ Insurance</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-semibold text-orange-900">Professional Indemnity:</p>
                    <p className="text-gray-700">£1,000,000</p>
                  </div>
                  <div>
                    <p className="font-semibold text-orange-900">Public Liability:</p>
                    <p className="text-gray-700">£2,000,000</p>
                  </div>
                  <div>
                    <p className="font-semibold text-orange-900">You Own:</p>
                    <p className="text-gray-700">Server + Full Codebase</p>
                  </div>
                  <p className="text-xs text-orange-700 pt-1">✓ Zero vendor lock-in</p>
                </div>
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
              <h3 className="font-bold text-lg mb-3">✅ Key Deliverables</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>E-commerce shop with Stripe payments</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Interactive club map (11 clubs + 7 groups)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Events calendar with booking & QR tickets</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Jobs board for agricultural opportunities</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Easy-to-use CMS for content updates</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Office 365 calendar integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Mobile responsive & WCAG A accessible</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Training & documentation included</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>PWA ready for future app deployment</span>
                </div>
              </div>
            </div>

            {/* Compliance Confirmation */}
            <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-200 mt-6">
              <h3 className="font-bold text-lg text-purple-900 mb-3">📋 Compliance Confirmed</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-sm text-purple-800">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>GDPR</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>Safeguarding</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>Equality</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>Health & Safety</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>Anti-Bribery</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>Modern Slavery</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demo Site Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Demonstration Website Features</CardTitle>
            <CardDescription>Explore this site to see all proposed features in action</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold mb-2">🏠 Homepage</h4>
                <p className="text-sm text-gray-600">Modern design, hero section, stats, features</p>
              </Link>
              <Link href="/clubs" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold mb-2">📍 Interactive Club Map</h4>
                <p className="text-sm text-gray-600">11 senior clubs + 7 Countrysider groups with real data</p>
              </Link>
              <Link href="/shop" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold mb-2">🛒 E-commerce Shop</h4>
                <p className="text-sm text-gray-600">Product catalog, cart, Stripe integration</p>
              </Link>
              <Link href="/events" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold mb-2">📅 Events Calendar</h4>
                <p className="text-sm text-gray-600">Event listings, booking, QR tickets</p>
              </Link>
              <Link href="/jobs" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold mb-2">💼 Jobs Board</h4>
                <p className="text-sm text-gray-600">Agricultural job opportunities</p>
              </Link>
              <Link href="/news" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold mb-2">📰 News & Blog</h4>
                <p className="text-sm text-gray-600">Article management system</p>
              </Link>
              <Link href="/membership" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold mb-2">👥 Membership</h4>
                <p className="text-sm text-gray-600">Join online, payment processing</p>
              </Link>
              <Link href="/resources" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold mb-2">📚 Resources</h4>
                <p className="text-sm text-gray-600">Document library, downloads</p>
              </Link>
              <Link href="/cms" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold mb-2">⚙️ CMS Demo</h4>
                <p className="text-sm text-gray-600">Admin interface mockup</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Tender Documents */}
        <Card className="mb-8 border-2 border-primary/40 bg-gradient-to-br from-primary/5 to-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl">Complete Tender Documentation</CardTitle>
            <CardDescription>
              Detailed submissions covering all RFQ requirements and evaluation criteria
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/tender/pricing"
                className="group block p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                      Detailed Pricing & Costs
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Complete cost breakdown in RFQ format: £3,600 Year 1 (£2,500 production + £500 hosting + £600 support).
                      No VAT. Includes project timeline Nov 2025 → May 2026.
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-green-100 text-green-800">25% of Evaluation</Badge>
                      <span className="text-sm font-semibold text-primary group-hover:underline">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="/tender/requirements"
                className="group block p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                      Requirements Matrix & Success Metrics
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Detailed matrix showing how we meet every RFQ requirement. Proven success metrics from J&J Horseboxes,
                      Strength PT, and Harford Attachments portfolios.
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-blue-100 text-blue-800">50% of Evaluation</Badge>
                      <span className="text-sm font-semibold text-primary group-hover:underline">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="/tender/contingency"
                className="group block p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                      Contingency Planning & Business Capability
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Detailed plans for staff absence, backup developers, business continuity. Insurance certificates
                      (£1M Professional Indemnity, £2M Public Liability), financial stability proof.
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-orange-100 text-orange-800">5% of Evaluation</Badge>
                      <span className="text-sm font-semibold text-primary group-hover:underline">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="/tender/compliance"
                className="group block p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                      Compliance & Legal Statements
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Confirmation of compliance with all Norfolk YFC policies: GDPR/Data Protection, Safeguarding,
                      Equality & Diversity, Health & Safety, Anti-Bribery Act, Modern Slavery Act.
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-purple-100 text-purple-800">Required</Badge>
                      <span className="text-sm font-semibold text-primary group-hover:underline">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-primary text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Contact Information</CardTitle>
            <CardDescription className="text-white/80">Get in touch to discuss this proposal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Website</p>
                  <a
                    href="https://www.f-w-d.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white underline"
                  >
                    www.f-w-d.co.uk
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:info@f-w-d.co.uk" className="text-white/90 hover:text-white underline">
                    info@f-w-d.co.uk
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="text-white/90">Norfolk, UK</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            This entire website serves as the tender submission - every page demonstrates capability,
            understanding, and commitment to Norfolk YFC's success.
          </p>
        </div>
      </div>
    </div>
  );
}
