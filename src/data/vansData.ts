
// Sample van data - this would come from your backend in production
export const vans = [
  {
    id: 1,
    name: "Wanderer Pro",
    type: "Camper",
    price: 149,
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop",
    sleeps: 2,
    available: true
  },
  {
    id: 2,
    name: "Horizon Explorer",
    type: "Luxury",
    price: 199,
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1669665462848-b977ff198756?q=80&w=1600&auto=format&fit=crop",
    sleeps: 4,
    available: true
  },
  {
    id: 3,
    name: "Road Tripper",
    type: "Budget",
    price: 99,
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?q=80&w=1600&auto=format&fit=crop",
    sleeps: 2,
    available: false
  },
  {
    id: 4,
    name: "Mountain Voyager",
    type: "Camper",
    price: 159,
    location: "Boulder, CO",
    image: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=1600&auto=format&fit=crop",
    sleeps: 3,
    available: true
  },
  {
    id: 5,
    name: "Sunset Cruiser",
    type: "Luxury",
    price: 229,
    location: "San Diego, CA",
    image: "https://images.unsplash.com/photo-1627664819211-d990168413ee?q=80&w=1600&auto=format&fit=crop",
    sleeps: 4,
    available: true
  },
  {
    id: 6,
    name: "Urban Nomad",
    type: "Budget",
    price: 119,
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1695651461777-721e254e1a25?q=80&w=1600&auto=format&fit=crop",
    sleeps: 2,
    available: true
  }
];

export type Van = {
  id: number;
  name: string;
  type: string;
  price: number;
  location: string;
  image: string;
  sleeps: number;
  available: boolean;
};

export type VanType = "all" | "budget" | "camper" | "luxury";
export type SortOption = "featured" | "price-low" | "price-high" | "newest";
