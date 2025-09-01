import { Link, useLocation } from "wouter";
import { Clock, ArrowRight, User, Calendar, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const articles = [
  {
    id: 1,
    title: "Morning Routines for Peak Productivity",
    summary: "Discover the science-backed morning habits that successful women use to start their day with intention and energy.",
    category: "Productivity",
    readTime: "5 min read",
    date: "December 15, 2024",
    author: "Francessawomen Team"
  },
  {
    id: 2,
    title: "How to Build Unstoppable Confidence",
    summary: "Learn practical strategies to overcome self-doubt and develop the unshakeable confidence you need to achieve your goals.",
    category: "Mindset",
    readTime: "7 min read",
    date: "December 12, 2024",
    author: "Francessawomen Team"
  },
  {
    id: 3,
    title: "Small Habits That Transform Your Mindset",
    summary: "Tiny changes that create massive shifts in how you think, feel, and approach challenges in your daily life.",
    category: "Growth",
    readTime: "6 min read",
    date: "December 10, 2024",
    author: "Francessawomen Team"
  },
  {
    id: 4,
    title: "Overcoming Procrastination Effectively",
    summary: "Break the cycle of delay and hesitation with proven techniques that help you take action when it matters most.",
    category: "Productivity",
    readTime: "8 min read",
    date: "December 8, 2024",
    author: "Francessawomen Team"
  },
  {
    id: 5,
    title: "The Power of Self-Care in Personal Growth",
    summary: "Why prioritizing yourself isn't selfish—it's essential for sustainable success and meaningful transformation.",
    category: "Self-Care",
    readTime: "5 min read",
    date: "December 5, 2024",
    author: "Francessawomen Team"
  },
  {
    id: 6,
    title: "Setting Boundaries That Actually Work",
    summary: "Learn how to create healthy boundaries that protect your energy while maintaining positive relationships.",
    category: "Growth",
    readTime: "6 min read",
    date: "December 3, 2024",
    author: "Francessawomen Team"
  }
];

const categories = ["All", "Mindset", "Productivity", "Growth", "Self-Care"];

export default function Insights() {
  const [, setLocation] = useLocation();

  const handleReadMore = (articleId: number) => {
    setLocation(`/insights/${articleId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 text-shadow-elegant" data-testid="insights-title">
              Insights
            </h1>
            <h2 className="text-2xl md:text-3xl text-sophisticated mb-6" data-testid="insights-subtitle">
              Mindset, Productivity, and Growth Strategies
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="insights-intro">
              Get practical tips you can implement immediately to level up your life. Transform your mindset, boost your productivity, and accelerate your personal growth journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center" data-testid="category-filter">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border"
                  data-testid={`category-${category.toLowerCase()}`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border overflow-hidden group"
                  data-testid={`article-${article.id}`}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-gold text-gold-foreground rounded-full text-xs font-semibold" data-testid={`category-tag-${article.id}`}>
                        {article.category}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors" data-testid={`article-title-${article.id}`}>
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed" data-testid={`article-summary-${article.id}`}>
                      {article.summary}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleReadMore(article.id)}
                      className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                      data-testid={`read-more-${article.id}`}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar Content */}
            <div className="bg-secondary/30 rounded-2xl p-8 mb-16">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Popular Articles */}
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-6" data-testid="popular-articles-title">
                    Most Popular
                  </h3>
                  <div className="space-y-4">
                    {articles.slice(0, 3).map((article, index) => (
                      <div key={article.id} className="flex items-start gap-3 group cursor-pointer" onClick={() => handleReadMore(article.id)}>
                        <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        <div>
                          <h4 className="font-semibold text-sm group-hover:text-primary transition-colors" data-testid={`popular-title-${article.id}`}>
                            {article.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">{article.readTime}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-6" data-testid="newsletter-signup-title">
                    Stay Updated
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Get the latest insights delivered directly to your inbox. Join thousands of women transforming their lives.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      data-testid="newsletter-email-input"
                    />
                    <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-gold/10 rounded-2xl p-8">
              <h3 className="font-serif text-3xl font-bold text-primary mb-4" data-testid="cta-title">
                Ready to Transform Your Life?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Start your journey with our free Glow Up Planner and discover how small changes create extraordinary results.
              </p>
              <Link href="/" className="inline-block">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Your Free Planner
                </button>
              </Link>
            </div>

            {/* Motivational Quote */}
            <div className="text-center mt-16">
              <blockquote className="font-serif text-2xl md:text-3xl italic text-primary font-light max-w-3xl mx-auto leading-relaxed" data-testid="motivational-quote">
                "The woman you're becoming will cost you people, relationships, spaces, and material things. Choose her over everything."
              </blockquote>
              <cite className="block mt-4 text-muted-foreground font-medium">— Francessawomen</cite>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}