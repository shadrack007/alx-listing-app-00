import { PropertyProps } from "@/interfaces";

export const BASE_API = "http://localhost:3000/api/v1";

export const HERO_BACKGROUND_iMAGE_DESKTOP = "/assets/images/hero-desktop.png";

export const HERO_BACKGROUND_iMAGE_MOBILE = "/assets/images/hero-desktop.png";

export const FILTER_LABELS = [
  "All",
  "Top Villa",
  "Free Reschedule",
  "Book Now, Pay later",
  "Self checkin",
  "Instant Book",
];

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef",
    ],
    discount: "",
    description:
      "A serene beachfront villa with modern amenities, private pool, and stunning ocean views. Perfect for luxury vacations in Bali.",
    reviews: [
      {
        avatar:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        name: "Sophie Tan",
        rating: 5,
        comment: "Absolutely loved the vibe and location. Will return again!",
      },
      {
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        name: "James K.",
        rating: 4.8,
        comment:
          "The sunset view from the villa is breathtaking. Worth every penny.",
      },
    ],
  },
  {
    name: "Mountain Escape Chalet",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef",
    ],
    discount: "30",
    description:
      "Escape to a cozy chalet in Aspen. Rustic fireplace, breathtaking views, and serene mountain surroundings await.",
    reviews: [
      {
        avatar:
          "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
        name: "Liam Brooks",
        rating: 4.6,
        comment: "Quiet and beautiful. The view alone makes it worth it.",
      },
      {
        avatar:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        name: "Emily R.",
        rating: 4.9,
        comment: "Perfect for our family ski trip. Loved the cabin atmosphere.",
      },
    ],
  },
  {
    name: "Cozy Desert Retreat",
    address: { state: "Palm Springs", city: "California", country: "USA" },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.unsplash.com/photo-1494522358652-33b67a2f9e64",
    ],
    discount: "",
    description:
      "A charming retreat in the desert with pet-friendly spaces and modern comforts—your perfect getaway under the sun.",
    reviews: [
      {
        avatar:
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        name: "Mia Santos",
        rating: 5,
        comment: "Our dog loved it! Great location and cozy interior.",
      },
      {
        avatar:
          "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
        name: "Noah W.",
        rating: 4.8,
        comment:
          "Beautiful setup, check-in was seamless and the host was responsive.",
      },
    ],
  },
  {
    name: "City Lights Penthouse",
    address: { state: "New York", city: "New York", country: "USA" },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.unsplash.com/photo-1494522358652-33b67a2f9e64",
    ],
    discount: "15",
    description:
      "Sleek penthouse in downtown NYC with panoramic skyline views, modern design, and 24‑hour self check‑in.",
    reviews: [
      {
        avatar:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        name: "Oliver Price",
        rating: 4.7,
        comment:
          "Amazing view, super convenient location—but street noise is noticeable at night.",
      },
      {
        avatar:
          "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg",
        name: "Ava Thompson",
        rating: 4.9,
        comment:
          "Stylish space, high-tech amenities, and the host was very helpful!",
      },
    ],
  },
  {
    name: "Riverside Cabin",
    address: { state: "Queenstown", city: "Otago", country: "New Zealand" },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: { bed: "3", shower: "2", occupants: "4-6" },
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.unsplash.com/photo-1494522358652-33b67a2f9e64",
    ],
    discount: "20",
    description:
      "Peaceful cabin by the river in Queenstown, with private dock and complimentary kayaks—ideal for nature lovers.",
    reviews: [
      {
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        name: "Grace Morgan",
        rating: 4.8,
        comment:
          "Loved the kayaks. So relaxing to watch river life from the dock.",
      },
      {
        avatar:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        name: "Ethan Li",
        rating: 4.7,
        comment: "Cozy cabin, great location, we did hikes everyday.",
      },
    ],
  },
  {
    name: "Modern Beachfront Villa",
    address: { state: "Sidemen", city: "Bali", country: "Indonesia" },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: { bed: "5", shower: "4", occupants: "8-10" },
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.unsplash.com/photo-1494522358652-33b67a2f9e64",
    ],
    discount: "",
    description:
      "A luxurious beachfront villa in Bali with a private pool and on‑site chef—perfect for large groups seeking comfort and elegance.",
    reviews: [
      {
        avatar:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        name: "Isabella Chen",
        rating: 5,
        comment:
          "Chef was fantastic and attentive. Villa is beyond expectations!",
      },
      {
        avatar:
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        name: "Daniel García",
        rating: 4.9,
        comment: "Dream vacation home—spacious, stylish, and immaculate.",
      },
    ],
  },
  {
    name: "Lakeside Chalet",
    address: { state: "Banff", city: "Alberta", country: "Canada" },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.unsplash.com/photo-1494522358652-33b67a2f9e64",
    ],
    discount: "10",
    description:
      "Charming chalet by a pristine lake in Banff, with access to hiking trails and mountain vistas year‑round.",
    reviews: [
      {
        avatar:
          "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
        name: "Mason Walker",
        rating: 4.5,
        comment: "Beautiful environment but the kitchen was a bit small.",
      },
      {
        avatar:
          "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg",
        name: "Charlotte Rodriguez",
        rating: 4.8,
        comment: "Great hiking nearby. Chalet was warm and welcoming.",
      },
    ],
  },
  {
    name: "Tropical Garden Villa",
    address: { state: "Koh Samui", city: "Surat Thani", country: "Thailand" },
    rating: 4.8,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: { bed: "3", shower: "3", occupants: "5-6" },
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
    discount: "25",
    description:
      "Lush tropical villa in Koh Samui with private garden, free parking, and easy self check‑in—great for relaxed escapes.",
    reviews: [
      {
        avatar:
          "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
        name: "Lily Nguyen",
        rating: 4.7,
        comment: "Lovely garden and peaceful setting. We really rejuvenated.",
      },
      {
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        name: "Ethan Brown",
        rating: 4.9,
        comment: "Everything was smooth — check‑in, stay, and check‑out.",
      },
    ],
  },
  {
    name: "Urban Loft",
    address: { state: "Berlin", city: "Berlin", country: "Germany" },
    rating: 4.6,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
    discount: "",
    description:
      "Stylish loft in the heart of Berlin—centrally located, with modern amenities and 24‑hour self check‑in.",
    reviews: [
      {
        avatar:
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        name: "Sophia Keller",
        rating: 4.4,
        comment:
          "Great location, but the building had occasional noisy neighbors.",
      },
      {
        avatar:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        name: "Max Hoffmann",
        rating: 4.6,
        comment: "Clean and efficient. Ideal for exploring the city.",
      },
    ],
  },
  {
    name: "Secluded Forest Cabin",
    address: { state: "Whistler", city: "British Columbia", country: "Canada" },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
    discount: "40",
    description:
      "A peaceful forest cabin near Whistler, featuring a private hot tub and total privacy—ideal for nature retreats.",
    reviews: [
      {
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        name: "Lucas Martin",
        rating: 4.8,
        comment: "Hot tub was a great touch. Very secluded — perfect getaway.",
      },
      {
        avatar:
          "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
        name: "Chloe Davis",
        rating: 4.6,
        comment: "Loved the privacy. Trails are right at the doorstep.",
      },
    ],
  },
];
