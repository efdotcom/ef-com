import Navigation from "@/components/Navigation";
import JustifiedGallery from "@/components/JustifiedGallery";

const galleryItems = [
  { id: "home-1", src: "/20260317-St_Patricks_Parade_Cavan_2026-0078-5k.jpg", aspectRatio: 2.3, alt: "Image 1" },
  { id: "home-2", src: "/20251222-Dublin_Christmas-0425-5k.jpg", aspectRatio: 2.3, alt: "Image 2" },
  { id: "home-3", src: "/20251203-Taxi_Uber_Protest-0100-5k.jpg", aspectRatio: 2.3, alt: "Image 3" },
  { id: "home-4", src: "/20251202-Zelensky_Visit-0486-5k.jpg", aspectRatio: 2.3, alt: "Image 4" },
  { id: "home-5", src: "/20251115-Storm_Claudia-0560-5k.jpeg", aspectRatio: 2.3, alt: "Image 5" },
  { id: "home-6", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Image 6" },
  { id: "home-7", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Image 7" },
  { id: "home-8", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Image 8" },
  { id: "home-9", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Image 9" },
  { id: "home-10", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Image 10" },
  { id: "home-11", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Image 11" },
  { id: "home-12", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Image 12" },
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
