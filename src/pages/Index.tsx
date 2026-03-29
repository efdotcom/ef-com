import Navigation from "@/components/Navigation";
import JustifiedGallery from "@/components/JustifiedGallery";

const galleryItems = [
  { id: "home-1", src: "/img/20260317-St_Patricks_Parade_Cavan_2026-0078-5k.jpg", alt: "Image 1" },
  { id: "home-2", src: "/img/20251222-Dublin_Christmas-0425-5k.jpg", alt: "Image 2" },
  { id: "home-3", src: "/img/20250921-Zwartkops_Time_Trials-0445-W.jpg", alt: "Image 3" },
  { id: "home-4", src: "/img/20251202-Zelensky_Visit-0486-5k.jpg", alt: "Image 4" },
  { id: "home-5", src: "/img/20251115-Storm_Claudia-0560-5k.jpg", alt: "Image 5" },
  { id: "home-6", src: "/img/20251031-Halloween-1041-5k.jpg", alt: "Image 6" },
  { id: "home-7", src: "/img/20251031-Halloween-0503-5k.jpg", alt: "Image 7" },
  { id: "home-8", src: "/img/20251026-Dublin_Marathon_2025-4177-5k.jpg", alt: "Image 8" },
  { id: "home-9", src: "/img/20250925-Obama_Freedom_of_the_City-0371-W.jpg", alt: "Image 9" },
  { id: "home-10", src: "/img/20250824-Dublin_City_Fleadh-2301-W.jpg", alt: "Image 10" },
  { id: "home-11", src: "/img/20251102-Macnas_Parade-0700-5k.jpg", alt: "Image 11" },
  { id: "home-12", src: "/img/20251203-Taxi_Uber_Protest-0100-5k.jpg", alt: "Image 12" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main style={{ padding: '2rem 3rem' }}>
        <JustifiedGallery items={galleryItems} rowHeight={300} />
      </main>
    </div>
  );
};

export default Index;
