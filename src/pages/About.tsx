import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto" style={{ padding: '4rem 3rem' }}>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '2rem', letterSpacing: '0.1em' }}>ABOUT</h1>
        <div className="max-w-3xl">
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: '1.75' }}>
            Content coming soon.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
