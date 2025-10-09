import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  CheckCircle2,
  Clock,
  PoundSterling,
  Calendar,
  User,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function TLDRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">TL;DR - Quick Summary</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Everything you need to know in under 2 minutes
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* The Bottom Line */}
        <Card className="mb-8 border-2 border-green-500 bg-green-50/50">
          <CardHeader>
            <CardTitle className="text-3xl text-green-900">The Bottom Line</CardTitle>
            <CardDescription className="text-lg text-green-700">
              What you're getting and what it costs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border-2 border-green-200">
                <PoundSterling className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-bold text-2xl text-green-900 mb-1">£2,955</h3>
                <p className="text-sm text-gray-600 mb-2">Total Year 1 (all-inclusive)</p>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>£600 deposit (30%)</p>
                  <p>£1,395 on completion (70%)</p>
                  <p>£960/year hosting thereafter</p>
                  <p className="text-green-600 font-semibold pt-1">✨ AI-optimised</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                <Calendar className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-bold text-2xl text-blue-900 mb-1">12 Weeks</h3>
                <p className="text-sm text-gray-600 mb-2">Complete by mid-February</p>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>Start: 21 Nov 2025</p>
                  <p>Launch: Mid-Feb 2026</p>
                  <p>May 31st = buffer period</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-purple-200">
                <Zap className="h-8 w-8 text-purple-600 mb-2" />
                <h3 className="font-bold text-2xl text-purple-900 mb-1">Everything</h3>
                <p className="text-sm text-gray-600 mb-2">All RFQ requirements met</p>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>✓ E-commerce & shop</p>
                  <p>✓ Events & bookings</p>
                  <p>✓ Interactive map</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Answers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* What You Get */}
          <Card>
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-xl flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                What You Get
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Modern website</strong> - Fast, mobile-friendly, professional</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Full e-commerce</strong> - Stripe payments, shop, memberships</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Event management</strong> - Bookings, QR tickets, calendar sync</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Interactive map</strong> - Find clubs, filter by location</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Easy CMS</strong> - Update content yourself, no coding needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Job board</strong> - Post agricultural jobs, manage applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>GDPR compliant</strong> - Secure hosting, data protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Training included</strong> - Full handover and documentation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Who Am I */}
          <Card>
            <CardHeader className="bg-green-50">
              <CardTitle className="text-xl flex items-center gap-2">
                <User className="h-5 w-5 text-green-600" />
                Who Am I?
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Sam Fowler</p>
                  <p className="text-gray-600">Full-stack web developer specialising in agricultural & rural organisations</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Experience</p>
                  <p className="text-gray-600">5+ years building websites for equestrian, agricultural, and community organisations</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Relevant Work</p>
                  <p className="text-gray-600">J&J Horseboxes - Full e-commerce platform with custom configurator and dealer network</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Insurance</p>
                  <p className="text-gray-600">£1M Professional Indemnity Insurance</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Contact</p>
                  <p className="text-gray-600">info@sam-fowler.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card>
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-xl flex items-center gap-2">
                <PoundSterling className="h-5 w-5 text-purple-600" />
                Payment Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Deposit (30%)</p>
                  <p className="text-gray-600">£600 upon contract signing</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Balance (70%)</p>
                  <p className="text-gray-600">£1,395 upon completion and handover</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Early Delivery</p>
                  <p className="text-gray-600">Payment terms don't change if delivered early</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Ongoing Hosting</p>
                  <p className="text-gray-600">£960/year billed annually (£80/month)</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">AI-Optimised</p>
                  <p className="text-gray-600">Using AI tools to reduce build time - savings passed to you</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">No VAT</p>
                  <p className="text-gray-600">All prices are final - no VAT to add</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support & Commitment */}
          <Card>
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-xl flex items-center gap-2">
                <Shield className="h-5 w-5 text-orange-600" />
                Support & Commitment
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Minimum Term</p>
                  <p className="text-gray-600">2 years from launch date</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">What's Included</p>
                  <p className="text-gray-600">Hosting, security updates, bug fixes, small content changes, technical support</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">After 2 Years</p>
                  <p className="text-gray-600">Can terminate with £500 fee for full documentation and codebase handover</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Server Specs</p>
                  <p className="text-gray-600">4 vCPU, 16GB RAM, 200GB NVMe - enterprise-grade performance</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Uptime</p>
                  <p className="text-gray-600">99.9% uptime guarantee with UK data centre</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Me */}
        <Card className="mb-8 border-2 border-blue-500/30">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-2xl">Why Choose Me?</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">💰 Best Value</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• No VAT (save 20%)</li>
                  <li>• AI-optimised development</li>
                  <li>• No hidden fees</li>
                  <li>• Transparent pricing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">⚡ Fast Delivery</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 12 weeks, not 27</li>
                  <li>• Done by mid-February</li>
                  <li>• Direct communication</li>
                  <li>• No bureaucracy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🎯 Specialist Knowledge</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Agricultural sector experience</li>
                  <li>• Understand rural communities</li>
                  <li>• Know your challenges</li>
                  <li>• Proven track record</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Optional Extras */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Optional Extras (Add Now or Later)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">PWA Mobile App</h4>
                  <Badge className="bg-purple-600">£750</Badge>
                </div>
                <p className="text-gray-600 text-xs">Downloadable app for iOS & Android</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">Member Login System</h4>
                  <Badge className="bg-blue-600">£1,250</Badge>
                </div>
                <p className="text-gray-600 text-xs">User accounts, profiles, member-only content</p>
              </div>

              <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">Silo Database Integration</h4>
                  <Badge className="bg-teal-600">£0-1,000</Badge>
                </div>
                <p className="text-gray-600 text-xs">Simple portal (free) to full API sync</p>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">Native Mobile App</h4>
                  <Badge className="bg-indigo-600">£3,500</Badge>
                </div>
                <p className="text-gray-600 text-xs">True iOS & Android apps on App Stores</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Risks & Mitigations */}
        <Alert className="mb-8 bg-amber-50 border-amber-200">
          <AlertDescription>
            <h3 className="font-bold text-amber-900 mb-3">⚠️ What Could Go Wrong (And How I'll Handle It)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-amber-900">
              <div>
                <p className="font-semibold mb-1">If I Get Sick/Injured</p>
                <p className="text-amber-800">Network of backup developers ready to step in. Your project continues.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">If Silo API Is Problematic</p>
                <p className="text-amber-800">Start with simple portal link (free), upgrade later when API is better understood.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">If Timeline Slips</p>
                <p className="text-amber-800">Weekly updates keep you informed. May 31st buffer provides safety net.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">If You're Unhappy</p>
                <p className="text-amber-800">70% payment only due on completion. You're protected until you're satisfied.</p>
              </div>
            </div>
          </AlertDescription>
        </Alert>

        {/* Next Steps */}
        <Card className="border-2 border-primary">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-2xl flex items-center gap-2">
              <ArrowRight className="h-6 w-6 text-primary" />
              Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Review the Demo</p>
                  <p className="text-sm text-gray-600">Explore this working prototype - it's 40% of what you'll get</p>
                  <Link href="/" className="text-sm text-primary hover:underline">View demo homepage →</Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Read Full Details (Optional)</p>
                  <p className="text-sm text-gray-600">Deep dive into pricing, requirements, compliance, contingency planning</p>
                  <Link href="/tender" className="text-sm text-primary hover:underline">View full tender submission →</Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Get in Touch</p>
                  <p className="text-sm text-gray-600">Questions? Ready to proceed? Let's talk.</p>
                  <a href="mailto:info@sam-fowler.com" className="text-sm text-primary hover:underline">info@sam-fowler.com →</a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back to Full Tender */}
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
