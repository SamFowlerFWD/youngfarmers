import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Breadcrumb } from "@/components/ui/breadcrumb";
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
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Tender Submission", href: "/tender" },
          { label: "Pricing & Costs" }
        ]} />

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
                        <p className="font-medium">Hosting, Management & GDPR Compliance (per month)</p>
                        <p className="text-sm text-gray-600">
                          Private server hosting for GDPR compliance, SSL certificate, automated backups, CDN,
                          99.9% uptime guarantee, security updates, bug fixes, small content changes, performance
                          monitoring, technical support
                        </p>
                      </td>
                      <td className="p-4 text-right font-semibold">£80</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">
                        <p className="font-medium">Production Charges (one-time)</p>
                        <p className="text-sm text-gray-600">
                          Initial website build, CMS setup, all integrations, content migration, testing, training
                        </p>
                        <p className="text-xs text-green-600 mt-1 font-semibold">
                          ✨ AI-optimised build process - savings passed to client
                        </p>
                      </td>
                      <td className="p-4 text-right font-semibold">£1,995</td>
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
                      <td className="p-4 text-right font-bold text-2xl">£2,955</td>
                    </tr>
                    <tr className="bg-primary/90">
                      <td className="p-4 font-semibold">Annual Running Costs (Year 2 onwards)</td>
                      <td className="p-4 text-right font-semibold text-lg">£960/year</td>
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
                      <span className="font-semibold">£1,995</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hosting + Management (12 months @ £80/mo):</span>
                      <span className="font-semibold">£960</span>
                    </div>
                    <div className="border-t border-blue-300 pt-2 mt-2 flex justify-between font-bold text-lg">
                      <span>Total Year 1:</span>
                      <span>£2,955</span>
                    </div>
                    <p className="text-xs mt-2 text-blue-700">
                      ✓ No VAT to add • ✓ No hidden fees • ✓ All-inclusive pricing
                    </p>
                    <p className="text-xs mt-2 text-green-700 font-semibold">
                      ✨ AI-optimised development - £500+ saving passed to you
                    </p>
                    <p className="text-xs mt-2 text-blue-800 font-semibold">
                      Payment: £600 deposit (30%) + £1,395 on completion (70%)
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
                      <span>Hosting + Management (annual):</span>
                      <span className="font-semibold">£960</span>
                    </div>
                    <div className="border-t border-green-300 pt-2 mt-2 flex justify-between font-bold text-lg">
                      <span>Total Year 2+:</span>
                      <span>£960/year</span>
                    </div>
                    <p className="text-xs mt-2 text-green-700">
                      Billed annually: £960/year (equivalent to £80/month)
                    </p>
                    <p className="text-xs mt-2 text-green-800 font-semibold">
                      Minimum 2-year commitment from launch
                    </p>
                  </div>
                </div>
              </div>

              {/* Hosting Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Managed Hosting for GDPR Compliance</h3>
                <p className="text-sm text-gray-700 mb-3">
                  All websites are hosted on private servers managed by me to ensure full GDPR compliance and data protection:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Why Managed Hosting?</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• GDPR compliance guaranteed</li>
                      <li>• UK-based private server infrastructure</li>
                      <li>• Full data protection controls</li>
                      <li>• Secure member data handling</li>
                      <li>• 99.9% uptime guarantee</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">What's Included</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Private server hosting</li>
                      <li>• SSL certificates</li>
                      <li>• Automated daily backups</li>
                      <li>• CDN and performance optimisation</li>
                      <li>• Security monitoring and updates</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    VPS Server Specifications
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                    <div className="bg-blue-50 rounded p-2">
                      <p className="font-semibold text-blue-900">4 vCPU Cores</p>
                      <p className="text-blue-700">High performance processing</p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="font-semibold text-green-900">16 GB RAM</p>
                      <p className="text-green-700">Fast response times</p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="font-semibold text-purple-900">200 GB NVMe</p>
                      <p className="text-purple-700">Ultra-fast storage</p>
                    </div>
                    <div className="bg-orange-50 rounded p-2">
                      <p className="font-semibold text-orange-900">16 TB Bandwidth</p>
                      <p className="text-orange-700">Unlimited traffic capacity</p>
                    </div>
                    <div className="bg-pink-50 rounded p-2">
                      <p className="font-semibold text-pink-900">Weekly Backups</p>
                      <p className="text-pink-700">+ 1 snapshot included</p>
                    </div>
                    <div className="bg-indigo-50 rounded p-2">
                      <p className="font-semibold text-indigo-900">Security Suite</p>
                      <p className="text-indigo-700">AI assistant + malware scanner</p>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-gray-700">
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                      <span>Dedicated IP Address</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                      <span>Full Root Access</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                      <span>UK Data Centre</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3 italic">
                    Enterprise-grade infrastructure ensures exceptional performance and reliability for Norfolk YFC
                  </p>
                </div>

                <p className="text-xs text-gray-600 mt-3 italic">
                  Note: £960/year (£80/month) covers all hosting, management, and GDPR compliance requirements.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What's Included */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">What's Included in Production (£1,995)</CardTitle>
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
            <CardTitle className="text-2xl">What's Included in Hosting + Management (£80/month)</CardTitle>
            <CardDescription>Comprehensive hosting, maintenance, support and GDPR compliance</CardDescription>
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
            <Alert className="mt-6 bg-blue-50 border-blue-200">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription>
                <p className="text-sm text-blue-900 mb-2">
                  <strong>Support Contract Terms:</strong>
                </p>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <strong>Minimum commitment:</strong> 2 years from launch date (billed annually at £960/year)</li>
                  <li>• <strong>Termination after 2 years:</strong> Requires £195 admin fee covering:
                    <ul className="ml-6 mt-1 space-y-1">
                      <li>- Comprehensive technical documentation</li>
                      <li>- Complete codebase handover</li>
                      <li>- Server access credentials and transfer</li>
                      <li>- Knowledge transfer session</li>
                    </ul>
                  </li>
                  <li>• <strong>After termination:</strong> Full ownership and access to all code and systems (client responsible for own hosting)</li>
                </ul>
              </AlertDescription>
            </Alert>
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
              Project Timeline: 21 November 2025 → Mid-February 2026
            </CardTitle>
            <CardDescription>~12 week delivery - complete by mid-February (May 31st is contractual end date with buffer)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold">Weeks 1-2: Discovery & Planning</h4>
                  <Badge variant="secondary">Nov 21 - Dec 5</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Requirements workshop, content audit, technical documentation, project setup, GDPR requirements mapping
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold">Weeks 3-5: Design & Prototyping</h4>
                  <Badge variant="secondary">Dec 6 - Dec 26</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Visual design, component library, page layouts, design approval
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold">Weeks 6-10: Core Development & Compliance</h4>
                  <Badge variant="secondary">Dec 27 - Jan 30</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Build all pages, CMS setup, e-commerce, map, events, jobs board, integrations, GDPR compliance implementation,
                  accessibility features, security hardening (concurrent with feature development)
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold">Weeks 11-12: Testing, Training & Launch</h4>
                  <Badge variant="secondary">Jan 31 - Feb 13</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Content migration, QA testing, accessibility audit, security testing, staff training, go-live
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2 bg-primary/5">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold">Feb 14 - May 31: Post-Launch Buffer</h4>
                  <Badge className="bg-primary">Warranty Period</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Project complete mid-February. Remaining period provides buffer for any adjustments, bug fixes, and warranty support
                </p>
              </div>
            </div>
            <Alert className="mt-6">
              <Info className="h-4 w-4" />
              <AlertDescription className="text-sm">
                <strong>Realistic Timeline:</strong> The complete project will be delivered by mid-February 2026. Whilst the website
                will appear "done" on the surface relatively quickly, substantial technical work is required throughout to ensure proper
                GDPR compliance, legal requirements, security hardening, accessibility certification, and thorough testing. The May 31st
                date is the contractual end date providing buffer for any final adjustments. Client involvement: bi-weekly check-ins,
                design approval (Week 6), content reviews (Weeks 10-11), training session (Week 11), launch (mid-February).
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
                  <p className="text-2xl font-bold text-blue-900">£600</p>
                  <p className="text-xs text-blue-600 mt-1">(30% deposit)</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <p className="text-sm text-green-700 mb-1">Upon Completion</p>
                  <p className="text-2xl font-bold text-green-900">£1,395</p>
                  <p className="text-xs text-green-600 mt-1">(70% balance)</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                  <p className="text-sm text-purple-700 mb-1">Annual (ongoing)</p>
                  <p className="text-2xl font-bold text-purple-900">£960</p>
                  <p className="text-xs text-purple-600 mt-1">(Hosting + Management)</p>
                </div>
              </div>
              <Alert className="bg-blue-50 border-blue-200">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-sm text-blue-900">
                  <strong>Payment Terms:</strong> 70% balance due upon completion and handover, even if delivered ahead of schedule.
                  Early delivery does not affect payment terms.
                </AlertDescription>
              </Alert>
              <Alert className="bg-amber-50 border-amber-200 mt-4">
                <Info className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-sm text-amber-900">
                  <strong>Contract Terms:</strong> Hosting + Management billed annually (£960/year) with minimum 2-year commitment from launch date.
                  After 2 years, termination requires a £195 admin fee for comprehensive documentation and complete codebase handover.
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
                  <h4 className="font-semibold text-sm text-blue-900 mb-2">What's Included (£1,250):</h4>
                  <div className="space-y-2 text-sm text-blue-800">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <p>
                        <strong>Standalone System:</strong> Complete user authentication with member profiles, permissions, and dashboard
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <p>
                        <strong>Social Login Option:</strong> Add "Login with Google/Facebook" (+£250)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <p>
                        <strong>Silo Integration:</strong> See "Silo Member Database Integration" section below for pricing options (£0-1,000)
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

              {/* Silo Database Integration */}
              <div className="bg-white rounded-lg p-6 border-2 border-teal-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-teal-900 mb-2">Silo Member Database Integration</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Connect your existing Silo member database to the website for seamless member data management
                    </p>
                  </div>
                  <Badge className="bg-teal-100 text-teal-800 text-lg px-4 py-2">From £0</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">Option 1: Simple Portal</h4>
                      <Badge className="bg-green-600 text-white text-xs">Included</Badge>
                    </div>
                    <p className="text-xs text-gray-700 mb-2">
                      Direct link/iframe to existing Silo member portal
                    </p>
                    <div className="bg-white rounded p-2 text-xs text-gray-600 border border-blue-200">
                      <p className="font-semibold text-blue-900">✓ Instantly Accessible</p>
                      <p className="mt-1">No additional development cost</p>
                    </div>
                  </div>

                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">Option 2: Read-Only Sync</h4>
                      <Badge className="bg-green-700 text-white text-xs">£250-500</Badge>
                    </div>
                    <p className="text-xs text-gray-700 mb-2">
                      Display member data on website via one-way sync
                    </p>
                    <div className="bg-white rounded p-2 text-xs text-gray-600 border border-green-200">
                      <p className="font-semibold text-green-900">Requirements:</p>
                      <p className="mt-1">• Silo API docs</p>
                      <p>• Read-only access</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">Option 3: Bidirectional API</h4>
                      <Badge className="bg-purple-700 text-white text-xs">£600-1,000</Badge>
                    </div>
                    <p className="text-xs text-gray-700 mb-2">
                      Full two-way sync with automatic updates
                    </p>
                    <div className="bg-white rounded p-2 text-xs text-gray-600 border border-purple-200">
                      <p className="font-semibold text-purple-900">⚠️ Pricing Note:</p>
                      <p className="mt-1">Quote after API review</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-semibold text-sm text-amber-900 mb-2">
                    📋 What We Need to Provide Accurate Pricing
                  </h4>
                  <div className="space-y-1 text-sm text-amber-800">
                    <p>• <strong>Silo API Documentation</strong> - Technical specifications and endpoints</p>
                    <p>• <strong>API Access Credentials</strong> - Test environment access for development</p>
                    <p>• <strong>Data Field Mapping</strong> - Which member fields to sync and display</p>
                    <p className="text-xs italic mt-2">
                      Note: Cannot price Options 2 & 3 accurately without reviewing Silo's API complexity and limitations
                    </p>
                  </div>
                </div>

                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-teal-900 mb-2">
                    <strong>Recommendation:</strong> Start with Option 1 (included) for immediate functionality
                  </p>
                  <ul className="space-y-1 text-sm text-teal-800">
                    <li>• No additional cost or development time</li>
                    <li>• Members can access Silo portal directly from website</li>
                    <li>• Can upgrade to Options 2 or 3 later once API documentation is available</li>
                    <li>• Provides value immediately while avoiding rushed integration decisions</li>
                  </ul>
                </div>
              </div>

              {/* Native Mobile App */}
              <div className="bg-white rounded-lg p-6 border-2 border-indigo-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-indigo-900 mb-2">Native Mobile App (iOS & Android)</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Full native mobile application for iOS and Android with API integration to both Silo database and website database
                    </p>
                  </div>
                  <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">£3,500</Badge>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-amber-900 font-semibold mb-1">
                    ⚠️ Requires: Member Login & User System (£1,250)
                  </p>
                  <p className="text-xs text-amber-800">
                    The native app needs the user authentication system in place to function. This must be implemented first.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Native App Features:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✓ True native iOS and Android apps</li>
                      <li>✓ Published on App Store & Google Play</li>
                      <li>✓ Full offline functionality</li>
                      <li>✓ Native push notifications</li>
                      <li>✓ Device camera & location integration</li>
                      <li>✓ Biometric authentication (Face ID, fingerprint)</li>
                      <li>✓ Native UI/UX optimised for each platform</li>
                      <li>✓ Background sync capabilities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Database Integration:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>🔗 API integration to website database</li>
                      <li>🔗 API integration to Silo member database</li>
                      <li>🔄 Real-time sync between systems</li>
                      <li>📊 Access member data from both sources</li>
                      <li>🎫 Event bookings sync across platforms</li>
                      <li>🛒 Shop orders accessible in app</li>
                      <li>👤 Member profiles from Silo data</li>
                      <li>📈 Competition entries and results</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-3">
                  <h4 className="font-semibold text-sm text-indigo-900 mb-2">What Makes This Different from PWA?</h4>
                  <div className="space-y-2 text-sm text-indigo-800">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <p>
                        <strong>Store Presence:</strong> Listed in App Store & Google Play for discoverability
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <p>
                        <strong>Native Performance:</strong> Faster, smoother, more responsive than web-based PWA
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <p>
                        <strong>Device Features:</strong> Full access to camera, GPS, biometrics, and native APIs
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <p>
                        <strong>Concurrent Database Access:</strong> Pulls data from both website and Silo simultaneously
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-900 mb-2">
                    <strong>Perfect For:</strong> Organisations wanting maximum member engagement and modern digital presence
                  </p>
                  <ul className="space-y-1 text-sm text-green-800">
                    <li>• Professional presence alongside major national organisations</li>
                    <li>• Real-time access to Silo member data within the app</li>
                    <li>• Seamless experience between website and mobile app</li>
                    <li>• Enhanced member engagement through native app experience</li>
                    <li>• Future-ready for expanding digital services</li>
                  </ul>
                  <p className="text-xs text-green-700 mt-3 italic">
                    Note: Requires Silo API documentation and access credentials
                  </p>
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

              {/* Ultimate Package */}
              <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 rounded-lg p-6 border-2 border-indigo-300 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg mb-1">🚀 Ultimate Package: User System + PWA + Native App</h3>
                    <p className="text-sm text-gray-700">Complete mobile solution with all platforms covered</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 line-through">£5,500</p>
                    <Badge className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white text-xl px-6 py-2">
                      £5,000
                    </Badge>
                  </div>
                </div>
                <div className="bg-white/80 rounded-lg p-4">
                  <p className="text-sm text-gray-800 mb-3">
                    <strong>Complete digital ecosystem:</strong> Member login system, PWA for easy installation,
                    plus full native apps on both iOS and Android. All systems connected to both your website database
                    and Silo member database for unified member experience.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-gray-700">
                    <div className="bg-blue-50 p-2 rounded">
                      <strong>Website:</strong> Full user system with profiles
                    </div>
                    <div className="bg-purple-50 p-2 rounded">
                      <strong>PWA:</strong> Installable web app
                    </div>
                    <div className="bg-indigo-50 p-2 rounded">
                      <strong>Native:</strong> App Store presence
                    </div>
                  </div>
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

        {/* Referral Program */}
        <Card id="referral-programme" className="mb-8 border-2 border-purple-500/30 bg-gradient-to-br from-purple-50 to-pink-50 scroll-mt-24">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Award className="h-6 w-6 text-purple-600" />
              Referral Programme: Generate Income for Norfolk YFC
            </CardTitle>
            <CardDescription>
              Earn commission by referring other regions and organisations to use this system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Introduction */}
              <div className="bg-white rounded-lg p-6 border-2 border-purple-200">
                <p className="text-gray-700 mb-4">
                  Norfolk YFC can generate <strong>passive income</strong> by referring other county federations and organisations.
                  Your members and their families can also earn commission by referring local businesses, while those businesses
                  receive a discount. Everyone wins.
                </p>
                <Alert className="mb-4 bg-blue-50 border-blue-200">
                  <Info className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-xs text-blue-900">
                    <strong>Note:</strong> Prices shown below are example figures for illustration. Actual project costs vary based
                    on requirements, complexity, and scope. Each referral receives a custom quote.
                  </AlertDescription>
                </Alert>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Tier 1: Regional Referrals
                    </h4>
                    <p className="text-sm text-purple-800 mb-2">
                      <strong>Norfolk YFC receives 25% commission</strong> when you refer another county YFC federation or regional organisation
                    </p>
                    <p className="text-xs text-purple-700 italic">
                      Example: Suffolk YFC at £2,495 → Norfolk YFC earns £623.75
                    </p>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                    <h4 className="font-semibold text-pink-900 mb-2 flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Tier 2: Member/Family Referrals
                    </h4>
                    <p className="text-sm text-pink-800 mb-2">
                      <strong>Norfolk YFC receives 10% commission + Referral gets 10% discount</strong> when members refer local businesses
                    </p>
                    <p className="text-xs text-pink-700 italic">
                      Example: Farm shop at £1,000 → Norfolk YFC earns £100, business saves £100
                    </p>
                  </div>
                </div>
              </div>

              {/* Tier 1: Regional Referrals */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold mb-4 text-purple-900">Tier 1: Regional Referrals (25% Commission)</h3>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold mb-3">Who This Applies To:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Other county YFC federations (Suffolk YFC, Essex YFC, Cambridgeshire YFC, etc.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Regional agricultural organisations and federations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Other youth agricultural groups nationwide</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Similar membership-based charitable organisations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-900">Financial Breakdown (Example):</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-purple-200">
                        <span className="text-gray-700">Example project cost</span>
                        <span className="font-semibold">£2,495.00</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-purple-200">
                        <span className="text-gray-700">Norfolk YFC commission (25%)</span>
                        <span className="font-bold text-purple-900 text-lg">£623.75</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-purple-200">
                        <span className="text-gray-700">My fee (75%)</span>
                        <span className="font-semibold">£1,871.25</span>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-gray-700 font-medium">Referred organisation pays</span>
                        <span className="font-bold">£2,495.00</span>
                      </div>
                    </div>
                    <p className="text-xs text-purple-700 mt-3 italic">
                      Note: Actual pricing varies by project scope. Each referral receives custom quote.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold mb-3">Potential Annual Income Examples (Based on £2,495 avg project):</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                      <div className="bg-gray-50 rounded p-3 text-center">
                        <p className="text-2xl font-bold text-purple-600 mb-1">£623.75</p>
                        <p className="text-xs text-gray-600">From 1 county YFC referral</p>
                      </div>
                      <div className="bg-gray-50 rounded p-3 text-center">
                        <p className="text-2xl font-bold text-purple-600 mb-1">£3,118.75</p>
                        <p className="text-xs text-gray-600">From 5 regional referrals</p>
                      </div>
                      <div className="bg-gray-50 rounded p-3 text-center">
                        <p className="text-2xl font-bold text-purple-600 mb-1">£6,237.50</p>
                        <p className="text-xs text-gray-600">From 10 regional referrals</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-3 text-center italic">
                      Examples only - actual commissions vary based on project pricing
                    </p>
                  </div>
                </div>
              </div>

              {/* Tier 2: Member/Family Referrals */}
              <div className="border-l-4 border-pink-500 pl-6">
                <h3 className="text-xl font-bold mb-4 text-pink-900">Tier 2: Member/Family Referrals (Norfolk YFC Earns 10% + Business Gets 10% Discount)</h3>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold mb-3">Who This Applies To:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-pink-600 mt-0.5 flex-shrink-0" />
                        <span>Norfolk YFC members referring their own businesses (family farms, agricultural enterprises)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-pink-600 mt-0.5 flex-shrink-0" />
                        <span>Member families referring local agricultural businesses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-pink-600 mt-0.5 flex-shrink-0" />
                        <span>Members referring local farm shops, rural businesses, agricultural suppliers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-pink-600 mt-0.5 flex-shrink-0" />
                        <span>Community organisations and local charities</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-pink-50 rounded-lg p-6 border-2 border-pink-200">
                    <h4 className="font-semibold mb-3 text-pink-900">Financial Breakdown (Example):</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-pink-200">
                        <span className="text-gray-700">Example project cost</span>
                        <span className="font-semibold">£1,000.00</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-pink-200">
                        <span className="text-gray-700">Discount for referred business (10%)</span>
                        <span className="font-semibold text-green-600">-£100.00</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-pink-200">
                        <span className="text-gray-700">Referred business pays</span>
                        <span className="font-bold">£900.00</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-pink-200">
                        <span className="text-gray-700">Norfolk YFC commission (10% of base)</span>
                        <span className="font-bold text-pink-900 text-lg">£100.00</span>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-gray-700 font-medium">My fee (after commission + discount)</span>
                        <span className="font-semibold">£800.00</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-pink-100 rounded border border-pink-300">
                      <p className="text-xs text-pink-900">
                        <strong>Win-Win-Win:</strong> Business saves £100, Norfolk YFC earns £100,
                        I still receive fair compensation for quality work
                      </p>
                    </div>
                    <p className="text-xs text-pink-700 mt-3 italic">
                      Note: Actual pricing varies by project scope. Each referral receives custom quote.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold mb-3">Norfolk YFC Income Potential from Member Referrals (Based on £1,000 avg project):</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                      <div className="bg-gray-50 rounded p-3 text-center">
                        <p className="text-2xl font-bold text-pink-600 mb-1">£100</p>
                        <p className="text-xs text-gray-600">From 1 business referral</p>
                      </div>
                      <div className="bg-gray-50 rounded p-3 text-center">
                        <p className="text-2xl font-bold text-pink-600 mb-1">£500</p>
                        <p className="text-xs text-gray-600">From 5 business referrals</p>
                      </div>
                      <div className="bg-gray-50 rounded p-3 text-center">
                        <p className="text-2xl font-bold text-pink-600 mb-1">£1,000</p>
                        <p className="text-xs text-gray-600">From 10 business referrals</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-3 text-center italic">
                      Examples only - actual commissions vary based on project pricing. Payments made to Norfolk YFC organisation quarterly.
                    </p>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold mb-4">How the Referral Programme Works:</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 border-2 border-blue-500">
                      <span className="text-xl font-bold text-blue-600">1</span>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">Make Introduction</h4>
                    <p className="text-xs text-gray-600">
                      Norfolk YFC or member introduces potential client via email/phone
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 border-2 border-green-500">
                      <span className="text-xl font-bold text-green-600">2</span>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">I Provide Quote</h4>
                    <p className="text-xs text-gray-600">
                      I assess requirements and provide detailed proposal with discount applied
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 border-2 border-purple-500">
                      <span className="text-xl font-bold text-purple-600">3</span>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">Project Delivered</h4>
                    <p className="text-xs text-gray-600">
                      Website built, tested, and launched successfully
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 border-2 border-orange-500">
                      <span className="text-xl font-bold text-orange-600">4</span>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">Commission Paid</h4>
                    <p className="text-xs text-gray-600">
                      Payment processed within 7 days of final invoice being paid
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold mb-3">Referral Programme Terms:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Commission Payment:</h4>
                    <ul className="space-y-1 ml-4 text-xs">
                      <li>• Paid within 7 days of referred client's final invoice being settled</li>
                      <li>• Paid via bank transfer (BACS)</li>
                      <li>• All referral commissions (both tiers) paid to Norfolk YFC organisation</li>
                      <li>• Norfolk YFC can choose to reward/recognize referring members internally</li>
                      <li>• Quarterly statements provided for record-keeping</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Eligibility Requirements:</h4>
                    <ul className="space-y-1 ml-4 text-xs">
                      <li>• Must be first point of contact with referred organisation</li>
                      <li>• Referred project must be completed and paid in full</li>
                      <li>• Production value minimum £500 to qualify for commission</li>
                      <li>• Cannot combine with other discounts or offers</li>
                      <li>• Commission applies to production costs only (not hosting)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Regional Referrals (25%):</h4>
                    <ul className="space-y-1 ml-4 text-xs">
                      <li>• Applies to county YFC federations nationwide</li>
                      <li>• Applies to similar membership organisations</li>
                      <li>• Can be structured as Norfolk YFC acts as reseller/partner</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Member Referrals (10% + 10%):</h4>
                    <ul className="space-y-1 ml-4 text-xs">
                      <li>• Member must be current Norfolk YFC member at time of referral</li>
                      <li>• Referred business receives automatic 10% discount</li>
                      <li>• Norfolk YFC receives 10% commission after completion</li>
                      <li>• Multiple referrals encouraged - no limits</li>
                    </ul>
                  </div>
                </div>
                <Alert className="mt-4 bg-blue-50 border-blue-200">
                  <Info className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-xs text-blue-900">
                    <strong>Tax & Accounting:</strong> All commission payments made to Norfolk YFC organisation as
                    organisational income. Norfolk YFC is responsible for declaring this income to HMRC. I provide
                    detailed quarterly statements for your accounting records showing all referrals, commissions earned,
                    and payment dates.
                  </AlertDescription>
                </Alert>
              </div>

              {/* Why This Benefits Everyone */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 border-2 border-green-300">
                <h3 className="text-lg font-bold mb-3 text-green-900">Why This Benefits Everyone:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">For Norfolk YFC:</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>✓ Generate passive income from regional and member referrals</li>
                      <li>✓ Help other county federations improve their digital presence</li>
                      <li>✓ Strengthen relationships within YFC network</li>
                      <li>✓ Support local agricultural businesses and community</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">For Members:</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>✓ Help grow Norfolk YFC's income and capabilities</li>
                      <li>✓ Support family farms and agricultural enterprises</li>
                      <li>✓ Strengthen rural business community</li>
                      <li>✓ Help businesses modernise while saving them money</li>
                      <li>✓ Potential internal rewards/recognition from Norfolk YFC</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">For Referred Businesses:</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>✓ Receive 10% discount on production costs</li>
                      <li>✓ Work with proven developer with YFC experience</li>
                      <li>✓ Support local agricultural community</li>
                      <li>✓ Get quality website at below-market rate</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-4 text-center">
                  <strong>This programme turns Norfolk YFC's success into opportunities for the entire agricultural community</strong>
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
