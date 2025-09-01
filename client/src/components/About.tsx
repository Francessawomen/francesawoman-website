export default function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wine mb-8 text-shadow-elegant" data-testid="about-title">
            About Francessawomen
          </h2>
          <p className="text-lg md:text-xl text-sophisticated mb-8 leading-relaxed" data-testid="about-description">
            At Francessawomen, we believe that self-improvement is not a luxury — it's a necessity. Through inspiring content, advice, and resources, we guide you toward living a more intentional, confident, and meaningful life.
          </p>
          <p className="text-lg md:text-xl text-sophisticated leading-relaxed" data-testid="about-mission">
            From powerful podcasts to insightful blogs and exclusive planners, every piece of content is created to help you grow step by step.
          </p>
        </div>
      </div>
    </section>
  );
}
