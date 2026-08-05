/*
 * EDIT HERE FIRST
 * Add or replace brand names, text, and image URLs in this file.
 * Each item in `projects` is one brand. It automatically appears on the
 * WORK page and gets its own photo viewer page. Choose the five brands shown
 * on the home page in `homepageFeaturedSlugs` below.
 */

export const profile = {
  name: "Chang Siyeong",
  role: "Photographer",
  location: "Seoul, Korea",
  email: "hello@changsiyeong.com",
  instagramUrl: "https://www.instagram.com/changsiyeong",
  // 첫 배너 사진 목록입니다. "/photos/파일명.jpg" 형식으로 자유롭게 교체하세요.
  heroImages: [
    "/photos/main-01.jpg",
    "/photos/main-02.jpg",
    "/photos/main-03.jpg",
    "/photos/main-04.jpg",
    "/photos/main-05.jpg",
  ],
  // 사진이 바뀌는 시간입니다. 3000은 3초입니다.
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
  // category에 적은 문구가 WORK 페이지의 분류 탭에도 자동으로 표시됩니다.
  category: string;
  year: string;
  size: "wide" | "portrait" | "standard";
  cover: string;
  logo?: string;
  description: string;
  credits: { label: string; value: string }[];
  // 사진을 추가하면 이 브랜드 상세 뷰어의 슬라이드가 자동으로 늘어납니다.
  gallery: { src: string; alt: string; orientation: "wide" | "portrait" }[];
};

export const projects: Project[] = [
  {
    // 실제 브랜드명으로 바꾸고 gallery에 사진을 계속 추가하세요.
    slug: "Zara",
    title: "Zara Woman Editorial",
    category: "Fashion",
    year: "2026",
    size: "portrait",
    cover:"/photos/zara/cover.jpg",
    logo: "/logos/zara-logo.png",

    description:
      "A fashion campaign built around restrained movement, graphic silhouettes, and a calm visual rhythm.",
    credits: [
      { label: "Photography", value: "Chang Siyeong" },
      { label: "Client", value: "Zara Woman Editorial" },
      { label: "Type", value: "Campaign" },
      { label: "Location", value: "Seoul" },
    ],
    gallery: [
      {
        src: "/photos/zara/01.jpg",
        alt: "Fashion portrait in a minimal studio",
        orientation: "portrait",
      },
      {
        src: "/photos/zara/02.jpg",
        alt: "Fashion portrait in a minimal studio",
        orientation: "wide",
      },
      {
        src: "/photos/zara/03.jpg",
        alt: "Fashion portrait in a minimal studio",
        orientation: "portrait",
      },
      {
        src: "/photos/zara/04.jpg",
        alt: "Fashion portrait in a minimal studio",
        orientation: "portrait",
      },
      {
        src: "/photos/zara/05.jpg",
        alt: "Fashion portrait in a minimal studio",
        orientation: "wide",
      },
      {
        src: "/photos/zara/06.jpg",
        alt: "Fashion portrait in a minimal studio",
        orientation: "portrait",
      },
      {
        src: "/photos/zara/07.jpg",
        alt: "Fashion portrait in a minimal studio",
        orientation: "portrait",
      },
      {
        src: "/photos/zara/08.jpg",
        alt: "Fashion portrait in a minimal studio",
        orientation: "wide",
      },
      {
        src: "/photos/zara/09.jpg",
        alt: "Fashion portrait in a minimal studio",
        orientation: "portrait",
      },
      {
        src: "/photos/zara/10.jpg",
        alt: "Fashion portrait in a minimal studio",
        orientation: "portrait",
      },
      {
        src: "/photos/zara/11.jpg",
        alt: "Fashion portrait in a minimal studio",
        orientation: "portrait",
      },
      {
        src: "/photos/zara/12.jpg",
        alt: "Fashion portrait in a minimal studio",
        orientation: "portrait",
      },
      {
        src: "/photos/zara/13.jpg",
        alt: "Fashion portrait in a minimal studio",
        orientation: "portrait",
      },
      {
        src: "/photos/zara/14.jpg",
        alt: "Fashion portrait in a minimal studio",
        orientation: "portrait",
      },

    ],
  },
  {
    // 실제 브랜드명으로 바꾸고 gallery에 사진을 계속 추가하세요.
    slug: "blue",
    title: "#1",
    category: "Editorial",
    year: "2026",
    size: "portrait",
    cover:"/photos/cinema/01/cover.jpg",
    description:
      "A seasonal lookbook focused on proportion, material, and the small gestures that reveal how a garment moves.",
    credits: [
      { label: "Photography", value: "Chang Siyeong" },
      { label: "Client", value: "1" },
      { label: "Type", value: "Editorial" },
      { label: "Location", value: "Seoul" },
    ],
    gallery: [
      {
        src: "/photos/cinema/01/01.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/01/02.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/01/03.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/01/04.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/01/05.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/01/06.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/01/07.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/01/08.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/01/09.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/01/10.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },


    ],
  },
  {
    // 실제 브랜드명으로 바꾸고 gallery에 사진을 계속 추가하세요.
    slug: "cinema",
    title: "#2",
    category: "Editorial",
    year: "2026",
    size: "portrait",
    cover:"/photos/cinema/02/cover.jpg",
    description:
      "Commerce and advertising images composed with clear form, quiet color, and tactile product detail.",
    credits: [
      { label: "Photography", value: "Chang Siyeong" },
      { label: "Client", value: "#2" },
      { label: "Type", value: "Editorial" },
      { label: "Set", value: "Studio" },
    ],
    gallery: [
      {
        src: "/photos/cinema/02/01.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/02/02.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/02/03.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/02/04.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/02/05.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/02/06.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/02/07.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/02/08.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/02/09.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/02/10.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/02/11.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/02/12.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/02/13.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/02/14.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/02/15.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/02/16.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/02/17.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/cinema/02/18.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      


    ],
  },
 {
    // 실제 브랜드명으로 바꾸고 gallery에 사진을 계속 추가하세요.
    slug: "marithe",
    title: "MARITHÉ",
    category: "Editorial",
    year: "2026",
    size: "portrait",
    cover:"/photos/marithe/cover.jpg",
    logo: "/logos/marithe-logo.png",
    description:
      "Commerce and advertising images composed with clear form, quiet color, and tactile product detail.",
    credits: [
      { label: "Photography", value: "Chang Siyeong" },
      { label: "Client", value: "MARITHÉ" },
      { label: "Type", value: "fashion" },
      { label: "Set", value: "Studio" },
    ],
    gallery: [
      {
        src: "/photos/marithe/01.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/marithe/02.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/marithe/03.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/marithe/04.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/marithe/05.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/marithe/06.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/marithe/07.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/marithe/08.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/marithe/09.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/marithe/10.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/marithe/11.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/marithe/12.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/marithe/13.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/marithe/14.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/marithe/15.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/marithe/16.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
    

    ],
  },
   {
    // 실제 브랜드명으로 바꾸고 gallery에 사진을 계속 추가하세요.
    slug: "Galleria",
    title: "Galleria December",
    category: "Editorial",
    year: "2026",
    size: "portrait",
    cover:"/photos/Galleria December/cover.jpg",
    logo: "/logos/Galleria-logo.png",
    
    description:
      "Commerce and advertising images composed with clear form, quiet color, and tactile product detail.",
    credits: [
      { label: "Photography", value: "Chang Siyeong" },
      { label: "Client", value: "Galleria December" },
      { label: "Type", value: "fashion" },
      { label: "Set", value: "Studio" },
    ],
    gallery: [
      {
        src: "/photos/Galleria December/01.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/Galleria December/02.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/Galleria December/03.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/Galleria December/04.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/Galleria December/05.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/Galleria December/06.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/Galleria December/07.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/Galleria December/08.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/Galleria December/09.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/Galleria December/10.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      
    

    ],
  },
];

// 메인 배너 아래 FEATURED WORKS에 보여줄 브랜드 5개입니다.
// projects에 있는 slug를 원하는 순서대로 5개만 적으면 됩니다.
export const homepageFeaturedSlugs = [
  "Zara",
  "Galleria",
  "blue",
  "marithe",
  "cinema",
];

export const homepageFeaturedProjects = homepageFeaturedSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => project !== undefined)
  .slice(0, 5);

// 이 목록에는 촬영한 브랜드 이름만 적으세요. 줄을 추가하거나 지워도 됩니다.
export const brandHighlights = [
  "Zara",
  "Galleria",
  "blue",
  "marithe",
  "#cinema",
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
