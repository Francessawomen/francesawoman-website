import { BookOpen, Play, Podcast } from "lucide-react";

export default function ContentSection() {
  const handleVisitBlog = () => {
    // TODO: Navigate to blog section/page
    window.open('#blog-page', '_blank');
  };

  const handleListenPodcast = () => {
    // TODO: Navigate to podcast section/page
    window.open('#podcast-page', '_blank');
  };

  return (
    <section id="blog" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8" data-testid="content-title">
              Grow Through Content
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="content-description">
              Dive deeper into your self-improvement journey with our carefully crafted blog articles and inspiring podcast episodes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center" data-testid="blog-section">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4" data-testid="blog-title">Insightful Blog</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="blog-description">
                Insightful articles on mindset, productivity, and growth strategies. Get practical tips you can implement immediately.
              </p>
              <button 
                onClick={handleVisitBlog}
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold btn-hover-gold transition-all"
                data-testid="button-read-blog"
              >
                <BookOpen className="w-5 h-5 mr-2 inline" />
                Read the Blog
              </button>
            </div>
            
            <div className="text-center" data-testid="podcast-section">
              <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Podcast className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4" data-testid="podcast-title">Inspiring Podcast</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="podcast-description">
                Conversations and solo episodes filled with advice, tools, and wisdom for your self-improvement journey.
              </p>
              <button 
                onClick={handleListenPodcast}
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold btn-hover-gold transition-all"
                data-testid="button-listen-podcast"
              >
                <Play className="w-5 h-5 mr-2 inline" />
                Listen to Podcast
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
