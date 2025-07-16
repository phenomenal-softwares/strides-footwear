const products = [
  {
    id: "1",
    name: "Classic White Sneakers",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=1065&q=80",
    category: "sneakers",
    badge: "NEW",
    description: "Minimalist design for everyday wear",
  },
  {
    id: "2",
    name: "Lace-up Boots",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "boots",
    badge: null,
    description: "Premium leather for a polished look",
  },
  {
    id: "3",
    name: "Running Sneakers",
    price: 79.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=2070&q=80",
    category: "sneakers",
    badge: "SALE",
    description: "Lightweight for maximum performance",
  },
  {
    id: "4",
    name: "Deluxe Loafers",
    price: 109.99,
    image:
      "https://images.unsplash.com/photo-1615979474401-8a6a344de5bd?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "loafers",
    badge: null,
    description: "Perfect for business casual occasions",
  },
  {
    id: "5",
    name: "Retro High-Tops",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "sneakers",
    badge: "TRENDING",
    description: "Throwback style with modern comfort",
  },
  {
    id: "6",
    name: "Desert Suede Boots",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "boots",
    badge: null,
    description: "Perfect balance of rugged and refined",
  },
  {
    id: "7",
    name: "Slip-On Canvas Shoes",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1662541089338-c7d53b88be70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "loafers",
    badge: null,
    description: "Effortless everyday wear",
  },
  {
    id: "8",
    name: "Modern Dress Shoes",
    price: 139.99,
    image:
      "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?q=80&w=1190&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "boots",
    badge: "NEW",
    description: "Elegance redefined for modern professionals",
  },
  {
    id: "9",
    name: "Tech Knit Runners",
    price: 104.99,
    image:
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "sneakers",
    badge: null,
    description: "Breathable knit upper for all-day wear",
  },
  {
    id: "10",
    name: "Luxe Leather Loafers",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1663314751605-68017c594913?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "loafers",
    badge: "BESTSELLER",
    description: "Sophisticated slip-ons for every occasion",
  },
  {
    id: "11",
    name: "New Balance 574",
    price: 37.79,
    image:
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNuZWFrZXJ8ZW58MHwwfDB8fHww",
    category: "sneakers",
    badge: "NEW",
    description: "Elegant and comfortable sneakers for everyday wear",
  },
  {
    id: "12",
    name: "Casual Chukka Boots",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1732225168066-a754dee78bec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb3R8ZW58MHwwfDB8fHww",
    category: "boots",
    badge: null,
    description: "Premium leather for a polished look",
  },
  {
    id: "13",
    name: "Adidas Sneakers",
    price: 51.99,
    originalPrice: 69.99,
    image:
      "https://images.unsplash.com/photo-1521774971864-62e842046145?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25lYWtlcnxlbnwwfDB8MHx8fDA%3D",
    category: "sneakers",
    badge: "SALE",
    description: "Classic style with modern comfort",
  },
  {
    id: "14",
    name: "Business Casual Loafers",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1426649397221-b62c5a7824ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9hZmVyc3xlbnwwfDB8MHx8fDA%3D",
    category: "loafers",
    badge: null,
    description: "Perfect for business casual occasions",
  },
  {
    id: "15",
    name: "Air Jordan Retro",
    price: 33.99,
    image:
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHwwfDB8fHww",
    category: "sneakers",
    badge: "TRENDING",
    description: "Throwback style with modern comfort",
  },
  {
    id: "16",
    name: "Doc Martens 1460",
    price: 121.99,
    image:
      "https://images.unsplash.com/photo-1481729379561-01e43a3e1ed4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vdHN8ZW58MHwwfDB8fHww",
    category: "boots",
    badge: null,
    description: "Rugged and stylish boots for any occasion",
  },
  {
    id: "17",
    name: "Boat Loafers",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1616243344308-04fb7e776cfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGxvYWZlcnN8ZW58MHwwfDB8fHww",
    category: "loafers",
    badge: null,
    description: "Matches any outfit",
  },
  {
    id: "18",
    name: "Stylish Ankle Boots",
    price: 145.99,
    image:
      "https://images.unsplash.com/photo-1554133818-7bb790d55236?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb3RzfGVufDB8MHwwfHx8MA%3D%3D",
    category: "boots",
    badge: "NEW",
    description: "Elegant ankle boots for a chic look",
  },
  {
    id: "19",
    name: "Converse Chuck Taylor",
    price: 84.99,
    image:
      "https://images.unsplash.com/photo-1578986175247-7d60c6df07c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNuZWFrZXJ8ZW58MHwwfDB8fHww",
    category: "sneakers",
    badge: "BESTSELLER",
    description: "Breathable knit upper for all-day wear",
  },
  {
    id: "20",
    name: "Plaid Slip-on",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1542619239-7ed243c6d143?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGxvYWZlcnN8ZW58MHwwfDB8fHww",
    category: "loafers",
    badge: null,
    description: "Casual but highly comfy",
  },
];
