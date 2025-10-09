"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/lib/products-data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const categoryColors = {
    clothing: "bg-primary text-white",
    accessories: "bg-blue-600 text-white",
    tickets: "bg-purple-600 text-white",
    membership: "bg-yellow-600 text-white",
  };

  return (
    <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <ShoppingCart className="h-16 w-16 text-gray-300" />
        <Badge
          className={`absolute top-4 right-4 ${
            categoryColors[product.category]
          }`}
        >
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Badge>
        {product.featured && (
          <Badge className="absolute top-4 left-4 bg-yellow-500 text-yellow-950">
            <Star className="h-3 w-3 mr-1 fill-current" />
            Featured
          </Badge>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="outline" className="bg-white">
              Out of Stock
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="pt-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {product.description}
        </p>

        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-primary">
              £{product.price.toFixed(2)}
            </span>
            {product.category === "membership" && (
              <span className="text-sm text-gray-500">per year</span>
            )}
          </div>

          {product.sizes && product.sizes.length > 0 && (
            <p className="text-xs text-gray-500 mb-2">
              Sizes: {product.sizes.slice(0, 3).join(", ")}
              {product.sizes.length > 3 && " +more"}
            </p>
          )}

          <Button
            asChild
            className="w-full bg-primary hover:bg-primary/90"
            disabled={!product.inStock}
          >
            <Link href={`/shop/${product.slug}`}>
              {product.inStock ? "View Details" : "Out of Stock"}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
