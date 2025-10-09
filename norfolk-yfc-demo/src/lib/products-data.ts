export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'clothing' | 'accessories' | 'tickets' | 'membership';
  price: number;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  featured: boolean;
  inStock: boolean;
  sizes?: string[];
  colors?: string[];
  tags: string[];
}

export const productsData: Product[] = [
  {
    id: 'norfolk-yfc-hoodie',
    name: 'Norfolk YFC Hoodie',
    slug: 'norfolk-yfc-hoodie',
    category: 'clothing',
    price: 25,
    description: 'Premium quality hoodie with embroidered Norfolk YFC logo. Perfect for club meetings and events.',
    fullDescription: 'Stay warm and show your Norfolk YFC pride with our premium quality hoodie. Made from 80% cotton and 20% polyester fleece, this comfortable hoodie features an embroidered Norfolk YFC logo on the chest and printed design on the back. Includes a lined hood, kangaroo pocket, and ribbed cuffs and hem for a perfect fit. Available in a range of sizes and colors. Machine washable. These hoodies have become a staple of Norfolk YFC members - you\'ll see them at every event! Great quality that lasts.',
    image: '/images/products/hoodie-green.jpg',
    images: [
      '/images/products/hoodie-green.jpg',
      '/images/products/hoodie-navy.jpg',
      '/images/products/hoodie-black.jpg',
      '/images/products/hoodie-detail.jpg',
    ],
    featured: true,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Forest Green', 'Navy Blue', 'Black'],
    tags: ['Clothing', 'Hoodie', 'Logo', 'Popular'],
  },
  {
    id: 'yfc-t-shirt',
    name: 'Norfolk YFC T-Shirt',
    slug: 'norfolk-yfc-t-shirt',
    category: 'clothing',
    price: 15,
    description: 'Classic cotton t-shirt with Norfolk YFC design. Essential for every member.',
    fullDescription: 'Our classic Norfolk YFC t-shirt is a must-have for every member. Made from 100% soft cotton, this comfortable t-shirt features a bold Norfolk YFC design on the front. Perfect for casual wear, club meetings, sports events, or just showing your YFC pride around town. Pre-shrunk fabric ensures your t-shirt maintains its shape and fit after washing. Available in multiple colors and all sizes from youth to adult XXL. These t-shirts are incredibly popular - many members buy multiple colors! Durable print that won\'t fade or crack.',
    image: '/images/products/tshirt-green.jpg',
    images: [
      '/images/products/tshirt-green.jpg',
      '/images/products/tshirt-white.jpg',
      '/images/products/tshirt-navy.jpg',
    ],
    featured: true,
    inStock: true,
    sizes: ['Youth S', 'Youth M', 'Youth L', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Green', 'White', 'Navy', 'Grey'],
    tags: ['Clothing', 'T-Shirt', 'Logo', 'Essential'],
  },
  {
    id: 'baseball-cap',
    name: 'Norfolk YFC Baseball Cap',
    slug: 'norfolk-yfc-baseball-cap',
    category: 'accessories',
    price: 10,
    description: 'Embroidered baseball cap with adjustable strap. One size fits all.',
    fullDescription: 'Complete your YFC look with our smart embroidered baseball cap. Made from durable cotton twill with a structured crown and curved brim, this cap features high-quality embroidered Norfolk YFC logo on the front. The adjustable strap at the back ensures a comfortable fit for everyone. Perfect for outdoor events, farm visits, or casual wear. The pre-curved brim provides excellent sun protection. Available in green or navy. These caps are practical, stylish, and show your Norfolk YFC pride wherever you go. Easy to care for - just hand wash and air dry.',
    image: '/images/products/cap-green.jpg',
    images: ['/images/products/cap-green.jpg', '/images/products/cap-navy.jpg'],
    featured: false,
    inStock: true,
    colors: ['Green', 'Navy'],
    tags: ['Accessories', 'Cap', 'Logo', 'Outdoor'],
  },
  {
    id: 'tote-bag',
    name: 'Norfolk YFC Canvas Tote Bag',
    slug: 'norfolk-yfc-tote-bag',
    category: 'accessories',
    price: 12,
    description: 'Eco-friendly canvas tote bag with Norfolk YFC design. Perfect for shopping or club meetings.',
    fullDescription: 'Our sturdy canvas tote bag is both practical and environmentally friendly. Made from 100% natural cotton canvas, this spacious bag features a bold Norfolk YFC design printed on one side. The bag measures 38cm x 42cm with reinforced handles, making it perfect for carrying books, shopping, gym kit, or anything else you need for YFC meetings and events. The heavyweight canvas ensures this bag will last for years. Easy to fold and store when not in use. Machine washable. A great alternative to plastic bags and a stylish way to represent Norfolk YFC!',
    image: '/images/products/tote-bag.jpg',
    images: ['/images/products/tote-bag.jpg', '/images/products/tote-bag-in-use.jpg'],
    featured: false,
    inStock: true,
    tags: ['Accessories', 'Bag', 'Eco-Friendly', 'Practical'],
  },
  {
    id: 'water-bottle',
    name: 'Norfolk YFC Water Bottle',
    slug: 'norfolk-yfc-water-bottle',
    category: 'accessories',
    price: 8,
    description: 'Reusable aluminium water bottle with Norfolk YFC logo. Stay hydrated in style!',
    fullDescription: 'Keep hydrated at events, competitions, and club meetings with our branded aluminium water bottle. This 600ml bottle features the Norfolk YFC logo printed on high-quality aluminium. The screw-top lid prevents leaks and spills, while the carabiner clip allows you to attach it to bags or backpacks. Lightweight and durable, this bottle is perfect for sports events, farm visits, or daily use. Easy to clean and refill - much better for the environment than single-use plastic bottles. Available in green or blue. These bottles have become incredibly popular with our members!',
    image: '/images/products/water-bottle-green.jpg',
    images: [
      '/images/products/water-bottle-green.jpg',
      '/images/products/water-bottle-blue.jpg',
    ],
    featured: false,
    inStock: true,
    colors: ['Green', 'Blue'],
    tags: ['Accessories', 'Water Bottle', 'Eco-Friendly', 'Sports'],
  },
  {
    id: 'zip-hoodie',
    name: 'Norfolk YFC Zip-Up Hoodie',
    slug: 'norfolk-yfc-zip-hoodie',
    category: 'clothing',
    price: 28,
    description: 'Premium zip-up hoodie with embroidered logos. Perfect for layering.',
    fullDescription: 'Our premium zip-up hoodie is a versatile addition to your YFC wardrobe. Made from a comfortable cotton-polyester blend, this hoodie features embroidered Norfolk YFC branding on the chest and back. The full-length zip makes it easy to wear over other clothes, while the lined hood provides extra warmth when needed. Two front pockets keep your hands warm or store essentials. Ribbed cuffs and hem ensure a great fit. Available in a range of sizes from XS to XXL. This hoodie is perfect for cooler evenings at outdoor events, travelling to competitions, or casual everyday wear. High-quality construction ensures it will last season after season.',
    image: '/images/products/zip-hoodie-navy.jpg',
    images: [
      '/images/products/zip-hoodie-navy.jpg',
      '/images/products/zip-hoodie-grey.jpg',
    ],
    featured: false,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Grey', 'Forest Green'],
    tags: ['Clothing', 'Hoodie', 'Zip-Up', 'Premium'],
  },
  {
    id: 'polo-shirt',
    name: 'Norfolk YFC Polo Shirt',
    slug: 'norfolk-yfc-polo-shirt',
    category: 'clothing',
    price: 18,
    description: 'Smart embroidered polo shirt. Perfect for representing Norfolk YFC at competitions.',
    fullDescription: 'Look smart at competitions and events with our Norfolk YFC polo shirt. This high-quality polo is made from a comfortable cotton-polyester pique fabric and features an embroidered Norfolk YFC logo on the chest. The classic polo collar and three-button placket give a professional appearance. Perfect for wearing at stock judging, public speaking competitions, and any event where you want to represent Norfolk YFC with pride. The durable fabric is easy to care for and maintains its shape after washing. Available in green, navy, or white in a full range of sizes. Many members buy multiple polo shirts as they\'re so practical and smart-looking!',
    image: '/images/products/polo-green.jpg',
    images: [
      '/images/products/polo-green.jpg',
      '/images/products/polo-navy.jpg',
      '/images/products/polo-white.jpg',
    ],
    featured: false,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Forest Green', 'Navy', 'White'],
    tags: ['Clothing', 'Polo Shirt', 'Smart', 'Competitions'],
  },
  {
    id: 'beanie-hat',
    name: 'Norfolk YFC Beanie Hat',
    slug: 'norfolk-yfc-beanie-hat',
    category: 'accessories',
    price: 10,
    description: 'Warm knitted beanie with embroidered logo. Essential winter accessory.',
    fullDescription: 'Stay warm during winter events and outdoor activities with our cosy Norfolk YFC beanie hat. This classic knitted beanie is made from soft acrylic yarn and features an embroidered Norfolk YFC logo on the turned-up brim. One size fits most. Perfect for cold weather events like the Christmas Tractor Run, winter farm visits, or everyday wear during the colder months. The close-fitting design keeps you warm without being too bulky. Available in green or navy. These beanies are popular with members of all ages and make great gifts. Practical, warm, and shows your YFC pride!',
    image: '/images/products/beanie-green.jpg',
    images: ['/images/products/beanie-green.jpg', '/images/products/beanie-navy.jpg'],
    featured: false,
    inStock: true,
    colors: ['Forest Green', 'Navy'],
    tags: ['Accessories', 'Beanie', 'Winter', 'Warm'],
  },
  {
    id: 'lanyard',
    name: 'Norfolk YFC Lanyard',
    slug: 'norfolk-yfc-lanyard',
    category: 'accessories',
    price: 3,
    description: 'Branded lanyard with safety breakaway. Perfect for membership cards and keys.',
    fullDescription: 'Keep your membership card, keys, or ID safe and visible with our Norfolk YFC lanyard. Made from durable woven polyester, this lanyard features repeated Norfolk YFC branding along its length. The metal clip at the bottom easily attaches to cards or key rings, while the safety breakaway ensures it will release if caught. Perfect for wearing at events, competitions, and club meetings. Many members use these to display their membership cards or as general key holders. At just £3, these make great additions to any order. Available in green or navy. Practical and affordable!',
    image: '/images/products/lanyard-green.jpg',
    images: ['/images/products/lanyard-green.jpg', '/images/products/lanyard-navy.jpg'],
    featured: false,
    inStock: true,
    colors: ['Green', 'Navy'],
    tags: ['Accessories', 'Lanyard', 'Practical', 'Budget'],
  },
  {
    id: 'sweatshirt',
    name: 'Norfolk YFC Sweatshirt',
    slug: 'norfolk-yfc-sweatshirt',
    category: 'clothing',
    price: 20,
    description: 'Classic crew neck sweatshirt with large printed design.',
    fullDescription: 'Our comfortable crew neck sweatshirt is perfect for everyday wear. Made from a soft cotton-polyester fleece blend, this sweatshirt features a large Norfolk YFC design printed on the front. The classic crew neck and ribbed cuffs and hem provide a comfortable, relaxed fit. Perfect for club meetings, casual wear, or layering under jackets in colder weather. The fleece lining keeps you warm without being too heavy. Available in a range of sizes from youth to adult XXL. Choose from several colors including green, grey, and navy. These sweatshirts wash well and maintain their shape and print quality. A wardrobe essential for any YFC member!',
    image: '/images/products/sweatshirt-grey.jpg',
    images: [
      '/images/products/sweatshirt-grey.jpg',
      '/images/products/sweatshirt-green.jpg',
      '/images/products/sweatshirt-navy.jpg',
    ],
    featured: false,
    inStock: true,
    sizes: ['Youth S', 'Youth M', 'Youth L', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Grey', 'Forest Green', 'Navy'],
    tags: ['Clothing', 'Sweatshirt', 'Casual', 'Comfortable'],
  },
  {
    id: 'rugby-shirt',
    name: 'Norfolk YFC Rugby Shirt',
    slug: 'norfolk-yfc-rugby-shirt',
    category: 'clothing',
    price: 30,
    description: 'Traditional striped rugby shirt with embroidered logos. Stand out from the crowd!',
    fullDescription: 'Make a statement with our traditional striped rugby shirt. This heavyweight cotton rugby shirt features green and white hoops with embroidered Norfolk YFC logos on the chest. The rubber buttons on the collar add an authentic rugby shirt touch. Made from durable 100% cotton, this shirt is built to last. Perfect for social events, sports activities, or making a bold fashion statement. The relaxed fit is comfortable for all body types. Available in sizes S to XXL. Rugby shirts have become increasingly popular with YFC members for their classic style and comfortable fit. These shirts look great and get better with age. Show your Norfolk YFC pride in style!',
    image: '/images/products/rugby-shirt.jpg',
    images: [
      '/images/products/rugby-shirt.jpg',
      '/images/products/rugby-shirt-detail.jpg',
    ],
    featured: false,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['Clothing', 'Rugby Shirt', 'Statement', 'Premium'],
  },
  {
    id: 'gym-bag',
    name: 'Norfolk YFC Sports Bag',
    slug: 'norfolk-yfc-sports-bag',
    category: 'accessories',
    price: 20,
    description: 'Durable sports holdall with embroidered logo. Perfect for sports tournaments and events.',
    fullDescription: 'Carry your kit in style with our Norfolk YFC sports bag. This durable holdall is made from tough polyester with reinforced stitching and features an embroidered Norfolk YFC logo. Measuring 50cm x 25cm x 25cm, there\'s plenty of room for sports kit, clothes, or overnight essentials. The bag has one large main compartment, an end pocket for shoes or wet kit, and an external zip pocket for valuables. Padded shoulder strap and carry handles provide comfortable carrying options. Perfect for sports tournaments, residential events, or gym use. Available in navy with green trim. These bags are popular with members who compete in sports or attend residential courses. Quality construction ensures these bags will handle years of use!',
    image: '/images/products/sports-bag.jpg',
    images: ['/images/products/sports-bag.jpg', '/images/products/sports-bag-open.jpg'],
    featured: false,
    inStock: true,
    tags: ['Accessories', 'Bag', 'Sports', 'Practical'],
  },
  {
    id: 'membership-junior',
    name: 'Junior Membership (Countrysider) 2025/26',
    slug: 'junior-membership-2025-26',
    category: 'membership',
    price: 25,
    description: 'Annual membership for ages 10-16. Join a Countrysider group and start your YFC journey!',
    fullDescription: 'Junior Membership is for young people aged 10-16 who want to join a Countrysider group. Membership includes: access to all Countrysider activities and events, £10 million public liability insurance, access to member-only events and discounts, membership card and certificate, quarterly newsletter, and eligibility for Countrysider competitions and awards. Membership runs from 1st September to 31st August each year. Junior members can attend their local Countrysider group meetings and participate in a wide range of activities including crafts, farm visits, outdoor adventures, and more. This is a great way for younger members to develop confidence, make friends, and discover countryside life. All new members receive a welcome pack with information about YFC and what to expect.',
    image: '/images/products/membership-junior.jpg',
    images: ['/images/products/membership-junior.jpg'],
    featured: true,
    inStock: true,
    tags: ['Membership', 'Junior', 'Countrysider', 'Ages 10-16'],
  },
  {
    id: 'membership-senior',
    name: 'Senior Membership (Young Farmer) 2025/26',
    slug: 'senior-membership-2025-26',
    category: 'membership',
    price: 40,
    description: 'Annual membership for ages 14-28. Full access to all Norfolk YFC has to offer!',
    fullDescription: 'Senior Membership is for young people aged 14-28. Membership includes: access to all YFC events, competitions, and activities, £10 million public liability insurance, eligibility to compete at county and national level, ability to hold club or county office, access to training courses and residential opportunities, member-only discounts at local businesses, membership card and certificate, quarterly newsletter, and access to NFYFC benefits and national events. Membership runs from 1st September to 31st August each year. Senior members can attend their local YFC club meetings and participate in everything from sports competitions to public speaking, from social events to overseas travel opportunities. No farming background required - YFC welcomes everyone! Join one of our 10 senior clubs across Norfolk and start making memories that will last a lifetime.',
    image: '/images/products/membership-senior.jpg',
    images: ['/images/products/membership-senior.jpg'],
    featured: true,
    inStock: true,
    tags: ['Membership', 'Senior', 'Young Farmer', 'Ages 14-28'],
  },
  {
    id: 'county-rally-ticket',
    name: 'County Rally 2025 Ticket',
    slug: 'county-rally-2025-ticket',
    category: 'tickets',
    price: 8,
    description: 'Entry ticket for Norfolk YFC County Rally 2025 - 15th November at Norfolk Showground.',
    fullDescription: 'Secure your place at the biggest event in the Norfolk YFC calendar! The County Rally 2025 ticket includes: entry to the Norfolk Showground for the full day (10am - 6pm), access to all competitions and performances, entertainment throughout the day, and admission to the awards ceremony. Food and drink available to purchase from vendors. This is a fantastic day celebrating all that Norfolk YFC has achieved over the year. Watch our talented members compete in sports, performing arts, public speaking and more. The day concludes with our prestigious awards ceremony recognizing individual and club achievements. Whether you\'re competing or supporting, this event is not to be missed. Book early to secure your ticket - this event regularly sells out! Ages 14+ (under 16s must be accompanied by an adult). Members receive priority booking.',
    image: '/images/products/county-rally-ticket.jpg',
    images: ['/images/products/county-rally-ticket.jpg'],
    featured: false,
    inStock: true,
    tags: ['Ticket', 'Event', 'County Rally', 'Competition'],
  },
];

// Helper functions
export function getProductsByCategory(category: Product['category']): Product[] {
  return productsData.filter((product) => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return productsData.filter((product) => product.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((product) => product.slug === slug);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return productsData.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

export const productCategories = [
  { value: 'all', label: 'All Products' },
  { value: 'clothing', label: 'Clothing' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'tickets', label: 'Event Tickets' },
  { value: 'membership', label: 'Membership' },
];
