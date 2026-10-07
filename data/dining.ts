export interface DelicacyItem {
  id: string;
  name: string;
  category: "Grills & Platters" | "Breakfast" | "Buffet & Banquet" | "Chef Special";
  description: string;
  image: string;
  badge?: string;
  features: string[];
}

export const DINING_DATA: DelicacyItem[] = [
  {
    id: "grilled-delicacy-platter",
    name: "Chef's Signature Grilled Platter",
    category: "Grills & Platters",
    description: "Tender seasoned grilled proteins accompanied by golden plantain crisps, fresh coleslaw, sliced garden cucumbers, and savory dressing drizzles.",
    image: "/images/dining/platter-grilled-delicacy.jpg",
    badge: "Guest Favorite",
    features: ["Charcoal Grilled Proteins", "Golden Plantain Crisps", "Fresh Coleslaw & Veggies", "Custom House Sauces"]
  },
  {
    id: "continental-breakfast",
    name: "Classic Continental & English Breakfast",
    category: "Breakfast",
    description: "Wholesome morning dining with freshly scrambled eggs, golden breakfast potato/yam cuts, savory sausages, grilled bacon, baked beans, and beverage tea service.",
    image: "/images/dining/continental-breakfast.jpg",
    badge: "Morning Dining",
    features: ["Fluffy Scrambled Eggs", "Breakfast Sausages & Bacon", "Baked Beans & Roasted Cuts", "Fresh Tea & Juices"]
  },
  {
    id: "buffet-jollof-banquet",
    name: "Authentic Nigerian Banquet Buffet",
    category: "Buffet & Banquet",
    description: "Our renowned buffet station featuring classic smoky Nigerian Jollof rice, seasoned fried rice, tender tomato-stewed meats, and crisp finger pastries.",
    image: "/images/dining/buffet-jollof-meats.jpg",
    badge: "Buffet Spread",
    features: ["Smoky Party Jollof Rice", "Tender Stewed Beef & Goat Meat", "Savory Fried Rice", "Gourmet Event Catering"]
  },
  {
    id: "hot-buffet-chafing",
    name: "Executive Chafing Station",
    category: "Buffet & Banquet",
    description: "Hot, freshly prepared banquet dishes served in temperature-controlled roll-top stainless steel buffet warmers for optimal flavor and aroma.",
    image: "/images/dining/buffet-chafing-dish.png",
    badge: "Banquet Catering",
    features: ["Steaming Warm Service", "Variety of Rice Selections", "Continuous Table Refills", "Hygienic Presentation"]
  },
  {
    id: "kitchen-carvery-dishes",
    name: "Hot Carvery & Kitchen Specials",
    category: "Chef Special",
    description: "A rich counter of freshly simmered sauces, seasoned chicken cuts, aromatic spiced rice, and crisp garden salads prepared by our culinary team.",
    image: "/images/dining/restaurant-kitchen-service.jpg",
    badge: "Chef's Counter",
    features: ["Seasoned Chicken & Meats", "Rich Stews & Gravies", "Fresh Garden Salads", "Custom In-Room Orders"]
  }
];
