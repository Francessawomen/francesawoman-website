import { Target, Clock, Trophy, Heart } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Clear Goal Setting",
    description: "Transform vague dreams into specific, actionable goals with our proven framework",
    stat: "87% achieve their goals"
  },
  {
    icon: Clock,
    title: "Better Time Management",
    description: "Optimize your daily schedule and eliminate time-wasting activities forever",
    stat: "3+ hours saved daily"
  },
  {
    icon: Trophy,
    title: "Consistent Progress",
    description: "Build lasting habits that compound into extraordinary life improvements",
    stat: "21-day habit formation"
  },
  {
    icon: Heart,
    title: "Improved Well-being",
    description: "Balance work, self-care, and personal growth for a more fulfilling life",
    stat: "95% report feeling better"
  }
];

export default function ValueProposition() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="value-prop-title">
            Why Choose the Glow Up Planner?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="value-prop-subtitle">
            Join thousands of women who have transformed their lives with our science-backed planning system
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
              data-testid={`benefit-${index}`}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2" data-testid={`benefit-title-${index}`}>
                {benefit.title}
              </h3>
              <p className="text-muted-foreground mb-3 leading-relaxed" data-testid={`benefit-description-${index}`}>
                {benefit.description}
              </p>
              <div className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-semibold inline-block" data-testid={`benefit-stat-${index}`}>
                {benefit.stat}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4" data-testid="transformation-title">
            Ready for Your Transformation?
          </h3>
          <p className="text-lg text-muted-foreground mb-6" data-testid="transformation-description">
            Don't let another day pass without taking action towards your dreams. Start your glow up journey today!
          </p>
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-primary">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <span>Instant Download</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <span>Lifetime Access</span>
            </div>
            <div className="flex items-center gap-2 text-gold">
              <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              <span>No Subscription</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}