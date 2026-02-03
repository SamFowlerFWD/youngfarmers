import { PageHero } from "@/components/shared/page-hero";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Users,
  Trophy,
  Heart,
  Briefcase,
  GraduationCap,
  MapPin,
  Shield,
  Star,
  Check,
  ArrowRight,
  PartyPopper,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Join Norfolk YFC | Membership Information",
  description:
    "Join Norfolk Young Farmers Clubs today. Open to ages 10-28, no farming background needed. Discover membership benefits, pricing, and how to join.",
};

const faqs = [
  {
    question: "Do I need to be from a farming background to join?",
    answer:
      "Absolutely not! While YFC has agricultural roots, you don't need any farming background or experience. We welcome all young people who want to make friends, try new activities, and have fun. Many of our most active members come from towns and cities with no farming connection.",
  },
  {
    question: "What age can I join YFC?",
    answer:
      "You can join as a Countrysider from age 10 (usually Year 6 at school). Countrysiders can attend until age 16. Senior YFC membership is for ages 14-28, so there's overlap allowing 14-16 year olds to choose which suits them best. Once you turn 28, you can still be involved as an associate member or volunteer leader.",
  },
  {
    question: "How much time do I need to commit?",
    answer:
      "As much or as little as you like! Most clubs meet weekly for 2 hours, but attendance is flexible - come when you can. Some members just attend club meetings, others get involved in competitions, county events, and committees. You decide your level of involvement based on what works for you.",
  },
  {
    question: "Can I join if I don't live in Norfolk?",
    answer:
      "Norfolk YFC membership is primarily for young people living in Norfolk or attending school/college/university here. However, if you live just over the border and your nearest club is in Norfolk, we can usually accommodate you. Contact the county office to discuss your situation.",
  },
  {
    question: "What's included in my membership fee?",
    answer:
      "Your membership includes: attendance at your local club meetings, entry to all county events and competitions, £10 million public liability insurance, access to training courses, membership card and welcome pack, quarterly newsletter, member discounts at local businesses, and access to NFYFC benefits and national events.",
  },
  {
    question: "When does membership run from?",
    answer:
      "The YFC membership year runs from 1st September to 31st August, aligning with the academic year. You can join at any time during the year - fees are pro-rated for those joining after January. Renewals are due each September.",
  },
  {
    question: "Can I try before I join?",
    answer:
      "Yes! Most clubs welcome prospective members to attend 2-3 meetings before committing to membership. This lets you meet members, see what the club does, and decide if YFC is right for you. Contact your local club to arrange a visit.",
  },
  {
    question: "What if there isn't a club near me?",
    answer:
      "Our 16 clubs and groups cover most of Norfolk, but we know some areas aren't served. If you'd be interested in starting a new club or group in your area, contact the county office - we can provide support and guidance. Alternatively, many members travel to their nearest club - we can help you find transport options.",
  },
  {
    question: "Are there any additional costs beyond membership?",
    answer:
      "Your membership fee covers most activities, but some events have small additional charges to cover costs (e.g., entry to social events, meals at residential courses, competition entry fees). These are always optional and kept as low as possible. Many clubs also fundraise to subsidize costs for members.",
  },
  {
    question: "What happens if I need to cancel my membership?",
    answer:
      "We'd be sad to see you go, but understand circumstances change. Membership fees are generally non-refundable once paid, but if you need to leave due to exceptional circumstances (e.g., moving away, health reasons), contact the county office to discuss. We're always willing to help where we can.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        title="Join Norfolk YFC Today"
        subtitle="Membership"
        description="Open to ages 10-28, no farming background needed. Join a community of young people making friends, developing skills, and creating memories across Norfolk."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
            <Link href="/join">Join Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-gray-900 hover:bg-white/10">
            <Link href="/clubs">Find Your Club</Link>
          </Button>
        </div>
      </PageHero>

      {/* Who Can Join */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Can Join?
            </h2>
            <p className="text-lg text-gray-600">
              Norfolk YFC welcomes all young people aged 10-28. You don't need any
              farming experience - just enthusiasm and a willingness to get
              involved!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-t-4 border-t-primary">
              <CardContent className="pt-8">
                <div className="text-4xl mb-4 text-center">🌱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  No Farming Background Needed
                </h3>
                <p className="text-gray-600 text-center">
                  While we have agricultural roots, most of our members come from
                  non-farming backgrounds. Town or country, everyone is welcome!
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-600">
              <CardContent className="pt-8">
                <div className="text-4xl mb-4 text-center">🎓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  Students & Young Professionals
                </h3>
                <p className="text-gray-600 text-center">
                  Whether you're at school, college, university, or starting your
                  career - YFC fits around your commitments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-yellow-500">
              <CardContent className="pt-8">
                <div className="text-4xl mb-4 text-center">🌍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  All Welcome
                </h3>
                <p className="text-gray-600 text-center">
                  YFC is inclusive and welcoming to all. We celebrate diversity
                  and ensure everyone feels valued and included.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Membership Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Being a Norfolk YFC member opens doors to incredible opportunities
              and experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Lifelong Friends</h3>
                <p className="text-sm text-gray-600">
                  Make genuine friendships with like-minded young people across
                  Norfolk and beyond.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Competition Opportunities
                </h3>
                <p className="text-sm text-gray-600">
                  Compete in sports, public speaking, stock judging, cookery, and
                  more at county and national level.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Skills Development</h3>
                <p className="text-sm text-gray-600">
                  Develop leadership, public speaking, teamwork, and practical
                  skills valued by employers and universities.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Career Enhancement
                </h3>
                <p className="text-sm text-gray-600">
                  YFC experience looks great on CVs and UCAS applications,
                  demonstrating commitment and skills.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Travel Opportunities
                </h3>
                <p className="text-sm text-gray-600">
                  Attend regional rallies, national events, and potentially
                  international exchanges.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <PartyPopper className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Amazing Events</h3>
                <p className="text-sm text-gray-600">
                  Barn dances, parties, sports tournaments, quiz nights, and more
                  - never a dull moment!
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Personal Growth
                </h3>
                <p className="text-sm text-gray-600">
                  Build confidence, resilience, and independence in a supportive
                  environment.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Full Insurance</h3>
                <p className="text-sm text-gray-600">
                  £10 million public liability insurance cover for all YFC
                  activities and events.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Member Discounts</h3>
                <p className="text-sm text-gray-600">
                  Exclusive discounts at local businesses and on training courses
                  and equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 bg-white" id="tiers">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Membership Options
            </h2>
            <p className="text-lg text-gray-600">
              Choose the membership that's right for your age and interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Junior Membership */}
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardHeader className="bg-gradient-to-br from-primary/10 to-blue-50">
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-primary">Ages 10-16</Badge>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">£25</div>
                    <div className="text-sm text-gray-600">per year</div>
                  </div>
                </div>
                <CardTitle className="text-2xl">
                  Junior Membership (Countrysider)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-6">
                  Perfect for younger members aged 10-16. Join a Countrysider
                  group and start your YFC journey with fun activities and new
                  friends!
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      Access to Countrysider group activities and events
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      Junior competitions and awards
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      £10 million public liability insurance
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      Membership card and welcome pack
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      Quarterly newsletter and updates
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      Transition support to senior YFC at age 14+
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full mt-6 bg-primary hover:bg-primary/90"
                  asChild
                >
                  <Link href="/join">
                    Join as Junior Member
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Senior Membership */}
            <Card className="border-2 border-primary shadow-xl relative">
              <div className="absolute -top-4 right-4">
                <Badge className="bg-yellow-500 text-yellow-950">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="bg-gradient-to-br from-primary to-blue-600 text-white">
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-white text-primary">Ages 14-28</Badge>
                  <div className="text-right">
                    <div className="text-3xl font-bold">£40</div>
                    <div className="text-sm opacity-90">per year</div>
                  </div>
                </div>
                <CardTitle className="text-2xl">
                  Senior Membership (Young Farmer)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-6">
                  Full access to everything Norfolk YFC offers! For young people
                  aged 14-28 ready to make the most of every opportunity.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      Access to all YFC clubs, events, and activities
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      Compete at county and national level
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      Eligible for club and county officer roles
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      Access to training courses and residential opportunities
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      £10 million public liability insurance
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      Member discounts and NFYFC benefits
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      Access to NFYFC national events and travel opportunities
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      Membership card, welcome pack, and quarterly newsletter
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full mt-6 bg-primary hover:bg-primary/90"
                  asChild
                >
                  <Link href="/join">
                    Join as Senior Member
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Associate & Honorary Membership
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Over 28 or want to support YFC without full participation?
                  Associate and honorary membership options are available.
                  Contact the county office for more information.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact">Contact Office</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-blue-50 to-yellow-50" id="join">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Join
            </h2>
            <p className="text-lg text-gray-600">
              Getting started with Norfolk YFC is easy - just three simple steps!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Find Your Club
              </h3>
              <p className="text-gray-600 mb-4">
                Browse our 16 clubs and groups across Norfolk to find one near
                you. Most clubs welcome visitors, so you can try before you join.
              </p>
              <Button variant="outline" asChild>
                <Link href="/clubs">View Clubs</Link>
              </Button>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Complete Application
              </h3>
              <p className="text-gray-600 mb-4">
                Fill in the membership application form online or download a PDF.
                Under 18s will need parent/guardian consent.
              </p>
              <Button variant="outline" asChild>
                <Link href="/join">
                  Join Online
                </Link>
              </Button>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Start Your Journey!
              </h3>
              <p className="text-gray-600 mb-4">
                Once approved, you'll receive your membership pack and can start
                attending your club and county events immediately!
              </p>
              <Button variant="outline" asChild>
                <Link href="/events">View Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What Our Members Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Joining Norfolk YFC was the best decision I made. I've made
                  friends from all over the county, competed at national level in
                  public speaking, and developed confidence I never knew I had.
                  Can't imagine life without YFC!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Emily, 22
                    </div>
                    <div className="text-sm text-gray-500">
                      Norwich YFC, member since 2018
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "I'm from a town with no farming background, but that didn't
                  matter at all. Everyone was so welcoming! I've learned so much
                  about agriculture, competed in sports tournaments, and made
                  brilliant friends. Would recommend to anyone!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      James, 19
                    </div>
                    <div className="text-sm text-gray-500">
                      West Norfolk YFC, member since 2020
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Started as a Countrysider at 11 and I'm still involved at 26!
                  YFC taught me leadership, gave me incredible experiences like
                  competing abroad, and helped me get into my dream job. It's
                  shaped who I am today."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Sophie, 26
                    </div>
                    <div className="text-sm text-gray-500">
                      South Norfolk YFC, member since 2010
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Got questions? We've got answers!
            </p>

            <FAQAccordion faqs={faqs} />

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Still have questions? We're here to help!
              </p>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your YFC Journey?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Join hundreds of young people across Norfolk making friends,
              developing skills, and creating memories. Your adventure starts here!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link href="/join">
                  Join Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link href="/clubs">Find Your Club</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
