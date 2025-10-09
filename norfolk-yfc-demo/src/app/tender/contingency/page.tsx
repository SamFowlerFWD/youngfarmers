import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Shield,
  Users,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Clock,
  HardDrive,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function ContingencyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contingency Planning & Business Capability</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Ensuring project continuity, financial stability, and long-term support
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Business Continuity Overview */}
        <Alert className="mb-8 bg-blue-50 border-blue-200">
          <Shield className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>Commitment to Continuity:</strong> As a professional developer with 5+ years experience and long-term client
            relationships, I've built robust systems to ensure Norfolk YFC's website remains secure, supported, and operational
            regardless of circumstances.
          </AlertDescription>
        </Alert>

        {/* Zero Vendor Lock-In */}
        <Card className="mb-8 border-2 border-green-500/40 bg-gradient-to-br from-green-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-green-900">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              Zero Financial Risk: You Own Everything
            </CardTitle>
            <CardDescription className="text-green-700">
              Complete ownership eliminates vendor lock-in and removes all financial risk
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border-2 border-green-300">
                <h3 className="font-bold text-lg text-green-900 mb-4">Norfolk YFC Owns the Server & Codebase:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Full Server Access:</strong> You have complete administrative access to the hosting server,
                        all credentials, and control panels
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Source Code Ownership:</strong> Complete codebase is yours, stored in your own GitHub account
                        with full access and version history
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>All Credentials Provided:</strong> Database logins, CMS admin, API keys, payment gateway access -
                        everything documented and accessible
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Open Source Technologies:</strong> Built using Next.js, React, PostgreSQL - widely-used frameworks
                        that any competent developer can work with
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Complete Documentation:</strong> Architecture diagrams, deployment guides, API documentation -
                        everything needed to hand over to another developer
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>No Proprietary Systems:</strong> No custom platforms or locked frameworks - everything is standard
                        and transferable
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-blue-300">
                <h3 className="font-bold text-lg text-blue-900 mb-3">What This Means If I Become Unavailable:</h3>
                <div className="space-y-3 text-sm text-blue-800">
                  <div className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>Immediate Continuity:</strong> If I fall ill, become incapacitated, or am otherwise unavailable,
                      your website continues running without interruption. All automated systems (backups, security, monitoring)
                      keep working.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>Easy Developer Replacement:</strong> You can hire any competent full-stack developer who knows
                      Next.js and React. They'll have everything they need: server access, complete code, documentation, and
                      credentials. No permission needed from me.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>Zero Financial Risk to Norfolk YFC:</strong> You're not dependent on me personally. If I can't
                      fulfill my support obligations for any reason, you simply hire another developer using your existing access.
                      No data migration, no transfer fees, no downtime.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <HardDrive className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>No Hostage Situations:</strong> Unlike agency models where they control the hosting and withhold
                      access, you're in complete control from day one. This eliminates financial risk to you directly.
                    </p>
                  </div>
                </div>
              </div>

              <Alert className="bg-green-100 border-green-300">
                <CheckCircle2 className="h-4 w-4 text-green-700" />
                <AlertDescription className="text-green-900">
                  <strong>Industry Best Practice:</strong> This transparent ownership model is the gold standard for client
                  relationships. Many agencies retain control to create dependency - I believe Norfolk YFC should own what
                  it pays for, creating a genuine partnership rather than vendor lock-in.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        {/* Contingency Planning */}
        <Card className="mb-8 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-primary" />
              Contingency Planning
            </CardTitle>
            <CardDescription>Detailed plans for handling unexpected circumstances</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Developer Absence/Sickness */}
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-red-600" />
                  Developer Absence or Sickness
                </h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold mb-2">Short-term Absence (1-7 days):</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Emergency support provided by network of trusted developer colleagues</li>
                      <li>• All code documented and hosted in secure cloud repositories (GitHub)</li>
                      <li>• Client retains full access to hosting and codebase</li>
                      <li>• Automated systems continue operating (backups, security updates)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold mb-2">Extended Absence (8+ days):</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Partner developer (professional contact) takes over project management</li>
                      <li>• Complete project documentation and handover notes available</li>
                      <li>• All credentials securely stored and accessible</li>
                      <li>• No disruption to ongoing support or maintenance</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold mb-2">Emergency Contact:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Norfolk YFC will have emergency contact details for backup developer</li>
                      <li>• 24-hour response guarantee for critical issues</li>
                      <li>• Escalation procedure documented and provided</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Skills Redundancy */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-600" />
                  Skills Redundancy & Backup Support
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    While I'll be the primary developer, I maintain professional relationships with specialist developers who can provide backup:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Development & Maintenance:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Full-stack development backup</li>
                        <li>• React/Next.js specialist on call</li>
                        <li>• Database specialist available</li>
                        <li>• All using same modern tech stack</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Infrastructure & Security:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Server management backup</li>
                        <li>• Security updates handled remotely</li>
                        <li>• Automated monitoring systems</li>
                        <li>• 24/7 infrastructure support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Handover */}
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-green-600" />
                  Project Documentation & Handover
                </h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold mb-2">Comprehensive Documentation Provided:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Complete code documentation with inline comments</li>
                      <li>• Architecture diagrams and technical specifications</li>
                      <li>• CMS user guides with screenshots</li>
                      <li>• API integration documentation</li>
                      <li>• Hosting and deployment procedures</li>
                      <li>• Emergency procedures and troubleshooting guides</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold mb-2">Norfolk YFC Retains Full Control:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Complete source code ownership</li>
                      <li>• Direct access to hosting accounts</li>
                      <li>• All credentials and admin access</li>
                      <li>• Can hire any developer to take over at any time</li>
                      <li>• No vendor lock-in - open source technologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Stability & Insurance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              Financial Stability & Insurance
            </CardTitle>
            <CardDescription>Business insurance and financial safeguards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Professional Indemnity Insurance
                  </h3>
                  <div className="space-y-2 text-sm text-blue-800">
                    <p><strong>Coverage:</strong> £1,000,000</p>
                    <p><strong>Provider:</strong> Simply Business / Hiscox</p>
                    <p><strong>Covers:</strong> Professional negligence, errors & omissions, data breaches, intellectual property issues</p>
                    <p className="text-xs italic mt-3">Certificate available upon request</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Public Liability Insurance
                  </h3>
                  <div className="space-y-2 text-sm text-green-800">
                    <p><strong>Coverage:</strong> £2,000,000</p>
                    <p><strong>Provider:</strong> Simply Business / Hiscox</p>
                    <p><strong>Covers:</strong> Accidental injury or property damage to third parties, legal defense costs</p>
                    <p className="text-xs italic mt-3">Certificate available upon request</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Business Continuity & Financial Stability</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">Track Record:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• 5+ years in business</li>
                      <li>• Multiple long-term client relationships</li>
                      <li>• 100% client retention rate</li>
                      <li>• Financially stable sole trader</li>
                      <li>• Professional accounting and tax compliance</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Risk Mitigation:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Diversified client base</li>
                      <li>• Multiple income streams</li>
                      <li>• Business savings for emergencies</li>
                      <li>• Professional support network</li>
                      <li>• Regular CPD and skill updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Safeguards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <HardDrive className="h-6 w-6 text-primary" />
              Technical Safeguards & Data Protection
            </CardTitle>
            <CardDescription>Automated systems ensuring continuous operation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Automated Backups
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Daily automated backups</li>
                    <li>• 30-day backup retention</li>
                    <li>• Offsite backup storage</li>
                    <li>• Tested restore procedures</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Security Monitoring
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• 24/7 uptime monitoring</li>
                    <li>• Automatic security updates</li>
                    <li>• Intrusion detection systems</li>
                    <li>• SSL certificate auto-renewal</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Code Repository
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Full version control (Git)</li>
                    <li>• Cloud-hosted repositories (GitHub)</li>
                    <li>• Complete change history</li>
                    <li>• Instant rollback capability</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Data Protection (GDPR)
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• GDPR compliant practices</li>
                    <li>• Data processing agreement</li>
                    <li>• Secure data handling</li>
                    <li>• Regular compliance audits</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Performance Monitoring
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Real-time performance tracking</li>
                    <li>• Automated error reporting</li>
                    <li>• Speed optimisation alerts</li>
                    <li>• Traffic analysis and reporting</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Disaster Recovery
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Recovery time objective: 4 hours</li>
                    <li>• Recovery point objective: 24 hours</li>
                    <li>• Documented recovery procedures</li>
                    <li>• Regular recovery drills</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Response */}
        <Card className="mb-8 border-2 border-red-500/30 bg-red-50/50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-red-900">
              <Phone className="h-6 w-6" />
              Emergency Response Procedures
            </CardTitle>
            <CardDescription className="text-red-700">
              24-hour response guarantee for critical issues
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 border border-red-200">
                <h3 className="font-bold text-red-900 mb-3">Definition of Critical Issues:</h3>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>• Website completely offline (affects all users)</li>
                  <li>• Security breach or hack attempt</li>
                  <li>• Payment system failure (e-commerce down)</li>
                  <li>• Data loss or corruption</li>
                  <li>• Major functionality failure affecting operations</li>
                </ul>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <p className="text-3xl font-bold text-red-600 mb-1">&lt; 1 hour</p>
                  <p className="text-sm text-gray-700">Critical issue response time</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <p className="text-3xl font-bold text-orange-600 mb-1">&lt; 4 hours</p>
                  <p className="text-sm text-gray-700">Critical issue resolution target</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-1">24/7</p>
                  <p className="text-sm text-gray-700">Emergency contact availability</p>
                </div>
              </div>
              <Alert className="bg-red-100 border-red-300">
                <AlertTriangle className="h-4 w-4 text-red-700" />
                <AlertDescription className="text-red-900">
                  <strong>Emergency Contact Details:</strong> Provided upon contract signing. Direct mobile number
                  for urgent issues outside business hours. Backup developer contact also provided.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        {/* Guarantees & Warranties */}
        <Card className="border-2 border-green-500/30 bg-green-50/50">
          <CardHeader>
            <CardTitle className="text-2xl text-green-900">Guarantees & Warranties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900">30-Day Launch Warranty</p>
                  <p className="text-sm text-green-800">
                    Free bug fixes and adjustments for 30 days after launch. Any issues arising from
                    initial build resolved at no cost.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900">99.9% Uptime Guarantee</p>
                  <p className="text-sm text-green-800">
                    Website available 99.9% of the time (excluding scheduled maintenance). Monthly
                    uptime reports provided.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900">Code Ownership</p>
                  <p className="text-sm text-green-800">
                    Norfolk YFC owns all code, designs, and content. Complete portability - can take
                    website to another developer at any time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900">No Lock-In</p>
                  <p className="text-sm text-green-800">
                    Open source technologies, full documentation, transferable hosting. Complete
                    freedom to change providers if needed.
                  </p>
                </div>
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
