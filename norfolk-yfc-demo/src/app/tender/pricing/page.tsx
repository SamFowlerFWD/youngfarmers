import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  CheckCircle2,
  Info,
  Calendar,
  PoundSterling,
  Shield,
  Clock,
  Zap,
  Award,
  Target,
} from "lucide-react";
import Link from "next/link";

export default function PricingProposalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Detailed Pricing & Proposal</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Transparent, competitive pricing designed for charitable organisations
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Value Proposition */}
        <Alert className="mb-8 bg-green-50 border-green-200">
          <Info className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            <strong>No VAT:</strong> As a small business under the VAT threshold, all prices quoted are final with no VAT to add.
            This represents significant savings compared to VAT-registered agencies (typically +20%).
          </AlertDescription>
        </Alert>

        {/* Detailed Cost Breakdown */}
        <Card className="mb-8 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <PoundSterling className="h-6 w-6 text-primary" />
              Detailed Cost Breakdown
            </CardTitle>
            <CardDescription>In the format requested by Norfolk YFC RFQ Section 4</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Cost Table */}
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Item Description</th>
                      <th className="text-right p-4 font-semibold">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">
                        <p className="font-medium">Cost of hosting website per annum</p>
                        <p className="text-sm text-gray-600">
                          Private server hosting, SSL certificate, automated backups, CDN, 99.9% uptime guarantee
                        </p>
                      </td>
                      <td className="p-4 text-right font-semibold">£500</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">
                        <p className="font-medium">Production Charges (one-time)</p>
                        <p className="text-sm text-gray-600">
                          Initial website build, CMS setup, all integrations, content migration, testing, training
                        </p>
                      </td>
                      <td className="p-4 text-right font-semibold">£2,500</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">
                        <p className="font-medium">Ongoing Support & Maintenance (per month)</p>
                        <p className="text-sm text-gray-600">
                          Includes: security updates, bug fixes, small text/image changes, performance monitoring,
                          backup management, technical support
                        </p>
                      </td>
                      <td className="p-4 text-right font-semibold">£50</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">
                        <p className="font-medium">Development / Upgrade Charges (as needed)</p>
                        <p className="text-sm text-gray-600">
                          New features, major redesigns, additional integrations - quoted per project
                        </p>
                      </td>
                      <td className="p-4 text-right font-semibold">From £50/hour</td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-primary text-white">
                    <tr>
                      <td className="p-4 font-bold text-lg">FIRST YEAR TOTAL (all-inclusive)</td>
                      <td className="p-4 text-right font-bold text-2xl">£3,600</td>
                    </tr>
                    <tr className="bg-primary/90">
                      <td className="p-4 font-semibold">Annual Running Costs (Year 2 onwards)</td>
                      <td className="p-4 text-right font-semibold text-lg">£1,100/year</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Cost Breakdown Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    First Year Investment
                  </h3>
                  <div className="space-y-2 text-sm text-blue-800">
                    <div className="flex justify-between">
                      <span>Production (one-time):</span>
                      <span className="font-semibold">£2,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hosting (annual):</span>
                      <span className="font-semibold">£500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Support (12 months @ £50/mo):</span>
                      <span className="font-semibold">£600</span>
                    </div>
                    <div className="border-t border-blue-300 pt-2 mt-2 flex justify-between font-bold text-lg">
                      <span>Total Year 1:</span>
                      <span>£3,600</span>
                    </div>
                    <p className="text-xs mt-2 text-blue-700">
                      ✓ No VAT to add • ✓ No hidden fees • ✓ All-inclusive pricing
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Ongoing Annual Costs
                  </h3>
                  <div className="space-y-2 text-sm text-green-800">
                    <div className="flex justify-between">
                      <span>Hosting (annual):</span>
                      <span className="font-semibold">£500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Support (12 months @ £50/mo):</span>
                      <span className="font-semibold">£600</span>
                    </div>
                    <div className="border-t border-green-300 pt-2 mt-2 flex justify-between font-bold text-lg">
                      <span>Total Year 2+:</span>
                      <span>£1,100/year</span>
                    </div>
                    <p className="text-xs mt-2 text-green-700">
                      Optional: Pay monthly (£91.67/mo) or annually (£1,100/year)
                    </p>
                  </div>
                </div>
              </div>

              {/* Hosting Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Hosting Arrangement: Transparent & Fair</h3>
                <p className="text-sm text-gray-700 mb-3">
                  For charitable organisations like Norfolk YFC, I offer <strong>transparent direct payment</strong> options:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Option 1: I Manage (Recommended)</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• I handle all hosting setup and management</li>
                      <li>• You pay me £500/year (or £41.67/month)</li>
                      <li>• Includes server management, security, backups</li>
                      <li>• One invoice, simple accounting</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Option 2: Direct Payment</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Norfolk YFC pays hosting provider directly</li>
                      <li>• I provide technical management at no markup</li>
                      <li>• Full transparency on actual costs</li>
                      <li>• You maintain direct control</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3 italic">
                  Note: Direct payment option ensures you know exactly where every pound goes - no hidden markups or commissions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What's Included */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">What's Included in Production (£2,500)</CardTitle>
            <CardDescription>Comprehensive website build with all core requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Complete Website Build</p>
                    <p className="text-sm text-gray-600">
                      All pages, navigation, responsive design, accessibility (WCAG A)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">E-commerce Shop</p>
                    <p className="text-sm text-gray-600">
                      Stripe integration, product catalog, shopping cart, checkout
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Interactive Club Map</p>
                    <p className="text-sm text-gray-600">
                      Mapbox integration, 11 senior clubs + 7 Countrysider groups
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Events & Calendar</p>
                    <p className="text-sm text-gray-600">
                      Event management, booking system, QR ticket generation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Jobs Board</p>
                    <p className="text-sm text-gray-600">
                      Agricultural job listings, application management
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">News & Blog System</p>
                    <p className="text-sm text-gray-600">
                      Article management, categories, featured posts
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Easy-to-Use CMS</p>
                    <p className="text-sm text-gray-600">
                      Content management system for volunteers to update content
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Office 365 Integration</p>
                    <p className="text-sm text-gray-600">
                      Calendar display, SharePoint document links
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Member Database Strategy</p>
                    <p className="text-sm text-gray-600">
                      Silo integration approach (pending API documentation)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Content Migration</p>
                    <p className="text-sm text-gray-600">
                      Transfer existing content from current website
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Training & Documentation</p>
                    <p className="text-sm text-gray-600">
                      In-person training session, video tutorials, user guides
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Testing & Launch</p>
                    <p className="text-sm text-gray-600">
                      Cross-browser testing, mobile testing, go-live support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ongoing Support Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">What's Included in Monthly Support (£50/month)</CardTitle>
            <CardDescription>Comprehensive ongoing maintenance and support</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <Shield className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Security Updates</h4>
                <p className="text-sm text-gray-600">
                  Regular security patches, dependency updates, vulnerability monitoring
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <Zap className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Performance Monitoring</h4>
                <p className="text-sm text-gray-600">
                  Speed optimisation, uptime monitoring, performance improvements
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <Clock className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Content Changes</h4>
                <p className="text-sm text-gray-600">
                  Small text updates, image changes, simple content adjustments
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <CheckCircle2 className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Bug Fixes</h4>
                <p className="text-sm text-gray-600">
                  Resolve any issues, fix broken links, address technical problems
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <Award className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Backup Management</h4>
                <p className="text-sm text-gray-600">
                  Daily automated backups, backup testing, disaster recovery
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <Target className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Technical Support</h4>
                <p className="text-sm text-gray-600">
                  Email support, troubleshooting help, technical guidance
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              Note: Major new features or redesigns are quoted separately at £50/hour or fixed project price.
            </p>
          </CardContent>
        </Card>

        {/* Project Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              Project Timeline: 21 November 2025 → 31 May 2026
            </CardTitle>
            <CardDescription>27-week delivery schedule with key milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold">Weeks 1-2: Discovery & Planning</h4>
                  <Badge variant="secondary">Nov 21 - Dec 5</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Requirements workshop, content audit, technical documentation, project setup
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold">Weeks 3-6: Design & Prototyping</h4>
                  <Badge variant="secondary">Dec 6 - Jan 2</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Visual design, component library, page layouts, design approval
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold">Weeks 7-14: Core Development</h4>
                  <Badge variant="secondary">Jan 3 - Feb 27</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Build all pages, CMS setup, e-commerce, map, events, jobs board, integrations
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold">Weeks 15-18: Content & Migration</h4>
                  <Badge variant="secondary">Feb 28 - Mar 27</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Content migration, SEO optimisation, image processing, copy finalisation
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold">Weeks 19-23: Testing & Training</h4>
                  <Badge variant="secondary">Mar 28 - Apr 24</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  QA testing, accessibility audit, browser testing, staff training session
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold">Week 24-25: Launch Preparation</h4>
                  <Badge variant="secondary">Apr 25 - May 8</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Final testing, DNS configuration, data migration, go-live checklist
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2 bg-primary/5">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold">Week 26-27: Launch & Support</h4>
                  <Badge className="bg-primary">May 9 - May 31</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Website launch, post-launch monitoring, immediate bug fixes, handover
                </p>
              </div>
            </div>
            <Alert className="mt-6">
              <Info className="h-4 w-4" />
              <AlertDescription className="text-sm">
                <strong>Client Involvement:</strong> Bi-weekly check-ins, design approval (Week 6), content reviews (Weeks 15-18),
                training session (Week 22), launch approval (Week 25)
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Payment Schedule */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Payment Schedule</CardTitle>
            <CardDescription>Flexible payment terms aligned with project milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <p className="text-sm text-blue-700 mb-1">Upon Contract Signing</p>
                  <p className="text-2xl font-bold text-blue-900">£1,250</p>
                  <p className="text-xs text-blue-600 mt-1">(50% of production cost)</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <p className="text-sm text-green-700 mb-1">Upon Launch (May 31)</p>
                  <p className="text-2xl font-bold text-green-900">£1,250</p>
                  <p className="text-xs text-green-600 mt-1">(50% of production cost)</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                  <p className="text-sm text-purple-700 mb-1">Monthly (ongoing)</p>
                  <p className="text-2xl font-bold text-purple-900">£92</p>
                  <p className="text-xs text-purple-600 mt-1">(£50 support + £42 hosting)</p>
                </div>
              </div>
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  <strong>Flexible Options:</strong> Can also invoice hosting annually (£500) and support monthly (£50),
                  or combine into one annual invoice (£1,100) for simplified accounting.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        {/* Optional Enhancements */}
        <Card className="mb-8 border-2 border-purple-500/30 bg-purple-50/50">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-900">Optional Enhancements & Future Upgrades</CardTitle>
            <CardDescription className="text-purple-700">
              Additional features that can be added now or in the future
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* PWA App */}
              <div className="bg-white rounded-lg p-6 border-2 border-purple-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-purple-900 mb-2">Progressive Web App (PWA) - Mobile & Tablet App</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Transform the website into a downloadable app for iOS and Android without building separate native apps
                    </p>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">£750</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">What You Get:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✓ "Add to Home Screen" functionality</li>
                      <li>✓ App icon on user's phone/tablet</li>
                      <li>✓ Works offline (basic content cached)</li>
                      <li>✓ Push notifications capability</li>
                      <li>✓ Full-screen app experience</li>
                      <li>✓ Faster loading than mobile browser</li>
                      <li>✓ No App Store approval needed</li>
                      <li>✓ Works on both iOS and Android</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Perfect For:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>📱 Members checking events on-the-go</li>
                      <li>🔔 Event reminders via push notifications</li>
                      <li>📰 Reading news/updates offline</li>
                      <li>🗺️ Quick access to club finder</li>
                      <li>🎫 Digital event tickets accessible offline</li>
                      <li>👥 Member engagement without app store barriers</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm text-purple-900 mb-2">
                    <strong>Architecture Ready:</strong> The demo site is already built with PWA architecture.
                    The £750 covers implementing the service worker, offline caching strategy, app manifest,
                    testing across devices, and configuring push notifications.
                  </p>
                  <p className="text-xs text-purple-700 italic">
                    Note: Can be added at any time - before launch or as a future upgrade
                  </p>
                </div>
              </div>

              {/* User System */}
              <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-blue-900 mb-2">Member Login & User System</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Full user authentication system with member profiles, protected content, and personalized experiences
                    </p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">£1,250</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Core Features:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✓ Member registration & login system</li>
                      <li>✓ Email verification</li>
                      <li>✓ Password reset functionality</li>
                      <li>✓ User profiles with photos</li>
                      <li>✓ Edit profile information</li>
                      <li>✓ Member-only content areas</li>
                      <li>✓ Role-based permissions (member, club leader, admin)</li>
                      <li>✓ Admin dashboard for user management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Member Benefits:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>👤 Personal profile pages</li>
                      <li>🎫 View "My Events" (registered events)</li>
                      <li>🛒 Order history & tracking</li>
                      <li>📄 Access to member-only resources</li>
                      <li>💬 Comment on news/events (optional)</li>
                      <li>🏆 Competition entry tracking</li>
                      <li>📱 Personalized dashboard</li>
                      <li>🔔 Custom notification preferences</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-3">
                  <h4 className="font-semibold text-sm text-blue-900 mb-2">Integration Options:</h4>
                  <div className="space-y-2 text-sm text-blue-800">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <p>
                        <strong>Standalone System:</strong> New user database managed entirely within website (£1,250)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <p>
                        <strong>Silo Database Sync:</strong> Login using Silo credentials + sync member data (£2,500 - requires Silo API)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <p>
                        <strong>Social Login:</strong> Add "Login with Google/Facebook" option (+£250)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-900 mb-2">
                    <strong>Why Add This?</strong> A user system transforms the website from informational to interactive:
                  </p>
                  <ul className="space-y-1 text-sm text-green-800">
                    <li>• Members feel more connected to Norfolk YFC</li>
                    <li>• Track event attendance and engagement</li>
                    <li>• Personalized content increases return visits</li>
                    <li>• Easier membership renewal reminders</li>
                    <li>• Foundation for future community features (forums, photo sharing, etc.)</li>
                  </ul>
                </div>
              </div>

              {/* Combined Package */}
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6 border-2 border-purple-300">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg mb-1">🎁 Combined Package: PWA App + User System</h3>
                    <p className="text-sm text-gray-700">Get both enhancements together and save £250</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 line-through">£2,000</p>
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl px-6 py-2">
                      £1,750
                    </Badge>
                  </div>
                </div>
                <div className="bg-white/80 rounded-lg p-4">
                  <p className="text-sm text-gray-800">
                    <strong>Perfect combination:</strong> Members can download the Norfolk YFC app to their phones,
                    log in to their personal accounts, get push notifications about events they're registered for,
                    and access their digital membership cards offline. This creates a modern, engaging member experience
                    that rivals national organisations.
                  </p>
                </div>
              </div>

              {/* Other Upgrades */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Other Potential Upgrades (Future):</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between">
                    <span>Member forum/community board:</span>
                    <span className="font-semibold">From £800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Photo gallery with member uploads:</span>
                    <span className="font-semibold">From £500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Competition entry & voting system:</span>
                    <span className="font-semibold">From £600</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Advanced analytics dashboard:</span>
                    <span className="font-semibold">From £400</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email newsletter automation:</span>
                    <span className="font-semibold">From £350</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Custom feature development:</span>
                    <span className="font-semibold">£50/hour</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3 italic">
                  All upgrades can be added at any time - no need to commit upfront. Build features as your needs grow.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why This Pricing & Mutual Value */}
        <Card className="border-2 border-green-500/30 bg-green-50/50">
          <CardHeader>
            <CardTitle className="text-2xl text-green-900">Why This Pricing Structure?</CardTitle>
            <CardDescription className="text-green-700">
              Competitive pricing that creates mutual value for both parties
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-4">How I Can Offer Competitive Rates:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>No Agency Overhead:</strong> Solo developer means no office rent, admin staff, or
                      sales team costs to pass on
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>Modern Workflow:</strong> Using latest technologies and AI-assisted development for
                      faster, more efficient delivery
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>Below VAT Threshold:</strong> Saving you 20% compared to VAT-registered agencies -
                      no VAT to add to any costs
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>Community Pricing:</strong> Deliberately competitive rates for not-for-profit
                      organisations and agricultural sector
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-blue-200">
                <h4 className="font-semibold text-lg mb-3 text-blue-900">Value I Gain From This Partnership:</h4>
                <p className="text-sm text-blue-800 mb-4">
                  Working with Norfolk YFC provides significant professional value beyond the project fee:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
                  <div className="flex items-start gap-2">
                    <Award className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>Portfolio Showcase:</strong> A high-profile Norfolk organisation website demonstrates
                      capability to potential clients across the agricultural sector
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>Traffic & Exposure:</strong> Norfolk YFC's website traffic and social media presence
                      brings visibility to my work with thousands of members, families, and stakeholders
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>Sector Credibility:</strong> Association with Norfolk YFC strengthens credibility within
                      the farming and rural community
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>Network Access:</strong> Connections to other Young Farmers clubs, agricultural organisations,
                      and potential future clients
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>Case Study Value:</strong> Success metrics from Norfolk YFC's website help win future
                      projects in charity and agricultural sectors
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>Ongoing Relationship:</strong> Long-term support contract provides stable income and
                      opportunities for future feature development
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-100 rounded-lg p-6 border-2 border-green-300">
                <h4 className="font-semibold text-lg mb-3 text-green-900">Win-Win Partnership:</h4>
                <p className="text-sm text-green-800">
                  This competitive pricing reflects the <strong>mutual value</strong> of our partnership. Norfolk YFC receives
                  a high-quality, feature-rich website at an affordable price, while I gain a prestigious portfolio piece,
                  exposure to thousands of potential clients, and credibility in the agricultural sector. The ongoing support
                  arrangement ensures I remain invested in Norfolk YFC's success, creating a long-term partnership rather than
                  a one-off transaction.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back to Tender */}
        <div className="mt-8 text-center">
          <Link
            href="/tender"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
          >
            ← Back to Full Tender Submission
          </Link>
        </div>
      </div>
    </div>
  );
}
