import { Crown, Star, ShoppingCart, FileText } from "lucide-react";

export default function PremiumOffer() {
  const handlePurchasePremium = () => {
    // Premium planner coming soon
    alert('Premium Glow Up Planner - Coming Soon! 🚀');
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl shadow-xl p-8 md:p-12 border-2 border-accent/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-gold text-gold-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4" data-testid="premium-badge">
                <Crown className="w-4 h-4 mr-2" />
                PREMIUM EDITION
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-wine mb-4 text-shadow-elegant" data-testid="premium-title">
                💎 Premium Glow Up Planner - Coming Soon
              </h3>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl font-bold text-gold" data-testid="premium-status">🚀 Coming Soon</span>
              </div>
              <p className="text-lg text-sophisticated mb-4" data-testid="premium-description">
                Upgrade your journey with advanced planning tools, guided exercises, and exclusive content designed for serious growth.
              </p>
              <div className="flex items-center justify-center gap-6 mb-4 text-sm">
                <div className="flex items-center gap-1 text-gold" data-testid="premium-sold">
                  🏆 <span>2,341 sold this month</span>
                </div>
                <div className="flex items-center gap-1 text-primary" data-testid="premium-guarantee">
                  🛡️ <span>30-day guarantee</span>
                </div>
                <div className="flex items-center gap-1 text-accent" data-testid="premium-secure">
                  🔒 <span>Secure checkout</span>
                </div>
              </div>
              <div className="bg-gold/10 border border-gold/20 rounded-lg p-3 mb-6 text-center">
                <p className="text-sm text-gold font-semibold" data-testid="coming-soon-message">
                  🎆 Get notified when the Premium Planner launches!
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-lg mb-4 text-primary" data-testid="premium-features-title">
                  Everything in Free Plus:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start" data-testid="feature-monthly-planning">
                    <Star className="w-5 h-5 text-gold mr-3 mt-1" />
                    <span>Monthly & quarterly goal planning</span>
                  </li>
                  <li className="flex items-start" data-testid="feature-vision-board">
                    <Star className="w-5 h-5 text-gold mr-3 mt-1" />
                    <span>Vision board templates</span>
                  </li>
                  <li className="flex items-start" data-testid="feature-reflection-exercises">
                    <Star className="w-5 h-5 text-gold mr-3 mt-1" />
                    <span>Personal reflection exercises</span>
                  </li>
                  <li className="flex items-start" data-testid="feature-progress-tracking">
                    <Star className="w-5 h-5 text-gold mr-3 mt-1" />
                    <span>Progress tracking dashboards</span>
                  </li>
                  <li className="flex items-start" data-testid="feature-daily-prompts">
                    <Star className="w-5 h-5 text-gold mr-3 mt-1" />
                    <span>Motivational daily prompts</span>
                  </li>
                  <li className="flex items-start" data-testid="feature-bonus-worksheets">
                    <Star className="w-5 h-5 text-gold mr-3 mt-1" />
                    <span>Bonus productivity worksheets</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-64 premium-gradient rounded-xl shadow-xl border-2 border-gold/30 flex items-center justify-center relative" data-testid="premium-planner-preview">
                  <div className="absolute top-3 right-3 bg-gold text-gold-foreground rounded-full w-8 h-8 flex items-center justify-center">
                    <Crown className="w-4 h-4" />
                  </div>
                  <div className="text-center">
                    <FileText className="w-16 h-16 text-gold mb-2" />
                    <div className="text-sm font-semibold text-gold">Premium Glow Up Planner</div>
                    <div className="text-xs text-muted-foreground">78 Pages</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 mb-8 border border-gold/20">
              <div className="text-center">
                <p className="text-sm font-semibold text-gold mb-2" data-testid="urgency-message">
                  ⚡ Limited Time Offer — Don't Miss Out!
                </p>
                <p className="text-sm text-muted-foreground" data-testid="urgency-details">
                  This special pricing won't last forever. Secure your premium planner today.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={handlePurchasePremium}
                className="bg-accent text-accent-foreground px-10 py-4 rounded-lg font-semibold text-lg btn-hover-gold transition-all transform hover:scale-105 shadow-xl"
                data-testid="button-purchase-premium"
              >
                <ShoppingCart className="w-5 h-5 mr-2 inline" />
                Coming Soon - Stay Tuned!
              </button>
              <p className="text-sm text-muted-foreground mt-4" data-testid="premium-notify">
                Get notified when available • Premium features coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
