import { Download, Star } from "lucide-react";

export default function Hero() {
  const handleDownloadFree = () => {
    // Download the free Glow Up Planner PDF
    const link = document.createElement('a');
    link.href = '/glow-up-planner-free.pdf';
    link.download = 'Glow-Up-Planner-Free.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGetPremium = () => {
    // Premium planner coming soon
    alert('Premium Glow Up Planner - Coming Soon! 🚀');
  };

  return (
    <section id="home" className="pt-20 pb-16 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-shadow-elegant" data-testid="hero-title">
            Become the Best Version of <span className="text-wine">Yourself</span>
          </h1>
          <p className="text-xl md:text-2xl text-sophisticated mb-6 max-w-3xl mx-auto leading-relaxed" data-testid="hero-subtitle">
            Practical advice, self-improvement tools, and life-changing resources — designed to help you grow, every single day.
          </p>
          
          <div className="flex items-center justify-center gap-8 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2" data-testid="social-proof-downloads">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>15,000+ Downloads</span>
            </div>
            <div className="flex items-center gap-2" data-testid="social-proof-rating">
              <div className="flex text-gold">
                ⭐⭐⭐⭐⭐
              </div>
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2" data-testid="social-proof-community">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>8,500+ Community Members</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleDownloadFree}
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg btn-hover-gold transition-all transform hover:scale-105 shadow-lg float-animation"
              data-testid="button-download-free"
            >
              <Download className="w-5 h-5 mr-2 inline" />
              Download Free Glow Up Planner
            </button>
            <button 
              onClick={handleGetPremium}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg btn-hover-gold transition-all transform hover:scale-105 shadow-lg glow-effect"
              data-testid="button-premium-planner"
            >
              <Star className="w-5 h-5 mr-2 inline" />
              Premium Glow Up Planner - Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
