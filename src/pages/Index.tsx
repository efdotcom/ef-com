import Navigation from "@/components/Navigation";
import JustifiedGallery from "@/components/JustifiedGallery";

const galleryItems = [
  { id: "home-1", src: "/780_0701.jpg", aspectRatio: 2.3, alt: "Image 1" },
  { id: "home-2", src: "/VAL_6083.jpg", aspectRatio: 2.3, alt: "Image 2" },
  { id: "home-3", src: "/780_0840.jpg", aspectRatio: 2.3, alt: "Image 3" },
  { id: "home-4", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Image 4" },
  { id: "home-5", src: "/public/wawa.jpeg", aspectRatio: 2.3, alt: "Image 5" },
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
