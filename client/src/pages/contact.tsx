import { useState } from "react";
import { Link } from "wouter";
import { Send, Youtube, Instagram, Heart, CheckCircle, User, Mail, MessageSquare } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out! We'll get back to you soon.",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us through social media.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 text-shadow-elegant" data-testid="contact-title">
              Contact Us
            </h1>
            <h2 className="text-2xl md:text-3xl text-sophisticated mb-6" data-testid="contact-subtitle">
              We'd love to hear from you!
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="contact-intro">
              Have a question, suggestion, or just want to connect? Reach out to us and let's start a conversation about your growth journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form Section */}
              <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
                <h3 className="font-serif text-3xl font-bold text-primary mb-6" data-testid="form-title">
                  Send us a message
                </h3>
                
                {isSubmitted ? (
                  <div className="text-center py-8" data-testid="success-message">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h4 className="font-serif text-2xl font-bold text-primary mb-2">
                      Thank you for reaching out!
                    </h4>
                    <p className="text-muted-foreground mb-6">
                      We'll get back to you soon. In the meantime, feel free to explore our resources and connect with us on social media.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                        placeholder="Your full name"
                        data-testid="input-name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                        placeholder="your.email@example.com"
                        data-testid="input-email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-vertical"
                        placeholder="Tell us what's on your mind..."
                        data-testid="input-message"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      data-testid="submit-button"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Social Media Section */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-secondary/20 to-gold/10 rounded-2xl p-8">
                  <h3 className="font-serif text-3xl font-bold text-primary mb-6" data-testid="social-title">
                    Connect with Us
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Follow our journey and join our community of empowered women on social media. Get daily inspiration, tips, and behind-the-scenes content.
                  </p>
                  
                  <div className="space-y-4">
                    <a
                      href="https://youtube.com/@francessawomen?si=5SPI8SKDvIR9oSpX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-card rounded-lg hover:bg-card/80 transition-all duration-300 transform hover:scale-105 shadow-md border border-border group"
                      data-testid="social-youtube"
                    >
                      <div className="bg-red-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                        <Youtube className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">YouTube</h4>
                        <p className="text-sm text-muted-foreground">Watch our latest videos and tutorials</p>
                      </div>
                    </a>
                    
                    <a
                      href="https://www.tiktok.com/@francessawomen?is_from_webapp=1&sender_device=pc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-card rounded-lg hover:bg-card/80 transition-all duration-300 transform hover:scale-105 shadow-md border border-border group"
                      data-testid="social-tiktok"
                    >
                      <div className="bg-black p-3 rounded-lg group-hover:scale-110 transition-transform">
                        <SiTiktok className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">TikTok</h4>
                        <p className="text-sm text-muted-foreground">Quick tips and daily inspiration</p>
                      </div>
                    </a>
                    
                    <a
                      href="https://www.instagram.com/francessawomen/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-card rounded-lg hover:bg-card/80 transition-all duration-300 transform hover:scale-105 shadow-md border border-border group"
                      data-testid="social-instagram"
                    >
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                        <Instagram className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Instagram</h4>
                        <p className="text-sm text-muted-foreground">Visual inspiration and community</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4" data-testid="newsletter-title">
                    Stay in the Loop
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get exclusive content, early access to new resources, and weekly motivation delivered to your inbox.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      data-testid="newsletter-email"
                    />
                    <button className="bg-gold text-gold-foreground px-6 py-2 rounded-lg font-semibold hover:bg-gold/90 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Motivational Quote Section */}
            <div className="text-center mt-16 py-12 bg-gradient-to-r from-primary/5 to-gold/5 rounded-2xl">
              <blockquote className="font-serif text-3xl md:text-4xl italic text-primary font-light max-w-4xl mx-auto leading-relaxed mb-6" data-testid="motivational-quote">
                "Connection is the energy that exists between people when they feel seen, heard, and valued; when they can give and receive without judgment."
              </blockquote>
              <cite className="block text-muted-foreground font-medium text-lg">— Brené Brown</cite>
              <div className="mt-8">
                <Heart className="w-8 h-8 text-primary mx-auto" />
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4" data-testid="cta-title">
                Ready to Start Your Transformation?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't wait for tomorrow. Download our free Glow Up Planner and begin your journey today.
              </p>
              <Link href="/" className="inline-block">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Your Free Planner
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}