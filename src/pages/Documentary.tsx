import { useState } from "react";
import Navigation from "@/components/Navigation";
import JustifiedGallery from "@/components/JustifiedGallery";

//const documentaryCategories = ["Social Issues", "Environment", "History", "People", "Places"];

const galleryItems = [
  { id: "doc-1", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Documentary Image 1" },
  { id: "doc-2", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Documentary Image 2" },
  { id: "doc-3", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Documentary Image 3" },
  { id: "doc-4", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Documentary Image 4" },
  { id: "doc-5", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Documentary Image 5" },
  { id: "doc-6", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Documentary Image 6" },
  { id: "doc-7", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Documentary Image 7" },
  { id: "doc-8", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Documentary Image 8" },
  { id: "doc-9", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Documentary Image 9" },
  { id: "doc-10", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Documentary Image 10" },
];

const Documentary = () => {
  const [, setSelectedFilter] = useState<string>("all");

  const handleFilterChange = (category: string) => {
    setSelectedFilter(category);
  };

  return (
    <div className="min-h-screen">
      <Navigation 
      //  categories={documentaryCategories}
      //  onCategoryChange={handleFilterChange}
      //  showDropdown="documentary"
      />
      <main style={{ padding: '2rem 3rem' }}>
        <JustifiedGallery items={galleryItems} rowHeight={280} />
      </main>
    </div>
  );
};

export default Documentary;
