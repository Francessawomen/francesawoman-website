import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-serif text-2xl font-bold text-primary" data-testid="logo-francessawomen">
            Francessawomen
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <a 
              href="/insights"
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-insights"
            >
              Insights
            </a>
            <button 
              onClick={() => scrollToSection('blog')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-blog"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('podcast')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-podcast"
            >
              Podcast
            </button>
            <button 
              onClick={() => scrollToSection('resources')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-resources"
            >
              Resources
            </button>
            <a 
              href="/contact"
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </a>
          </div>
          
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="menu-toggle"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-card border-b border-border shadow-lg" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4 p-6">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <a 
                href="/insights"
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-insights"
              >
                Insights
              </a>
              <button 
                onClick={() => scrollToSection('blog')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-blog"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('podcast')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-podcast"
              >
                Podcast
              </button>
              <button 
                onClick={() => scrollToSection('resources')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-resources"
              >
                Resources
              </button>
              <a 
                href="/contact"
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
