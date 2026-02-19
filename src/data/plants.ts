export interface Plant {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  categories: string[];
}

export const plants: Plant[] = [
  {
    id: "snake-plant",
    name: "Snake Plant",
    price: 15,
    description: "A hardy, low-maintenance plant that purifies air and thrives in low light conditions.",
    image: "https://images.unsplash.com/photo-1593482892540-a1ab05b13f43?w=400&h=300&fit=crop",
    categories: ["Air Purifying"],
  },
  {
    id: "spider-plant",
    name: "Spider Plant",
    price: 12,
    description: "An easy-to-grow plant known for its arching leaves and air-cleaning properties.",
    image: "https://images.unsplash.com/photo-1572688484438-313a56e6dc34?w=400&h=300&fit=crop",
    categories: ["Air Purifying"],
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    price: 18,
    description: "Elegant white blooms with glossy leaves. Excellent at removing toxins from indoor air.",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&h=300&fit=crop",
    categories: ["Air Purifying", "Aromatic"],
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    price: 14,
    description: "A succulent with medicinal properties. Great for soothing burns and purifying air.",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=300&fit=crop",
    categories: ["Air Purifying", "Medicinal"],
  },
  {
    id: "lavender",
    name: "Lavender",
    price: 20,
    description: "A fragrant herb with calming purple flowers. Perfect for relaxation and aromatherapy.",
    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=400&h=300&fit=crop",
    categories: ["Aromatic"],
  },
  {
    id: "jasmine",
    name: "Jasmine",
    price: 22,
    description: "A beautifully fragrant flowering plant that fills your home with a sweet, calming scent.",
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=400&h=300&fit=crop",
    categories: ["Aromatic"],
  },
  {
    id: "rosemary",
    name: "Rosemary",
    price: 10,
    description: "A versatile aromatic herb perfect for cooking and adding a fresh fragrance to your space.",
    image: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?w=400&h=300&fit=crop",
    categories: ["Aromatic", "Medicinal"],
  },
  {
    id: "basil",
    name: "Holy Basil",
    price: 8,
    description: "A sacred herb with medicinal properties and a distinctive, pleasant aroma.",
    image: "https://images.unsplash.com/photo-1629157284330-58376c3a6f4e?w=400&h=300&fit=crop",
    categories: ["Aromatic", "Medicinal"],
  },
  {
    id: "chamomile",
    name: "Chamomile",
    price: 11,
    description: "A gentle flowering herb known for its calming tea and soothing medicinal benefits.",
    image: "https://images.unsplash.com/photo-1588574476210-1bb30089a078?w=400&h=300&fit=crop",
    categories: ["Medicinal"],
  },
  {
    id: "mint",
    name: "Mint",
    price: 9,
    description: "A refreshing herb with cooling properties, perfect for teas and culinary creations.",
    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&h=300&fit=crop",
    categories: ["Medicinal", "Aromatic"],
  },
];

export const categories = ["Air Purifying", "Aromatic", "Medicinal"];
