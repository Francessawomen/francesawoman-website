import { Star, User } from "lucide-react";

const testimonials = [
  {
    content: "The Glow Up Planner completely changed how I approach my daily goals. I'm more focused and productive than ever before.",
    name: "Sarah Johnson",
    role: "Entrepreneur"
  },
  {
    content: "Francessawomen's content is exactly what I needed. The practical advice and tools are game-changers.",
    name: "Michael Chen", 
    role: "Software Developer"
  },
  {
    content: "The bundle deal is incredible value. Having both digital and physical planning tools is perfect.",
    name: "Emma Rodriguez",
    role: "Teacher"
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8" data-testid="testimonials-title">
              Transforming Lives Daily
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="testimonials-subtitle">
              See what our community is saying about their growth journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-lg border border-border" data-testid={`testimonial-${index}`}>
                <div className="flex text-gold mb-4" data-testid={`testimonial-stars-${index}`}>
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic" data-testid={`testimonial-content-${index}`}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" data-testid={`testimonial-name-${index}`}>
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground" data-testid={`testimonial-role-${index}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
