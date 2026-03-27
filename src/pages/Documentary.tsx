import { useState } from "react";
import Navigation from "@/components/Navigation";
import JustifiedGallery from "@/components/JustifiedGallery";

//const documentaryCategories = ["Social Issues", "Environment", "History", "People", "Places"];

const galleryItems = [
  { id: "doc-1", src: "/20260317-St_Patricks_Parade_Cavan_2026-0093-5k.jpg", aspectRatio: 2.3, alt: "Documentary Image 1" },
  { id: "doc-2", src: "/20251222-Dublin_Christmas-0594-5k.jpg", aspectRatio: 2.3, alt: "Documentary Image 2" },
  { id: "doc-3", src: "/20250921-Zwartkops_Time_Trials-0487-W.jpg", aspectRatio: 2.3, alt: "Documentary Image 3" },
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
