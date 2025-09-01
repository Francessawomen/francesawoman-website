import { Gift, FileText, Laptop, PenTool, TrendingUp, RefreshCw, Rocket } from "lucide-react";

export default function BundleOffer() {
  const handlePurchaseBundle = () => {
    // Bundle coming soon
    alert('Ultimate Bundle - Coming Soon! 🚀');
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-gold text-gold-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4" data-testid="bundle-badge">
                <Gift className="w-4 h-4 mr-2" />
                ULTIMATE BUNDLE
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-wine mb-4 text-shadow-elegant" data-testid="bundle-title">
                📒 Ultimate Growth Bundle - Coming Soon
              </h3>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl font-bold text-gold" data-testid="bundle-status">🚀 Coming Soon</span>
              </div>
              <p className="text-lg text-muted-foreground mb-4" data-testid="bundle-description">
                Take your planning to the next level with both digital and physical organization tools for maximum results.
              </p>
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-3 mb-6 text-center">
                <p className="text-sm text-gold font-semibold" data-testid="bundle-notify">
                  🌟 Get notified when the Ultimate Bundle launches!
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-accent/10 rounded-xl p-6 border border-accent/20" data-testid="bundle-item-planner">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <FileText className="w-5 h-5 text-accent mr-2" />
                    Premium Glow Up Planner
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">($4.99 value)</p>
                  <p className="text-sm">Complete physical planning system with 78 pages of guided exercises and templates.</p>
                </div>
                
                <div className="bg-primary/10 rounded-xl p-6 border border-primary/20" data-testid="bundle-item-notion">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Laptop className="w-5 h-5 text-primary mr-2" />
                    Exclusive Notion Template
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">(Bonus - $25 value)</p>
                  <p className="text-sm">Digital companion with automated tracking, habit logs, and progress dashboards.</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="flex justify-center space-x-4" data-testid="bundle-preview">
                    <div className="w-32 h-40 premium-gradient rounded-lg shadow-lg border border-accent/30 flex items-center justify-center">
                      <FileText className="w-8 h-8 text-accent" />
                    </div>
                    <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg shadow-lg border border-primary/30 flex items-center justify-center">
                      <Laptop className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground">Complete Growth System</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-lg mb-4 text-center" data-testid="bundle-benefits-title">
                Why This Bundle Works:
              </h4>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div className="text-center" data-testid="benefit-physical">
                  <PenTool className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium">Physical Planning</p>
                  <p className="text-muted-foreground">Handwritten goals stick better</p>
                </div>
                <div className="text-center" data-testid="benefit-digital">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium">Digital Tracking</p>
                  <p className="text-muted-foreground">Automated progress monitoring</p>
                </div>
                <div className="text-center" data-testid="benefit-sync">
                  <RefreshCw className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium">Perfect Sync</p>
                  <p className="text-muted-foreground">Seamless workflow integration</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={handlePurchaseBundle}
                className="bg-accent text-accent-foreground px-10 py-4 rounded-lg font-semibold text-lg btn-hover-gold transition-all transform hover:scale-105 shadow-xl"
                data-testid="button-purchase-bundle"
              >
                <Rocket className="w-5 h-5 mr-2 inline" />
                Coming Soon - Stay Tuned!
              </button>
              <p className="text-sm text-muted-foreground mt-4" data-testid="bundle-notify">
                Get notified when available • Complete growth system coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
