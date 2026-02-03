# Norfolk YFC UI Component Specifications
## Ready-to-Implement Component Patterns

Based on the analysis of NFYFC and Norjam websites, here are specific, implementable UI components for the Norfolk YFC demo.

---

## 1. Navigation Component

### Desktop Navigation (NFYFC-inspired)
```tsx
// components/Navigation.tsx
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Norfolk YFC" className="h-10 w-auto" />
          <span className="hidden font-semibold sm:inline-block">
            Norfolk YFC
          </span>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li><Link href="/about">Our Story</Link></li>
                  <li><Link href="/team">Meet the Team</Link></li>
                  <li><Link href="/values">Our Values</Link></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Clubs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li><Link href="/clubs">Find a Club</Link></li>
                  <li><Link href="/clubs/map">Interactive Map</Link></li>
                  <li><Link href="/start-club">Start a Club</Link></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/events">Events</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/shop">Shop</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/resources">Resources</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex">
            Member Login
          </Button>
          <Button className="bg-primary-green hover:bg-green-700">
            Join Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}
```

---

## 2. Hero Section Patterns

### Pattern A: NFYFC-Style Professional Hero
```tsx
// components/HeroProfessional.tsx
const HeroProfessional = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Do More, Be More with{' '}
              <span className="text-primary-green">Norfolk YFC</span>
            </h1>
            <p className="text-lg text-gray-600 sm:text-xl">
              You don't have to be a Young Farmer to join Young Farmers!
              Discover opportunities, make friends, and develop skills that last a lifetime.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary-green hover:bg-green-700">
                Become a Member
              </Button>
              <Button size="lg" variant="outline">
                Find Your Local Club
              </Button>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <p className="text-3xl font-bold text-primary-green">500+</p>
                <p className="text-sm text-gray-600">Active Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary-blue">10</p>
                <p className="text-sm text-gray-600">Senior Clubs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-orange">75+</p>
                <p className="text-sm text-gray-600">Years of Heritage</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px]">
            <img
              src="/hero-image.jpg"
              alt="Young farmers at event"
              className="h-full w-full rounded-2xl object-cover shadow-xl"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 rounded-full bg-accent-orange p-4 text-white shadow-lg">
              <p className="text-sm font-bold">Ages</p>
              <p className="text-2xl font-bold">10-28</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### Pattern B: Norjam-Style Dynamic Hero (for Events)
```tsx
// components/HeroDynamic.tsx
const HeroDynamic = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.2]" />

      <div className="container relative mx-auto px-4 py-24">
        <div className="text-center">
          {/* Countdown Timer */}
          <div className="mb-8 inline-flex gap-4 rounded-full bg-white/20 p-4 backdrop-blur">
            <div className="text-white">
              <p className="text-3xl font-bold">45</p>
              <p className="text-sm">Days</p>
            </div>
            <div className="text-white">
              <p className="text-3xl font-bold">12</p>
              <p className="text-sm">Hours</p>
            </div>
            <div className="text-white">
              <p className="text-3xl font-bold">30</p>
              <p className="text-sm">Minutes</p>
            </div>
          </div>

          <h1 className="mb-4 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Summer Festival 2025
          </h1>
          <p className="mb-8 text-xl text-white/90">
            The biggest youth agriculture event in Norfolk
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Get Tickets
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## 3. Card Components

### Event Card (Balanced Style)
```tsx
// components/cards/EventCard.tsx
const EventCard = ({ event }) => {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        {/* Date badge */}
        <div className="absolute left-4 top-4 rounded-lg bg-white px-3 py-1 shadow-lg">
          <p className="text-xs font-semibold text-gray-600">{event.month}</p>
          <p className="text-2xl font-bold text-primary-green">{event.day}</p>
        </div>
        {/* Category badge */}
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-accent-orange px-3 py-1 text-xs font-semibold text-white">
            {event.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-900 line-clamp-2">
          {event.title}
        </h3>
        <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {event.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {event.time}
          </span>
        </div>
        <p className="mb-4 text-gray-600 line-clamp-2">{event.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary-green">
            {event.price === 0 ? 'Free' : `£${event.price}`}
          </span>
          <Button variant="outline" size="sm" className="group-hover:bg-primary-green group-hover:text-white">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}
```

### Product Card (E-commerce)
```tsx
// components/cards/ProductCard.tsx
const ProductCard = ({ product }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl">
      {/* Sale badge */}
      {product.onSale && (
        <div className="absolute left-2 top-2 z-10 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
          SALE
        </div>
      )}

      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        {/* Quick actions overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
          <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
            Quick View
          </Button>
          <Button size="icon" className="bg-white text-gray-900 hover:bg-gray-100">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs font-medium uppercase text-gray-500">{product.category}</p>
        <h3 className="mt-1 text-lg font-semibold text-gray-900 line-clamp-1">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary-green">
              £{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                £{product.originalPrice}
              </span>
            )}
          </div>
          <Button size="sm" className="bg-primary-green hover:bg-green-700">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
```

### Club Card (Map/Directory)
```tsx
// components/cards/ClubCard.tsx
const ClubCard = ({ club }) => {
  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
      <div className="p-6">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{club.name}</h3>
            <p className="text-sm text-gray-600">{club.type}</p>
          </div>
          <Badge variant={club.active ? "success" : "secondary"}>
            {club.active ? "Active" : "Inactive"}
          </Badge>
        </div>

        {/* Stats */}
        <div className="mb-4 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-green-50 p-2">
            <p className="text-lg font-bold text-primary-green">{club.members}</p>
            <p className="text-xs text-gray-600">Members</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-2">
            <p className="text-lg font-bold text-secondary-blue">{club.age}</p>
            <p className="text-xs text-gray-600">Age Range</p>
          </div>
          <div className="rounded-lg bg-orange-50 p-2">
            <p className="text-lg font-bold text-accent-orange">{club.meetingDay}</p>
            <p className="text-xs text-gray-600">Meetings</p>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-2 border-t pt-4">
          <p className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            {club.location}
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-600">
            <User className="h-4 w-4" />
            {club.leader}
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-600">
            <Mail className="h-4 w-4" />
            {club.email}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-2">
          <Button className="flex-1" variant="outline">
            View Details
          </Button>
          <Button className="flex-1 bg-primary-green hover:bg-green-700">
            Contact Club
          </Button>
        </div>
      </div>
    </div>
  )
}
```

---

## 4. Form Components

### Newsletter Signup (NFYFC-style)
```tsx
// components/forms/NewsletterSignup.tsx
const NewsletterSignup = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-700 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Stay Connected with Norfolk YFC
          </h2>
          <p className="mb-8 text-green-100">
            Get the latest news, events, and opportunities delivered to your inbox
          </p>
          <form className="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-lg border-0 px-4 py-3 text-gray-900 placeholder:text-gray-500"
            />
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Subscribe Now
            </Button>
          </form>
          <p className="mt-4 text-sm text-green-100">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
```

### Member Login Modal
```tsx
// components/forms/MemberLogin.tsx
const MemberLogin = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Member Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Welcome Back!</DialogTitle>
          <DialogDescription>
            Sign in to access your member dashboard
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <Checkbox />
              <span className="text-sm">Remember me</span>
            </label>
            <Link href="/forgot" className="text-sm text-primary-green hover:underline">
              Forgot password?
            </Link>
          </div>
          <Button className="w-full bg-primary-green hover:bg-green-700">
            Sign In
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-600">Or</span>
            </div>
          </div>
          <p className="text-center text-sm">
            Not a member yet?{' '}
            <Link href="/join" className="font-medium text-primary-green hover:underline">
              Join Norfolk YFC
            </Link>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
```

---

## 5. Footer Component

### Comprehensive Footer (NFYFC-inspired)
```tsx
// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <img src="/logo-white.png" alt="Norfolk YFC" className="mb-4 h-12 w-auto" />
            <p className="mb-4 text-sm">
              Do More, Be More with Norfolk YFC. Join 500+ young people across Norfolk
              developing skills, making friends, and having fun.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/clubs" className="hover:text-white">Find a Club</Link></li>
              <li><Link href="/events" className="hover:text-white">Upcoming Events</Link></li>
              <li><Link href="/membership" className="hover:text-white">Membership</Link></li>
              <li><Link href="/shop" className="hover:text-white">Shop</Link></li>
              <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>YFC Centre, Easton College, Norwich NR9 5DX</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>01603 731350</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>admin@norfolkyfc.co.uk</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4" />
                <span>
                  Mon-Fri: 9:00am - 5:00pm<br />
                  Closed weekends & bank holidays
                </span>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Our Partners</h3>
            <div className="space-y-4">
              <img src="/partners/rnaa.png" alt="RNAA" className="h-12 w-auto" />
              <img src="/partners/clan-trust.png" alt="CLAN Trust" className="h-12 w-auto" />
              <img src="/partners/chadacre.png" alt="Chadacre Trust" className="h-12 w-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            <p>© 2025 Norfolk Federation of Young Farmers Clubs. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
              <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

---

## 6. Interactive Map Component

### Mapbox Club Finder
```tsx
// components/interactive/ClubMap.tsx
const ClubMap = () => {
  return (
    <div className="flex h-[600px] overflow-hidden rounded-lg border">
      {/* Sidebar */}
      <div className="w-80 overflow-y-auto border-r bg-white p-4">
        <div className="mb-4">
          <Input
            type="search"
            placeholder="Search clubs..."
            className="w-full"
          />
        </div>

        {/* Filter buttons */}
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge variant="outline" className="cursor-pointer hover:bg-primary-green hover:text-white">
            All Clubs
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary-green hover:text-white">
            Senior (10)
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary-green hover:text-white">
            Countrysider (6)
          </Badge>
        </div>

        {/* Club list */}
        <div className="space-y-2">
          {clubs.map((club) => (
            <div
              key={club.id}
              className="cursor-pointer rounded-lg border p-3 transition-colors hover:bg-gray-50"
            >
              <h4 className="font-semibold">{club.name}</h4>
              <p className="text-sm text-gray-600">{club.location}</p>
              <div className="mt-1 flex items-center gap-4 text-xs text-gray-500">
                <span>{club.members} members</span>
                <span>{club.meetingDay}s</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="flex-1">
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={{
            longitude: 1.0,
            latitude: 52.6,
            zoom: 9
          }}
          style={{ width: '100%', height: '100%' }}
          mapStyle="mapbox://styles/mapbox/outdoors-v12"
        >
          {clubs.map((club) => (
            <Marker
              key={club.id}
              longitude={club.longitude}
              latitude={club.latitude}
              anchor="bottom"
            >
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-primary-green text-white flex items-center justify-center font-bold shadow-lg">
                  {club.members}
                </div>
                <div className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary-green" />
              </div>
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  )
}
```

---

## 7. Animation Patterns (Framer Motion)

### Scroll Animations
```tsx
// hooks/useScrollAnimation.tsx
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Usage in component
<motion.div
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  variants={staggerChildren}
  className="grid grid-cols-3 gap-6"
>
  {items.map((item) => (
    <motion.div key={item.id} variants={fadeInUp}>
      {/* Card content */}
    </motion.div>
  ))}
</motion.div>
```

---

## Implementation Priority Order

1. **Week 1 - Foundation**
   - Navigation component with mobile menu
   - Footer with all sections
   - Color system and typography
   - Button variants

2. **Week 2 - Core Components**
   - Hero section (both patterns)
   - Event, Product, and Club cards
   - Newsletter signup
   - Basic forms

3. **Week 3 - Interactive**
   - Mapbox integration
   - Search functionality
   - Filters and sorting
   - Shopping cart

4. **Week 4 - Polish**
   - Animations with Framer Motion
   - Loading states
   - Error handling
   - Performance optimization

---

## Responsive Breakpoints

```css
/* Mobile First Approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

## Performance Targets

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1