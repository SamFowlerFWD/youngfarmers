import { notFound } from "next/navigation";
import { getProductBySlug, productsData } from "@/lib/products-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/shop/product-card";
import Link from "next/link";
import {
  ArrowLeft,
  ShoppingCart,
  Check,
  Tag,
  Package,
  Shield,
} from "lucide-react";

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Norfolk YFC Shop`,
    description: product.description,
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const categoryColors = {
    clothing: "bg-primary text-white",
    accessories: "bg-blue-600 text-white",
    tickets: "bg-purple-600 text-white",
    membership: "bg-yellow-600 text-white",
  };

  const relatedProducts = productsData
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild>
            <Link href="/shop">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shop
            </Link>
          </Button>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left Column - Product Images */}
          <div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-96 lg:h-[500px] flex items-center justify-center mb-4">
              <ShoppingCart className="h-32 w-32 text-gray-300" />
            </div>

            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(0, 4).map((image, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-lg h-20 flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                  >
                    <ShoppingCart className="h-8 w-8 text-gray-300" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Product Info */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className={categoryColors[product.category]}>
                {product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
              </Badge>
              {product.featured && (
                <Badge className="bg-yellow-500 text-yellow-950">
                  Featured
                </Badge>
              )}
              {product.inStock ? (
                <Badge className="bg-green-100 text-green-800">In Stock</Badge>
              ) : (
                <Badge variant="outline" className="border-red-300 text-red-700">
                  Out of Stock
                </Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-primary">
                £{product.price.toFixed(2)}
              </span>
              {product.category === "membership" && (
                <span className="text-gray-500">per year</span>
              )}
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            <Separator className="my-6" />

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      className="hover:bg-primary hover:text-white hover:border-primary"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Color
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant="outline"
                      className="hover:bg-primary hover:text-white hover:border-primary"
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  -
                </Button>
                <span className="w-12 text-center font-semibold">1</span>
                <Button variant="outline" size="sm">
                  +
                </Button>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Add to Cart Button */}
            <div className="space-y-3 mb-8">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Payment processing via Stripe - coming in Phase 4
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-gray-700">Member prices</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-gray-700">High quality products</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-gray-700">
                  Profits support Norfolk YFC
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div className="max-w-6xl mx-auto mt-12">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Product Details
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 whitespace-pre-line">
                  {product.fullDescription}
                </p>
              </div>

              {product.tags && product.tags.length > 0 && (
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-semibold text-gray-700">
                      Tags
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Shipping & Returns Info */}
        <div className="max-w-6xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Package className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Delivery Information
                  </h3>
                  <p className="text-sm text-gray-600">
                    Orders typically processed within 2-3 business days. Delivery
                    times vary. Collection available from county office during
                    opening hours.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Returns Policy
                  </h3>
                  <p className="text-sm text-gray-600">
                    Items can be returned within 14 days if unworn and in
                    original packaging. Contact the office to arrange returns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              You May Also Like
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
