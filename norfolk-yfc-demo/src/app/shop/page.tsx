"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/page-hero";
import { ProductCard } from "@/components/shop/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingBag, Info } from "lucide-react";
import {
  productsData,
  productCategories,
  getFeaturedProducts,
} from "@/lib/products-data";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const featuredProducts = getFeaturedProducts();

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHero
        title="Norfolk YFC Shop"
        subtitle="Shop"
        description="Browse our range of Norfolk YFC branded merchandise, event tickets, and memberships."
      />

      {/* Notice Banner */}
      <section className="py-4 bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <strong>Note:</strong> Payment integration with Stripe will be
              implemented in Phase 4. This demo showcases the shop structure and
              products. Real orders will be processed through secure payment
              gateway.
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
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {productCategories.map((category) => (
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

          {filteredProducts.length > 0 && (
            <div className="text-center mt-4 text-sm text-gray-600">
              Showing {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""}
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      {selectedCategory === "all" && searchQuery === "" && (
        <section className="py-12 bg-gradient-to-br from-primary/5 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Featured Products
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredProducts.slice(0, 3).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filters to find products.
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

      {/* Shopping Cart Notice */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ShoppingBag className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Secure Online Payments
            </h2>
            <p className="text-gray-600 mb-6">
              In the full system, members will be able to purchase products
              directly through the website using Stripe payment processing. Cart
              functionality, saved addresses, and order history will all be
              integrated with the member portal.
            </p>
            <Badge variant="outline" className="text-sm">
              Stripe integration coming in Phase 4
            </Badge>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Member Prices</h3>
              <p className="text-sm text-gray-600">
                All products available at member prices. Some items exclusive to
                members only.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quality Products</h3>
              <p className="text-sm text-gray-600">
                High-quality branded merchandise from trusted suppliers.
                Comfortable, durable, and proudly Norfolk YFC.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Support YFC</h3>
              <p className="text-sm text-gray-600">
                Profits from shop sales support Norfolk YFC activities and help
                keep membership fees low.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
