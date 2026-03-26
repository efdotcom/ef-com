import { useState } from "react";
import Navigation from "@/components/Navigation";
import JustifiedGallery from "@/components/JustifiedGallery";

//const newsCategories = ["Breaking News", "Politics", "Business", "Technology", "Culture"];

const galleryItems = [
  { id: "news-1", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "News Image 1" },
  { id: "news-2", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "News Image 2" },
  { id: "news-3", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "News Image 3" },
  { id: "news-4", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "News Image 4" },
  { id: "news-5", src: "/20250928-Z8A_1332-W.jpg", aspectRatio: 2.3, alt: "News Image 5" },
  { id: "news-6", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "News Image 6" },
  { id: "news-7", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "News Image 7" },
  { id: "news-8", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "News Image 8" },
  { id: "news-9", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "News Image 9" },
  { id: "news-10", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "News Image 10" },
];

const News = () => {
  const [, setSelectedFilter] = useState<string>("all");

  const handleFilterChange = (category: string) => {
    setSelectedFilter(category);
  };

  return (
    <div className="min-h-screen">
      <Navigation 
      //  categories={newsCategories}
      //  onCategoryChange={handleFilterChange}
      //  showDropdown="news"
      />
      <main style={{ padding: '2rem 3rem' }}>
        <JustifiedGallery items={galleryItems} rowHeight={280} />
      </main>
    </div>
  );
};

export default News;
