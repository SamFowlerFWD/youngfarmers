import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  CheckCircle2,
  Shield,
  FileCheck,
  Lock,
  Users,
  Scale,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Compliance & Legal Statements</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Confirmation of compliance with all Norfolk YFC policies and UK legislation
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: "Tender Submission", href: "/tender" }, { label: "Compliance & Legal" }]} />

        {/* Compliance Overview */}
        <Alert className="mb-8 bg-green-50 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            <strong>Full Compliance Confirmed:</strong> I confirm compliance with all Norfolk YFC policies and UK legal
            requirements as specified in the tender document. Detailed statements are provided below.
          </AlertDescription>
        </Alert>

        {/* Data Protection (GDPR) */}
        <Card className="mb-8 border-2 border-blue-500/30">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Lock className="h-6 w-6 text-blue-600" />
              Data Protection (GDPR & UK DPA 2018)
            </CardTitle>
            <CardDescription>Commitment to protecting Norfolk YFC and member data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-3">Compliance Statement:</h3>
                <p className="text-sm text-blue-800 mb-4">
                  I, Sam Fowler (FWD Digital Solutions), confirm full compliance with:
                </p>
                <ul className="space-y-2 text-sm text-blue-800 ml-4">
                  <li>✓ General Data Protection Regulation (GDPR) EU 2016/679</li>
                  <li>✓ UK Data Protection Act 2018</li>
                  <li>✓ Privacy and Electronic Communications Regulations (PECR)</li>
                  <li>✓ All ICO (Information Commissioner's Office) guidelines</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Data Processing Principles:</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Lawfulness, fairness, transparency</li>
                    <li>• Purpose limitation</li>
                    <li>• Data minimization</li>
                    <li>• Accuracy</li>
                    <li>• Storage limitation</li>
                    <li>• Integrity and confidentiality</li>
                    <li>• Accountability</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Technical Measures:</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Encryption in transit (HTTPS/SSL)</li>
                    <li>• Encryption at rest (database)</li>
                    <li>• Access controls and authentication</li>
                    <li>• Regular security updates</li>
                    <li>• Secure backup procedures</li>
                    <li>• Audit logging</li>
                    <li>• Data breach response plan</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Data Processing Agreement:</h4>
                <p className="text-sm text-gray-700 mb-3">
                  A comprehensive Data Processing Agreement (DPA) will be provided covering:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Subject matter and duration of processing</li>
                  <li>• Nature and purpose of processing</li>
                  <li>• Types of personal data processed</li>
                  <li>• Categories of data subjects</li>
                  <li>• Rights and obligations of both parties</li>
                  <li>• Security measures and breach notification</li>
                  <li>• Sub-processor provisions</li>
                  <li>• Data subject rights procedures</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Member Data Handling:
                </h4>
                <p className="text-sm text-yellow-800">
                  Norfolk YFC retains full ownership and control of all member data. As data processor, I will only
                  process data as instructed by Norfolk YFC and will never use member data for any other purpose.
                  All data can be exported and deleted upon request.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safeguarding */}
        <Card className="mb-8 border-2 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-600" />
              Safeguarding
            </CardTitle>
            <CardDescription>Protecting young people online and offline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  <strong>Safeguarding Commitment:</strong> I confirm full compliance with Norfolk YFC's safeguarding policies
                  and understand the importance of protecting children and young people (ages 10-28) who use the website.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Technical Safeguards:</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Secure user authentication</li>
                    <li>• Age-appropriate content controls</li>
                    <li>• Privacy settings for member profiles</li>
                    <li>• Moderation tools for user-generated content</li>
                    <li>• Reporting mechanisms for concerns</li>
                    <li>• Content filtering capabilities</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Policy Compliance:</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Review of Norfolk YFC safeguarding policy</li>
                    <li>• Adherence to NSPCC guidelines</li>
                    <li>• Online safety best practices</li>
                    <li>• Reporting procedures understood</li>
                    <li>• Cooperation with designated safeguarding lead</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> While technical measures are implemented, Norfolk YFC retains full responsibility
                  for content moderation, safeguarding oversight, and policy enforcement. I will provide the tools and
                  systems to support these responsibilities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Equality & Diversity */}
        <Card className="mb-8 border-2 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Users className="h-6 w-6 text-purple-600" />
              Equality & Diversity
            </CardTitle>
            <CardDescription>Commitment to inclusive design and accessibility</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Alert className="bg-purple-50 border-purple-200">
                <CheckCircle2 className="h-4 w-4 text-purple-600" />
                <AlertDescription className="text-purple-800">
                  <strong>Equality Commitment:</strong> I confirm compliance with Norfolk YFC's Equality & Diversity policy
                  and UK Equality Act 2010. The website will be accessible and welcoming to all, regardless of background.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Website Accessibility (WCAG A):</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Screen reader compatible</li>
                    <li>• Keyboard navigation support</li>
                    <li>• Color contrast compliance</li>
                    <li>• Resizable text</li>
                    <li>• Alternative text for images</li>
                    <li>• Clear, simple language</li>
                    <li>• Accessible forms and interactions</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Inclusive Design Principles:</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Diverse representation in imagery</li>
                    <li>• Inclusive language and messaging</li>
                    <li>• Gender-neutral design</li>
                    <li>• Cultural sensitivity</li>
                    <li>• Age-appropriate content ranges</li>
                    <li>• Rural and urban representation</li>
                    <li>• Non-farming background inclusivity</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <p className="text-sm text-purple-800">
                  <strong>YFC Message Reinforced:</strong> The website prominently features Norfolk YFC's inclusive
                  message: <em>"You don't have to be a Young Farmer to join Young Farmers!"</em> - ensuring everyone
                  feels welcome regardless of background.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Health & Safety */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Shield className="h-6 w-6 text-orange-600" />
              Health & Safety
            </CardTitle>
            <CardDescription>Compliance with Norfolk YFC Health & Safety policies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Alert className="bg-orange-50 border-orange-200">
                <CheckCircle2 className="h-4 w-4 text-orange-600" />
                <AlertDescription className="text-orange-800">
                  <strong>Health & Safety Compliance:</strong> I confirm compliance with Norfolk YFC's Health & Safety
                  policies as they relate to digital services and remote work.
                </AlertDescription>
              </Alert>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Applicable Health & Safety Measures:</h4>
                <ul className="text-sm text-gray-700 space-y-2 ml-4">
                  <li>
                    • <strong>Website Security:</strong> Secure authentication, encrypted data, protection from
                    cyber threats to prevent harm to users
                  </li>
                  <li>
                    • <strong>Safe Working Practices:</strong> As a remote developer, I maintain safe home office
                    setup, proper equipment, and work-life balance
                  </li>
                  <li>
                    • <strong>On-Site Visits:</strong> If required for training or meetings, I will comply with
                    Norfolk YFC's on-site health and safety procedures
                  </li>
                  <li>
                    • <strong>Online Safety:</strong> Website designed with age-appropriate safeguards and reporting
                    mechanisms for safety concerns
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal Compliance */}
        <Card className="mb-8 border-2 border-gray-500/30">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Scale className="h-6 w-6 text-gray-700" />
              Legal Compliance
            </CardTitle>
            <CardDescription>UK legislation and anti-corruption measures</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Anti-Bribery */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-gray-700" />
                  Bribery Act 2010 Compliance
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Compliance Statement:</strong> I, Sam Fowler (FWD Digital Solutions), confirm compliance with
                  the UK Bribery Act 2010 and anti-corruption legislation.
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>I confirm that:</p>
                  <ul className="space-y-1 ml-4">
                    <li>✓ No bribes, gifts, or inducements have been offered to secure this contract</li>
                    <li>✓ No bribes will be offered or accepted during project delivery</li>
                    <li>✓ All business conducted ethically and transparently</li>
                    <li>✓ Fair pricing with no hidden fees or kickbacks</li>
                    <li>✓ No facilitation payments or advantages sought</li>
                  </ul>
                </div>
              </div>

              {/* Modern Slavery */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-gray-700" />
                  Modern Slavery Act 2015 Compliance
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Compliance Statement:</strong> I confirm compliance with the Modern Slavery Act 2015 and
                  commitment to ethical business practices.
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>I confirm that:</p>
                  <ul className="space-y-1 ml-4">
                    <li>✓ No slavery or human trafficking in any part of my business</li>
                    <li>✓ Solo trader - no employees or subcontractors in exploitative conditions</li>
                    <li>✓ Ethical sourcing of any third-party services</li>
                    <li>✓ Due diligence on any suppliers or partners</li>
                    <li>✓ Zero tolerance for modern slavery in supply chain</li>
                  </ul>
                </div>
              </div>

              {/* Other Legal Compliance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Tax Compliance:</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Registered self-employed sole trader</li>
                    <li>• Compliant with HMRC tax obligations</li>
                    <li>• Self-Assessment tax returns filed annually</li>
                    <li>• Professional accounting records maintained</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Intellectual Property:</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Respect for copyright and trademarks</li>
                    <li>• All code and designs original or licensed</li>
                    <li>• No infringement of third-party rights</li>
                    <li>• Clear IP ownership transfer to Norfolk YFC</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Policy References */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <FileCheck className="h-6 w-6 text-primary" />
              Norfolk YFC Policy References
            </CardTitle>
            <CardDescription>Links to reviewed policies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-sm text-gray-700 mb-4">
                I have reviewed the following Norfolk YFC policies available at{" "}
                <a
                  href="https://www.norfolkyfc.co.uk/nfyfc-policies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  norfolkyfc.co.uk/nfyfc-policies
                </a>
                :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Safeguarding Policy</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Data Protection Policy</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Equality & Diversity Policy</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Health & Safety Policy</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 italic">
                I confirm that I have read, understood, and will comply with all applicable policies throughout
                project delivery and ongoing support.
              </p>
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
