"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Download, FileText, Info } from "lucide-react";
import {
  resourcesData,
  resourceCategories,
  Resource,
} from "@/lib/resources-data";

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resourcesData.filter((resource) => {
    const matchesCategory =
      selectedCategory === "all" || resource.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  const getFileIcon = (fileType: string) => {
    return <FileText className="h-5 w-5" />;
  };

  const getCategoryColor = (category: Resource["category"]) => {
    const colors = {
      policy: "bg-red-100 text-red-800",
      rules: "bg-blue-100 text-blue-800",
      forms: "bg-green-100 text-green-800",
      guides: "bg-yellow-100 text-yellow-800",
      training: "bg-purple-100 text-purple-800",
      reports: "bg-gray-100 text-gray-800",
    };
    return colors[category];
  };

  return (
    <>
      <PageHero
        title="Member Resources"
        subtitle="Resources"
        description="Access policies, forms, guides, training materials, and documents for Norfolk YFC members and leaders."
      />

      {/* Notice Banner */}
      <section className="py-4 bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <strong>Note:</strong> In the full system, all documents will be
              stored in SharePoint with proper version control and access
              management. This demo shows the document structure and categories.
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search resources..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {resourceCategories.map((category) => (
                <Button
                  key={category.value}
                  variant={
                    selectedCategory === category.value ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className={
                    selectedCategory === category.value
                      ? "bg-primary hover:bg-primary/90"
                      : ""
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {filteredResources.length > 0 && (
            <div className="text-center mt-4 text-sm text-gray-600">
              Showing {filteredResources.length} resource
              {filteredResources.length !== 1 ? "s" : ""}
            </div>
          )}
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredResources.length > 0 ? (
            <div className="max-w-6xl mx-auto space-y-4">
              {filteredResources.map((resource) => (
                <Card
                  key={resource.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* Icon and Details */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            {getFileIcon(resource.fileType)}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-start gap-2 mb-2">
                              <h3 className="font-bold text-gray-900 text-lg">
                                {resource.title}
                              </h3>
                              <Badge
                                className={getCategoryColor(resource.category)}
                              >
                                {resource.category.charAt(0).toUpperCase() +
                                  resource.category.slice(1)}
                              </Badge>
                            </div>

                            <p className="text-gray-600 text-sm mb-3">
                              {resource.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <FileText className="h-4 w-4" />
                                <span>{resource.fileType}</span>
                              </div>
                              <div>{resource.fileSize}</div>
                              <div>
                                Updated:{" "}
                                {new Date(
                                  resource.uploadDate
                                ).toLocaleDateString("en-GB", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                })}
                              </div>
                            </div>

                            {resource.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-3">
                                {resource.tags.map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Download Button */}
                      <div className="flex-shrink-0">
                        <Button
                          variant="outline"
                          className="w-full md:w-auto"
                          onClick={() => {
                            // In production, this would trigger actual download
                            alert(
                              `Download would start for: ${resource.title}\nIn full system: ${resource.downloadUrl}`
                            );
                          }}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No resources found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filters to find resources.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Resource Categories
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Badge className="bg-red-100 text-red-800">Policy</Badge>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Policies</h3>
                  <p className="text-sm text-gray-600">
                    Essential policies including health & safety, safeguarding,
                    data protection, and codes of conduct that govern how Norfolk
                    YFC operates.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Badge className="bg-blue-100 text-blue-800">Rules</Badge>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Competition Rules
                  </h3>
                  <p className="text-sm text-gray-600">
                    Rules and regulations for all YFC competitions including
                    sports, public speaking, stock judging, and performing arts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Badge className="bg-green-100 text-green-800">Forms</Badge>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Forms</h3>
                  <p className="text-sm text-gray-600">
                    Downloadable forms for membership applications, event
                    bookings, risk assessments, incident reports, and consent
                    forms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Badge className="bg-yellow-100 text-yellow-800">
                      Guides
                    </Badge>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Guides</h3>
                  <p className="text-sm text-gray-600">
                    Helpful guides for new members, club leaders, fundraising,
                    social media best practice, and more.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Badge className="bg-purple-100 text-purple-800">
                      Training
                    </Badge>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Training Materials
                  </h3>
                  <p className="text-sm text-gray-600">
                    Course information and support materials for training
                    opportunities including first aid, leadership, and skills
                    development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Badge className="bg-gray-100 text-gray-800">Reports</Badge>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Reports</h3>
                  <p className="text-sm text-gray-600">
                    Annual reports, financial accounts, AGM minutes, and other
                    official documents showing Norfolk YFC's activities and
                    governance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Can't Find What You're Looking For?
                </h3>
                <p className="text-gray-600 mb-6">
                  If you need a specific document or have questions about any of
                  our resources, please contact the county office. We're here to
                  help!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild>
                    <a href="/contact">Contact Office</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:office@norfolkyfc.org.uk">
                      <Download className="h-4 w-4 mr-2" />
                      office@norfolkyfc.org.uk
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
