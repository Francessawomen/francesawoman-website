import { Download, Star, Rocket } from "lucide-react";

export default function FinalCTA() {
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

  const handleGetBundle = () => {
    // TODO: Implement bundle purchase
    window.open('#bundle-purchase', '_blank');
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="final-cta-title">
            Don't Wait for "Someday"
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90" data-testid="final-cta-subtitle">
            Start your self-improvement journey today with Francessawomen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleDownloadFree}
              className="bg-card text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-card/90 transition-all transform hover:scale-105 shadow-lg"
              data-testid="button-final-download-free"
            >
              <Download className="w-5 h-5 mr-2 inline" />
              Download Free Glow Up Planner
            </button>
            <button 
              onClick={handleGetPremium}
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg btn-hover-gold transition-all transform hover:scale-105 shadow-lg"
              data-testid="button-final-premium"
            >
              <Star className="w-5 h-5 mr-2 inline" />
              Get $4.99 Glow Up Planner
            </button>
            <button 
              onClick={handleGetBundle}
              className="bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/30 transition-all transform hover:scale-105"
              data-testid="button-final-bundle"
            >
              <Rocket className="w-5 h-5 mr-2 inline" />
              Grab the Bundle
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
