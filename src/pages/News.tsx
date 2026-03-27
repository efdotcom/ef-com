import { useState } from "react";
import Navigation from "@/components/Navigation";
import JustifiedGallery from "@/components/JustifiedGallery";

//const newsCategories = ["Breaking News", "Politics", "Business", "Technology", "Culture"];

const galleryItems = [
  { id: "news-1", src: "/20251203-Taxi_Uber_Protest-0403-5k.jpg", aspectRatio: 2.3, alt: "News Image 1" },
  { id: "news-2", src: "/20251202-Zelensky_Visit-1520-5k.jpg", aspectRatio: 2.3, alt: "News Image 2" },
  { id: "news-3", src: "/20251115-Storm_Claudia-0281-5k.jpg", aspectRatio: 2.3, alt: "News Image 3" },
  { id: "news-4", src: "/20251031-Halloween-0043-5k.jpg", aspectRatio: 2.3, alt: "News Image 4" },
  { id: "news-5", src: "/20250928-Z8A_1332-W.jpg", aspectRatio: 2.3, alt: "News Image 5" },
  { id: "news-6", src: "/20251025-Z8A_1979-5k.jpg", aspectRatio: 2.3, alt: "News Image 6" },
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
