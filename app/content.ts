/*
 * EDIT HERE FIRST
 * Add or replace brand names, text, and image URLs in this file.
 * Each item in `projects` is one brand. It automatically appears on the
 * WORK page and gets its own photo viewer page. The home page can show up to
 * ten brands; use `homepageFeaturedSlugs` below to control their order.
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
    "Seoul-based photographer Chang Siyeong creates refined fashion, commercial and editorial imagery, balancing clean aesthetics with natural storytelling across campaigns, lookbooks and branded content.",
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
  logoTheme?: "dark" | "light";
  instagramPosts?: string[];
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
  "slug": "sieor",
  "logo": "/logos/sieor-logo.svg",
  "title": "SIEOR",
  "category": "Fashion",
  "year": "2026",
  "size": "portrait",
  "cover": "/photos/sieor/01.jpg",
  "description": "Photography for SIEOR.",
  "credits": [
    {
      "label": "Photography",
      "value": "Chang Siyeong"
    },
    {
      "label": "Client",
      "value": "SIEOR"
    }
  ],
  "instagramPosts": [
    "https://www.instagram.com/p/Dedd47GFGep/"
  ],
  "gallery": [
    {
      "src": "/photos/sieor/01.jpg",
      "alt": "SIEOR — photograph 01",
      "orientation": "portrait"
    },
    {
      "src": "/photos/sieor/02.jpg",
      "alt": "SIEOR — photograph 02",
      "orientation": "portrait"
    },
    {
      "src": "/photos/sieor/03.jpg",
      "alt": "SIEOR — photograph 03",
      "orientation": "portrait"
    },
    {
      "src": "/photos/sieor/04.jpg",
      "alt": "SIEOR — photograph 04",
      "orientation": "portrait"
    },
    {
      "src": "/photos/sieor/05.jpg",
      "alt": "SIEOR — photograph 05",
      "orientation": "portrait"
    },
    {
      "src": "/photos/sieor/06.jpg",
      "alt": "SIEOR — photograph 06",
      "orientation": "portrait"
    },
    {
      "src": "/photos/sieor/07.jpg",
      "alt": "SIEOR — photograph 07",
      "orientation": "portrait"
    },
    {
      "src": "/photos/sieor/08.jpg",
      "alt": "SIEOR — photograph 08",
      "orientation": "portrait"
    },
    {
      "src": "/photos/sieor/09.jpg",
      "alt": "SIEOR — photograph 09",
      "orientation": "portrait"
    },
    {
      "src": "/photos/sieor/10.jpg",
      "alt": "SIEOR — photograph 10",
      "orientation": "portrait"
    },
    {
      "src": "/photos/sieor/11.jpg",
      "alt": "SIEOR — photograph 11",
      "orientation": "portrait"
    },
    {
      "src": "/photos/sieor/12.jpg",
      "alt": "SIEOR — photograph 12",
      "orientation": "portrait"
    },
    {
      "src": "/photos/sieor/13.jpg",
      "alt": "SIEOR — photograph 13",
      "orientation": "portrait"
    },
    {
      "src": "/photos/sieor/14.jpg",
      "alt": "SIEOR — photograph 14",
      "orientation": "portrait"
    },
    {
      "src": "/photos/sieor/15.jpg",
      "alt": "SIEOR — photograph 15",
      "orientation": "portrait"
    },
    {
      "src": "/photos/sieor/16.jpg",
      "alt": "SIEOR — photograph 16",
      "orientation": "portrait"
    },
    {
      "src": "/photos/sieor/17.jpg",
      "alt": "SIEOR — photograph 17",
      "orientation": "portrait"
    },
    {
      "src": "/photos/sieor/18.jpg",
      "alt": "SIEOR — photograph 18",
      "orientation": "portrait"
    }
  ]
},
  {
    // 실제 브랜드명으로 바꾸고 gallery에 사진을 계속 추가하세요.
    slug: "cinema",
    title: "#2",
    category: "Editorial",
    year: "2026",
    size: "portrait",
    cover: "/photos/cinema/02/18.jpg",
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
    category: "Fashion",
    year: "2026",
    size: "portrait",
    cover:"/photos/marithe/cover.jpg",
    logo: "/logos/marithe-logo.png",
    description:
      "Commerce and advertising images composed with clear form, quiet color, and tactile product detail.",
    credits: [
      { label: "Photography", value: "Chang Siyeong" },
      { label: "Client", value: "MARITHÉ" },
      { label: "Type", value: "Fashion" },
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
    category: "Magazine",
    year: "2026",
    size: "portrait",
    cover:"/photos/Galleria December/cover.jpg",
    logo: "/logos/Galleria-logo.png",
    
    description:
      "Commerce and advertising images composed with clear form, quiet color, and tactile product detail.",
    credits: [
      { label: "Photography", value: "Chang Siyeong" },
      { label: "Client", value: "Galleria December" },
      { label: "Type", value: "Magazine" },
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
  {
    slug: "hazzys",
    title: "HAZZYS",
    category: "Fashion",
    year: "",
    size: "portrait",
    cover: "/photos/hazzys/DeiqOSGlKQU/01.jpg",
    logo: "/logos/hazzys-logo.svg",
    description: "HAZZYS Nova Collection.",
    credits: [
      { label: "Photography", value: "Chang Siyeong" },
      { label: "Client", value: "HAZZYS" },
    ],
    gallery: [
      {
        src: "/photos/hazzys/DeiqOSGlKQU/01.jpg",
        alt: "HAZZYS — photograph 01",
        orientation: "portrait",
      },
      {
        src: "/photos/hazzys/DeiqOSGlKQU/02.jpg",
        alt: "HAZZYS — photograph 02",
        orientation: "portrait",
      },
      {
        src: "/photos/hazzys/DeiqOSGlKQU/03.jpg",
        alt: "HAZZYS — photograph 03",
        orientation: "portrait",
      },
      {
        src: "/photos/hazzys/DeiqOSGlKQU/04.jpg",
        alt: "HAZZYS — photograph 04",
        orientation: "portrait",
      },
      {
        src: "/photos/hazzys/DeiqOSGlKQU/05.jpg",
        alt: "HAZZYS — photograph 05",
        orientation: "portrait",
      },
      {
        src: "/photos/hazzys/DeiqOSGlKQU/06.jpg",
        alt: "HAZZYS — photograph 06",
        orientation: "portrait",
      },
      {
        src: "/photos/hazzys/DeiqOSGlKQU/07.jpg",
        alt: "HAZZYS — photograph 07",
        orientation: "portrait",
      },
      {
        src: "/photos/hazzys/DeiqOSGlKQU/08.jpg",
        alt: "HAZZYS — photograph 08",
        orientation: "portrait",
      },
      {
        src: "/photos/hazzys/DeiqOSGlKQU/09.jpg",
        alt: "HAZZYS — photograph 09",
        orientation: "portrait",
      },
      {
        src: "/photos/hazzys/DeiqOSGlKQU/10.jpg",
        alt: "HAZZYS — photograph 10",
        orientation: "portrait",
      },
      {
        src: "/photos/hazzys/DeiqOSGlKQU/11.jpg",
        alt: "HAZZYS — photograph 11",
        orientation: "portrait",
      },
      {
        src: "/photos/hazzys/DeiqOSGlKQU/12.jpg",
        alt: "HAZZYS — photograph 12",
        orientation: "portrait",
      },
      {
        src: "/photos/hazzys/DeiqOSGlKQU/13.jpg",
        alt: "HAZZYS — photograph 13",
        orientation: "portrait",
      },
      {
        src: "/photos/hazzys/DeiqOSGlKQU/14.jpg",
        alt: "HAZZYS — photograph 14",
        orientation: "portrait",
      },
      {
        src: "/photos/hazzys/DeiqOSGlKQU/15.jpg",
        alt: "HAZZYS — photograph 15",
        orientation: "portrait",
      },
      {
        src: "/photos/hazzys/DeiqOSGlKQU/16.jpg",
        alt: "HAZZYS — photograph 16",
        orientation: "portrait",
      },
      {
        src: "/photos/hazzys/DeiqOSGlKQU/17.jpg",
        alt: "HAZZYS — photograph 17",
        orientation: "portrait",
      },
    ],
  },
{
  "slug": "the-nockin",
  "logo": "/logos/the-nockin-logo.png",
  "logoTheme": "dark",
  "title": "The Nockin",
  "category": "Fashion",
  "year": "2026",
  "size": "portrait",
  "cover": "/photos/the-nockin/01.jpg",
  "description": "Photography for The Nockin.",
  "credits": [
    {
      "label": "Photography",
      "value": "Chang Siyeong"
    },
    {
      "label": "Client",
      "value": "The Nockin"
    }
  ],
  "instagramPosts": [
    "https://www.instagram.com/p/Dcu6X5_lDBo/"
  ],
  "gallery": [
    {
      "src": "/photos/the-nockin/01.jpg",
      "alt": "The Nockin — photograph 01",
      "orientation": "portrait"
    },
    {
      "src": "/photos/the-nockin/02.jpg",
      "alt": "The Nockin — photograph 02",
      "orientation": "portrait"
    },
    {
      "src": "/photos/the-nockin/03.jpg",
      "alt": "The Nockin — photograph 03",
      "orientation": "portrait"
    },
    {
      "src": "/photos/the-nockin/04.jpg",
      "alt": "The Nockin — photograph 04",
      "orientation": "portrait"
    },
    {
      "src": "/photos/the-nockin/05.jpg",
      "alt": "The Nockin — photograph 05",
      "orientation": "portrait"
    },
    {
      "src": "/photos/the-nockin/06.jpg",
      "alt": "The Nockin — photograph 06",
      "orientation": "portrait"
    },
    {
      "src": "/photos/the-nockin/07.jpg",
      "alt": "The Nockin — photograph 07",
      "orientation": "portrait"
    },
    {
      "src": "/photos/the-nockin/08.jpg",
      "alt": "The Nockin — photograph 08",
      "orientation": "portrait"
    },
    {
      "src": "/photos/the-nockin/09.jpg",
      "alt": "The Nockin — photograph 09",
      "orientation": "portrait"
    },
    {
      "src": "/photos/the-nockin/10.jpg",
      "alt": "The Nockin — photograph 10",
      "orientation": "portrait"
    },
    {
      "src": "/photos/the-nockin/11.jpg",
      "alt": "The Nockin — photograph 11",
      "orientation": "portrait"
    },
    {
      "src": "/photos/the-nockin/12.jpg",
      "alt": "The Nockin — photograph 12",
      "orientation": "portrait"
    },
    {
      "src": "/photos/the-nockin/13.jpg",
      "alt": "The Nockin — photograph 13",
      "orientation": "portrait"
    },
    {
      "src": "/photos/the-nockin/14.jpg",
      "alt": "The Nockin — photograph 14",
      "orientation": "portrait"
    },
    {
      "src": "/photos/the-nockin/15.jpg",
      "alt": "The Nockin — photograph 15",
      "orientation": "portrait"
    },
    {
      "src": "/photos/the-nockin/16.jpg",
      "alt": "The Nockin — photograph 16",
      "orientation": "portrait"
    },
    {
      "src": "/photos/the-nockin/17.jpg",
      "alt": "The Nockin — photograph 17",
      "orientation": "portrait"
    }
  ]
},
{
  "slug": "nuakle",
  "logo": "/logos/nuakle-logo.png",
  "title": "NUAKLE",
  "category": "Fashion",
  "year": "2023–2025",
  "size": "portrait",
  "cover": "/photos/nuakle/01.jpg",
  "description": "Fashion photography for NUAKLE.",
  "credits": [
    {
      "label": "Photography",
      "value": "Chang Siyeong"
    },
    {
      "label": "Client",
      "value": "NUAKLE"
    }
  ],
  "instagramPosts": [
    "https://www.instagram.com/p/DFsFLndp8dN/",
    "https://www.instagram.com/p/CxUlDluJMCP/",
    "https://www.instagram.com/p/CxUbWvlp2s0/",
    "https://www.instagram.com/p/CxW5Y0tpQoJ/"
  ],
  "gallery": [
    {
      "src": "/photos/nuakle/01.jpg",
      "alt": "NUAKLE — blue knit hat portrait",
      "orientation": "portrait"
    },
    {
      "src": "/photos/nuakle/02.jpg",
      "alt": "NUAKLE — photograph 02",
      "orientation": "wide"
    },
    {
      "src": "/photos/nuakle/03.jpg",
      "alt": "NUAKLE — photograph 03",
      "orientation": "wide"
    },
    {
      "src": "/photos/nuakle/04.jpg",
      "alt": "NUAKLE — photograph 04",
      "orientation": "wide"
    },
    {
      "src": "/photos/nuakle/05.jpg",
      "alt": "NUAKLE — photograph 05",
      "orientation": "wide"
    },
    {
      "src": "/photos/nuakle/06.jpg",
      "alt": "NUAKLE — photograph 06",
      "orientation": "wide"
    },
    {
      "src": "/photos/nuakle/07.jpg",
      "alt": "NUAKLE — photograph 07",
      "orientation": "wide"
    },
    {
      "src": "/photos/nuakle/08.jpg",
      "alt": "NUAKLE — photograph 08",
      "orientation": "wide"
    },
    {
      "src": "/photos/nuakle/09.jpg",
      "alt": "NUAKLE — photograph 09",
      "orientation": "wide"
    },
    {
      "src": "/photos/nuakle/10.jpg",
      "alt": "NUAKLE — photograph 10",
      "orientation": "wide"
    },
    {
      "src": "/photos/nuakle/11.jpg",
      "alt": "NUAKLE — photograph 11",
      "orientation": "wide"
    },
    {
      "src": "/photos/nuakle/12.jpg",
      "alt": "NUAKLE — photograph 12",
      "orientation": "portrait"
    },
    {
      "src": "/photos/nuakle/13.jpg",
      "alt": "NUAKLE — photograph 13",
      "orientation": "portrait"
    },
    {
      "src": "/photos/nuakle/14.jpg",
      "alt": "NUAKLE — photograph 14",
      "orientation": "portrait"
    },
    {
      "src": "/photos/nuakle/15.jpg",
      "alt": "NUAKLE — photograph 15",
      "orientation": "portrait"
    },
    {
      "src": "/photos/nuakle/16.jpg",
      "alt": "NUAKLE — photograph 16",
      "orientation": "portrait"
    },
    {
      "src": "/photos/nuakle/17.jpg",
      "alt": "NUAKLE — photograph 17",
      "orientation": "portrait"
    },
    {
      "src": "/photos/nuakle/18.jpg",
      "alt": "NUAKLE — photograph 18",
      "orientation": "portrait"
    },
    {
      "src": "/photos/nuakle/19.jpg",
      "alt": "NUAKLE — photograph 19",
      "orientation": "portrait"
    },
    {
      "src": "/photos/nuakle/20.jpg",
      "alt": "NUAKLE — photograph 20",
      "orientation": "portrait"
    },
    {
      "src": "/photos/nuakle/21.jpg",
      "alt": "NUAKLE — photograph 21",
      "orientation": "portrait"
    },
    {
      "src": "/photos/nuakle/22.jpg",
      "alt": "NUAKLE — photograph 22",
      "orientation": "portrait"
    },
    {
      "src": "/photos/nuakle/23.jpg",
      "alt": "NUAKLE — photograph 23",
      "orientation": "portrait"
    },
    {
      "src": "/photos/nuakle/24.jpg",
      "alt": "NUAKLE — photograph 24",
      "orientation": "portrait"
    },
    {
      "src": "/photos/nuakle/25.jpg",
      "alt": "NUAKLE — photograph 25",
      "orientation": "portrait"
    }
  ]
},
  {
    slug: "satur",
    title: "SATUR",
    category: "Fashion",
    year: "",
    size: "wide",
    cover: "/photos/satur/cover.jpg",
    logo: "/logos/satur-logo.svg",
    description: "Photography for SATUR.",
    credits: [
      { label: "Photography", value: "Chang Siyeong" },
      { label: "Client", value: "SATUR" },
    ],
    gallery: [
      {
        src: "/photos/satur/01.jpg",
        alt: "SATUR — photograph 01",
        orientation: "wide",
      },
      {
        src: "/photos/satur/02.jpg",
        alt: "SATUR — photograph 02",
        orientation: "wide",
      },
      {
        src: "/photos/satur/03.jpg",
        alt: "SATUR — photograph 03",
        orientation: "wide",
      },
      {
        src: "/photos/satur/04.jpg",
        alt: "SATUR — photograph 04",
        orientation: "wide",
      },
      {
        src: "/photos/satur/05.jpg",
        alt: "SATUR — photograph 05",
        orientation: "wide",
      },
      {
        src: "/photos/satur/06.jpg",
        alt: "SATUR — photograph 06",
        orientation: "wide",
      },
      {
        src: "/photos/satur/07.jpg",
        alt: "SATUR — photograph 07",
        orientation: "wide",
      },
      {
        src: "/photos/satur/08.jpg",
        alt: "SATUR — photograph 08",
        orientation: "wide",
      },
      {
        src: "/photos/satur/09.jpg",
        alt: "SATUR — photograph 09",
        orientation: "wide",
      },
      {
        src: "/photos/satur/10.jpg",
        alt: "SATUR — photograph 10",
        orientation: "wide",
      },
      {
        src: "/photos/satur/11.jpg",
        alt: "SATUR — photograph 11",
        orientation: "wide",
      },
      {
        src: "/photos/satur/12.jpg",
        alt: "SATUR — photograph 12",
        orientation: "wide",
      },
      {
        src: "/photos/satur/13.jpg",
        alt: "SATUR — photograph 13",
        orientation: "wide",
      },
      {
        src: "/photos/satur/14.jpg",
        alt: "SATUR — photograph 14",
        orientation: "wide",
      },
      {
        src: "/photos/satur/15.jpg",
        alt: "SATUR — photograph 15",
        orientation: "wide",
      },
      {
        src: "/photos/satur/16.jpg",
        alt: "SATUR — photograph 16",
        orientation: "wide",
      },
    ],
  },
{
  "slug": "neev",
  "title": "NEEV",
  "category": "Fashion",
  "year": "2026",
  "size": "portrait",
  "cover": "/photos/neev/cover.jpg",
  "logo": "/logos/neev-logo.png",
  "description": "Fashion campaign photography for NEEV.",
  "credits": [
    {
      "label": "Photography",
      "value": "Chang Siyeong"
    },
    {
      "label": "Client",
      "value": "NEEV"
    }
  ],
  "instagramPosts": [
    "https://www.instagram.com/p/DZZaBfhFBam/"
  ],
  "gallery": [
    {
      "src": "/photos/neev/01.jpg",
      "alt": "NEEV — photograph 01",
      "orientation": "wide"
    },
    {
      "src": "/photos/neev/02.jpg",
      "alt": "NEEV — photograph 02",
      "orientation": "wide"
    },
    {
      "src": "/photos/neev/03.jpg",
      "alt": "NEEV — photograph 03",
      "orientation": "wide"
    },
    {
      "src": "/photos/neev/04.jpg",
      "alt": "NEEV — photograph 04",
      "orientation": "wide"
    },
    {
      "src": "/photos/neev/05.jpg",
      "alt": "NEEV — photograph 05",
      "orientation": "wide"
    },
    {
      "src": "/photos/neev/06.jpg",
      "alt": "NEEV — photograph 06",
      "orientation": "wide"
    },
    {
      "src": "/photos/neev/07.jpg",
      "alt": "NEEV — photograph 07",
      "orientation": "wide"
    },
    {
      "src": "/photos/neev/08.jpg",
      "alt": "NEEV — photograph 08",
      "orientation": "wide"
    },
    {
      "src": "/photos/neev/09.jpg",
      "alt": "NEEV — photograph 09",
      "orientation": "wide"
    },
    {
      "src": "/photos/neev/10.jpg",
      "alt": "NEEV — photograph 10",
      "orientation": "wide"
    }
  ]
},
{
  "slug": "maison-seole",
  "logo": "/logos/maison-seole-logo.png",
  "title": "MAISON SEOLE",
  "category": "Fashion",
  "year": "2026",
  "size": "portrait",
  "cover": "/photos/maison-seole/01.jpg",
  "description": "Photography for MAISON SEOLE.",
  "credits": [
    {
      "label": "Photography",
      "value": "Chang Siyeong"
    },
    {
      "label": "Client",
      "value": "MAISON SEOLE"
    }
  ],
  "instagramPosts": [
    "https://www.instagram.com/p/DdxukKQlJEc/",
    "https://www.instagram.com/p/DdxsjMrlBdz/"
  ],
  "gallery": [
    {
      "src": "/photos/maison-seole/01.jpg",
      "alt": "MAISON SEOLE — photograph 01",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/02.jpg",
      "alt": "MAISON SEOLE — photograph 02",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/03.jpg",
      "alt": "MAISON SEOLE — photograph 03",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/04.jpg",
      "alt": "MAISON SEOLE — photograph 04",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/05.jpg",
      "alt": "MAISON SEOLE — photograph 05",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/06.jpg",
      "alt": "MAISON SEOLE — photograph 06",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/07.jpg",
      "alt": "MAISON SEOLE — photograph 07",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/08.jpg",
      "alt": "MAISON SEOLE — photograph 08",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/09.jpg",
      "alt": "MAISON SEOLE — photograph 09",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/10.jpg",
      "alt": "MAISON SEOLE — photograph 10",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/11.jpg",
      "alt": "MAISON SEOLE — photograph 11",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/12.jpg",
      "alt": "MAISON SEOLE — photograph 12",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/13.jpg",
      "alt": "MAISON SEOLE — photograph 13",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/14.jpg",
      "alt": "MAISON SEOLE — photograph 14",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/15.jpg",
      "alt": "MAISON SEOLE — photograph 15",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/16.jpg",
      "alt": "MAISON SEOLE — photograph 16",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/17.jpg",
      "alt": "MAISON SEOLE — photograph 17",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/18.jpg",
      "alt": "MAISON SEOLE — photograph 18",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/19.jpg",
      "alt": "MAISON SEOLE — photograph 19",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/20.jpg",
      "alt": "MAISON SEOLE — photograph 20",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/21.jpg",
      "alt": "MAISON SEOLE — photograph 21",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/22.jpg",
      "alt": "MAISON SEOLE — photograph 22",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/23.jpg",
      "alt": "MAISON SEOLE — photograph 23",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/24.jpg",
      "alt": "MAISON SEOLE — photograph 24",
      "orientation": "portrait"
    },
    {
      "src": "/photos/maison-seole/25.jpg",
      "alt": "MAISON SEOLE — photograph 25",
      "orientation": "portrait"
    }
  ]
},
{
  "slug": "vanone",
  "logo": "/logos/vanone-atelier-wordmark.png",
  "title": "VANONE",
  "category": "Fashion",
  "year": "2026",
  "size": "portrait",
  "cover": "/photos/vanone/01.jpg",
  "description": "Photography for VANONE.",
  "credits": [
    {
      "label": "Photography",
      "value": "Chang Siyeong"
    },
    {
      "label": "Client",
      "value": "VANONE"
    }
  ],
  "instagramPosts": [
    "https://www.instagram.com/p/DdCzaRuEj78/"
  ],
  "gallery": [
    {
      "src": "/photos/vanone/01.jpg",
      "alt": "VANONE — photograph 01",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/02.jpg",
      "alt": "VANONE — photograph 02",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/03.jpg",
      "alt": "VANONE — photograph 03",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/04.jpg",
      "alt": "VANONE — photograph 04",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/05.jpg",
      "alt": "VANONE — photograph 05",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/06.jpg",
      "alt": "VANONE — photograph 06",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/07.jpg",
      "alt": "VANONE — photograph 07",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/08.jpg",
      "alt": "VANONE — photograph 08",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/09.jpg",
      "alt": "VANONE — photograph 09",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/10.jpg",
      "alt": "VANONE — photograph 10",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/11.jpg",
      "alt": "VANONE — photograph 11",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/12.jpg",
      "alt": "VANONE — photograph 12",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/13.jpg",
      "alt": "VANONE — photograph 13",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/14.jpg",
      "alt": "VANONE — photograph 14",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/15.jpg",
      "alt": "VANONE — photograph 15",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/16.jpg",
      "alt": "VANONE — photograph 16",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/17.jpg",
      "alt": "VANONE — photograph 17",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/18.jpg",
      "alt": "VANONE — photograph 18",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/19.jpg",
      "alt": "VANONE — photograph 19",
      "orientation": "portrait"
    },
    {
      "src": "/photos/vanone/20.jpg",
      "alt": "VANONE — photograph 20",
      "orientation": "portrait"
    }
  ]
},
{
  "slug": "satur-eyewear",
  "logo": "/logos/satur-eyewear-logo.svg",
  "title": "SATUR Eyewear",
  "category": "Fashion",
  "year": "2026",
  "size": "portrait",
  "cover": "/photos/satur-eyewear/01.jpg",
  "description": "Eyewear photography for SATUR.",
  "credits": [
    {
      "label": "Photography",
      "value": "Chang Siyeong"
    },
    {
      "label": "Client",
      "value": "SATUR Eyewear"
    }
  ],
  "instagramPosts": [
    "https://www.instagram.com/p/DeImAx8H4pD/"
  ],
  "gallery": [
    {
      "src": "/photos/satur-eyewear/01.jpg",
      "alt": "SATUR Eyewear — photograph 01",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-eyewear/02.jpg",
      "alt": "SATUR Eyewear — photograph 02",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-eyewear/03.jpg",
      "alt": "SATUR Eyewear — photograph 03",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-eyewear/04.jpg",
      "alt": "SATUR Eyewear — photograph 04",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-eyewear/05.jpg",
      "alt": "SATUR Eyewear — photograph 05",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-eyewear/06.jpg",
      "alt": "SATUR Eyewear — photograph 06",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-eyewear/07.jpg",
      "alt": "SATUR Eyewear — photograph 07",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-eyewear/08.jpg",
      "alt": "SATUR Eyewear — photograph 08",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-eyewear/09.jpg",
      "alt": "SATUR Eyewear — photograph 09",
      "orientation": "portrait"
    }
  ]
},
{
  "slug": "abbr",
  "logo": "/logos/abbr-logo.png",
  "title": "ABBR",
  "category": "Beauty",
  "year": "2025",
  "size": "portrait",
  "cover": "/photos/abbr/01.jpg",
  "description": "Fragrance campaign photography for ABBR.",
  "credits": [
    {
      "label": "Photography",
      "value": "Chang Siyeong"
    },
    {
      "label": "Client",
      "value": "ABBR"
    }
  ],
  "instagramPosts": [
    "https://www.instagram.com/p/DPG-Xv2CQdO/",
    "https://www.instagram.com/p/DPEJyLgDV5j/"
  ],
  "gallery": [
    {
      "src": "/photos/abbr/11.jpg",
      "alt": "ABBR — model reclining on a white bed",
      "orientation": "portrait"
    },
    {
      "src": "/photos/abbr/12.jpg",
      "alt": "ABBR — campaign photograph 12",
      "orientation": "portrait"
    },
    {
      "src": "/photos/abbr/13.jpg",
      "alt": "ABBR — campaign photograph 13",
      "orientation": "portrait"
    },
    {
      "src": "/photos/abbr/14.jpg",
      "alt": "ABBR — campaign photograph 14",
      "orientation": "portrait"
    },
    {
      "src": "/photos/abbr/15.jpg",
      "alt": "ABBR — campaign photograph 15",
      "orientation": "portrait"
    },
    {
      "src": "/photos/abbr/16.jpg",
      "alt": "ABBR — campaign photograph 16",
      "orientation": "portrait"
    },
    {
      "src": "/photos/abbr/17.jpg",
      "alt": "ABBR — campaign photograph 17",
      "orientation": "portrait"
    },
    {
      "src": "/photos/abbr/18.jpg",
      "alt": "ABBR — campaign photograph 18",
      "orientation": "portrait"
    },
    {
      "src": "/photos/abbr/19.jpg",
      "alt": "ABBR — campaign photograph 19",
      "orientation": "portrait"
    },
    {
      "src": "/photos/abbr/20.jpg",
      "alt": "ABBR — campaign photograph 20",
      "orientation": "portrait"
    },
    {
      "src": "/photos/abbr/21.jpg",
      "alt": "ABBR — campaign photograph 21",
      "orientation": "portrait"
    },
    {
      "src": "/photos/abbr/22.jpg",
      "alt": "ABBR — campaign photograph 22",
      "orientation": "portrait"
    },
    {
      "src": "/photos/abbr/01.jpg",
      "alt": "ABBR — campaign photograph 01",
      "orientation": "wide"
    },
    {
      "src": "/photos/abbr/02.jpg",
      "alt": "ABBR — campaign photograph 02",
      "orientation": "wide"
    },
    {
      "src": "/photos/abbr/03.jpg",
      "alt": "ABBR — campaign photograph 03",
      "orientation": "wide"
    },
    {
      "src": "/photos/abbr/04.jpg",
      "alt": "ABBR — campaign photograph 04",
      "orientation": "wide"
    },
    {
      "src": "/photos/abbr/05.jpg",
      "alt": "ABBR — campaign photograph 05",
      "orientation": "wide"
    },
    {
      "src": "/photos/abbr/06.jpg",
      "alt": "ABBR — campaign photograph 06",
      "orientation": "wide"
    },
    {
      "src": "/photos/abbr/07.jpg",
      "alt": "ABBR — campaign photograph 07",
      "orientation": "wide"
    },
    {
      "src": "/photos/abbr/08.jpg",
      "alt": "ABBR — campaign photograph 08",
      "orientation": "wide"
    },
    {
      "src": "/photos/abbr/09.jpg",
      "alt": "ABBR — campaign photograph 09",
      "orientation": "wide"
    },
    {
      "src": "/photos/abbr/10.jpg",
      "alt": "ABBR — campaign photograph 10",
      "orientation": "wide"
    }
  ]
},
  {
  "slug": "greenbutter",
  "title": "Greenbutter",
  "category": "Fashion",
  "year": "2025–2026",
  "size": "portrait",
  "cover": "/photos/greenbutter/DeMO5RGlIuT/01.jpg",
  "description": "Commerce and advertising images composed with clear form, quiet color, and tactile product detail.",
  "credits": [
    {
      "label": "Photography",
      "value": "Chang Siyeong"
    },
    {
      "label": "Client",
      "value": "Greenbutter"
    },
    {
      "label": "Type",
      "value": "fashion"
    },
    {
      "label": "Set",
      "value": "Studio"
    }
  ],
  "gallery": [
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/01.jpg",
      "alt": "Greenbutter — photograph 01",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/02.jpg",
      "alt": "Greenbutter — photograph 02",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/03.jpg",
      "alt": "Greenbutter — photograph 03",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/04.jpg",
      "alt": "Greenbutter — photograph 04",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/05.jpg",
      "alt": "Greenbutter — photograph 05",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/06.jpg",
      "alt": "Greenbutter — photograph 06",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/07.jpg",
      "alt": "Greenbutter — photograph 07",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/08.jpg",
      "alt": "Greenbutter — photograph 08",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/09.jpg",
      "alt": "Greenbutter — photograph 09",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/10.jpg",
      "alt": "Greenbutter — photograph 10",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/11.jpg",
      "alt": "Greenbutter — photograph 11",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/12.jpg",
      "alt": "Greenbutter — photograph 12",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/13.jpg",
      "alt": "Greenbutter — photograph 13",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/14.jpg",
      "alt": "Greenbutter — photograph 14",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/15.jpg",
      "alt": "Greenbutter — photograph 15",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/16.jpg",
      "alt": "Greenbutter — photograph 16",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/17.jpg",
      "alt": "Greenbutter — photograph 17",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/18.jpg",
      "alt": "Greenbutter — photograph 18",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/19.jpg",
      "alt": "Greenbutter — photograph 19",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DeMO5RGlIuT/20.jpg",
      "alt": "Greenbutter — photograph 20",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/01.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/02.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/03.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/04.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/05.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/06.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/07.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/08.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/09.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/10.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/11.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/12.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/13.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/14.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/15.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/16.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/17.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/18.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/19.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/26ss4/20.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DVIsTOElE4n/01.jpg",
      "alt": "Greenbutter — DVIsTOElE4n photograph 01",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DVIsTOElE4n/02.jpg",
      "alt": "Greenbutter — DVIsTOElE4n photograph 02",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DVIsTOElE4n/03.jpg",
      "alt": "Greenbutter — DVIsTOElE4n photograph 03",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DVIsTOElE4n/04.jpg",
      "alt": "Greenbutter — DVIsTOElE4n photograph 04",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DVIsTOElE4n/05.jpg",
      "alt": "Greenbutter — DVIsTOElE4n photograph 05",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DVIsTOElE4n/06.jpg",
      "alt": "Greenbutter — DVIsTOElE4n photograph 06",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DVIsTOElE4n/07.jpg",
      "alt": "Greenbutter — DVIsTOElE4n photograph 07",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DVIsTOElE4n/08.jpg",
      "alt": "Greenbutter — DVIsTOElE4n photograph 08",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DVIsTOElE4n/09.jpg",
      "alt": "Greenbutter — DVIsTOElE4n photograph 09",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DVIsTOElE4n/10.jpg",
      "alt": "Greenbutter — DVIsTOElE4n photograph 10",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DVIsTOElE4n/11.jpg",
      "alt": "Greenbutter — DVIsTOElE4n photograph 11",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DVIsTOElE4n/12.jpg",
      "alt": "Greenbutter — DVIsTOElE4n photograph 12",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DVIsTOElE4n/13.jpg",
      "alt": "Greenbutter — DVIsTOElE4n photograph 13",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DVIsTOElE4n/14.jpg",
      "alt": "Greenbutter — DVIsTOElE4n photograph 14",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DVIsTOElE4n/15.jpg",
      "alt": "Greenbutter — DVIsTOElE4n photograph 15",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DVIsTOElE4n/16.jpg",
      "alt": "Greenbutter — DVIsTOElE4n photograph 16",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DVIsTOElE4n/17.jpg",
      "alt": "Greenbutter — DVIsTOElE4n photograph 17",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DOUpVGFEjbn/01.jpg",
      "alt": "Greenbutter — DOUpVGFEjbn photograph 01",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DOUpVGFEjbn/02.jpg",
      "alt": "Greenbutter — DOUpVGFEjbn photograph 02",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DOUpVGFEjbn/03.jpg",
      "alt": "Greenbutter — DOUpVGFEjbn photograph 03",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DOUpVGFEjbn/04.jpg",
      "alt": "Greenbutter — DOUpVGFEjbn photograph 04",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DOUpVGFEjbn/05.jpg",
      "alt": "Greenbutter — DOUpVGFEjbn photograph 05",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DOUpVGFEjbn/06.jpg",
      "alt": "Greenbutter — DOUpVGFEjbn photograph 06",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DOUpVGFEjbn/07.jpg",
      "alt": "Greenbutter — DOUpVGFEjbn photograph 07",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DOUpVGFEjbn/08.jpg",
      "alt": "Greenbutter — DOUpVGFEjbn photograph 08",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DOUpVGFEjbn/09.jpg",
      "alt": "Greenbutter — DOUpVGFEjbn photograph 09",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DOUpVGFEjbn/10.jpg",
      "alt": "Greenbutter — DOUpVGFEjbn photograph 10",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DOUpVGFEjbn/11.jpg",
      "alt": "Greenbutter — DOUpVGFEjbn photograph 11",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DOUpVGFEjbn/12.jpg",
      "alt": "Greenbutter — DOUpVGFEjbn photograph 12",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DOUpVGFEjbn/13.jpg",
      "alt": "Greenbutter — DOUpVGFEjbn photograph 13",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DOUpVGFEjbn/14.jpg",
      "alt": "Greenbutter — DOUpVGFEjbn photograph 14",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DOUpVGFEjbn/15.jpg",
      "alt": "Greenbutter — DOUpVGFEjbn photograph 15",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DOUpVGFEjbn/16.jpg",
      "alt": "Greenbutter — DOUpVGFEjbn photograph 16",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/01.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 01",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/02.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 02",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/03.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 03",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/04.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 04",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/05.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 05",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/06.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 06",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/07.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 07",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/08.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 08",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/09.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 09",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/10.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 10",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/11.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 11",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/12.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 12",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/13.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 13",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/14.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 14",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/15.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 15",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/16.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 16",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/17.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 17",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/18.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 18",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/19.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 19",
      "orientation": "portrait"
    },
    {
      "src": "/photos/greenbutter/DPpq_vLia55/20.jpg",
      "alt": "Greenbutter — DPpq_vLia55 photograph 20",
      "orientation": "portrait"
    }
  ],
  "instagramPosts": [
    "https://www.instagram.com/p/DVIsTOElE4n/",
    "https://www.instagram.com/p/DOUpVGFEjbn/",
    "https://www.instagram.com/p/DPpq_vLia55/"
  ]
},
 {
  "slug": "rachel-cox",
  "logo": "/logos/rachel-cox-logo.png",
  "title": "RACHEL COX",
  "category": "Fashion",
  "year": "2026",
  "size": "portrait",
  "cover": "/photos/rachel-cox/01.jpg",
  "description": "Footwear campaign photography for RACHEL COX.",
  "credits": [
    {
      "label": "Photography",
      "value": "Chang Siyeong"
    },
    {
      "label": "Client",
      "value": "RACHEL COX"
    }
  ],
  "instagramPosts": [
    "https://www.instagram.com/p/DeqfyyOFEw4/"
  ],
  "gallery": [
    {
      "src": "/photos/rachel-cox/01.jpg",
      "alt": "RACHEL COX — photograph 01",
      "orientation": "wide"
    },
    {
      "src": "/photos/rachel-cox/02.jpg",
      "alt": "RACHEL COX — photograph 02",
      "orientation": "wide"
    },
    {
      "src": "/photos/rachel-cox/03.jpg",
      "alt": "RACHEL COX — photograph 03",
      "orientation": "wide"
    },
    {
      "src": "/photos/rachel-cox/04.jpg",
      "alt": "RACHEL COX — photograph 04",
      "orientation": "wide"
    },
    {
      "src": "/photos/rachel-cox/05.jpg",
      "alt": "RACHEL COX — photograph 05",
      "orientation": "wide"
    },
    {
      "src": "/photos/rachel-cox/06.jpg",
      "alt": "RACHEL COX — photograph 06",
      "orientation": "wide"
    },
    {
      "src": "/photos/rachel-cox/07.jpg",
      "alt": "RACHEL COX — photograph 07",
      "orientation": "wide"
    },
    {
      "src": "/photos/rachel-cox/08.jpg",
      "alt": "RACHEL COX — photograph 08",
      "orientation": "wide"
    },
    {
      "src": "/photos/rachel-cox/09.jpg",
      "alt": "RACHEL COX — photograph 09",
      "orientation": "wide"
    },
    {
      "src": "/photos/rachel-cox/10.jpg",
      "alt": "RACHEL COX — photograph 10",
      "orientation": "wide"
    },
    {
      "src": "/photos/rachel-cox/11.jpg",
      "alt": "RACHEL COX — photograph 11",
      "orientation": "wide"
    },
    {
      "src": "/photos/rachel-cox/12.jpg",
      "alt": "RACHEL COX — photograph 12",
      "orientation": "wide"
    },
    {
      "src": "/photos/rachel-cox/13.jpg",
      "alt": "RACHEL COX — photograph 13",
      "orientation": "wide"
    },
    {
      "src": "/photos/rachel-cox/14.jpg",
      "alt": "RACHEL COX — photograph 14",
      "orientation": "wide"
    },
    {
      "src": "/photos/rachel-cox/15.jpg",
      "alt": "RACHEL COX — photograph 15",
      "orientation": "wide"
    },
    {
      "src": "/photos/rachel-cox/16.jpg",
      "alt": "RACHEL COX — photograph 16",
      "orientation": "wide"
    }
  ]
},
{
  "slug": "LA_eql",
  "title": "LA_eql",
  "category": "Fashion",
  "year": "2025–2026",
  "size": "portrait",
  "cover": "/photos/la_eql/26fw/cover.jpg",
  "description": "Commerce and advertising images composed with clear form, quiet color, and tactile product detail.",
  "credits": [
    {
      "label": "Photography",
      "value": "Chang Siyeong"
    },
    {
      "label": "Client",
      "value": "LA_eql"
    },
    {
      "label": "Type",
      "value": "Fashion"
    },
    {
      "label": "Set",
      "value": "Studio"
    }
  ],
  "gallery": [
    {
      "src": "/photos/la_eql/26fw/01.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/26fw/02.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/26fw/03.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/26fw/04.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/26fw/05.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/26fw/06.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/26fw/07.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/26fw/08.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/26fw/09.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/26fw/10.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/26fw/11.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/26fw/12.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/26fw/13.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/26fw/14.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/26fw/15.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/26fw/16.jpg",
      "alt": "Model in a graphic look",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DTvC1hpCVk8/01.jpg",
      "alt": "EQL — DTvC1hpCVk8 photograph 01",
      "orientation": "wide"
    },
    {
      "src": "/photos/la_eql/DTvC1hpCVk8/02.jpg",
      "alt": "EQL — DTvC1hpCVk8 photograph 02",
      "orientation": "wide"
    },
    {
      "src": "/photos/la_eql/DTvC1hpCVk8/03.jpg",
      "alt": "EQL — DTvC1hpCVk8 photograph 03",
      "orientation": "wide"
    },
    {
      "src": "/photos/la_eql/DTvC1hpCVk8/04.jpg",
      "alt": "EQL — DTvC1hpCVk8 photograph 04",
      "orientation": "wide"
    },
    {
      "src": "/photos/la_eql/DTvC1hpCVk8/05.jpg",
      "alt": "EQL — DTvC1hpCVk8 photograph 05",
      "orientation": "wide"
    },
    {
      "src": "/photos/la_eql/DTvC1hpCVk8/06.jpg",
      "alt": "EQL — DTvC1hpCVk8 photograph 06",
      "orientation": "wide"
    },
    {
      "src": "/photos/la_eql/DTvCv_9CSp0/01.jpg",
      "alt": "EQL — DTvCv_9CSp0 photograph 01",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DTvCv_9CSp0/02.jpg",
      "alt": "EQL — DTvCv_9CSp0 photograph 02",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/01.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 01",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/02.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 02",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/03.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 03",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/04.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 04",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/05.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 05",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/06.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 06",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/07.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 07",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/08.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 08",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/09.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 09",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/10.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 10",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/11.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 11",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/12.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 12",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/13.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 13",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/14.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 14",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/15.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 15",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/16.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 16",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/17.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 17",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/18.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 18",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/19.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 19",
      "orientation": "portrait"
    },
    {
      "src": "/photos/la_eql/DN7QrYwCZcS/20.jpg",
      "alt": "EQL — DN7QrYwCZcS photograph 20",
      "orientation": "portrait"
    }
  ],
  "logo": "/logos/eql-wordmark.svg",
  "instagramPosts": [
    "https://www.instagram.com/p/DTvC1hpCVk8/",
    "https://www.instagram.com/p/DTvCv_9CSp0/",
    "https://www.instagram.com/p/DN7QrYwCZcS/"
  ]
},

{
  "slug": "malen",
  "title": "MALEN",
  "logo": "/logos/malen-logo.svg",
  "category": "Fashion",
  "year": "2024–2025",
  "size": "portrait",
  "cover": "/photos/malen/DGR3B-opbTE/01.jpg",
  "instagramPosts": [
    "https://www.instagram.com/p/DGR3B-opbTE/",
    "https://www.instagram.com/p/C_XEMFlpAE_/"
  ],
  "description": "Fashion photography for MALEN.",
  "credits": [
    {
      "label": "Photography",
      "value": "Chang Siyeong"
    },
    {
      "label": "Client",
      "value": "MALEN"
    }
  ],
  "gallery": [
    {
      "src": "/photos/malen/DGR3B-opbTE/01.jpg",
      "alt": "MALEN — photograph 01",
      "orientation": "portrait"
    },
    {
      "src": "/photos/malen/DGR3B-opbTE/02.jpg",
      "alt": "MALEN — photograph 02",
      "orientation": "portrait"
    },
    {
      "src": "/photos/malen/DGR3B-opbTE/03.jpg",
      "alt": "MALEN — photograph 03",
      "orientation": "portrait"
    },
    {
      "src": "/photos/malen/DGR3B-opbTE/04.jpg",
      "alt": "MALEN — photograph 04",
      "orientation": "portrait"
    },
    {
      "src": "/photos/malen/DGR3B-opbTE/05.jpg",
      "alt": "MALEN — photograph 05",
      "orientation": "portrait"
    },
    {
      "src": "/photos/malen/DGR3B-opbTE/06.jpg",
      "alt": "MALEN — photograph 06",
      "orientation": "portrait"
    },
    {
      "src": "/photos/malen/DGR3B-opbTE/07.jpg",
      "alt": "MALEN — photograph 07",
      "orientation": "portrait"
    },
    {
      "src": "/photos/malen/DGR3B-opbTE/08.jpg",
      "alt": "MALEN — photograph 08",
      "orientation": "portrait"
    },
    {
      "src": "/photos/malen/DGR3B-opbTE/09.jpg",
      "alt": "MALEN — photograph 09",
      "orientation": "portrait"
    },
    {
      "src": "/photos/malen/DGR3B-opbTE/10.jpg",
      "alt": "MALEN — photograph 10",
      "orientation": "portrait"
    },
    {
      "src": "/photos/malen/DGR3B-opbTE/11.jpg",
      "alt": "MALEN — photograph 11",
      "orientation": "portrait"
    },
    {
      "src": "/photos/malen/C_XEMFlpAE_/01.jpg",
      "alt": "MALEN — photograph 01",
      "orientation": "portrait"
    },
    {
      "src": "/photos/malen/C_XEMFlpAE_/02.jpg",
      "alt": "MALEN — photograph 02",
      "orientation": "portrait"
    },
    {
      "src": "/photos/malen/C_XEMFlpAE_/03.jpg",
      "alt": "MALEN — photograph 03",
      "orientation": "portrait"
    },
    {
      "src": "/photos/malen/C_XEMFlpAE_/04.jpg",
      "alt": "MALEN — photograph 04",
      "orientation": "portrait"
    },
    {
      "src": "/photos/malen/C_XEMFlpAE_/05.jpg",
      "alt": "MALEN — photograph 05",
      "orientation": "portrait"
    }
  ]
},
  {
    // 실제 브랜드명으로 바꾸고 gallery에 사진을 계속 추가하세요.
    slug: "Loeil_studio",
    logo: "/logos/loeil-logo.png",
    title: "Loeil_studio Denim",
    category: "Fashion",
    year: "2026",
    size: "portrait",
    cover:"/photos/loeil_studio/denim/cover.jpg",
   // logo: "/logos/LA_EQL-logo.png",

    description:
      "Commerce and advertising images composed with clear form, quiet color, and tactile product detail.",
    credits: [
      { label: "Photography", value: "Chang Siyeong" },
      { label: "Client", value: "Loeil_studio" },
      { label: "Type", value: "Fashion" },
      { label: "Set", value: "Studio" },
    ],
    gallery: [
      {
        src: "/photos/loeil_studio/denim/01.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/loeil_studio/denim/02.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/loeil_studio/denim/03.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/loeil_studio/denim/04.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/loeil_studio/denim/05.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/loeil_studio/denim/06.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/loeil_studio/denim/07.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/loeil_studio/denim/08.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/loeil_studio/denim/09.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/loeil_studio/denim/10.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/loeil_studio/denim/11.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/loeil_studio/denim/12.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      
      

      
    

    ],
  },
   {
    // 실제 브랜드명으로 바꾸고 gallery에 사진을 계속 추가하세요.
    slug: "Arha",
    logo: "/logos/arha-logo.png",
    title: "Arha",
    category: "Fashion",
    year: "2026",
    size: "portrait",
    cover:"/photos/arha/26/cover.jpg",
   // logo: "/logos/LA_EQL-logo.png",

    description:
      "Commerce and advertising images composed with clear form, quiet color, and tactile product detail.",
    credits: [
      { label: "Photography", value: "Chang Siyeong" },
      { label: "Client", value: "Arha" },
      { label: "Type", value: "Fashion" },
      { label: "Set", value: "Studio" },
    ],
    gallery: [
      {
        src: "/photos/arha/26/01.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/arha/26/02.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/arha/26/03.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/arha/26/04.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/arha/26/05.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/arha/26/06.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/arha/26/07.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/arha/26/08.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/arha/26/09.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/arha/26/10.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/arha/26/11.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      {
        src: "/photos/arha/26/12.jpg",
        alt: "Model in a graphic look",
        orientation: "portrait",
      },
      
      

      
    

    ],
  },
{
  "slug": "orlfa",
  "title": "ORLFA",
  "logo": "/logos/orlfa-logo.svg",
  "category": "Fashion",
  "year": "2025–2026",
  "size": "portrait",
  "cover": "/photos/orlfa/07.jpg",
  "instagramPosts": [
    "https://www.instagram.com/p/DNZ5xi_pVdX/",
    "https://www.instagram.com/p/DVM8qVUkgKv/",
    "https://www.instagram.com/p/DVM8YRvkuJn/",
    "https://www.instagram.com/p/DT-IMOFCcko/"
  ],
  "description": "Fashion photography for ORLFA.",
  "credits": [
    {
      "label": "Photography",
      "value": "Chang Siyeong"
    },
    {
      "label": "Client",
      "value": "ORLFA"
    },
    {
      "label": "Type",
      "value": "Fashion"
    }
  ],
  "gallery": [
    {
      "src": "/photos/orlfa/07.jpg",
      "alt": "ORLFA — photograph 07",
      "orientation": "portrait"
    },
    {
      "src": "/photos/orlfa/08.jpg",
      "alt": "ORLFA — photograph 08",
      "orientation": "portrait"
    },
    {
      "src": "/photos/orlfa/09.jpg",
      "alt": "ORLFA — photograph 09",
      "orientation": "portrait"
    },
    {
      "src": "/photos/orlfa/10.jpg",
      "alt": "ORLFA — photograph 10",
      "orientation": "portrait"
    },
    {
      "src": "/photos/orlfa/11.jpg",
      "alt": "ORLFA — photograph 11",
      "orientation": "portrait"
    },
    {
      "src": "/photos/orlfa/01.jpg",
      "alt": "ORLFA — photograph 01",
      "orientation": "portrait"
    },
    {
      "src": "/photos/orlfa/02.jpg",
      "alt": "ORLFA — photograph 02",
      "orientation": "portrait"
    },
    {
      "src": "/photos/orlfa/03.jpg",
      "alt": "ORLFA — photograph 03",
      "orientation": "portrait"
    },
    {
      "src": "/photos/orlfa/04.jpg",
      "alt": "ORLFA — photograph 04",
      "orientation": "portrait"
    },
    {
      "src": "/photos/orlfa/05.jpg",
      "alt": "ORLFA — photograph 05",
      "orientation": "portrait"
    },
    {
      "src": "/photos/orlfa/06.jpg",
      "alt": "ORLFA — photograph 06",
      "orientation": "portrait"
    },
    {
      "src": "/photos/orlfa/12.jpg",
      "alt": "ORLFA — photograph 12",
      "orientation": "wide"
    }
  ]
},
{
  "slug": "editorial-dymyxzwfa7o",
  "title": "NUAGE HOUSE",
  "category": "Fashion",
  "year": "2026",
  "size": "portrait",
  "cover": "/photos/editorial-dymyxzwfa7o/01.jpg",
  "instagramPosts": [
    "https://www.instagram.com/p/DYmYxzWFA7O/"
  ],
  "description": "Fashion photography for NUAGE HOUSE.",
  "credits": [
    {
      "label": "Photography",
      "value": "Chang Siyeong"
    },
    {
      "label": "Client",
      "value": "NUAGE HOUSE"
    },
    {
      "label": "Type",
      "value": "Fashion"
    }
  ],
  "gallery": [
    {
      "src": "/photos/editorial-dymyxzwfa7o/01.jpg",
      "alt": "NUAGE HOUSE — photograph 01",
      "orientation": "portrait"
    },
    {
      "src": "/photos/editorial-dymyxzwfa7o/02.jpg",
      "alt": "NUAGE HOUSE — photograph 02",
      "orientation": "portrait"
    },
    {
      "src": "/photos/editorial-dymyxzwfa7o/03.jpg",
      "alt": "NUAGE HOUSE — photograph 03",
      "orientation": "portrait"
    },
    {
      "src": "/photos/editorial-dymyxzwfa7o/04.jpg",
      "alt": "NUAGE HOUSE — photograph 04",
      "orientation": "portrait"
    },
    {
      "src": "/photos/editorial-dymyxzwfa7o/05.jpg",
      "alt": "NUAGE HOUSE — photograph 05",
      "orientation": "portrait"
    },
    {
      "src": "/photos/editorial-dymyxzwfa7o/06.jpg",
      "alt": "NUAGE HOUSE — photograph 06",
      "orientation": "portrait"
    },
    {
      "src": "/photos/editorial-dymyxzwfa7o/07.jpg",
      "alt": "NUAGE HOUSE — photograph 07",
      "orientation": "portrait"
    },
    {
      "src": "/photos/editorial-dymyxzwfa7o/08.jpg",
      "alt": "NUAGE HOUSE — photograph 08",
      "orientation": "portrait"
    },
    {
      "src": "/photos/editorial-dymyxzwfa7o/09.jpg",
      "alt": "NUAGE HOUSE — photograph 09",
      "orientation": "portrait"
    }
  ],
  "logo": "/logos/nuage-house-logo.png",
  "logoTheme": "dark"
},

{
  "slug": "satur-kids",
  "title": "SATUR KIDS",
  "logo": "/logos/satur-kids-logo.svg",
  "category": "Fashion",
  "year": "2026",
  "size": "portrait",
  "cover": "/photos/satur-kids/01.jpg",
  "instagramPosts": [
    "https://www.instagram.com/p/DctQVb4FPQf/"
  ],
  "description": "Fashion photography for SATUR KIDS.",
  "credits": [
    {
      "label": "Photography",
      "value": "Chang Siyeong"
    },
    {
      "label": "Client",
      "value": "SATUR KIDS"
    }
  ],
  "gallery": [
    {
      "src": "/photos/satur-kids/01.jpg",
      "alt": "SATUR KIDS — photograph 01",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-kids/02.jpg",
      "alt": "SATUR KIDS — photograph 02",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-kids/03.jpg",
      "alt": "SATUR KIDS — photograph 03",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-kids/04.jpg",
      "alt": "SATUR KIDS — photograph 04",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-kids/05.jpg",
      "alt": "SATUR KIDS — photograph 05",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-kids/06.jpg",
      "alt": "SATUR KIDS — photograph 06",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-kids/07.jpg",
      "alt": "SATUR KIDS — photograph 07",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-kids/08.jpg",
      "alt": "SATUR KIDS — photograph 08",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-kids/09.jpg",
      "alt": "SATUR KIDS — photograph 09",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-kids/10.jpg",
      "alt": "SATUR KIDS — photograph 10",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-kids/11.jpg",
      "alt": "SATUR KIDS — photograph 11",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-kids/12.jpg",
      "alt": "SATUR KIDS — photograph 12",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-kids/13.jpg",
      "alt": "SATUR KIDS — photograph 13",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-kids/14.jpg",
      "alt": "SATUR KIDS — photograph 14",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-kids/15.jpg",
      "alt": "SATUR KIDS — photograph 15",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-kids/16.jpg",
      "alt": "SATUR KIDS — photograph 16",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-kids/17.jpg",
      "alt": "SATUR KIDS — photograph 17",
      "orientation": "portrait"
    },
    {
      "src": "/photos/satur-kids/18.jpg",
      "alt": "SATUR KIDS — photograph 18",
      "orientation": "portrait"
    }
  ]
},
{
  "slug": "ouro",
  "title": "OURO",
  "category": "Fashion",
  "year": "2025–2026",
  "size": "portrait",
  "cover": "/photos/ouro/21.jpg",
  "logo": "/logos/ouro-logo.svg",
  "description": "Fashion photography for OURO.",
  "credits": [
    {
      "label": "Photography",
      "value": "Chang Siyeong"
    },
    {
      "label": "Client",
      "value": "OURO"
    }
  ],
  "instagramPosts": [
    "https://www.instagram.com/p/DFsG7ygpauf/",
    "https://www.instagram.com/p/DYBQ8fVCaVV/"
  ],
  "gallery": [
    {
      "src": "/photos/ouro/21.jpg",
      "alt": "OURO — photograph 21",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/22.jpg",
      "alt": "OURO — photograph 22",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/01.jpg",
      "alt": "OURO — photograph 01",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/02.jpg",
      "alt": "OURO — photograph 02",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/03.jpg",
      "alt": "OURO — photograph 03",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/04.jpg",
      "alt": "OURO — photograph 04",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/05.jpg",
      "alt": "OURO — photograph 05",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/06.jpg",
      "alt": "OURO — photograph 06",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/07.jpg",
      "alt": "OURO — photograph 07",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/08.jpg",
      "alt": "OURO — photograph 08",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/09.jpg",
      "alt": "OURO — photograph 09",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/10.jpg",
      "alt": "OURO — photograph 10",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/11.jpg",
      "alt": "OURO — photograph 11",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/12.jpg",
      "alt": "OURO — photograph 12",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/13.jpg",
      "alt": "OURO — photograph 13",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/14.jpg",
      "alt": "OURO — photograph 14",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/15.jpg",
      "alt": "OURO — photograph 15",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/16.jpg",
      "alt": "OURO — photograph 16",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/17.jpg",
      "alt": "OURO — photograph 17",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/18.jpg",
      "alt": "OURO — photograph 18",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/19.jpg",
      "alt": "OURO — photograph 19",
      "orientation": "portrait"
    },
    {
      "src": "/photos/ouro/20.jpg",
      "alt": "OURO — photograph 20",
      "orientation": "portrait"
    }
  ]
},
];

// 메인 배너 아래 FEATURED WORKS의 우선 노출 순서입니다.
// 여기에 없는 새 프로젝트도 등록 순서대로 자동 추가되며, 모든 프로젝트를 표시합니다.
export const homepageFeaturedSlugs = [
  "Zara",
  "Galleria",
  "hazzys",
  "the-nockin",
  "nuakle",
  "blue",
  "sieor",
  "marithe",
  "satur",
  "neev",
  "maison-seole",
  "cinema",
  "greenbutter",
  "ouro",
  "rachel-cox",
  "vanone",
  "satur-eyewear",
  "abbr",
  "LA_eql",
  "malen",
  "Loeil_studio",
  "Arha",
  "orlfa",
  "editorial-dymyxzwfa7o",
  "satur-kids",
];

const orderedHomepageProjects = homepageFeaturedSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => project !== undefined);

export const homepageFeaturedProjects = [
  ...orderedHomepageProjects,
  ...projects.filter(
    (project) => !homepageFeaturedSlugs.includes(project.slug),
  ),
];

// 이 목록에는 촬영한 브랜드 이름만 적으세요. 줄을 추가하거나 지워도 됩니다.
export const brandHighlights = [
  "Zara",
  "Galleria",
  "HAZZYS",
  "The Nockin",
  "NUAKLE",
  "blue",
  "SIEOR",
  "MARITHÉ",
  "SATUR",
  "NEEV",
  "MAISON SEOLE",
  "Greenbutter",
  "OURO",
  "RACHEL COX",
  "VANONE",
  "SATUR Eyewear",
  "ABBR",
  "LA_eql",
  "Loeil_studio",
  "NUAGE HOUSE",
  "ORLFA",
  "헤이딜러",
  "JMW",
  "GOXO",
  "whitesands",
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const celebrityHighlights = [
  "시아준수",
  "모니카",
  "쿤타",
  "시도",
  "가호",
  "박민영",
];
