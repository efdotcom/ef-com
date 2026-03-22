import { useState } from "react";
import Navigation from "@/components/Navigation";
import JustifiedGallery from "@/components/JustifiedGallery";

//const sportsCategories = ["Football", "Basketball", "Tennis", "Athletics", "Swimming"];

const galleryItems = [
  { id: "sports-1", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Sports Image 1" },
  { id: "sports-2", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Sports Image 2" },
  { id: "sports-3", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Sports Image 3" },
  { id: "sports-4", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Sports Image 4" },
  { id: "sports-5", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Sports Image 5" },
  { id: "sports-6", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Sports Image 6" },
  { id: "sports-7", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Sports Image 7" },
  { id: "sports-8", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Sports Image 8" },
  { id: "sports-9", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Sports Image 9" },
  { id: "sports-10", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Sports Image 10" },
];

const Sports = () => {
  const [, setSelectedFilter] = useState<string>("all");

  const handleFilterChange = (category: string) => {
    setSelectedFilter(category);
  };

  return (
    <div className="min-h-screen">
      <Navigation 
       // categories={sportsCategories}
       // onCategoryChange={handleFilterChange}
       // showDropdown="sports"
      />
      <main style={{ padding: '2rem 3rem' }}>
        <JustifiedGallery items={galleryItems} rowHeight={280} />
      </main>
    </div>
  );
};

export default Sports;
