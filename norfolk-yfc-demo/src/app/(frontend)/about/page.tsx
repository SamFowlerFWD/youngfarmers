import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Target,
  Heart,
  Trophy,
  TrendingUp,
  Sparkles,
  MapPin,
  Award,
  Calendar,
  HandHeart,
} from "lucide-react";
import { getCountyOfficers, getTrustees } from "@/lib/team-data";
import { getClubStats } from "@/lib/clubs-data";

export const metadata = {
  title: "About Norfolk YFC | Our Story, Mission & Team",
  description:
    "Discover the story behind Norfolk YFC - 75+ years of bringing young people together through countryside activities, competitions, and lifelong friendships.",
};

export default function AboutPage() {
  const officers = getCountyOfficers();
  const trustees = getTrustees();
  const stats = getClubStats();

  return (
    <>
      <PageHero
        title="About Norfolk YFC"
        subtitle="Our Story"
        description="For over 75 years, Norfolk Young Farmers Clubs have been bringing young people together, creating opportunities, and building lifelong friendships across the county."
      />

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              To provide opportunities for young people aged 10-28 to develop
              personally and professionally through a diverse range of social,
              educational, and competitive activities rooted in the countryside
              and agriculture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-t-4 border-t-primary">
              <CardContent className="pt-8">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Inclusive Community
                </h3>
                <p className="text-gray-600">
                  Welcoming all young people regardless of background. No farming
                  experience necessary - just enthusiasm and willingness to get
                  involved.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-600">
              <CardContent className="pt-8">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Personal Development
                </h3>
                <p className="text-gray-600">
                  Developing confidence, leadership, teamwork, and life skills
                  through competitions, training, and responsibilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-yellow-500">
              <CardContent className="pt-8">
                <div className="bg-yellow-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Fun & Friendship
                </h3>
                <p className="text-gray-600">
                  Creating lasting memories and friendships through social events,
                  activities, and shared experiences across Norfolk.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              75+ Years of Bringing Young People Together
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                Norfolk Young Farmers Clubs have been an integral part of rural
                life in Norfolk since 1948. What started as a handful of clubs
                focused on agricultural education has grown into a vibrant county
                organization offering diverse opportunities for hundreds of young
                people.
              </p>
              <p>
                Throughout our history, we\'ve adapted and evolved while staying
                true to our core purpose: bringing young people together. Today,
                Norfolk YFC includes 10 senior clubs and 6 Countrysider groups
                across the county, welcoming members from farming and non-farming
                backgrounds alike.
              </p>
              <p>
                Our members have gone on to achieve incredible things - from
                representing England at international competitions to building
                successful careers in agriculture, business, and public service.
                But what they all share is the confidence, skills, and friendships
                gained through YFC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Competitions
              </h3>
              <p className="text-gray-600">
                Stock judging, public speaking, sports, cookery, and performing
                arts - opportunities to discover and showcase your talents.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Social Events
              </h3>
              <p className="text-gray-600">
                Barn dances, parties, quiz nights, and trips - making friends and
                creating memories across Norfolk.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Training & Development
              </h3>
              <p className="text-gray-600">
                Leadership courses, first aid, agricultural skills, and more -
                building skills for life and career.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <HandHeart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Community Projects
              </h3>
              <p className="text-gray-600">
                Charity fundraising, conservation work, and community service -
                making a positive difference locally.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Travel Opportunities
              </h3>
              <p className="text-gray-600">
                Regional rallies, national events, and international exchanges -
                broadening horizons beyond Norfolk.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Recognition & Awards
              </h3>
              <p className="text-gray-600">
                Member of the Year, club awards, and competition achievements -
                celebrating success at every level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Showcase */}
      <section className="py-16 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Norfolk YFC in Numbers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {stats.totalClubs}
              </div>
              <div className="text-lg opacity-90">Clubs & Groups</div>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {stats.totalMembers}+
              </div>
              <div className="text-lg opacity-90">Active Members</div>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Events Per Year</div>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">£25k+</div>
              <div className="text-lg opacity-90">Charity Raised</div>
            </div>
          </div>
        </div>
      </section>

      {/* County Officers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our County Officers
            </h2>
            <p className="text-lg text-gray-600">
              Elected by members, our county officers lead Norfolk YFC and
              coordinate activities across the county.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {officers.slice(0, 8).map((officer) => (
              <Card key={officer.id} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    {officer.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {officer.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliated Organizations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-lg text-gray-600">
              Norfolk YFC is proudly affiliated with national and regional
              organizations supporting young people and agriculture.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto items-center">
            <div className="text-center">
              <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center mb-3">
                <span className="font-bold text-gray-600">NFYFC</span>
              </div>
              <p className="text-sm font-medium text-gray-900">
                National Federation of Young Farmers Clubs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center mb-3">
                <span className="font-bold text-gray-600">RNAA</span>
              </div>
              <p className="text-sm font-medium text-gray-900">
                Royal Norfolk Agricultural Association
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center mb-3">
                <span className="font-bold text-gray-600">CLAN</span>
              </div>
              <p className="text-sm font-medium text-gray-900">
                Countryside Learning and Action Network
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center mb-3">
                <span className="font-bold text-gray-600">Chadacre Trust</span>
              </div>
              <p className="text-sm font-medium text-gray-900">
                Supporting Rural Youth Development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Become part of the Norfolk YFC family and discover opportunities,
              make friends, and create memories that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/membership">Learn About Membership</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/clubs">Find Your Local Club</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
