export type Project = {
  id: number;
  title: string;
  category: string;
  image: string; // Placeholder color or URL
  url?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Yayasan Bunda Syafa Website",
    category: "FullStack",
    image: "/ybs.jpg",
    url: "https://yayasanbundasyafa.com",
  },
  {
    id: 2,
    title: "Serenity.(dummy Project)",
    category: "UI/UX, Frontend",
    image: "/srn.jpg",
    url: "https://github.com/luciss41/",
  },
  {
    id: 3,
    title: "Simple Chatbot",
    category: "Node.js",
    image: "/",
    url: "https://github.com/luciss41/simple-chatbot",
  },
  {
    id: 4,
    title: "Simple Admin Dashboard",
    category: "Node.js, Express, MySQL",
    image: "/",
    url: "https://github.com/luciss41/Page-system-admin",
  },
  {
    id: 5,
    title: "Lelenjir Peringatan Banjir",
    category: "Next.js, Golang, PostgreSQL",
    image: "/lelenj.png",
    url: "https://lelenjir.vercel.app/",
  },
];
