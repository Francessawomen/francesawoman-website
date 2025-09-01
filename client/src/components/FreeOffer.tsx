import { Clock, Download, CheckCircle, FileText } from "lucide-react";

export default function FreeOffer() {
  // Use static countdown values to avoid infinite re-renders
  const days = 45;
  const hours = 12;
  const minutes = 30;

  const handleDownloadFree = () => {
    // Download the free Glow Up Planner PDF
    const link = document.createElement('a');
    link.href = '/glow-up-planner-free.pdf';
    link.download = 'Glow-Up-Planner-Free.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 bg-muted" id="resources">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-gold text-gold-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4" data-testid="limited-time-badge">
                <Clock className="w-4 h-4 mr-2" />
                LIMITED TIME OFFER
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-wine mb-4 text-shadow-elegant" data-testid="free-offer-title">
                ✨ Get the Glow Up Planner — Free!
              </h3>
              <p className="text-lg text-sophisticated mb-4" data-testid="free-offer-description">
                For the next 1–2 months only, download the Free Glow Up Planner designed to help you organize your day, set goals, and track habits.
              </p>
              <div className="space-y-2 mb-6">
                <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm" data-testid="download-count">
                  🔥 12,847 people downloaded this week
                </div>
                <div className="inline-flex items-center bg-destructive/10 text-destructive px-3 py-1 rounded-full text-sm ml-2" data-testid="urgency-indicator">
                  ⚡ Only 2,153 free copies left
                </div>
              </div>
            </div>
            
            {/* Countdown Timer */}
            <div className="flex justify-center mb-8">
              <div className="bg-primary/5 rounded-xl p-6">
                <div className="text-center text-sm text-muted-foreground mb-2">Offer Expires In</div>
                <div className="flex space-x-4 countdown-digit" data-testid="countdown-timer">
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 text-2xl font-bold" data-testid="countdown-days">
                      {days.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 text-2xl font-bold" data-testid="countdown-hours">
                      {hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 text-2xl font-bold" data-testid="countdown-minutes">
                      {minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Minutes</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-lg mb-4" data-testid="free-features-title">What's Included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start" data-testid="feature-daily-organization">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1" />
                    <span>Daily organization templates</span>
                  </li>
                  <li className="flex items-start" data-testid="feature-goal-setting">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1" />
                    <span>Simple goal-setting framework</span>
                  </li>
                  <li className="flex items-start" data-testid="feature-habit-tracking">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1" />
                    <span>Habit tracking sheets</span>
                  </li>
                  <li className="flex items-start" data-testid="feature-reflection-prompts">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1" />
                    <span>Weekly reflection prompts</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl shadow-lg border-2 border-primary/20 flex items-center justify-center" data-testid="free-planner-preview">
                  <div className="text-center">
                    <FileText className="w-16 h-16 text-primary mb-2" />
                    <div className="text-sm font-semibold text-primary">Free Glow Up Planner</div>
                    <div className="text-xs text-muted-foreground">24 Pages</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={handleDownloadFree}
                className="bg-accent text-accent-foreground px-10 py-4 rounded-lg font-semibold text-lg btn-hover-gold transition-all transform hover:scale-105 shadow-lg"
                data-testid="button-download-free-now"
              >
                <Download className="w-5 h-5 mr-2 inline" />
                Download Free Glow Up Planner Now
              </button>
              <p className="text-sm text-muted-foreground mt-4" data-testid="free-offer-details">
                No email required • Instant download
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
