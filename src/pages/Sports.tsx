import { useState } from "react";
import Navigation from "@/components/Navigation";
import JustifiedGallery from "@/components/JustifiedGallery";

//const sportsCategories = ["Football", "Basketball", "Tennis", "Athletics", "Swimming"];

const galleryItems = [
  { id: "sports-1", src: "/20251026-Dublin_Marathon_2025-4859-5k.jpg", aspectRatio: 2.3, alt: "Sports Image 1" },
  { id: "sports-2", src: "/20250928-Z8A_1405-W.jpg", aspectRatio: 2.3, alt: "Sports Image 2" },
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
