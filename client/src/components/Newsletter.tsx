import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertNewsletterSubscriberSchema } from "@shared/schema";
import { z } from "zod";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const subscriptionMutation = useMutation({
    mutationFn: async (email: string) => {
      const validatedData = insertNewsletterSubscriberSchema.parse({ email });
      return await apiRequest("POST", "/api/newsletter/subscribe", validatedData);
    },
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "Welcome to the Francesawoman community. Check your email for confirmation.",
      });
      setEmail("");
      queryClient.invalidateQueries({ queryKey: ["/api/newsletter"] });
    },
    onError: (error: any) => {
      const errorMessage = error.message?.includes("already subscribed") 
        ? "You're already subscribed to our newsletter!"
        : "Failed to subscribe. Please try again.";
      
      toast({
        title: "Subscription failed",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    subscriptionMutation.mutate(email);
  };

  return (
    <section className="py-16 bg-card" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-3xl font-bold mb-4" data-testid="newsletter-title">
            Join the Francessawomen Community
          </h3>
          <p className="text-muted-foreground mb-8" data-testid="newsletter-description">
            Get exclusive tips, early access to new content, and special offers delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4" data-testid="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
              data-testid="input-newsletter-email"
              required
              disabled={subscriptionMutation.isPending}
            />
            <button 
              type="submit"
              disabled={subscriptionMutation.isPending}
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold btn-hover-gold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-newsletter-subscribe"
            >
              {subscriptionMutation.isPending ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4" data-testid="newsletter-privacy">
            No spam, unsubscribe at any time. Your privacy is important to us.
          </p>
        </div>
      </div>
    </section>
  );
}
