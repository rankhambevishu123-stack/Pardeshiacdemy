import heroImg from "@/assets/hero.jpg";
import venue1 from "@/assets/venue-1.jpg";
import venue2 from "@/assets/venue-2.jpg";
import venue3 from "@/assets/venue-3.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import aboutImg from "@/assets/dish-2.jpg";

export const site = {
  brand: "Maison Auréa",
  tagline: "A House of Modern Hospitality",
  heroImg,
  aboutImg,
  address: "12 Marina Crescent, Colaba, Mumbai 400005",
  phone: "+91 22 6789 4200",
  whatsapp: "+91 98200 00000",
  email: "reservations@maisonaurea.com",
  hours: "Tue – Sun · 6:30 PM – 1:00 AM",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

export const venues = [
  {
    slug: "auburn",
    name: "Auburn",
    tagline: "The Signature Room",
    image: heroImg,
    description:
      "Our flagship dining room — a candlelit theatre of modern European craft, wood, brass, and hushed conversation.",
    location: "Colaba, Mumbai",
    hours: "Tue – Sun · 6:30 PM – 1:00 AM",
  },
  {
    slug: "vault",
    name: "The Vault",
    tagline: "Cocktail Atelier",
    image: venue1,
    description:
      "An intimate bar hidden behind the dining room. Rare spirits, seasonal cocktails, quiet listening sessions on vinyl.",
    location: "Below Auburn · Colaba",
    hours: "Wed – Sun · 8:00 PM – 2:00 AM",
  },
  {
    slug: "atrium",
    name: "Atrium",
    tagline: "Rooftop & Terrace",
    image: venue2,
    description:
      "Open skies, Arabian breeze, and a lighter menu of small plates paired with sparkling wines and citrus cocktails.",
    location: "Bandra West, Mumbai",
    hours: "Daily · 5:00 PM – 12:30 AM",
  },
  {
    slug: "salon",
    name: "Salon Privé",
    tagline: "Private Dining",
    image: venue3,
    description:
      "A wood-panelled chamber for twelve. Bespoke menus, dedicated sommelier, and the discretion of a private residence.",
    location: "By reservation only",
    hours: "By appointment",
  },
];

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  veg?: boolean;
  chef?: boolean;
};

export const menu: { category: string; items: MenuItem[] }[] = [
  {
    category: "Beginnings",
    items: [
      { name: "Burrata & Heirloom Fig", desc: "Aged balsamic, toasted almond, basil oil", price: "1,450", veg: true, chef: true },
      { name: "Tuna Crudo", desc: "Yellowfin, yuzu, pickled shallot, sesame tuile", price: "1,850" },
      { name: "Wild Mushroom Velouté", desc: "Truffle cream, brioche soldiers", price: "1,250", veg: true },
      { name: "Steak Tartare", desc: "Hand-cut wagyu, quail yolk, pommes gaufrettes", price: "2,100" },
    ],
  },
  {
    category: "The Table",
    items: [
      { name: "Miso Black Cod", desc: "72-hour marinated, sansho, charred leek", price: "3,400", chef: true },
      { name: "Aged Ribeye · 300g", desc: "Grass-fed, bone marrow butter, sea salt", price: "3,850" },
      { name: "Saffron Risotto", desc: "Carnaroli, aged parmesan, gold leaf", price: "1,950", veg: true },
      { name: "Lamb Shoulder", desc: "Twelve-hour braised, harissa, labneh", price: "2,600" },
    ],
  },
  {
    category: "Signatures",
    items: [
      { name: "The Auburn Tasting", desc: "Seven courses, chef's selection", price: "6,500", chef: true },
      { name: "Coastal Journey", desc: "Five courses from the Konkan sea", price: "5,200" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Valrhona Soufflé", desc: "Warm chocolate, salted caramel, vanilla bean ice cream", price: "950", veg: true, chef: true },
      { name: "Rose & Pistachio", desc: "Layered mousse, gold leaf, rose petal jam", price: "850", veg: true },
      { name: "Cheese Trolley", desc: "Selection of five, fig chutney, walnut bread", price: "1,400", veg: true },
    ],
  },
  {
    category: "Cellar",
    items: [
      { name: "House Champagne · Coupe", desc: "Grower cuvée, Champagne, France", price: "1,650" },
      { name: "Sommelier Pairing · 5 courses", desc: "By the glass, curated nightly", price: "3,900" },
      { name: "Vintage Bordeaux · Bottle", desc: "Chateau selection, 2015", price: "18,000" },
    ],
  },
];

export const experiences = [
  {
    title: "Chef's Counter",
    image: dish2,
    date: "Every Friday",
    time: "7:30 PM",
    location: "Auburn Kitchen",
    description:
      "Eight seats. One evening. Ten courses served directly by our head chef at the pass.",
  },
  {
    title: "Winter Wine Series",
    image: event1,
    date: "November – February",
    time: "8:00 PM",
    location: "Salon Privé",
    description:
      "Monthly guided flights hosted by visiting sommeliers, paired with a bespoke five-course menu.",
  },
  {
    title: "Weddings & Celebrations",
    image: event2,
    date: "Year-round",
    time: "By arrangement",
    location: "All Venues",
    description:
      "Buyouts, receptions, and rehearsal dinners choreographed with our events atelier.",
  },
  {
    title: "Corporate & Private",
    image: event3,
    date: "Weekdays & Weekends",
    time: "Custom hours",
    location: "Salon Privé · Atrium",
    description:
      "Boardroom lunches, product launches, and milestone dinners with dedicated service.",
  },
];

export const gallery = [
  { src: heroImg, alt: "Auburn dining room", span: "row-span-2" },
  { src: gallery1, alt: "Signature dessert", span: "" },
  { src: gallery2, alt: "Wine service", span: "" },
  { src: dish1, alt: "Plated dish", span: "" },
  { src: gallery3, alt: "Guests at dinner", span: "row-span-2" },
  { src: venue1, alt: "The Vault bar", span: "" },
  { src: gallery4, alt: "Table setting", span: "" },
  { src: dish2, alt: "Chef plating", span: "" },
  { src: event2, alt: "Celebration night", span: "" },
];