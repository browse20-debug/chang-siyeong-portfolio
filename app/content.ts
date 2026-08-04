/*
 * EDIT HERE FIRST
 * Replace the three sample brand names, text, and image URLs in this file.
 * Each item in `projects` is one brand. It automatically appears on the
 * home page and gets its own photo viewer page.
 */

export const profile = {
  name: "Chang Siyeong",
  role: "Photographer",
  location: "Seoul, Korea",
  email: "hello@changsiyeong.com",
  instagramUrl: "https://www.instagram.com/",
  // 첫 배너 사진 목록입니다. "/photos/파일명.jpg" 형식으로 자유롭게 교체하세요.
  heroImages: [
    "/photos/main-01.jpg",
    "/photos/main-02.jpg",
    "/photos/main-03.jpg",

    
  ],
  // 사진이 바뀌는 시간입니다. 5000은 5초입니다.
  heroIntervalMs: 3000,
  statement:
    "I create composed, tactile images for people and brands. From the first visual conversation to the final frame, I look for the gesture, texture, and light that make a story feel precise and alive.",
  approach:
    "Clear direction, considered light, and a calm set.",
};

export const services = ["Fashion", "Lookbook", "Commerce", "Advertising"];

export type Project = {
  slug: string;
  title: string;
  // category에 적은 문구가 홈 WORK의 분류 탭에도 자동으로 표시됩니다.
  category: string;
  year: string;
  size: "wide" | "portrait" | "standard";
  cover: string;
  description: string;
  credits: { label: string; value: string }[];
  // 사진을 추가하면 이 브랜드 상세 뷰어의 슬라이드가 자동으로 늘어납니다.
  gallery: { src: string; alt: string; orientation: "wide" | "portrait" }[];
};

export const projects: Project[] = [
  {
    // 실제 브랜드명으로 바꾸고 gallery에 사진을 계속 추가하세요.
    slug: "brand-01",
    title: "Brand 01",
    category: "Fashion Campaign",
    year: "2026",
    size: "wide",
    cover:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2200&q=88",
    description:
      "A fashion campaign built around restrained movement, graphic silhouettes, and a calm visual rhythm.",
    credits: [
      { label: "Photography", value: "Chang Siyeong" },
      { label: "Client", value: "Brand 01" },
      { label: "Type", value: "Campaign" },
      { label: "Location", value: "Seoul" },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2200&q=90",
        alt: "Fashion portrait in a minimal studio",
        orientation: "wide",
      },
      {
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=88",
        alt: "Close fashion portrait",
        orientation: "portrait",
      },
      {
        src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=88",
        alt: "Street fashion portrait",
        orientation: "portrait",
      },
      {
        src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=88",
        alt: "Fashion retail environment",
        orientation: "wide",
      },
      {
        src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=88",
        alt: "Graphic fashion portrait",
        orientation: "portrait",
      },
    ],
  },
  {
    // 실제 브랜드명으로 바꾸고 gallery에 사진을 계속 추가하세요.
    slug: "brand-02",
    title: "Brand 02",
    category: "Lookbook",
    year: "2026",
    size: "portrait",
    cover:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=88",
    description:
      "A seasonal lookbook focused on proportion, material, and the small gestures that reveal how a garment moves.",
    credits: [
      { label: "Photography", value: "Chang Siyeong" },
      { label: "Client", value: "Brand 02" },
      { label: "Type", value: "Lookbook" },
      { label: "Location", value: "Seoul" },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1800&q=90",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=2000&q=88",
        alt: "Editorial fashion styling",
        orientation: "wide",
      },
      {
        src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1600&q=88",
        alt: "Outdoor fashion look",
        orientation: "portrait",
      },
      {
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d8b?auto=format&fit=crop&w=1800&q=88",
        alt: "Close studio portrait",
        orientation: "portrait",
      },
      {
        src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=2000&q=88",
        alt: "Portrait with warm natural light",
        orientation: "wide",
      },
    ],
  },
  {
    // 실제 브랜드명으로 바꾸고 gallery에 사진을 계속 추가하세요.
    slug: "brand-03",
    title: "Brand 03",
    category: "Commerce & Advertising",
    year: "2025",
    size: "standard",
    cover:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1800&q=88",
    description:
      "Commerce and advertising images composed with clear form, quiet color, and tactile product detail.",
    credits: [
      { label: "Photography", value: "Chang Siyeong" },
      { label: "Client", value: "Brand 03" },
      { label: "Type", value: "Commerce" },
      { label: "Set", value: "Studio" },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=2000&q=90",
        alt: "Cosmetics arranged on a neutral surface",
        orientation: "wide",
      },
      {
        src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=88",
        alt: "Beauty products in studio light",
        orientation: "portrait",
      },
      {
        src: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1800&q=88",
        alt: "Perfume product detail",
        orientation: "portrait",
      },
      {
        src: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=2000&q=88",
        alt: "Curated fashion pieces",
        orientation: "wide",
      },
      {
        src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=2000&q=90",
        alt: "Campaign portrait outdoors",
        orientation: "wide",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
