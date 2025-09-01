import { Youtube, Instagram, Twitter } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-serif text-2xl font-bold text-accent mb-4" data-testid="footer-logo">
              Francessawomen
            </div>
            <p className="text-background/70" data-testid="footer-tagline">
              Empowering personal growth through practical advice and transformative resources.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-links-title">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block text-background/70 hover:text-accent transition-colors text-left"
                data-testid="footer-link-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('blog')} 
                className="block text-background/70 hover:text-accent transition-colors text-left"
                data-testid="footer-link-blog"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('podcast')} 
                className="block text-background/70 hover:text-accent transition-colors text-left"
                data-testid="footer-link-podcast"
              >
                Podcast
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block text-background/70 hover:text-accent transition-colors text-left"
                data-testid="footer-link-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-social-title">Connect With Us</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-background/70 hover:text-accent transition-colors"
                data-testid="social-youtube"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-background/70 hover:text-accent transition-colors"
                data-testid="social-instagram"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-background/70 hover:text-accent transition-colors"
                data-testid="social-twitter"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-background/70 hover:text-accent transition-colors"
                data-testid="social-tiktok"
                aria-label="TikTok Profile"
              >
                <SiTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70" data-testid="footer-copyright">
            Copyright © 2025 Francessawomen. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
