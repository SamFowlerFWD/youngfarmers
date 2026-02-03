"use client";

import { useState } from "react";
import { jobsData, getJobsByCategory, getJobsByType, getFeaturedJobs } from "@/lib/jobs-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Search,
  Star,
  Calendar,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  // Filter jobs
  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory;
    const matchesType = selectedType === "all" || job.type === selectedType;

    return matchesSearch && matchesCategory && matchesType;
  });

  const featuredJobs = getFeaturedJobs();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="h-10 w-10" />
            <h1 className="text-4xl font-bold">Jobs Board</h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl">
            Find exciting career opportunities in agriculture, rural business, and land-based industries across Norfolk
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Jobs */}
        {featuredJobs.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              <h2 className="text-2xl font-bold">Featured Opportunities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map((job) => (
                <Card key={job.id} className="border-yellow-200 bg-yellow-50/30">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        Featured
                      </Badge>
                      <JobTypeBadge type={job.type} />
                    </div>
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <CardDescription className="font-medium text-gray-900">{job.company}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    {job.salaryRange && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <DollarSign className="h-4 w-4" />
                        {job.salaryRange}
                      </div>
                    )}
                    <p className="text-sm text-gray-700 line-clamp-2">{job.description}</p>
                    <Button className="w-full mt-4" size="sm">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search jobs, companies, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="agriculture">Agriculture</SelectItem>
                <SelectItem value="office">Office</SelectItem>
                <SelectItem value="events">Events</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="hospitality">Hospitality</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="All Job Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Job Types</SelectItem>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="apprenticeship">Apprenticeship</SelectItem>
                <SelectItem value="seasonal">Seasonal</SelectItem>
                <SelectItem value="volunteer">Volunteer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredJobs.length}</span> job
            {filteredJobs.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* All Jobs */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}

          {filteredJobs.length === 0 && (
            <Card className="p-12 text-center">
              <Briefcase className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-semibold mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </Card>
          )}
        </div>

        {/* Post a Job CTA */}
        <Card className="mt-12 bg-gradient-to-r from-primary to-green-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Looking to hire?</h3>
            <p className="mb-6 text-white/90">
              Post your agricultural job opportunity and reach talented young people across Norfolk
            </p>
            <Button variant="secondary" size="lg">
              <Mail className="h-4 w-4 mr-2" />
              Contact Us to Post a Job
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Job Card Component
function JobCard({ job }: { job: (typeof jobsData)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
              {job.featured && (
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  <Star className="h-3 w-3 mr-1 fill-yellow-800" />
                  Featured
                </Badge>
              )}
            </div>
            <p className="text-lg font-medium text-primary mb-3">{job.company}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {job.location}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <JobTypeBadge type={job.type} />
              </div>
              {job.salaryRange && (
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  {job.salaryRange}
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Posted {new Date(job.postedDate).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-4">{job.description}</p>

        {expanded && (
          <div className="space-y-4 mb-4 border-t pt-4">
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.requirements && job.requirements.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  {job.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.benefits && job.benefits.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Benefits:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  {job.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Application Details:</h4>
              <div className="space-y-2 text-sm">
                {job.contactName && (
                  <p>
                    <span className="font-medium">Contact:</span> {job.contactName}
                  </p>
                )}
                {job.applicationEmail && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <a
                      href={`mailto:${job.applicationEmail}`}
                      className="text-primary hover:underline"
                    >
                      {job.applicationEmail}
                    </a>
                  </div>
                )}
                {job.contactPhone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <a href={`tel:${job.contactPhone}`} className="text-primary hover:underline">
                      {job.contactPhone}
                    </a>
                  </div>
                )}
                {job.closingDate && (
                  <p className="text-red-600 font-medium">
                    Closing Date: {new Date(job.closingDate).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <Button onClick={() => setExpanded(!expanded)} variant="outline" className="flex-1">
            {expanded ? "Show Less" : "View Full Details"}
          </Button>
          {job.applicationUrl && (
            <Button asChild>
              <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer">
                Apply Now
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          )}
          {!job.applicationUrl && job.applicationEmail && (
            <Button asChild>
              <a href={`mailto:${job.applicationEmail}?subject=Application for ${job.title}`}>
                <Mail className="h-4 w-4 mr-2" />
                Apply Now
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Job Type Badge Component
function JobTypeBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    'full-time': 'bg-blue-100 text-blue-800',
    'part-time': 'bg-purple-100 text-purple-800',
    'apprenticeship': 'bg-green-100 text-green-800',
    'seasonal': 'bg-orange-100 text-orange-800',
    'volunteer': 'bg-pink-100 text-pink-800',
  };

  const labels: Record<string, string> = {
    'full-time': 'Full-time',
    'part-time': 'Part-time',
    'apprenticeship': 'Apprenticeship',
    'seasonal': 'Seasonal',
    'volunteer': 'Volunteer',
  };

  return (
    <Badge variant="secondary" className={colors[type] || 'bg-gray-100 text-gray-800'}>
      {labels[type] || type}
    </Badge>
  );
}
