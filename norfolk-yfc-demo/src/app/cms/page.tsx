"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  LayoutDashboard,
  ShoppingBag,
  Newspaper,
  Users,
  Calendar,
  Settings,
  BarChart3,
  FileText,
  Image as ImageIcon,
  Plus,
  Edit,
  Trash2,
  Eye,
  Upload,
  Save,
  X,
  Info,
  Database,
  Link2,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CMSPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* CMS Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3">
            {/* Left: Hamburger + Logo */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              {/* Hamburger Menu - Mobile Only */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden h-10 w-10 p-0"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>

              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="h-8 w-8 sm:h-10 sm:w-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <LayoutDashboard className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-base sm:text-xl font-bold text-gray-900 truncate">Norfolk YFC CMS</h1>
                  <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Content Management System</p>
                </div>
              </div>
            </div>

            {/* Right: Badges + User Info */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Live Badge - Hidden on very small screens */}
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 hidden sm:flex">
                <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                Live Site
              </Badge>

              {/* Preview Button - Hidden on mobile */}
              <Button variant="outline" size="sm" className="hidden md:flex">
                <Eye className="h-4 w-4 mr-2" />
                Preview Site
              </Button>

              {/* User Info */}
              <div className="flex items-center gap-2 pl-2 sm:pl-3 border-l">
                <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs sm:text-sm font-medium text-primary">JH</span>
                </div>
                <div className="text-xs sm:text-sm hidden sm:block">
                  <p className="font-medium">Jen Hartley</p>
                  <p className="text-xs text-gray-500">County Organiser</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside
          className={cn(
            "w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-65px)] sm:min-h-[calc(100vh-73px)]",
            "lg:sticky lg:top-[65px] sm:lg:top-[73px]",
            "fixed top-[65px] sm:top-[73px] left-0 z-40 transform transition-transform duration-300 ease-in-out",
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          )}
        >
          {/* Close button - Mobile only */}
          <div className="lg:hidden flex justify-end p-2 border-b border-gray-200">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <nav className="p-4 space-y-1">
            <button
              onClick={() => {
                setActiveTab("dashboard");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "dashboard"
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </button>
            <button
              onClick={() => {
                setActiveTab("products");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "products"
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <ShoppingBag className="h-4 w-4" />
              Shop Products
            </button>
            <button
              onClick={() => {
                setActiveTab("news");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "news"
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Newspaper className="h-4 w-4" />
              News & Blog
            </button>
            <button
              onClick={() => {
                setActiveTab("clubs");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "clubs"
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Users className="h-4 w-4" />
              Clubs
            </button>
            <button
              onClick={() => {
                setActiveTab("events");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "events"
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Calendar className="h-4 w-4" />
              Events
            </button>
            <button
              onClick={() => {
                setActiveTab("jobs");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "jobs"
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Briefcase className="h-4 w-4" />
              Jobs Board
            </button>
            <button
              onClick={() => {
                setActiveTab("pages");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "pages"
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <FileText className="h-4 w-4" />
              Pages
            </button>
            <button
              onClick={() => {
                setActiveTab("media");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "media"
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <ImageIcon className="h-4 w-4" />
              Media Library
            </button>
            <div className="pt-4 mt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setActiveTab("silo");
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "silo"
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Database className="h-4 w-4" />
                Member Database
              </button>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setActiveTab("analytics");
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "analytics"
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <BarChart3 className="h-4 w-4" />
                Analytics
              </button>
              <button
                onClick={() => {
                  setActiveTab("settings");
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "settings"
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Settings className="h-4 w-4" />
                Settings
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Demo Notice */}
          <Alert className="bg-amber-50 border-amber-200 mb-6 sm:mb-8">
            <Info className="h-4 w-4 text-amber-600 flex-shrink-0" />
            <AlertDescription className="text-amber-800 text-xs sm:text-sm">
              <strong>Demo Interface:</strong> This is a visual mockup of the Content Management System (CMS) for demonstration purposes only.
              The actual production CMS will feature full functionality for managing all website content, products, events, clubs, and media.
              <span className="hidden sm:inline"> This mockup demonstrates the user interface and workflow that Norfolk YFC staff would use to update the website.</span>
            </AlertDescription>
          </Alert>

          {activeTab === "dashboard" && <DashboardView />}
          {activeTab === "products" && <ProductsView />}
          {activeTab === "news" && <NewsView />}
          {activeTab === "clubs" && <ClubsView />}
          {activeTab === "events" && <EventsView />}
          {activeTab === "jobs" && <JobsView />}
          {activeTab === "pages" && <PagesView />}
          {activeTab === "media" && <MediaView />}
          {activeTab === "silo" && <SiloIntegrationView />}
          {activeTab === "analytics" && <AnalyticsView />}
          {activeTab === "settings" && <SettingsView />}
        </main>
      </div>
    </div>
  );
}

// Dashboard View
function DashboardView() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-sm sm:text-base text-gray-600">Welcome back! Here's an overview of your site.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Members</CardDescription>
            <CardTitle className="text-3xl">487</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-green-600">↑ 12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active Clubs</CardDescription>
            <CardTitle className="text-3xl">18</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-500">11 Senior, 7 Countrysider</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Upcoming Events</CardDescription>
            <CardTitle className="text-3xl">12</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-blue-600">Next: County Rally</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Shop Orders</CardDescription>
            <CardTitle className="text-3xl">24</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-orange-600">3 pending fulfillment</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates to your content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 text-sm">
              <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Newspaper className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">New article published</p>
                <p className="text-gray-500 text-xs">"County Dinner Dance 2025" • 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Product added</p>
                <p className="text-gray-500 text-xs">"Norfolk YFC Hoodie - Navy" • 5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="h-4 w-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Event updated</p>
                <p className="text-gray-500 text-xs">"Rally Day 2025" venue changed • Yesterday</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Create New Article
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Shop Product
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Schedule Event
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Upload Media
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Products View
function ProductsView() {
  const products = [
    { name: "Norfolk YFC Hoodie - Navy", category: "Clothing", price: "£32.00", stock: "In Stock (45)", status: "Active", sales: 128 },
    { name: "Norfolk YFC Polo Shirt - Green", category: "Clothing", price: "£18.00", stock: "In Stock (67)", status: "Active", sales: 94 },
    { name: "Norfolk YFC Baseball Cap", category: "Accessories", price: "£12.00", stock: "Low Stock (8)", status: "Active", sales: 156 },
    { name: "County Rally 2025 T-Shirt", category: "Event Merchandise", price: "£15.00", stock: "In Stock (120)", status: "Active", sales: 45 },
    { name: "Norfolk YFC Gilet - Black", category: "Clothing", price: "£35.00", stock: "In Stock (32)", status: "Active", sales: 67 },
    { name: "YFC Water Bottle - Stainless Steel", category: "Accessories", price: "£10.00", stock: "Out of Stock", status: "Inactive", sales: 203 },
    { name: "Norfolk YFC Scarf - Green/Navy", category: "Accessories", price: "£14.00", stock: "In Stock (28)", status: "Active", sales: 82 },
    { name: "Annual Membership - Senior (18-28)", category: "Memberships", price: "£65.00", stock: "—", status: "Active", sales: 487 },
    { name: "Annual Membership - Countrysider (11-17)", category: "Memberships", price: "£45.00", stock: "—", status: "Active", sales: 142 },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Shop Products</h2>
          <p className="text-xs sm:text-base text-gray-600 truncate">9 products • £12,840 total revenue this month</p>
        </div>
        <Button size="sm" className="flex-shrink-0">
          <Plus className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Add Product</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        {products.map((product, index) => (
          <Card key={index}>
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-start sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1">
                      <h3 className="font-semibold text-sm sm:text-base truncate">{product.name}</h3>
                      <Badge variant="outline" className="bg-gray-50 text-xs">{product.category}</Badge>
                      {product.stock.includes("Out of") ? (
                        <Badge className="bg-red-100 text-red-800 text-xs">Out of Stock</Badge>
                      ) : product.stock.includes("Low") ? (
                        <Badge className="bg-orange-100 text-orange-800 text-xs">Low Stock</Badge>
                      ) : (
                        <Badge className="bg-green-100 text-green-800 text-xs">{product.status}</Badge>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      <span className="font-semibold text-primary">{product.price}</span> • {product.stock} • {product.sales} sales
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                  {/* Desktop buttons */}
                  <Button size="sm" variant="outline" className="hidden sm:flex">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="hidden sm:flex">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  {/* Mobile icon-only buttons */}
                  <Button size="sm" variant="outline" className="sm:hidden h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="sm:hidden h-8 w-8 p-0">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// News View
function NewsView() {
  const articles = [
    { title: "County Dinner Dance 2025 - Tickets On Sale Now!", status: "Published", author: "Jen Hartley", date: "2 hours ago", category: "Events" },
    { title: "Norfolk YFC Wins National Rally Competition", status: "Published", author: "Tom Roberts", date: "1 day ago", category: "News" },
    { title: "Spring Ploughing Match Registration Open", status: "Published", author: "Sarah Johnson", date: "3 days ago", category: "Competitions" },
    { title: "New Member Welcome Event - March 15th", status: "Draft", author: "Emma Davies", date: "5 days ago", category: "Events" },
    { title: "Club Spotlight: Aylsham YFC's Charity Fundraiser", status: "Published", author: "Lucy Brown", date: "1 week ago", category: "Club News" },
    { title: "County Rally Day 2025 - Save The Date!", status: "Scheduled", author: "Jen Hartley", date: "Scheduled for Mar 1", category: "Events" },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">News & Blog</h2>
          <p className="text-xs sm:text-base text-gray-600 truncate">6 articles • 4 published, 1 draft, 1 scheduled</p>
        </div>
        <Button size="sm" className="flex-shrink-0">
          <Plus className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">New Article</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        {articles.map((article, index) => (
          <Card key={index}>
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-start sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Newspaper className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1">
                      <h3 className="font-semibold text-sm sm:text-base truncate">{article.title}</h3>
                      <Badge variant="outline" className={cn(
                        "text-xs",
                        article.status === "Published" ? "bg-green-50 text-green-700" :
                        article.status === "Draft" ? "bg-yellow-50 text-yellow-700" :
                        "bg-blue-50 text-blue-700"
                      )}>
                        {article.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">{article.category}</Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      By {article.author} • {article.date}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                  {/* Desktop buttons */}
                  <Button size="sm" variant="outline" className="hidden sm:flex">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="hidden sm:flex">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  {/* Mobile icon-only buttons */}
                  <Button size="sm" variant="outline" className="sm:hidden h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="sm:hidden h-8 w-8 p-0">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Clubs View
function ClubsView() {
  const clubs = [
    // Senior Clubs (11) - Real data from Norfolk YFC
    { name: "Dereham YFC", type: "Senior", members: 45, contact: "Amy Russell", status: "Active" },
    { name: "Diss YFC", type: "Senior", members: 38, contact: "Harry Fairhead", status: "Active" },
    { name: "Downham Market YFC", type: "Senior", members: 42, contact: "Henry Albutt", status: "Active" },
    { name: "Harleston YFC", type: "Senior", members: 48, contact: "Lewis Pepperell", status: "Active" },
    { name: "Loddon YFC", type: "Senior", members: 35, contact: "Byron Morris", status: "Active" },
    { name: "North Elmham YFC", type: "Senior", members: 40, contact: "Harry Ellen", status: "Active" },
    { name: "North Walsham YFC", type: "Senior", members: 44, contact: "Finn Will", status: "Active" },
    { name: "Reepham YFC", type: "Senior", members: 41, contact: "Max Monk", status: "Active" },
    { name: "Swaffham YFC", type: "Senior", members: 32, contact: "Lily Joll", status: "Active" },
    { name: "Terrington YFC", type: "Senior", members: 36, contact: "Norfolk YFC Office", status: "Active" },
    { name: "Wymondham YFC", type: "Senior", members: 49, contact: "Edward Rowling", status: "Active" },
    // Countrysider Groups (7) - Real data from Norfolk YFC
    { name: "Acle Countrysiders", type: "Countrysider", members: 25, contact: "Kay", status: "Active" },
    { name: "Dereham Countrysiders", type: "Countrysider", members: 22, contact: "Norfolk YFC Office", status: "Active" },
    { name: "Downham Market Countrysiders", type: "Countrysider", members: 20, contact: "Abby Neale", status: "Active" },
    { name: "Harleston Countrysiders", type: "Countrysider", members: 24, contact: "Helen Reeve", status: "Active" },
    { name: "Holt Countrysiders", type: "Countrysider", members: 26, contact: "Caroline Watson", status: "Active" },
    { name: "North Elmham Countrysiders", type: "Countrysider", members: 21, contact: "Wendy Cottrell", status: "Active" },
    { name: "Wymondham Countrysiders", type: "Countrysider", members: 23, contact: "Mark Holmes", status: "Active" },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Clubs</h2>
          <p className="text-xs sm:text-base text-gray-600 truncate">18 clubs • 11 Senior + 7 Countrysiders</p>
        </div>
        <Button size="sm" className="flex-shrink-0">
          <Plus className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Add Club</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        {clubs.map((club, index) => (
          <Card key={index}>
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-start sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1">
                      <h3 className="font-semibold text-sm sm:text-base truncate">{club.name}</h3>
                      <Badge variant="outline" className={cn(
                        "text-xs",
                        club.type === "Senior" ? "bg-blue-50 text-blue-700" : "bg-purple-50 text-purple-700"
                      )}>
                        {club.type}
                      </Badge>
                      <Badge className="bg-green-100 text-green-800 text-xs">{club.status}</Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      <span className="font-medium">{club.members} members</span> • Contact: {club.contact}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                  {/* Desktop buttons */}
                  <Button size="sm" variant="outline" className="hidden sm:flex">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="hidden sm:flex">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  {/* Mobile icon-only buttons */}
                  <Button size="sm" variant="outline" className="sm:hidden h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="sm:hidden h-8 w-8 p-0">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Events View
function EventsView() {
  const events = [
    { title: "County Dinner Dance 2025", date: "15 Mar 2025", time: "19:00", venue: "Swaffham Assembly Rooms", capacity: "200/250", bookings: 200, status: "Open" },
    { title: "Spring Ploughing Match", date: "22 Mar 2025", time: "09:00", venue: "Manor Farm, Reepham", capacity: "45/60", bookings: 45, status: "Open" },
    { title: "County Rally Day", date: "5 Apr 2025", time: "10:00", venue: "Blickling Estate", capacity: "180/200", bookings: 180, status: "Almost Full" },
    { title: "Stock Judging Competition", date: "12 Apr 2025", time: "14:00", venue: "Gressenhall Farm", capacity: "32/40", bookings: 32, status: "Open" },
    { title: "Public Speaking Final", date: "19 Apr 2025", time: "18:30", venue: "Dereham YFC Hall", capacity: "85/100", bookings: 85, status: "Open" },
    { title: "Tug of War County Championship", date: "26 Apr 2025", time: "11:00", venue: "Fakenham Racecourse", capacity: "150/150", bookings: 150, status: "Sold Out" },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Events</h2>
          <p className="text-xs sm:text-base text-gray-600 truncate">6 upcoming events • 692 total bookings</p>
        </div>
        <Button size="sm" className="flex-shrink-0">
          <Plus className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Create Event</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        {events.map((event, index) => (
          <Card key={index}>
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-start sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1">
                      <h3 className="font-semibold text-sm sm:text-base truncate">{event.title}</h3>
                      <Badge className={cn(
                        "text-xs",
                        event.status === "Sold Out" ? "bg-red-100 text-red-800" :
                        event.status === "Almost Full" ? "bg-orange-100 text-orange-800" :
                        "bg-green-100 text-green-800"
                      )}>
                        {event.status}
                      </Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {event.date} at {event.time} • {event.venue} • {event.capacity} tickets
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                  {/* Desktop buttons */}
                  <Button size="sm" variant="outline" className="hidden sm:flex">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="hidden sm:flex">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  {/* Mobile icon-only buttons */}
                  <Button size="sm" variant="outline" className="sm:hidden h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="sm:hidden h-8 w-8 p-0">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Jobs View
function JobsView() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Jobs Board</h2>
          <p className="text-xs sm:text-base text-gray-600">Manage agricultural job listings and opportunities</p>
        </div>
        <Button size="sm" className="flex-shrink-0">
          <Plus className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Post New Job</span>
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="text-center py-12 text-gray-500">
            <Briefcase className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <h3 className="font-semibold text-lg mb-2">Jobs Board Management</h3>
            <p className="mb-4">Post and manage agricultural job opportunities for Norfolk YFC members</p>
            <div className="max-w-2xl mx-auto text-left bg-gray-50 rounded-lg p-6 space-y-3">
              <p className="font-medium text-gray-900">Features Include:</p>
              <ul className="space-y-2 text-sm">
                <li>• Create and edit job listings with rich text editor</li>
                <li>• Categorize jobs (agriculture, office, events, retail, engineering)</li>
                <li>• Job types (full-time, part-time, apprenticeship, seasonal, volunteer)</li>
                <li>• Salary range and benefits information</li>
                <li>• Application tracking and candidate management</li>
                <li>• Featured job promotions</li>
                <li>• Automatic job expiry based on closing dates</li>
                <li>• Email notifications for new applications</li>
                <li>• Filter and search active/expired jobs</li>
                <li>• Analytics on job views and applications</li>
              </ul>
            </div>

            <div className="mt-6 max-w-2xl mx-auto">
              <h4 className="font-semibold text-sm mb-3 text-gray-900 text-left">Sample Job Listings:</h4>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 text-left border border-gray-200">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h5 className="font-semibold text-sm">Farm Manager</h5>
                      <p className="text-xs text-gray-600">Norfolk Farms Ltd • Norwich</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 text-xs">Full-time</Badge>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">£35,000 - £45,000 • Posted 5 days ago</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs h-7">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs h-7">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 text-left border border-gray-200">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h5 className="font-semibold text-sm">Agricultural Apprentice</h5>
                      <p className="text-xs text-gray-600">Broadland Estates • Wroxham</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 text-xs">Apprenticeship</Badge>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">£18,000 - £22,000 • Posted 10 days ago</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs h-7">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs h-7">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 text-left border border-gray-200">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h5 className="font-semibold text-sm">Farm Shop Manager</h5>
                      <p className="text-xs text-gray-600">Riverside Farm Shop • King's Lynn</p>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800 text-xs">Full-time</Badge>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">£28,000 - £32,000 • Posted 2 weeks ago</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs h-7">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs h-7">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Pages View
function PagesView() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Pages</h2>
          <p className="text-xs sm:text-base text-gray-600">Manage static pages and content</p>
        </div>
        <Button size="sm" className="flex-shrink-0">
          <Plus className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">New Page</span>
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="text-center py-12 text-gray-500">
            <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <h3 className="font-semibold text-lg mb-2">Page Builder</h3>
            <p className="mb-4">Create and edit website pages with drag-and-drop builder</p>
            <div className="max-w-2xl mx-auto text-left bg-gray-50 rounded-lg p-6 space-y-3">
              <p className="font-medium text-gray-900">Features Include:</p>
              <ul className="space-y-2 text-sm">
                <li>• Visual page builder with reusable blocks</li>
                <li>• Template library for common page types</li>
                <li>• Custom URL slugs and navigation</li>
                <li>• SEO settings per page</li>
                <li>• Version history and rollback</li>
                <li>• Mobile preview and responsive editing</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Media View
function MediaView() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Media Library</h2>
          <p className="text-xs sm:text-base text-gray-600">Upload and organize images, videos, and documents</p>
        </div>
        <Button size="sm" className="flex-shrink-0">
          <Upload className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Upload Files</span>
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="text-center py-12 text-gray-500">
            <ImageIcon className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <h3 className="font-semibold text-lg mb-2">Media Management</h3>
            <p className="mb-4">Centralized storage for all your media assets</p>
            <div className="max-w-2xl mx-auto text-left bg-gray-50 rounded-lg p-6 space-y-3">
              <p className="font-medium text-gray-900">Features Include:</p>
              <ul className="space-y-2 text-sm">
                <li>• Drag-and-drop file upload</li>
                <li>• Automatic image optimization and resizing</li>
                <li>• Folder organization and tagging</li>
                <li>• Search and filter by file type/date</li>
                <li>• Alt text and metadata management</li>
                <li>• Storage usage tracking</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Analytics View
function AnalyticsView() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Analytics</h2>
        <p className="text-xs sm:text-base text-gray-600">Track website performance and visitor insights</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="text-center py-12 text-gray-500">
            <BarChart3 className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <h3 className="font-semibold text-lg mb-2">Analytics Dashboard</h3>
            <p className="mb-4">Comprehensive insights into your website performance</p>
            <div className="max-w-2xl mx-auto text-left bg-gray-50 rounded-lg p-6 space-y-3">
              <p className="font-medium text-gray-900">Features Include:</p>
              <ul className="space-y-2 text-sm">
                <li>• Visitor statistics (pageviews, unique visitors)</li>
                <li>• Traffic sources and referrals</li>
                <li>• Popular pages and content</li>
                <li>• E-commerce conversion tracking</li>
                <li>• Event registration analytics</li>
                <li>• Custom date ranges and export options</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Silo Integration View
function SiloIntegrationView() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Member Database Integration</h2>
        <p className="text-xs sm:text-base text-gray-600">Silo API Integration Strategy & Capabilities</p>
      </div>

      {/* Integration Status */}
      <Alert className="bg-blue-50 border-blue-200">
        <AlertCircle className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-800">
          <strong>API Integration Pending:</strong> Full integration capabilities depend on Silo API documentation and access credentials.
          This page outlines the proposed integration approach and potential features once API access is provided.
        </AlertDescription>
      </Alert>

      {/* Integration Approach */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Integration Approach
          </CardTitle>
          <CardDescription>Proposed architecture for Norfolk YFC member database sync</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-sm flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Option 1</span>
                  Simple Portal
                </h4>
                <Badge className="bg-green-600">Included</Badge>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Direct link/iframe to existing Silo member portal. Minimal technical integration, quick implementation.
              </p>
              <div className="bg-white rounded p-2 text-xs text-gray-600 border border-blue-200">
                <p className="font-semibold text-blue-900 mb-1">✓ Instantly Accessible</p>
                <p>No additional development cost. Can be implemented immediately with Silo portal URL.</p>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-sm flex items-center gap-2">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Option 2</span>
                  Read-Only Sync
                </h4>
                <Badge className="bg-green-700">£250-500</Badge>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Display member data on website (directory, stats). Data flows one-way from Silo to website via scheduled sync.
              </p>
              <div className="bg-white rounded p-2 text-xs text-gray-600 border border-green-200">
                <p className="font-semibold text-green-900 mb-1">Requirements:</p>
                <p>• Silo API documentation</p>
                <p>• Read-only API access</p>
                <p>• Data field mapping specification</p>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-sm flex items-center gap-2">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">Option 3</span>
                  Bidirectional API
                </h4>
                <Badge className="bg-purple-700">£600-1,000</Badge>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Full two-way sync. Website registrations auto-update Silo. Complex but most integrated experience.
              </p>
              <div className="bg-white rounded p-2 text-xs text-gray-600 border border-purple-200">
                <p className="font-semibold text-purple-900 mb-1">⚠️ Cannot Price Accurately</p>
                <p>Final cost depends on API complexity. Quote provided after reviewing Silo API documentation.</p>
              </div>
            </div>
          </div>

          <Alert className="bg-amber-50 border-amber-200">
            <Info className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-sm text-amber-900">
              <strong>Recommendation:</strong> Start with Option 1 (included) for immediate functionality.
              Options 2 & 3 can be added later once we have Silo API documentation and can provide accurate implementation quotes.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Potential Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Data Display Features */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Data Display Features</CardTitle>
            <CardDescription>What could be shown on the website from Silo</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Member Directory</p>
                  <p className="text-xs text-gray-600">Public profiles with photos, clubs, interests (privacy-controlled)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Membership Statistics</p>
                  <p className="text-xs text-gray-600">Total members, club breakdown, age demographics, growth trends</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Club Membership Counts</p>
                  <p className="text-xs text-gray-600">Real-time member counts per club on interactive map</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Member Achievements</p>
                  <p className="text-xs text-gray-600">Competition wins, certificates, leadership roles</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Attendance Tracking</p>
                  <p className="text-xs text-gray-600">Event check-ins, club meeting participation</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Integration Features */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Integration Features</CardTitle>
            <CardDescription>Actions that could sync back to Silo</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Link2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">New Member Registration</p>
                  <p className="text-xs text-gray-600">Website signups automatically create Silo member records</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Link2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Event Registrations</p>
                  <p className="text-xs text-gray-600">Event bookings sync to Silo attendance records</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Link2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Membership Renewals</p>
                  <p className="text-xs text-gray-600">Online payments update Silo membership status and expiry dates</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Link2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Profile Updates</p>
                  <p className="text-xs text-gray-600">Members update contact details, preferences on website → syncs to Silo</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Link2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Shop Purchases</p>
                  <p className="text-xs text-gray-600">Link merchandise sales to member accounts</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Technical Requirements */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Requirements for Integration</CardTitle>
          <CardDescription>Information needed from Norfolk YFC to proceed</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">Required from Silo/Norfolk YFC:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>API Documentation:</strong> Available endpoints, request/response formats, authentication methods</li>
                <li>• <strong>API Credentials:</strong> API keys, OAuth tokens, or other authentication credentials</li>
                <li>• <strong>Data Schema:</strong> Structure of member data, available fields, data types</li>
                <li>• <strong>Rate Limits:</strong> API call limits, recommended sync frequencies</li>
                <li>• <strong>Webhook Support:</strong> Does Silo support webhooks for real-time updates?</li>
                <li>• <strong>Privacy & Permissions:</strong> What data can be publicly displayed? Member consent requirements?</li>
                <li>• <strong>Test Environment:</strong> Sandbox API for development and testing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-2">Fallback Approach (if API unavailable):</h4>
              <p className="text-sm text-gray-600">
                If Silo API is limited or unavailable, we can implement a simple member portal link, manual CSV import/export,
                or duplicate member management within this CMS until API access is established.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Estimated Implementation Timeline</CardTitle>
          <CardDescription>Once API documentation and credentials are provided</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded font-semibold text-sm">Week 1-2</div>
              <div>
                <p className="font-medium text-sm">API Discovery & Testing</p>
                <p className="text-xs text-gray-600">Review documentation, test endpoints, verify data schema</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded font-semibold text-sm">Week 3-4</div>
              <div>
                <p className="font-medium text-sm">Core Integration Build</p>
                <p className="text-xs text-gray-600">Implement authentication, data sync logic, error handling</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded font-semibold text-sm">Week 5-6</div>
              <div>
                <p className="font-medium text-sm">UI Development & Testing</p>
                <p className="text-xs text-gray-600">Build member directory, admin interface, conduct testing with real data</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded font-semibold text-sm">Week 7</div>
              <div>
                <p className="font-medium text-sm">Launch & Monitoring</p>
                <p className="text-xs text-gray-600">Deploy to production, monitor sync performance, train staff</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Settings View
function SettingsView() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-xs sm:text-base text-gray-600">Configure your website and CMS preferences</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="text-center py-12 text-gray-500">
            <Settings className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <h3 className="font-semibold text-lg mb-2">System Settings</h3>
            <p className="mb-4">Manage site configuration and user permissions</p>
            <div className="max-w-2xl mx-auto text-left bg-gray-50 rounded-lg p-6 space-y-3">
              <p className="font-medium text-gray-900">Settings Categories:</p>
              <ul className="space-y-2 text-sm">
                <li>• General (site name, logo, contact details)</li>
                <li>• Users & Permissions (roles, access control)</li>
                <li>• Email & Notifications (SMTP, templates)</li>
                <li>• Integrations (Stripe, Office 365, Maps)</li>
                <li>• SEO & Social (meta tags, social sharing)</li>
                <li>• Backup & Security (automated backups, SSL)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
